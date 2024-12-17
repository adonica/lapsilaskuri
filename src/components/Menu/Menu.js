import React from 'react';
import {Link} from 'react-router-dom';

import ChildCareIcon from '@mui/icons-material/ChildCare';
import SettingsIcon from '@mui/icons-material/Settings';

import './Menu.css';


function Menu(props) {
    return (
      <div className='menu'>
        <Link to='/'><div className='menu__nappi'><ChildCareIcon htmlColor='#666'/></div></Link>        {/*linkki johtaa juureen eli etusivulle*/}
        <Link to='settings'><div className='menu__nappi'><SettingsIcon htmlColor='#666'/></div></Link>  {/*linkki johtaa asetukset- sivulle*/}
      </div>
    );
}

export default Menu;

