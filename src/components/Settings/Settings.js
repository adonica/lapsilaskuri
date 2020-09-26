import React from 'react';

import { Link } from 'react-router-dom';
import './Settings.css';
import Content from '../Content/Content';
import { FloatingButton }from '../buttons';

function Settings(props) {
  return (
    <Content>
      <div className='settings'>
        <h2>Asetukset</h2>
          <div className='settings__button'>
            <Link to ='add'><FloatingButton>Lisää uusi lapsi</FloatingButton></Link>
          </div>
      </div>
    </Content>
    );
}

export default Settings;