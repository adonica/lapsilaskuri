import React from 'react';
import './Lapsikortti.css';


function Lapsikortti(props) {
  return (
    <div className='lapsikortti__rivi'>
      <div className='lapsikortti'>              
        <div className='lapsikortti__nimi'>
          Aleksi
          </div>  
      </div>
      <div className='lapsikortti'>      
        <div className='lapsikortti__nimi'>Aleksi</div>                      
      </div> 
    </div>
  );    
}

export default Lapsikortti;