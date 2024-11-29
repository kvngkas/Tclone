import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import TodoSlice from "./TodoSlice";
import authSlice from "./authSlice"; // Import AuthSlice

const reducers = combineReducers({
  TodoSlice,
  auth: authSlice, // Add auth slice
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["WalletSlice"], // Adjust blacklist as necessary
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

