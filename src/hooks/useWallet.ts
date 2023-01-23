import useWalletModal from "../components/widgets/WalletModal/useWalletModal";
import useAuth from "./useAuth";

const useWallet = () => {
  const { login, logout } = useAuth();
  return useWalletModal(login, logout);
};

export default useWallet;
