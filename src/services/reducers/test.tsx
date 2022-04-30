import { createSlice } from "@reduxjs/toolkit";

const initialState = {  }; // add her the initial state Object

const slice = createSlice({
  name:'place her the slice name',
  initialState,
  reducers: {
    // add her the reducers
  }
});

const testReducer = slice.reducer;

export const testActions = slice.actions;

export default testReducer;
