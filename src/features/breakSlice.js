import { createSlice } from '@reduxjs/toolkit';

const breakSlice = createSlice({
  name: 'break',
  initialState: 5,
  reducers: {
    breakReset: state => { return state = 5},
    breakInc: state => { return state += 1 },
    breakDec: state => { return state -= 1 }
  }
})

export const { breakReset, breakInc, breakDec } = breakSlice.actions;

export default breakSlice.reducer