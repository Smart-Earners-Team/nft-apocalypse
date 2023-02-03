// viewed
import { useEffect, useState } from "react";
import { injected } from "../lib/connectors";
import useActiveWeb3React from "./useActiveWeb3React";

export function useEagerConnect() {
  const { activate, active } = useActiveWeb3React();

  const [tried, setTried] = useState(false);

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, [activate]);

  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}
