import React from 'react'

import './GuessInput.css'

export default function GuessInput(props){
  return(
    <div className="guess-input">
      <form onSubmit={props.userGuess}>
        <input
          type="number"
          maxLength={2}
          value={props.guess}
          onChange={props.onChange}
        />
      </form>
      <h2>Number of attemps # <span>{props.counter}</span></h2>
    </div>
  )
}
