import React from 'react';

import ChildCareIcon from '@material-ui/icons/ChildCare';
import SettingsIcon from '@material-ui/icons/Settings';

import './Menu.css';


function Menu(props) {
    return (
      <div className='menu'>
        <div className='menu__nappi'><ChildCareIcon htmlColor='#666'/></div>
        <div className='menu__nappi'><SettingsIcon htmlColor='#666'/></div>
      </div>
    );
}

export default Menu;
  
