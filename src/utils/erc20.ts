import { Interface } from "@ethersproject/abi";
import ERC20_ABI from "./erc20.json";
import ERC20_BYTES32_ABI from "./erc20_bytes32.json";

export const ERC20_INTERFACE = new Interface(ERC20_ABI);

export const ERC20_BYTES32_INTERFACE = new Interface(ERC20_BYTES32_ABI);
