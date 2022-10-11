import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  const linkStyle = {
    textDecoration : 'none',
    color : 'tomato'
    

  }

  return (
    <div class="header">
      <div>
      <Link to='./' style={linkStyle}>
        JH MARKET
      </Link>
      </div>
      <div></div>
      <div>
      <Link to='./join'>회원가입</Link>
      </div>
    </div>
  )
}

export default Header