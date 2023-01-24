import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    time: false,
    value: 0,
    name: '',
    plan: '',

    addOns: [],
  },
  reducers: {
    increment: (state, action) => {
      state.plan = action.payload;
    },
    decrement: (state, action) => {
      state.name = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload;
    },
    addOnName: (state, action) => {
      state.addOns = action.payload;
    },
    option: (state) => {
      state.time = true;
    },
    removeOption: (state) => {
      state.time = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  addOnName,
  option,
  removeOption,
} = counterSlice.actions;

export default counterSlice.reducer;
