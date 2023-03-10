import { createSlice } from '@reduxjs/toolkit';
import { fetchInfo } from 'redux/operations';

const initialState = {
  ttnInfo: {},
  selectedNumber: '',
  ttnNumbersList: [],
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
    updateSelectedNumber(state, action) {
      state.selectedNumber = action.payload;
      // console.log('action.payload', action.payload);
    },
  },
  extraReducers: {
    [fetchInfo.pending](state, action) {
      state.infoError = false;
      state.isLoading = true;
    },
    [fetchInfo.fulfilled](state, action) {
      state.ttnInfo = action.payload;
      state.isLoading = false;
      const currentTtnNumber = action.payload.Number;
      if (!state.ttnNumbersList.includes(currentTtnNumber)) {
        state.ttnNumbersList.push(currentTtnNumber);
      }
      state.selectedNumber = currentTtnNumber;
    },
    [fetchInfo.rejected](state, action) {
      state.isLoading = false;
      state.infoError = true;
    },
  },
});

export const { updateError, updateSelectedNumber } = infoSlice.actions;

export const infoReducer = infoSlice.reducer;
