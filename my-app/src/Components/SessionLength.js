import React from 'react';

export const SessionLength = (props) => {
  
    return (<div id="session-container">
      <div className="center-container">

        <div id="session-label" className="label">
          SESSION LENGTH
          </div>

      </div>

      <div className="center-container">
        <div id="session-controls" className="center-container">
          <div className="button-minus" onClick={props.sessionDecrement}>
            <div className="buttons-margin"> - </div>
          </div>
          
            <div id="session-length" className="settings-number">
              {props.sessionLength}
            </div>
            
         
          <div className="button-plus" onClick={props.sessionIncrement}>
          <div className="buttons-margin"> + </div>
            </div>
        </div>
      </div>
    </div>);
  
}
