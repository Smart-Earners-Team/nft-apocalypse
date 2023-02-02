// viewed
import { useContext } from "react";
import { GlobalAppContextProvider } from "../contexts/AppContext";

export const useAppContext = () => useContext(GlobalAppContextProvider);
