// viewed
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import farmsConfig from "../../config/constants/farms";
import fetchFarms from "./fetchFarms";
import fetchFarmsPrices from "./fetchFarmsPrices";
import {
  fetchFarmUserTokenBalances,
  fetchFarmUserAllowances,
  fetchFarmUserRewardPerToken,
  fetchFarmUserStakedBalance,
  fetchFarmUserEarning,
} from "./fetchFarmUser";
import { SerializedFarmsState, SerializedFarm } from "../types";

const noAccountFarmConfig = farmsConfig.map((farm) => ({
  ...farm,
  userData: {
    allowance: "0",
    tokenBalance: "0",
    stakedBalance: "0",
    earnings: "0",
    rewardPerToken: "0",
  },
}));

const initialState: SerializedFarmsState = {
  data: noAccountFarmConfig,
  userDataLoaded: false,
};

// Async thunks
export const fetchFarmsPublicDataAsync = createAsyncThunk<
  SerializedFarm[],
  number[]
>("farms/fetchFarmsPublicDataAsync", async (pids) => {
  const farmsToFetch = farmsConfig.filter((farmConfig) =>
    pids.includes(farmConfig.pid)
  );

  const farms = await fetchFarms(farmsToFetch);
  const farmsWithPrices = await fetchFarmsPrices(farms);

  // Filter out price helper LP config farms
  const farmsWithoutHelperLps = farmsWithPrices.filter(
    (farm: SerializedFarm) => {
      return farm.pid || farm.pid === 0;
    }
  );

  return farmsWithoutHelperLps;
});

interface FarmUserDataResponse {
  pid: number;
  allowance: string;
  tokenBalance: string;
  stakedBalance: string;
  earnings: string;
}

export const fetchFarmUserDataAsync = createAsyncThunk<
  FarmUserDataResponse[],
  { account: string; pids: number[] }
>("farms/fetchFarmUserDataAsync", async ({ account, pids }) => {
  const farmsToFetch = farmsConfig.filter((farmConfig) =>
    pids.includes(farmConfig.pid)
  );
  const userFarmAllowances = await fetchFarmUserAllowances(
    account,
    farmsToFetch
  );
  const userFarmTokenBalances = await fetchFarmUserTokenBalances(
    account,
    farmsToFetch
  );

  const userStakedBalances = await Promise.all(
    farmsToFetch.map(async (f) => {
      const bal = await fetchFarmUserStakedBalance(account, f.pid);
      return bal;
    })
  );

  const userFarmEarnings = await Promise.all(
    farmsToFetch.map(async (f) => {
      const bal = await fetchFarmUserEarning(account, f);
      return bal;
    })
  );

  const userRewardPerToken = await fetchFarmUserRewardPerToken(farmsToFetch);

  return farmsToFetch.map((_farm, index) => {
    return {
      pid: farmsToFetch[index].pid,
      allowance: userFarmAllowances[index],
      tokenBalance: userFarmTokenBalances[index],
      stakedBalance: userStakedBalances[index],
      earnings: userFarmEarnings[index],
      rewardPerToken: userRewardPerToken[index],
    };
  });
});

export const farmsSlice = createSlice({
  name: "Farms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Update farms with live data
    builder.addCase(fetchFarmsPublicDataAsync.fulfilled, (state, action) => {
      state.data = state.data.map((farm) => {
        const liveFarmData = action.payload.find(
          (farmData) => farmData.pid === farm.pid
        );
        return { ...farm, ...liveFarmData };
      });
    });

    // Update farms with user data
    builder.addCase(fetchFarmUserDataAsync.fulfilled, (state, action) => {
      action.payload.forEach((userDataEl) => {
        const { pid } = userDataEl;
        const index = state.data.findIndex((farm) => farm.pid === pid);
        state.data[index] = { ...state.data[index], userData: userDataEl };
      });
      state.userDataLoaded = true;
    });
  },
});

export default farmsSlice.reducer;
