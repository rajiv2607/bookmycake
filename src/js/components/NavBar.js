import React from 'react'
import '../resources/nav.scss' 

export default function NavBar() {
    return (
        <>
            <div className="topnav">
                <>
                <lable className="active" >Home</lable>
                <lable >Brthday</lable>
                <lable >Aniversery</lable>
                <lable >About</lable>
                </>
                <lable className='cart' href="#about">Cart</lable>
            </div>
        </>
    )

}