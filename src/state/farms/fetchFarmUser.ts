// viewed
import BigNumber from "bignumber.js";
import krlAbi from "../../config/abi/krlReward.json";
import krlPool2Abi from "../../config/abi/krlPool2.json";
import erc20ABI from "../../config/abi/erc20.json";
import multicall from "../../utils/multicall";
import {
  getAddress,
  getKrlAddress,
  getKrlPool2Address,
} from "../../utils/addressHelpers";
import { SerializedFarmConfig } from "../../config/constants/types";
import { BIG_TEN } from "../../utils/bigNumber";

export const fetchFarmUserAllowances = async (
  account: string,
  farmsToFetch: SerializedFarmConfig[]
) => {
  // const erc20Contract = getBep20Contract(krlAddress);

  // const masterChefAddress = getMasterChefAddress()

  const calls = farmsToFetch.map((farm) => {
    const { pid } = farm;
    const contractAddress = pid === 1 ? getKrlPool2Address() : getKrlAddress();
    const lpContractAddress = getAddress(farm.lpAddresses);
    return {
      address: lpContractAddress,
      name: "allowance",
      params: [account, contractAddress],
    };
  });

  const rawLpAllowances = await multicall(erc20ABI, calls);
  const parsedLpAllowances = rawLpAllowances.map(
    (lpBalance: BigNumber.Value) => {
      return new BigNumber(lpBalance).toJSON();
    }
  );
  return parsedLpAllowances;
};

export const fetchFarmUserTokenBalances = async (
  account: string,
  farmsToFetch: SerializedFarmConfig[]
) => {
  const calls = farmsToFetch.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses);
    return {
      address: lpContractAddress,
      name: "balanceOf",
      params: [account],
    };
  });

  const rawTokenBalances = await multicall(erc20ABI, calls);
  const parsedTokenBalances = rawTokenBalances.map(
    (tokenBalance: BigNumber.Value) => {
      return new BigNumber(tokenBalance).toJSON();
    }
  );
  return parsedTokenBalances;
};

export const fetchFarmUserStakedBalance = async (
  account: string,
  pid: number
) => {
  const krlMultiParam = [
    {
      address: getKrlAddress(),
      name: "balanceOf",
      params: [account],
    },
  ];

  const krlPool2MultiParam = [
    {
      address: getKrlPool2Address(),
      name: "userInfo",
      params: [account],
    },
  ];

  // userInfo or rawStakedBalances
  interface UserInfo {
    amount: { _hex: BigNumber.Value };
  }

  interface RawStakedBalances {
    [index: number]: { _hex: BigNumber.Value };
  }

  const getStakedBals = async () => {
    if (pid === 1) {
      const [userInfo] = (await multicall(
        krlPool2Abi,
        krlPool2MultiParam
      )) as UserInfo[];

      const parsedKrlPool2Bal = new BigNumber(userInfo.amount._hex).toJSON();
      return parsedKrlPool2Bal;
    } else if (pid === 2) {
      const [stakedBalance] = (await multicall(
        krlAbi,
        krlMultiParam
      )) as RawStakedBalances[];

      const parsedKrlStakedBal = new BigNumber(stakedBalance[0]._hex).toJSON();
      return parsedKrlStakedBal;
    } else {
      return "0";
    }
  };

  return getStakedBals();
};

export const fetchFarmUserEarning = async (
  account: string,
  farm: SerializedFarmConfig
) => {
  const { token, pid } = farm;

  const krlCall = [
    {
      address: getKrlAddress(),
      name: "earned",
      params: [account, token.address],
    },
  ];

  const krlPool2Call = [
    {
      address: getKrlPool2Address(),
      name: "pendingReward",
      params: [account],
    },
  ];

  let abi = [] as any;
  let call = [] as typeof krlCall;

  if (pid === 1) {
    abi = krlPool2Abi;
    call = krlPool2Call;
  } else if (pid === 2) {
    abi = krlAbi;
    call = krlCall;
  }

  try {
    const [rawEarnings] = await multicall(abi, call);
    const parsedEarnings = new BigNumber(rawEarnings).toJSON();
    return parsedEarnings;
  } catch (err) {
    console.error(err);
    return "0";
  }
};

export const fetchFarmUserRewardPerToken = async (
  farmsToFetch: SerializedFarmConfig[]
) => {
  const krlAddress = getKrlAddress();

  const calls = farmsToFetch.map((farm) => {
    const rewardTokenAddress = farm.token.address;
    return {
      address: krlAddress,
      name: "rewardPerToken",
      params: [rewardTokenAddress],
    };
  });

  const rewardPerTokens = await multicall(krlAbi, calls);
  const parsedRPT = rewardPerTokens.map((rpt: BigNumber.Value) => {
    return new BigNumber(rpt).div(BIG_TEN.pow(18)).toJSON();
  });
  return parsedRPT;
};
