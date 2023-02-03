// viewed
import { useContext } from "react";
import { ModalContext } from "../components/Modal/ModalContext";

const useWalletContext = () => useContext(ModalContext);
export default useWalletContext;
