import React from 'react'

import './GuessNums.css'

export default function GuessNums ({ guessNums }) {
  return(
    <div className="guess-nums">
      <ul>
        {guessNums.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  )
}
