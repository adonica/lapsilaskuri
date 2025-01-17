import React from 'react';
import './Header.css';

function Header(props) {    
    
    return (
      <div className='header'>        
        <h1>Muksumuistio</h1>
        <div className='header__lukema'>
          {props.data ? props.data.filter(child => child.status).length: null}
        </div>
      </div>
  );
}

export default Header;