import React, {Component} from 'react'

import './GuessNums.css'

export default class GuessNums extends Component{
  render(){
    return(
      <div className="guess-nums">
        <ul>
          {this.props.guessNums.map((num, index) => {
            return <li key={index}>{num}</li>
          })}
        </ul>
      </div>
    )
  }
}
