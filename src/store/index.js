import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootReducer from "../reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
    }),
});

export default store;
