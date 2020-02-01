import React, {Component} from 'react';
import {products} from './mockData/products';
import Product from './components/Product';

class App extends Component {
  state = {
    productCounter: {}
  }

incrementCounter = (productName) => {
  const oldProductCounter = this.state.productCounter;
  const oldCount = oldProductCounter[productName] || 0;
  this.setState({
    productCounter: {
      ...oldProductCounter,
      [productName]: oldCount + 1
    }
  });
}

decrementCounter = (productName) => {
  console.log(productName);
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

    return <div className="product-grid">
    {
      products.map((product) => {
        return(
          <Product
           product = {product}
           incrementCounter = {() => {this.incrementCounter(product.name)}}
           decrementCounter = {() => {this.decrementCounter(product.name)}}
           count = { this.state.productCounter[product.name] || 0 }
          />
        )
      })
    }
    </div>
  }
}
export default App;
