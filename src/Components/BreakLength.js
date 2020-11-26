import React from 'react';

const BreakLengthCont = ({ breakDec, breakInc, breakState }) => {

    return (
      <div id="break-container">
        <div className="center-container">
          <div id="break-label" className="label">
                BREAK LENGTH
          </div>
        </div>
          

        <div className="center-container">
          <div id="break-controls" className="center-container">
            <div id="break-decrement" className="button-minus" onClick={breakDec}>
              <div className="buttons-margin"> - </div>
            </div>
            <div id="break-length" className="settings-number">
              {breakState}
            </div>
            <div id="break-increment" className="button-plus" onClick={breakInc}>
              <div className="buttons-margin"> + </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BreakLengthCont