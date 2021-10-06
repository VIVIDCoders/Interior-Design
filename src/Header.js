import React from 'react'
import './Header.css'
import {  Link } from '@material-ui/core';
function Header() {
    return (
      <div>
        <div className='header'>
        <li>  
        <Link  style={{variant:"outlined",color:"white",fontSize:24,cursor:"pointer" }}>Home</Link>   
        <Link  style={{variant:"outlined",color:"white",fontSize:24 ,cursor:"pointer" }}>Our works</Link>   
        <Link  style={{variant:"outlined",color:"white",fontSize:24 ,cursor:"pointer" }}>Reviews</Link>   
        
        </li> 
        <hr/>
        </div>
        <header>R & K Interiors</header>

        {/* <span>owned by - KESAV PULIPATI</span> */}
      </div>
            
        
    )
}

export default Header
