// viewed
import { useContext } from "react";
import { ToastsContext } from "../contexts/ToastContext";

const useToast = () => {
  const toastContext = useContext(ToastsContext);

  if (toastContext === undefined) {
    throw new Error("Toasts context undefined");
  }

  return toastContext;
};

export default useToast;
