import React from 'react'
import {Link} from 'react-router-dom'
import './LinkCompo.css'

function LinkCompo() {
  return (
    <div className='navbar-comp'>
      <Link to='/'>Home</Link>
      <Link to='/students'>Students</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default LinkCompo
