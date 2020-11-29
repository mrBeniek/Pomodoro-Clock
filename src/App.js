import React, {useState} from 'react';
import './App.scss';
import useInterval from './hooks/useInterval';
import SessionLength from './components/SessionLength';
import BreakLength from './components/BreakLength';
import Controls from './components/Controls';
import Display from './components/Display';
import { useSelector, useDispatch } from 'react-redux';
import { breakReset, breakInc, breakDec } from './features/breakSlice';
import { buttonsDisable, buttonsEnable } from './features/buttonsDisabledSlice';
import { statusStop, statusPlay } from './features/statusSlice';
import { sessionOn, breakOn } from './features/sessionStatusSlice';
import { sessionReset, sessionInc, sessionDec } from './features/sessionSlice';
import { timeChange, timeSessionInc, timeSessionDec } from './features/timerSlice';

const App = () => {

  const dispatch = useDispatch();

  // STATES

  const [secs, setSecs] = useState(59);
  const [mins, setMins] = useState(24);

  const timerState = useSelector(state => state.timerState);
  const sessionState = useSelector(state => state.sessionState);
  const breakState = useSelector(state => state.breakState);
  const buttonsDisabledState = useSelector(state => state.buttonsDisabledState);
  const statusState = useSelector(state => state.statusState);
  const sessionStatusState = useSelector(state => state.sessionStatusState);

  useInterval(() => {
    if (!secs && !mins) {
      document.getElementById('beep').play();

      if (sessionStatusState === 'session') {
        setMins(breakState - 1); 
        setSecs(59)  
        dispatch(breakOn())
      } else {
        setMins(sessionState - 1);
        setSecs(59)
        dispatch(sessionOn())
      }
    } else {
        if (secs !== 0) {
          setSecs(secs - 1)
        } else {
          setMins(mins - 1);
          setSecs(59);
        }
    } 
    
    let payload = {mins: mins, secs: secs};

    dispatch(timeChange(payload))
  }, statusState === 'play' ? 1000 : null)

  // FUNCTIONS

  const handleTimer = () => dispatch => {
    console.log("handleTimer initialised")

    if (statusState === 'stop') {
      dispatch(statusPlay())
    } else {
      dispatch(statusStop())
    }

    dispatch(handleDisable())  
  }

  const handleDisable = () => dispatch => {
    dispatch(buttonsDisable());

    setTimeout( () => {
      dispatch(buttonsEnable())
    }, 1000)
  }

  const handleReset = () => dispatch => {
    handleDisable()

    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;

    let payload = {mins: 25, secs: 0};
    dispatch(timeChange(payload));
    dispatch(breakReset());
    dispatch(sessionReset());
    dispatch(sessionOn());
    dispatch(statusStop());

    setSecs(0);
    setMins(25)
  }

  const breakDecrement = () => {
    if (breakState > 1 && statusState === 'stop') {
      return () => dispatch(breakDec())
    }
  }

  const breakIncrement = () => {
    if (breakState < 60 && statusState === 'stop') {
      return () => dispatch(breakInc())
    }
  }

  const sessionDecrement = () => dispatch => {
    if (sessionState > 1 && statusState === 'stop' && sessionStatusState !== 'break') {
      dispatch(sessionDec());
      dispatch(timeSessionDec(sessionState));
      setMins(mins - 1);
    }
  }

  const sessionIncrement = () => dispatch => {
    if (sessionState < 60 && statusState === 'stop' && sessionStatusState !== 'break') {
      dispatch(sessionInc());
      dispatch(timeSessionInc(sessionState));
      setMins(mins + 1);
    }
  }

  // TERNARY

  const CONTROLS_LABEL = statusState === 'stop' ? 'PLAY' : 'PAUSE';
  const DISABLED = buttonsDisabledState ? null : () => dispatch(handleTimer());
  const DISABLED_RESET = buttonsDisabledState ? null : () => dispatch(handleReset()); 

  const BORDER_CLR = sessionStatusState === 'session' ? {borderColor: "#388E3C"} : {borderColor: "#D32F2F"};
  const SESS = sessionStatusState === 'session' ? 'timer-numbers' : 'timer-numbers-break';
  const BRK = sessionStatusState === 'session' ? 'timer-break-hidden' : 'timer-break';

  return (
    <div id="main-container">
      <div id="left-container">
        <Display
          BORDER_CLR={BORDER_CLR}
          SESS={SESS}
          BRK={BRK}
          timerState={timerState}
        />
        <Controls
          controlsLabel={CONTROLS_LABEL}
          disabled={DISABLED}
          disabledReset={DISABLED_RESET}
        />
      </div>
      <div id="right-container">
        <BreakLength
          breakState={breakState}
          breakInc={breakIncrement()}
          breakDec={breakDecrement()}
        />
        <SessionLength
          sessionState={sessionState}
          sessionDecrement={() => dispatch(sessionDecrement())}
          sessionIncrement={() => dispatch(sessionIncrement())}
        />
      </div>
      <audio id="beep" src="http://soundbible.com/grab.php?id=1766&type=mp3"></audio>
    </div>
  )
}

export default App;