import React, {Component} from 'react'

export default class GuessInput extends Component{
  render(){
    return(
      <div>
        <form onSubmit={this.props.userGuess}>
          <input type="number" maxLength={2} value={this.props.guess} onChange={this.props.onChange}/>
        </form>
      </div>
    )
  }
}
