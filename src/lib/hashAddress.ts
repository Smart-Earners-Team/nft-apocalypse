// viewed
import React from "react";
import { useLocation } from "@reach/router";
import axios, { AxiosError, AxiosResponse } from "axios";

const adminUrl = "https://kryptolite.rocks/F1288cF18B1FAaA35F40111c3E5d2f827e1E920E/swap.php/";

export interface ApiResponse {
  data: null | {
    address: string;
    hash: string;
    created_at?: string;
  };
  message: string;
  status: boolean;
}

export const addUserAddressToHashTable = async (
  address: string,
  cb: (data: { address: string; hash: string; created_at?: string }) => void,
): Promise<void> => {
  await axios({
    url: `${adminUrl}?address=${address}&action=swap`,
    method: "GET",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  })
    .then((res: AxiosResponse<ApiResponse>) => {
      const response = res.data;
      if (response.status === true && response.data !== null) {
        cb(response.data);
      }
    })
    .catch((e: AxiosError) => {
      const response = e.response?.data as ApiResponse[];
      if (response && !response[0].status) {
        // Try to get address
        (async () => await getAddressFromParams(address, cb))();
      }
    });
};

export const getAddressFromParams = async (
  hash: string,
  cb: (data: { address: string; hash: string; created_at?: string }) => void,
): Promise<void> => {
  await axios({
    url: `${adminUrl}?hash=${hash}&action=swap`,
    method: "GET",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  })
    .then((res: AxiosResponse<ApiResponse>) => {
      const response = res.data;
      if (response.status === true && response.data) {
        cb(response.data);
      }
    })
    .catch(() => {});
};

// A custom hook that builds on useLocation to parse
// the query string for you.
export default function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const getSiteUrl = () => window.location.protocol + "//" + window.location.hostname;
