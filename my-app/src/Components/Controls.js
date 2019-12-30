import React from 'react';
export class Controls extends React.Component {
 
  render() {
    const PLAY = <div id="start-stop" className="controls-button" onClick={this.props.handleTimer}>
    PLAY
      </div>;
    const PAUSE = <div id="start-stop" className="controls-button" onClick={this.props.handleTimer}>
    PAUSE
      </div>;
    return (<div className="controls-container">

      {this.props.status === "stop" ? PLAY : PAUSE }

      <div id="reset" className="controls-button" onClick={this.props.handleReset}>
        RESET
          </div>



    </div>);
  }
}
