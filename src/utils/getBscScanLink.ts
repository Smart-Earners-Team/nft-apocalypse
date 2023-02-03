// viewed
import { BASE_BSC_SCAN_URLS, ChainId } from "../config/constants";

export function getBscScanLink(
  data: string | number,
  type: "transaction" | "token" | "address" | "block" | "countdown",
  chainId: ChainId = ChainId.MAINNET,
): string {
  switch (type) {
    case "transaction": {
      return `${BASE_BSC_SCAN_URLS[chainId]}/tx/${data}`;
    }
    case "token": {
      return `${BASE_BSC_SCAN_URLS[chainId]}/token/${data}`;
    }
    case "block": {
      return `${BASE_BSC_SCAN_URLS[chainId]}/block/${data}`;
    }
    case "countdown": {
      return `${BASE_BSC_SCAN_URLS[chainId]}/block/countdown/${data}`;
    }
    default: {
      return `${BASE_BSC_SCAN_URLS[chainId]}/address/${data}`;
    }
  }
}
