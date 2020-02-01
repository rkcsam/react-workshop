import React, {Component} from 'react'
import Counter from "./Counter";

class Product extends Component{
    render() {
        return(
            <div className="product-wrapper" key={this.props.product.name}>
            <div className='product'>
              <img src={this.props.product.image} alt="" className="product-image" />
              {this.props.product.name}
               <Counter
                count = { this.props.count }
                decrementCounter = { () => this.props.decrementCounter(this.props.product.name) }
                incrementCounter = { () => this.props.incrementCounter(this.props.product.name) }
                />
            </div>
          </div>
        )}
}

export default Product;