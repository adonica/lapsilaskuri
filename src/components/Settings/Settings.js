import React from 'react';
import './Settings.css';
import Content from '../Content/Content';
import { FloatingButton }from '../buttons';

function Settings(props) {
  return (
    <Content>
      <div className='settings'>
        <h1>Asetukset</h1>
          <div className='settings__button'>
            <FloatingButton>Lisää uusi lapsi</FloatingButton>
          </div>
      </div>
    </Content>
    );
}

export default Settings;