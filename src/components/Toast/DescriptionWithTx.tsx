// viewed
import React from "react";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import { getBscScanLink } from "../../utils/getBscScanLink";
import truncateHash from "../../utils/truncateHash";
import Link from "../Link";

interface DescriptionWithTxProps {
  description?: string;
  txHash?: string;
}

const DescriptionWithTx: React.FC<DescriptionWithTxProps> = ({ txHash, children }) => {
  const { chainId } = useActiveWeb3React();

  return (
    <>
      {typeof children === "string" ? <p>{children}</p> : children}
      {txHash && (
        <Link to={getBscScanLink(txHash, "transaction", chainId)}>View on BscScan: {truncateHash(txHash, 8, 0)}</Link>
      )}
    </>
  );
};

export default DescriptionWithTx;
