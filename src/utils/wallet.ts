import { BAD_SRCS } from "../components/Logo/index";
import type { SetupNetworkArgs } from "../config/constants/types";


/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async ({
  chainId,
  networkName,
  nativeCurrency,
  rpcUrls,
  blockExplorerUrls,
}: SetupNetworkArgs) => {
  const provider = window.ethereum;
  if (provider) {
    try {
      if (!provider.request)
        throw new Error(
          `Can't setup the ${networkName} network on metamask because window.ethereum.request is undefined`
        );

      await provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: networkName,
            nativeCurrency,
            rpcUrls,
            blockExplorerUrls,
          },
        ],
      });
      return true;
    } catch (error) {
      console.error("Failed to setup the network in Metamask:", error);
      return false;
    }
  } else {
    console.error(
      `Can't setup the ${networkName} network on metamask because window.ethereum.request is undefined`
    );
    return false;
  }
};

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number,
  tokenLogo?: string
) => {
  // better leave this undefined for default image instead of broken image url
  const image = tokenLogo
    ? BAD_SRCS[tokenLogo]
      ? undefined
      : tokenLogo
    : undefined;

  const tokenAdded =
    window.ethereum?.request &&
    (await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image,
        },
      },
    }));

  return tokenAdded;
};
