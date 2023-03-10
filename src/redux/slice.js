import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const infoSlice = createSlice({
  name: 'info',
  initialState: initialState,
  reducers: {},
  extraReducers: {},
});

export const { updateErrorLogIn, updateErrorRegister } = infoSlice.actions;

export const infoReducer = infoSlice.reducer;
