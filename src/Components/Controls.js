import React from 'react';

const Controls = ({disabled, disabledReset, controlsLabel }) => {
  return (
    <div className="controls-container">
      <div 
        id="start-stop"
        className="controls-button"
        onClick={disabled}
      >
        {controlsLabel}
      </div>
      <div
        id="reset" 
        className="controls-button" 
        onClick={disabledReset}
      >
        RESET
      </div>
    </div>
  )
}

export default Controls