import React from 'react';
import './Lapsikortti.css'
import LapsiButton from '../buttons';


function Lapsikortti(props) {

   return (    
      <div className='lapsikortti'>  
         <div className='lapsikortti__nappi'>
        <LapsiButton secondary >
         <div className='lapsikortti__nimi'>
          {props.data.nimi}
          </div>
        </LapsiButton> 
        </div>
         </div>   
  );    
}

export default Lapsikortti;