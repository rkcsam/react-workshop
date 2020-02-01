import React, {Component} from 'react';
import {products} from './mockData/products';

class App extends Component {
  state = {
    productCounter: {}
  }

// incrementCounter = () => {
//   const oldCounter = this.state.counter;
//   this.setState({
//     counter: oldCounter + 1
//   });
//
// decrementCounter = () => {
//   const oldCounter = this.state.counter;
//   this.setState({
//     counter: oldCounter - 1
//   });
// }

incrementCounter = (productName) => () => {
  const oldProductCounter = this.state.productCounter;
  const oldCount = oldProductCounter[productName] || 0;
  this.setState({
    productCounter: {
      ...oldProductCounter,
      [productName]: oldCount + 1
    }
  });
}

decrementCounter = (productName) => () => {
  const oldProductCounter = this.state.productCounter;
  const oldCount = oldProductCounter[productName] || 0;
  this.setState({
    productCounter: {
      ...oldProductCounter,
      [productName]: oldCount - 1
    }
  });
}
  render() {
    // return <div className="counter">
    //   <button className="counter-btn" onClick={this.decrementCounter}>-</button>
    //   <div className="counter-text">{this.state.counter}</div>
    //   <button className="counter-btn" onClick={this.incrementCounter}>+</button>
    // </div>

    return <div className="product-grid">
    {
      products.map((product) => {
        return(
          <div className="product-wrapper" key={product.name}>
            <div className='product'>
              <img src={product.image} alt="" className="product-image" />
                <div className="counter">
                  <button className="counter-btn" onClick={this.decrementCounter(product.name)}>-</button>
                  <div className="counter-text">{this.state.productCounter[product.name] || 0}</div>
                  <button className="counter-btn" onClick={this.incrementCounter(product.name)}>+</button>
                </div>
            </div>
          </div>
        )
      })
    }
    </div>
  }
}
export default App;
