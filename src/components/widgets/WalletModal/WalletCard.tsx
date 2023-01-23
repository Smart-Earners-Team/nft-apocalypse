// viewed
import React from "react";
import MoreHorizontal from "../../Svg/Icons/MoreHorizontal";
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
import { Login, Config, ConnectorNames } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  isConnecting: boolean;
}

export const MoreWalletCard = (
  props: React.ComponentPropsWithoutRef<"button">
) => {
  return (
    <button
      {...props}
      className="flex items-center text-xs flex-col h-auto justify-center mx-auto
      w-full py-4 text-gray-600"
    >
      <MoreHorizontal className="w-10 mb-1 fill-gray-700" />
      More
    </button>
  );
};

const WalletCard = ({
  login,
  walletConfig,
  onDismiss,
  isConnecting,
}: Props) => {
  const { title, icon: Icon } = walletConfig;

  return (
    <button
      className="flex items-center flex-col h-auto justify-center mx-auto disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 hover:scale-110 transition-all duration-300"
      onClick={() => {
        const isIOS =
          // @ts-ignore
          /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        // Since iOS does not support Trust Wallet we fall back to WalletConnect
        if (walletConfig.title === "Trust Wallet" && isIOS) {
          login(ConnectorNames.WalletConnect);
        } else {
          login(walletConfig.connectorId);
        }

        localStorage.setItem(walletLocalStorageKey, walletConfig.title);
        localStorage.setItem(
          connectorLocalStorageKey,
          walletConfig.connectorId
        );
        onDismiss();
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      disabled={isConnecting}
    >
      <Icon width="40px" className="mb-1" />
      <div className="text-xs text-center">{title}</div>
    </button>
  );
};

export default WalletCard;
