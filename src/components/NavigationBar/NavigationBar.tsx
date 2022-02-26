import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const NavigationBar = () => {
  return (
    <div id='NavBar'>
        <div id='Menu'>
            Topics
        </div>
        <Link to={'/'} style={{ textDecoration: 'none', color: '#ffffff' }}>
          <h1>Cookies.sh</h1>
        </Link>
        <div>
            Login
        </div>
    </div>
  )
}

export default NavigationBar