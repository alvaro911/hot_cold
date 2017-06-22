import React from 'react'

import './HotCold.css'

export default function HotCold({ message }) {
  return(
    <div className="hot-cold">
      <h1>{message}</h1>
    </div>
  )
}
