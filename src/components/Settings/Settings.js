import React from 'react';

import { Link } from 'react-router-dom';
import './Settings.css';
import Content from '../Content/Content';
import { Button, FloatingButton }from '../buttons';


function Settings(props) {
  return (
    <Content>
      <div className='settings'>
        <h2>Profiili</h2>
        <div className='settings__profile'>
          <div className='settings__userdata'>
            <div><img src={props.user.photoURL} alt=''/>  </div>
            <div>{props.user.displayName}<br/>{props.user.email}</div>
          </div>
        </div>
          <div className='settings__profilenappi'>
            <Button onClick={props.onLogout}>KIRJAUDU ULOS</Button>
          </div>
        <hr className='divider' ></hr>
        <div className='settings__asetukset'>
          <h2>Asetukset</h2>
            <div className='settings__button'>
              <Link to ='add'><FloatingButton primary >Lisää uusi lapsi</FloatingButton></Link>
            </div>
        </div>
      </div>
    </Content>
    );
}

export default Settings;