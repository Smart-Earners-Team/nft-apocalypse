import React from "react";
import useModal from "../../Modal/useModal";
import { Login } from "./types";
import ConnectModal from "./ConnectModal";
import useWalletContext from "../../../hooks/useWalletContext";

interface ReturnType {
  onPresentConnectModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void): ReturnType => {
  const { onDismiss } = useWalletContext();

  const [onPresentConnectModal] = useModal(<ConnectModal login={login} logout={logout} onDismiss={onDismiss} />);
  return { onPresentConnectModal };
};

export default useWalletModal;
