// viewed
import { useMemo } from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import farmsReducer from "./farms";
import { updateVersion } from "./global/actions";
import user from "./user/reducer";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  createMigrate,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import IndexedDBStorage from "../utils/IndexedDBStorage";
import lists from "./lists/reducer";
import swap from "./swap/reducer";
import transactions from "./transactions/reducer";
import multicall from "./multicall/reducer";

const PERSISTED_KEYS: string[] = ["user", "transactions"];

const migrations = {
  0: (state: any) => {
    // migration add userPredictionChainlinkChartDisclaimerShow
    return {
      ...state,
      user: {
        ...state?.user,
        userPredictionChainlinkChartDisclaimerShow: true,
      },
    };
  },
  1: (state: any) => {
    return {
      ...state,
    };
  },
};

const persistConfig = {
  key: "primary",
  whitelist: PERSISTED_KEYS,
  blacklist: ["profile"],
  storage,
  version: 1,
  migrate: createMigrate(migrations, { debug: false }),
};

const ListsConfig = {
  key: "lists",
  version: 1,
  serialize: false,
  deserialize: false,
  storage: IndexedDBStorage("lists"),
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: undefined,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    farms: farmsReducer,

    // Exchange
    user,
    transactions,
    swap,
    multicall,
    lists: persistReducer(ListsConfig, lists),
  }),
);

// eslint-disable-next-line import/no-mutable-exports
let store: ReturnType<typeof makeStore>;

export function makeStore(preloadedState = undefined) {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          ignoredPaths: ["lists"],
        },
      }),
    devTools: process.env.NODE_ENV === "development",
    preloadedState,
  });
}

export const initializeStore = (preloadedState: any = undefined) => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    //@ts-ignore
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;

  // Create the store once in the client
  if (!store) {
    store = _store;
  }

  return _store;
};

store = initializeStore();

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<any>();

export default store;

export const persistor = persistStore(store, undefined, () => {
  store.dispatch(updateVersion());
});

export function useStore(initialState: any) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
