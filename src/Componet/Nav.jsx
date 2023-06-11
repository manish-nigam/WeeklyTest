import React from 'react'
 
import './Nav.css'
const Nav = () => {
  return (
    <div className='container'>
      <div id='title'>
        <h2>React Component</h2>
      </div>
     <div id='menu'>
       <a href="">Home</a>
       <a href="">Products</a>
       <a href="">Services</a>
       <a href="">Contact</a>
      </div>
    </div>
  )
}

export default Nav
