// viewed
import { ChainId } from "../../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../";
import { GAS_PRICE_GWEI, serializeToken } from "./helpers";
import { useCallback } from "react";
import {
  addSerializedToken,
  removeSerializedToken,
  updateUserId,
  updateUserSingleHopOnly,
  updateUserSlippageTolerance,
} from "../actions";
import { Token } from "../../../config/entities/token";

export function useGasPrice(): string {
  const chainId = process.env.GATSBY_CHAIN_ID!;
  const userGas = useSelector<AppState, AppState["user"]["gasPrice"]>((state) => state.user.gasPrice);
  return chainId === ChainId.MAINNET.toString() ? userGas : GAS_PRICE_GWEI.testnet;
}

export function useUserSingleHopOnly(): [boolean, (newSingleHopOnly: boolean) => void] {
  const dispatch = useDispatch<AppDispatch>();

  const singleHopOnly = useSelector<AppState, AppState["user"]["userSingleHopOnly"]>(
    (state) => state.user.userSingleHopOnly,
  );

  const setSingleHopOnly = useCallback(
    (newSingleHopOnly: boolean) => {
      dispatch(updateUserSingleHopOnly({ userSingleHopOnly: newSingleHopOnly }));
    },
    [dispatch],
  );

  return [singleHopOnly, setSingleHopOnly];
}

export function useAddUserToken(): (token: Token) => void {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(
    (token: Token) => {
      dispatch(addSerializedToken({ serializedToken: serializeToken(token) }));
    },
    [dispatch],
  );
}

export function useRemoveUserAddedToken(): (chainId: number, address: string) => void {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(
    (chainId: number, address: string) => {
      dispatch(removeSerializedToken({ chainId, address }));
    },
    [dispatch],
  );
}

export function useUserSlippageTolerance(): [number, (slippage: number) => void] {
  const dispatch = useDispatch<AppDispatch>();
  const userSlippageTolerance = useSelector<AppState, AppState["user"]["userSlippageTolerance"]>((state) => {
    return state.user.userSlippageTolerance;
  });

  const setUserSlippageTolerance = useCallback(
    (slippage: number) => {
      dispatch(updateUserSlippageTolerance({ userSlippageTolerance: slippage }));
    },
    [dispatch],
  );

  return [userSlippageTolerance, setUserSlippageTolerance];
}

export function useUserId(): [string, (id: string) => void] {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector<AppState, AppState["user"]["userId"]>((state) => {
    return state.user.userId;
  });

  const setUserId = useCallback(
    (id: string) => {
      dispatch(updateUserId({ userId: id }));
    },
    [dispatch],
  );

  return [userId, setUserId];
}
