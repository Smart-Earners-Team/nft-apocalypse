import useWalletModal from "../components/widgets/WalletModal/useWalletModal";
import useAuth from "./useAuth";

const useAuthWallet = () => {
  const { login, logout } = useAuth();
  return useWalletModal(login, logout);
};

export default useAuthWallet;
