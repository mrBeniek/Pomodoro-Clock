import React from 'react'

const Display = ({BORDER_CLR, SESS, BRK, timerState}) => {
  return (
    <div id="display-container">
      <div id="title">POMODORO CLOCK</div>
      <div id="timer-container">
        <div id="time-left" style={BORDER_CLR}>
          <div id={SESS}>{timerState}</div>
          <div id={BRK}>BREAK TIME</div>
        </div>
      </div>
    </div>
  )
}

export default Display