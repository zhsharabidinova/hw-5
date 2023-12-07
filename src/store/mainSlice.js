import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    value1: '',
    value2: '',
    result: 0,
  },
  reducers: {
    firstValueAction: (state, action) => {
      state.value1 = action.payload;
    },
    secondValueAction: (state, action) => {
      state.value2 = action.payload;
    },
    resultAction: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { firstValueAction, secondValueAction, resultAction } = mainSlice.actions;
export default mainSlice.reducer;
