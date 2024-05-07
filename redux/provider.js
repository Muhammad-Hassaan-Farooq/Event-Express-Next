"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import store from "./store";

export default function ReduxProvider({ children }) {
  const StoreRef = useRef();

  if (!StoreRef.current) {
    StoreRef.current = store;

    //make store
  }

  return <Provider store={StoreRef.current}>{children}</Provider>;
}
