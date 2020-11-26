import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
  name: 'session',
  initialState: 25,
  reducers: {
    sessionReset: state => { return state = 25},
    sessionInc: state => { return state += 1 },
    sessionDec: state => { return state -= 1 }
  }
})

export const { sessionReset, sessionInc, sessionDec } = sessionSlice.actions;

export default sessionSlice.reducer