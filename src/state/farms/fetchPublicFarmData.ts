// viewed
import BigNumber from "bignumber.js";
import erc20 from "../../config/abi/erc20.json";
import krlAbi from "../../config/abi/krlReward.json";
import krlPool2Abi from "../../config/abi/krlPool2.json";
import {
  getAddress,
  getKrlAddress,
  getKrlPool2Address,
} from "../../utils/addressHelpers";
import { BIG_TEN } from "../../utils/bigNumber";
import multicall from "../../utils/multicall";
import { SerializedFarm, SerializedBigNumber } from "../types";

type PublicFarmData = {
  tokenAmountTotal: SerializedBigNumber;
  lpTotalInQuoteToken: SerializedBigNumber;
  lpTotalSupply: SerializedBigNumber;
  tokenPriceVsQuote: SerializedBigNumber;
  extras: {
    lpTokenBalanceMC: SerializedBigNumber;
    totalTokenStaked: SerializedBigNumber;
    rewardPerBlock: SerializedBigNumber;
    rewardPerToken: SerializedBigNumber;
    rewardForDuration: SerializedBigNumber;
    rewardsDuration: SerializedBigNumber;
  };
};

const fetchFarm = async (farm: SerializedFarm): Promise<PublicFarmData> => {
  const { lpAddresses, token, quoteToken, pid } = farm;
  const lpAddress = getAddress(lpAddresses);
  const krlAddress = getKrlAddress();
  const krlPool2Address = getKrlPool2Address();

  const Erc20calls = [
    // Balance of token in the LP contract
    {
      address: token.address,
      name: "balanceOf",
      params: [lpAddress],
    },
    // Balance of quote token on LP contract
    {
      address: quoteToken.address,
      name: "balanceOf",
      params: [lpAddress],
    },
    // Balance of LP tokens in the pool contract
    {
      address: lpAddress,
      name: "balanceOf",
      params: [krlAddress],
    },
    // Total supply of LP tokens
    {
      address: lpAddress,
      name: "totalSupply",
    },
    // Token decimals
    {
      address: token.address,
      name: "decimals",
    },
    // Quote token decimals
    {
      address: quoteToken.address,
      name: "decimals",
    },
  ];

  const krlCalls = [
    // Rewards per token stored
    {
      address: krlAddress,
      name: "rewardPerToken",
      params: [token.address],
    },
    // Get reward for duration
    {
      address: krlAddress,
      name: "getRewardForDuration",
      params: [token.address],
    },
    // Reward data / see abi or sm for return values
    {
      address: krlAddress,
      name: "rewardData",
      params: [token.address],
    },
  ];

  const krlPool2Calls = [
    // Total token staked
    {
      address: krlPool2Address,
      name: "totalStaked",
      params: [],
    },
    // Get reward per block
    {
      address: krlPool2Address,
      name: "rewardPerBlock",
      params: [],
    },
  ];

  const [
    tokenBalanceLP,
    quoteTokenBalanceLP,
    lpTokenBalanceMC,
    lpTotalSupply,
    tokenDecimals,
    quoteTokenDecimals,
  ] = await multicall(erc20, Erc20calls);

  // KRL only calls
  const [rewardPerToken, rewardForDuration, rewardData] = await multicall(
    krlAbi,
    krlCalls
  );

  // Pool 2 only calls
  const [totalTokenStaked, rewardPerBlock] = await multicall(
    krlPool2Abi,
    krlPool2Calls
  );

  // Ratio in % of LP tokens that are staked in the MC, vs the total number in circulation
  const lpTokenRatio = new BigNumber(
    pid === 1 ? totalTokenStaked : lpTokenBalanceMC
  ).div(new BigNumber(lpTotalSupply));

  // Raw amount of token in the LP, including those not staked
  const tokenAmountTotal = new BigNumber(tokenBalanceLP).div(
    BIG_TEN.pow(tokenDecimals)
  );
  const quoteTokenAmountTotal = new BigNumber(quoteTokenBalanceLP).div(
    BIG_TEN.pow(quoteTokenDecimals)
  );

  // Amount of quoteToken in the LP that are staked in the MC
  const quoteTokenAmountMc = quoteTokenAmountTotal.times(lpTokenRatio);

  // Total staked in LP, in quote token value
  const lpTotalInQuoteToken = quoteTokenAmountMc.times(new BigNumber(2));

  return {
    tokenAmountTotal: tokenAmountTotal.toJSON(),
    lpTotalSupply: new BigNumber(lpTotalSupply).toJSON(),
    lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
    tokenPriceVsQuote: quoteTokenAmountTotal.div(tokenAmountTotal).toJSON(),
    extras: {
      lpTokenBalanceMC: new BigNumber(lpTokenBalanceMC)
        .div(BIG_TEN.pow(quoteTokenDecimals))
        .toJSON(),

      // Pool 2
      totalTokenStaked: new BigNumber(totalTokenStaked)
        .div(BIG_TEN.pow(tokenDecimals))
        .toJSON(),
      rewardPerBlock: new BigNumber(rewardPerBlock)
        .div(BIG_TEN.pow(tokenDecimals))
        .toJSON(),
      // End Pool 2

      rewardPerToken: new BigNumber(rewardPerToken)
        .div(BIG_TEN.pow(tokenDecimals))
        .toJSON(),
      rewardForDuration: new BigNumber(rewardForDuration)
        .div(BIG_TEN.pow(tokenDecimals))
        .toJSON(),
      rewardsDuration: new BigNumber(rewardData.rewardsDuration._hex).toJSON(),
    },
  };
};

export default fetchFarm;
