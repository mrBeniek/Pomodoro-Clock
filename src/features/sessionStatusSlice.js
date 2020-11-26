import { createSlice } from '@reduxjs/toolkit';

const sessionStatusSlice = createSlice({
  name: 'sessionStatus',
  initialState: 'session',
  reducers: {
    resetStates: state => { return state = 'session'},
    sessionOn: state => { return state = 'session' },
    breakOn: state => { return state = 'break' }
  }
})

export const { resetStates, sessionOn, breakOn } = sessionStatusSlice.actions;

export default sessionStatusSlice.reducer