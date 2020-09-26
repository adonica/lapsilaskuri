import React from 'react';
import './Content.css'

function Content(props) {
    return (
      <div className='content'>
        {props.children}  {/*kaikki mitä Contentin sisällä on sisältyy tähän*/}
      </div>
    );
}

export default Content ;