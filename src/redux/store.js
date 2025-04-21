import {combineReducers, configureStore} from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  item: itemSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);




const store = configureStore({
  /*  reducer: {
    auth: authSlice,
    job: jobSlice,
  }, */
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;