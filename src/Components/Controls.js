import React from 'react';
export const Controls = (props) => {
 
  const DISABLED = props.buttonsDisabled ? null : props.handleTimer;
  const DISABLED_RESET = props.buttonsDisabled ? null : props.handleReset;  
    const PLAY = <div id="start-stop" className="controls-button" onClick={DISABLED}>
    PLAY
      </div>;
    const PAUSE = <div id="start-stop" className="controls-button" onClick={DISABLED}>
    PAUSE
      </div>;
    
    return (<div className="controls-container">

      {props.status === "stop" ? PLAY : PAUSE }

      <div id="reset" className="controls-button" onClick={DISABLED_RESET}>
        RESET
          </div>



    </div>);
  
}
