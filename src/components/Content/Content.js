import React from 'react';
import './Content.css'

function Content(props) {
    return (
      <div className='content'>
        {props.children}  {/*kaikki mitä App.js:n Contentin sisällä on sisältyy tähän*/}
      </div>
    );
}

export default Content;