import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
  name: 'status',
  initialState: 'stop',
  reducers: {
    resetStates: state => { return state = 'stop'},
    statusStop: state => { return state = 'stop' },
    statusPlay: state => { return state = 'play' }
  }
})

export const { resetStates, statusStop, statusPlay } = statusSlice.actions;

export default statusSlice.reducer