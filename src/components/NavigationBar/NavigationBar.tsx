import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../assets/BackButton.svg';

import './index.css';

const NavigationBar = () => {
  return (
    <div id='NavBar'>
      <Link to={'/'} style={{ textDecoration: 'underline', color: '#ffffff' }}>
        Home
      </Link>
      <Link to={'/'} style={{ textDecoration: 'none', color: '#ffffff', flex: 2, textAlign: 'center' }}>
        <h1>Cookies.sh</h1>
      </Link>
    </div>
  )
}

export default NavigationBar