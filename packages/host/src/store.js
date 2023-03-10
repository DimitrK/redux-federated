import React from 'react';
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch, Provider as _Provider } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    clear: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, clear } = counterSlice.actions;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});


export const StoreProvider = ({children}) => {
  return (
    <_Provider store={store}>
      {children}
    </_Provider>
  );
}

export const useCounter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return {
    count,
    increment: () => dispatch(increment()),
    clear: () => dispatch(clear())
  }
}
