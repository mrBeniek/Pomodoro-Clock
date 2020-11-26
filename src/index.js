import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import timerState from './features/timerSlice';
import sessionState from './features/sessionSlice';
import breakState from './features/breakSlice';
import buttonsDisabledState from './features/buttonsDisabledSlice';
import statusState from './features/statusSlice';
import sessionStatusState from './features/sessionStatusSlice';

const store = configureStore({
  reducer: {
    timerState: timerState,
    sessionState: sessionState,
    breakState: breakState,
    buttonsDisabledState: buttonsDisabledState,
    statusState: statusState,
    sessionStatusState: sessionStatusState,

  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
