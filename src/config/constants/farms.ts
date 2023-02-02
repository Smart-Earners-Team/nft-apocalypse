// viewed
import { serializeTokens } from "./tokens";
import { SerializedFarmConfig } from "./types";

const serializedTokens = serializeTokens();

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    lpSymbol: "KRL-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x4d19Dbc2686011B593902AA3Ee26e3a7203fc453",
    },
    token: serializedTokens.krl,
    quoteToken: serializedTokens.busd,
    ended: false,
  },
  {
    pid: 2,
    lpSymbol: "KRL-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x4d19Dbc2686011B593902AA3Ee26e3a7203fc453",
    },
    token: serializedTokens.krl,
    quoteToken: serializedTokens.busd,
    ended: true,
  },
];

export default farms;
