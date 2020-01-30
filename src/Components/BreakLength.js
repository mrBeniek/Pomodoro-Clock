import React from 'react';
export const BreakLength = (props) => {
  
    return (<div id="break-container">
      <div className="center-container">

        <div id="break-label" className="label">
          BREAK LENGTH
          </div>

      </div>
      <div className="center-container">
        <div id="break-controls" className="center-container">
          <div id="break-decrement" className="button-minus" onClick={props.breakDecrement}>
          <div className="buttons-margin"> - </div>
          </div>
          <div id="break-length" className="settings-number">
            {props.breakLength}
          </div>
          <div id="break-increment" className="button-plus" onClick={props.breakIncrement}>
          <div className="buttons-margin"> + </div>
          </div>
        </div>
      </div>
      
    </div>);
  
}
