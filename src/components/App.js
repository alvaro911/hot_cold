//1. Get the user InputNum
//2. Process if number is equal message will change to "YOU WIN"
//3. If Number is + or - 10 message will be : Hot
//4. If number is + or - 20 message will be "kind of hot"
//5. if number is + or - 30 message will be "cold"
import React, { Component } from 'react'

import './App.css'
import GuessInput from './GuessInput'
import GuessNums from './GuessNums'
import HotCold from './HotCold'

const initialState = {
  guessNums : [],
  guess : '',
  winning : false,
  message : ''
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      ...initialState,
      randomNum : (Math.floor(Math.random()*100))
    }
  }

  checkIfHotOrCold = guess => {
    const {randomNum} = this.state
    if(randomNum - guess > Math.abs(20)){
      console.log('COLD');
      this.setState({
        message: 'COLD'
      })
    }else if(randomNum - guess <= Math.abs(20)){
      console.log('Kind of Hot');
      this.setState({
        message: 'KIND OF HOT'
      })
    }else{
      console.log('HOT');
      this.setState({
        message: 'HOT'
      })
    }
  }

  userGuess = e => {
    e.preventDefault()
    const guess = parseInt(this.state.guess, 0)
    console.log('Guess is ', guess)
    console.log('randomNum', this.state.randomNum)
    if(guess !== this.state.randomNum){
      this.checkIfHotOrCold(guess)
      this.setState({
        guessNums: [...this.state.guessNums, guess]
      },() => {
        console.log(this.state.guessNums);
      })

    }else{
      console.log('WINNER!!');
      this.setState({
        winning : true,
        message: `YOU WIN!!! THE NUMBER IS ${guess}`
      })
    }
  }

  onChange = e => {
    this.setState({
      guess: e.target.value
    })
  }

  restart = () => {
    this.setState({
      ...initialState,
      randomNum : (Math.floor(Math.random()*100))
    })
  }

  render() {
    return (
      <div>
        <HotCold message={this.state.message}/>
        <GuessInput onChange={this.onChange} userGuess={this.userGuess} guess={this.state.guess}/>
        <GuessNums guessNums={this.state.guessNums}/>
        <button className="restart" onClick={this.restart}>Restart</button>
      </div>
    )
  }
}

export default App;
