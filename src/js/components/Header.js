import React from 'react'
import '../resources/header.scss'

export default function Header () {
    
    return(
        <div className='header'>
        <label className='header-label name'> Book my Cake</label>
        <label class="switch"/>
        <input type="checkbox" checked/>
        <span class="slider round"></span>
        <input className='searchbox' placeholder='Search your Cake'></input>
        <button className='searchbutton' type='submit'>Search</button>
        </div>
    );
}