import React, {Component} from 'react'

import './HotCold.css'

export default class HotCold extends Component{
  render(){
    return(
      <div className="hot-cold">
        <h1>{this.props.message}</h1>
      </div>
    )
  }
}
