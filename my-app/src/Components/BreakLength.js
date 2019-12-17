import React from 'react';
export class BreakLength extends React.Component {
  render() {
    return (<div id="break-container">
      <div className="center-container">

        <div id="break-label" className="label">
          BREAK LENGTH
          </div>

      </div>

      <div id="break-controls" className="center-container">
        <div id="break-decrement" className="button-minus" onClick={this.props.breakDecrement}>
          -
          </div>
        <div className="timer-increment">
          {this.props.breakLength}
        </div>
        <div id="break-increment" className="button-plus" onClick={this.props.breakIncrement}>
          +
          </div>
      </div>
    </div>);
  }
}
