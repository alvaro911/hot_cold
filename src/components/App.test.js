import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />)
  })

  it('Can start a new game', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({
      guessNums: [1, 3, 7, 10],
      message: 'GETTING HOT',
      winning: false,
      randomNum: 34
    })
    wrapper.instance().restart()
    expect(wrapper.state('guessNums')).toEqual([])
    expect(wrapper.state('winning')).toEqual(false)
    expect(wrapper.state('message')).toEqual('Guess a number')
    expect(wrapper.state('randomNum')).toBeGreaterThanOrEqual(1)
    expect(wrapper.state('randomNum')).toBeLessThanOrEqual(100)
  })

  it('Make guesses', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({
      randomNum: 100
    })

    wrapper.instance().userGuess(10)
    expect(wrapper.state('guesses')).toEqual([10])
    expect(wrapper.state('message')).toEqual('COLD')
    expect(wrapper.state('winning')).toEqual(false)

    wrapper.instance().userGuess(82)
    expect(wrapper.state('guesses')).toEqual([10, 82])
    expect(wrapper.state('message')).toEqual('KIND OF HOT')
    expect(wrapper.state('winning')).toEqual(false)

    wrapper.instance().userGuess(91)
    expect(wrapper.state('guesses')).toEqual([10, 82, 91])
    expect(wrapper.state('message')).toEqual('HOT')
    expect(wrapper.state('winning')).toEqual(false)

    wrapper.instance().userGuess(100)
    expect(wrapper.state('guesses')).toEqual([10, 82, 91, 100])
    expect(wrapper.state('message')).toEqual('YOU WIN THE NUMBER IS 100')
    expect(wrapper.state('winning')).toEqual(true)
  })
})
