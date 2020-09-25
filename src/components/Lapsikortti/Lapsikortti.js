import React from 'react';
import './Lapsikortti.css'
import Button from '../buttons';


function Lapsikortti(props) {

   return (     
      <div className='lapsikortti'>                 
          <Button className='lapsikortti__nappi' >
            <div className='lapsikortti__nimi'>{props.data.nimi}</div>
          </Button> 
      </div>        
  );    
}


export default Lapsikortti;