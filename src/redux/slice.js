import { createSlice } from '@reduxjs/toolkit';
import { fetchInfo, fetchDepartments } from 'redux/operations';

const initialState = {
  ttnInfo: {},
  selectedNumber: '',
  ttnNumbersList: [],
  departmentsList: [],
  infoError: false,
  departmentsError: false,
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
    },
    // deleteSelectedNumber(state, action) {
    //   console.log(action.payload);
    //   const index = state.ttnNumbersList.includes(action.payload);
    //   console.log(index);
    //   state.ttnNumbersList.splice(index, 1);
    // },
    clearRequestHistory(state, action) {
      state.ttnNumbersList = [];
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
      console.log(action.payload);

      const currentTtnNumber = action.payload.Number;
      if (!state.ttnNumbersList.includes(currentTtnNumber)) {
        state.ttnNumbersList.push(currentTtnNumber);
      }
      state.selectedNumber = currentTtnNumber;
    },
    [fetchInfo.rejected](state, action) {
      state.isLoading = false;
      state.infoError = action.payload[0];
    },
    [fetchDepartments.pending](state, action) {
      state.departmentsError = false;
      state.isLoading = true;
    },
    [fetchDepartments.fulfilled](state, action) {
      state.departmentsList = action.payload;

      state.isLoading = false;
    },
    [fetchDepartments.rejected](state, action) {
      state.isLoading = false;
      state.departmentsError = true;
    },
  },
});

export const {
  updateError,
  updateSelectedNumber,
  deleteSelectedNumber,
  clearRequestHistory,
} = infoSlice.actions;

export const infoReducer = infoSlice.reducer;
