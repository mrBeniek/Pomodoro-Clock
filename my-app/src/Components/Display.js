import React from 'react';
export class Display extends React.Component {
  render() {
    const BRK_HIDDEN = <div id="timer-break-hidden">BREAK TIME</div>;
    const BRK = <div id="timer-break">BREAK TIME</div>;
    const SESS = this.props.sessionStatus == "session" ? "timer-numbers" : "timer-numbers-break";
    const BORDER_CLR = this.props.sessionStatus === "session" ? {borderColor: "#388E3C"} : {borderColor: "#D32F2F"};
    return (<div id="display-container">
      <div id="title">POMODORO CLOCK</div>
      <div id="timer-container">
        
        <div id="time-left" style={BORDER_CLR}>
        <div id={SESS}>{this.props.timer}</div>
          {this.props.sessionStatus == "session" ? BRK_HIDDEN : BRK}
        </div>

      </div>
    </div>);
  }
}
