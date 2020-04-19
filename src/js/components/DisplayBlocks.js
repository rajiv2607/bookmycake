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
            <label>{this.props.obj.name}</label>
            <img className='display_image' src={this.props.obj.src} alt=""/>
            <div>
            <button className='button' onClick={this.handleDecrement.bind(this)}>-</button>
            <label>{this.props.obj.qty}</label>
            <button className='button' onClick={this.handleIncrement.bind(this)}>+</button>
            </div>
            </div>
        )
    }
    
}