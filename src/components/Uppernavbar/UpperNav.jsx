import React from 'react'
import './UpperNav.css'
import NavDropdown from 'react-bootstrap/NavDropdown';


function UpperNav() {
  return (
    <div className='uppernavContainer'>
      <div></div>
      <div>
      <div className="uppNavLinks">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/offers">Offers</a>
        </div>
      </div>
    </div>
  )
}

export default UpperNav
