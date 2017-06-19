import React, {Component} from 'react'

export default class GuessNums extends Component{
  render(){
    return(
      <div>
        <ul>
          {this.props.guessNums.map((num, index) => {
            return <li key={index}>{num}</li>
          })}
        </ul>
      </div>
    )
  }
}
