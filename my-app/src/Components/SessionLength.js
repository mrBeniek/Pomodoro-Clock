import React from 'react';

export class SessionLength extends React.Component {
  render() {
    return (<div id="session-container">
      <div className="center-container">

        <div id="session-label" className="label">
          SESSION LENGTH
          </div>

      </div>

      <div className="center-container">
        <div className="button-minus" onClick={this.props.sessionDecrement}>
          -
          </div>
        <div id="session-timer" className="timer-increment">
          {this.props.sessionLength}
        </div>
        <div className="button-plus" onClick={this.props.sessionIncrement}>
          +
          </div>
      </div>
    </div>);
  }
}