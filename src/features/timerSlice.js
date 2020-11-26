import { createSlice } from '@reduxjs/toolkit';

const timerSlice = createSlice({
  name: 'timer',
  initialState: '25:00',
  reducers: {
    resetStates: state => { return state = '25:00'},
    timeChange: {
      reducer(state, action) {
        const {mins, secs} = action.payload;

        if (mins < 10 && secs < 10) {
          return state = "0" + mins + ":0" + secs
        }
        else if (mins < 10) {
          return state = "0" + mins + ":" + secs
        } 
        else if (secs < 10) {
          return state = mins + ":0" + secs
        } 
        else {
          return state = mins + ":" + secs
        }    
      }
    },
    timeSessionInc: {
      reducer(state, action) {
        const time = action.payload + 1;

        if (action.payload < 9) {
          return state = '0' + time + ':00'
        } else {
          return state = time + ':00'
        }
      }
    },
    timeSessionDec: {
      reducer(state, action) {
        const time = action.payload - 1;

        if (action.payload < 11 ) {
          return state = '0' + time + ':00' 
        } else {
          return state = time + ':00'
        }
      }
    }
  }
})

export const { resetStates, timeChange, timeSessionInc, timeSessionDec } = timerSlice.actions;

export default timerSlice.reducer