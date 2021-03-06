import React from 'react'
import '../resources/displayblock.scss'

export default class  DisplayBlock extends React.Component {

    handleIncrement(e) {
      console.log("increment")
      this.props.inc(this.props.obj)
    }

    handleDecrement(e) {
        console.log("Decrement")
        this.props.dec(this.props.obj)
    }
    
    render() {

        return(
            <div className='item-block'>
            <label className='cake-name'>{this.props.obj.name}</label>
            <img className='display_image' src={this.props.obj.src} alt=""/>
            <div>
            <button className='add-to-cart' onClick={this.handleIncrement.bind(this)}>Add to Cart</button>
            <label className='display_price'>Price: {this.props.obj.price}₹</label>
            </div>
            </div>
        )
    }
    
}