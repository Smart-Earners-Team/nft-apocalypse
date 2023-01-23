import React, { useState } from "react";
import { useAppContext } from "../../../hooks/useAppContext";
import { RiCloseLine } from "react-icons/ri";
import config, { walletLocalStorageKey } from "./config";
import { Config, Login, Logout } from "./types";
import WalletCard, { MoreWalletCard } from "./WalletCard";

interface ConnectModalProps {
  login: Login;
  logout: Logout;
  onDismiss?: () => void;
  displayCount?: number;
}

/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const sortedConfig = walletConfig.sort(
    (a: Config, b: Config) => a.priority - b.priority
  );

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find(
    (sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName
  );

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [
    preferredWallet,
    ...sortedConfig.filter(
      (sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName
    ),
  ];
};

const ConnectModal = ({
  login,
  logout,
  onDismiss = () => null,
  displayCount = 3,
}: ConnectModalProps): JSX.Element => {
  const [showMore, setShowMore] = useState(false);
  const sortedConfig = getPreferredConfig(config);
  const displayListConfig = showMore
    ? sortedConfig
    : sortedConfig.slice(0, displayCount);

  const {
    krlWallet: { isConnecting, active },
  } = useAppContext();

  return (
    <div
      className="w-[90%] pb-10 max-h-[453px] py-6 outline-none max-w-xs mx-auto absolute
      left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white rounded-xl font-sans transition
        duration-300"
    >
      <div className="relative text-xl font-medium text-center mt-2 mb-6 p-4">
        <div className="text-center">Connect with</div>
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 p-1 bg-gray-50/40 inline-block rounded-full
            hover:bg-gray-50/90 cursor-pointer"
        >
          <RiCloseLine className="h-8 w-8" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-3">
        {displayListConfig.map((wallet) => (
          <div key={wallet.title} className="w-20 inline-block m-2">
            <WalletCard
              walletConfig={wallet}
              login={login}
              onDismiss={onDismiss}
              isConnecting={isConnecting}
            />
          </div>
        ))}
        {!showMore && <MoreWalletCard onClick={() => setShowMore(true)} />}
      </div>
      {active && (
        <button
          className="bg-red-300 absolute bottom-0 block w-full rounded-b-xl outline-none text-red-600 font-bold py-2 px-2 hover:bg-red-400 hover:text-red-700 focus:bg-red-400 focus:text-red-700 focus-within:bg-red-400 focus-within:text-red-700 transition duration-300"
          onClick={() => {
            onDismiss();
            logout();
          }}
        >
          Disconnect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectModal;
