import React from 'react';
export class Display extends React.Component {
  render() {
    const BRK_HIDDEN = <div id="timer-break-hidden">BREAK TIME</div>;
    const BRK = <div id="timer-break">BREAK TIME</div>;
    return (<div id="display-container">
      <div id="title">POMODORO CLOCK</div>
      <div id="timer-container">
        
        <div id="time-left">
          <div id="timer-numbers">
            {this.props.timer}
          </div> 
          {this.props.sessionStatus == "session" ? BRK_HIDDEN : BRK}
        </div>
          
        

        


      </div>
    </div>);
  }
}
