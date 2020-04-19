import React from 'react'
import '../resources/cart.scss'

export default class  Cart extends React.Component {

 render(){
        return(
            <>
<div className=''>
<label>{this.props.obj.name}     X     {this.props.obj.quantity} </label>
</div>
<div>
<label>---------------------------------------------------</label>
</div>
</>
)
}
}