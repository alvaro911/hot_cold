import React, {Component} from 'react'

import './GuessInput.css'

export default function GuessInput(){
  return(
    <div className="guess-input">
      <form onSubmit={this.props.userGuess}>
        <input
          type="number"
          maxLength={2}
          value={this.props.guess}
          onChange={this.props.onChange}
        />
      </form>
      <h2>Number of attemps # <span>{this.props.counter}</span></h2>
    </div>
  )
}
