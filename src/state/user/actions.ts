// viewed
import { createAction } from "@reduxjs/toolkit";
import { SerializedToken } from "../../config/constants/types";

export const updateGasPrice = createAction<{ gasPrice: string }>("user/updateGasPrice");
export const addSerializedToken = createAction<{ serializedToken: SerializedToken }>("user/addSerializedToken");
export const removeSerializedToken = createAction<{ chainId: number; address: string }>("user/removeSerializedToken");
export const updateUserSingleHopOnly = createAction<{ userSingleHopOnly: boolean }>("user/updateUserSingleHopOnly");
export const updateUserSlippageTolerance = createAction<{ userSlippageTolerance: number }>(
  "user/updateUserSlippageTolerance",
);
export const updateUserId = createAction<{ userId: string }>("user/updateUserId");
