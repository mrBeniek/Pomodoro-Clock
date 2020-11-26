import { createSlice } from '@reduxjs/toolkit';

const buttonsDisabledSlice = createSlice({
  name: 'buttonsDisabled',
  initialState: false,
  reducers: {
    resetStates: state => { return state = false},
    buttonsDisable: state => { return state = true },
    buttonsEnable: state => { return state = false }
  }
})

export const { resetStates, buttonsDisable, buttonsEnable } = buttonsDisabledSlice.actions;

export default buttonsDisabledSlice.reducer