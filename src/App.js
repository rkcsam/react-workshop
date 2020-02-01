import React, {Component} from 'react';


class App extends Component {
  state = {
    counter: 0
  }

incrementCounter = () => {
  const oldCounter = this.state.counter;
  this.setState({
    counter: oldCounter + 1
  });
}
  render() {
    return <div className="counter">
      <button className="counter-btn">-</button>
      <div className="counter-text">{this.state.counter}</div>
      <button className="counter-btn" onClick={this.incrementCounter}>+</button>
    </div>
  }
}
export default App;
