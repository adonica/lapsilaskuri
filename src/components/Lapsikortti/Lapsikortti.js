import React from 'react';

import ArrowRight from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';

import './Lapsikortti.css'
import Button from '../buttons';


function Lapsikortti(props) {

   return (     
      <div className='lapsikortti'> 
        <div className='lapsikortti__ryhma'>             
          <Button className='lapsikortti__nappi' >
            {props.data.nimi}
          </Button> 
        </div>    
       
        <div className='lapsikortti__linkki'>
          <Link to={'/edit/' + props.data.id}><ArrowRight /></Link>   
        </div>
      </div> 
      
        
            
  );    
}


export default Lapsikortti;