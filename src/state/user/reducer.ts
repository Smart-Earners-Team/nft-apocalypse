import { createReducer } from "@reduxjs/toolkit";
import { DEFAULT_DEADLINE_FROM_NOW, INITIAL_ALLOWED_SLIPPAGE } from "../../config/constants";
import { SerializedToken } from "../../config/constants/types";
import {
  updateGasPrice,
  addSerializedToken,
  removeSerializedToken,
  updateUserSlippageTolerance,
  updateUserId,
} from "./actions";
import { GAS_PRICE_GWEI } from "./hooks/helpers";
import { updateVersion } from "../global/actions";

const currentTimestamp = () => new Date().getTime();

export interface UserState {
  gasPrice: string;
  tokens: {
    [chainId: number]: {
      [address: string]: SerializedToken;
    };
  };
  timestamp: number;
  // only allow swaps on direct pairs
  userSingleHopOnly: boolean;
  // user defined slippage tolerance in bips, used in all txns
  userSlippageTolerance: number;
  // deadline set by user in minutes, used in all txns
  userDeadline: number;
  // the timestamp of the last updateVersion action
  lastUpdateVersionTimestamp?: number;
  // Unique User Id
  userId: string;
}

export const initialState: UserState = {
  gasPrice: GAS_PRICE_GWEI.default,
  userSlippageTolerance: INITIAL_ALLOWED_SLIPPAGE,
  tokens: {},
  timestamp: currentTimestamp(),
  userSingleHopOnly: false,
  userDeadline: DEFAULT_DEADLINE_FROM_NOW,
  userId: "",
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateVersion, (state) => {
      // slippage isnt being tracked in local storage, reset to default
      // noinspection SuspiciousTypeOfGuard
      if (typeof state.userSlippageTolerance !== "number") {
        state.userSlippageTolerance = INITIAL_ALLOWED_SLIPPAGE;
      }

      // deadline isnt being tracked in local storage, reset to default
      // noinspection SuspiciousTypeOfGuard
      if (typeof state.userDeadline !== "number") {
        state.userDeadline = DEFAULT_DEADLINE_FROM_NOW;
      }

      state.lastUpdateVersionTimestamp = currentTimestamp();
    })
    .addCase(updateUserSlippageTolerance, (state, action) => {
      state.userSlippageTolerance = action.payload.userSlippageTolerance;
      state.timestamp = currentTimestamp();
    })
    .addCase(updateGasPrice, (state, action) => {
      state.gasPrice = action.payload.gasPrice;
    })
    .addCase(addSerializedToken, (state, { payload: { serializedToken } }) => {
      if (!state.tokens) {
        state.tokens = {};
      }
      state.tokens[serializedToken.chainId] = state.tokens[serializedToken.chainId] || {};
      state.tokens[serializedToken.chainId][serializedToken.address] = serializedToken;
      state.timestamp = currentTimestamp();
    })
    .addCase(removeSerializedToken, (state, { payload: { address, chainId } }) => {
      if (!state.tokens) {
        state.tokens = {};
      }
      state.tokens[chainId] = state.tokens[chainId] || {};
      delete state.tokens[chainId][address];
      state.timestamp = currentTimestamp();
    })
    .addCase(updateUserId, (state, action) => {
      state.userId = action.payload.userId;
    }),
);
