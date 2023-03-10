import { createSlice } from '@reduxjs/toolkit';
import { fetchInfo } from 'redux/operations';

const initialState = {
  info: {},
  // ttnNumber: null,
  infoError: false,
  isLoading: false,
};

const infoSlice = createSlice({
  name: 'info',
  initialState: initialState,
  reducers: {
    updateError(state, action) {
      state.infoError = action.payload;
    },
  },
  extraReducers: {
    [fetchInfo.pending](state, action) {
      state.infoError = false;
      state.isLoading = true;
    },
    [fetchInfo.fulfilled](state, action) {
      state.info = action.payload;
      state.isLoading = false;
    },
    [fetchInfo.rejected](state, action) {
      state.isLoading = false;
      state.infoError = true;
    },
  },
});

export const { updateError } = infoSlice.actions;

export const infoReducer = infoSlice.reducer;
