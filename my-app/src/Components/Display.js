import React from 'react';
export class Display extends React.Component {
  render() {
    const brk = <div id="timer-label">BREAK TIME</div>;
    return (<div id="display-container">
      <div id="title">POMODORO CLOCK</div>
      <div id="timer-container">

        <div id="time-left">
          {this.props.timer}

        </div>

        {this.props.sessionStatus == "session" ? null : brk}


      </div>
    </div>);
  }
}
