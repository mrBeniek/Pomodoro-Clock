import React from 'react';
export const Controls = (props) => {
 
 
    const PLAY = <div id="start-stop" className="controls-button" onClick={props.handleTimer}>
    PLAY
      </div>;
    const PAUSE = <div id="start-stop" className="controls-button" onClick={props.handleTimer}>
    PAUSE
      </div>;
    return (<div className="controls-container">

      {props.status === "stop" ? PLAY : PAUSE }

      <div id="reset" className="controls-button" onClick={props.handleReset}>
        RESET
          </div>



    </div>);
  
}
