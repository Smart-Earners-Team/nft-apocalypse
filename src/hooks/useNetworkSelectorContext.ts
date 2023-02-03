import { useContext } from "react";
import { NetworkSelectorContext } from "../contexts/NetworkSelector";

export default function useNetworkSelectorContext() {
    return useContext(NetworkSelectorContext)
}