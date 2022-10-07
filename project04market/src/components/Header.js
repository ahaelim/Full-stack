import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  const linkStyle = {
    textDecoration : 'none',
    color : 'tomato'
  }

  return (
    <div>
      <Link to='./' style={linkStyle}>
        JH MARKET
      </Link>
    </div>
  )
}

export default Header