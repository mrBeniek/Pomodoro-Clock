import React from 'react';
export const Display = (props) => {
  
    const BRK_HIDDEN = <div id="timer-break-hidden">BREAK TIME</div>;
    const BRK = <div id="timer-break">BREAK TIME</div>;
    const SESS = props.sessionStatus == "session" ? "timer-numbers" : "timer-numbers-break";
    const BORDER_CLR = props.sessionStatus === "session" ? {borderColor: "#388E3C"} : {borderColor: "#D32F2F"};
    return (<div id="display-container">
      <div id="title">POMODORO CLOCK</div>
      <div id="timer-container">
        
        <div id="time-left" style={BORDER_CLR}>
        <div id={SESS}>{props.timer}</div>
          {props.sessionStatus == "session" ? BRK_HIDDEN : BRK}
        </div>

      </div>
    </div>);
  
}
