import React from 'react';
export class Controls extends React.Component {
  render() {
    return (<div className="controls-container">

      <div id="start-stop" className="controls-button" onClick={this.props.handleTimer}>
        PLAY
          </div>

      <div id="reset" className="controls-button" onClick={this.props.handleReset}>
        RESET
          </div>



    </div>);
  }
}
