import React, {Component} from 'react'

class Counter extends Component {
  render() {
    return(
      <div className="counter">
        <button className="counter-btn" onClick={this.props.decrementCounter}>-</button>
        <div className="counter-text">{this.props.count}</div>
        <button className="counter-btn" onClick={this.props.incrementCounter}>+</button>
      </div>
    )
  }
}

export default Counter;
