import React from 'react'

const SessionLength = ({ sessionState, sessionDecrement, sessionIncrement }) => {
  return (
    <div id="session-container">

      <div className="center-container">
        <div id="session-label" className="label">
          SESSION LENGTH
        </div>
      </div>

      <div className="center-container">
        <div id="session-controls" className="center-container">
          <div className="button-minus" onClick={sessionDecrement}>
            <div className="buttons-margin"> - </div>
          </div>
          <div id="session-length" className="settings-number">
            {sessionState}
          </div>
          <div className="button-plus" onClick={sessionIncrement}>
            <div className="buttons-margin"> + </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SessionLength
