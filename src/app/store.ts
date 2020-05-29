import { Action, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { PERSIST, PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "./rootReducer";

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  blacklist: ["notifications", "update", "online"],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PERSIST], // needed for redux-persist
    },
  }),
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(persistReducer(persistConfig, newRootReducer));
  });
}

export const persistor = persistStore(store, null, () => {
  // this callback is called after store rehydration completes
  // do something like update store with newly fetch data here
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export type StoreType = typeof store;

export default store;
