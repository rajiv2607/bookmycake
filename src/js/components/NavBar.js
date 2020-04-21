import React from 'react'
import '../resources/nav.scss'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    let val = props.noOfItems
    return (
        <>
            <div className="topnav">
                <>
                <a className="active" >Home</a>
                </>
                <Link className='cart' to="/cart">Cart</Link>
                <label className='cart-count'>{val}</label>
            </div>
        </>
    )

}