import React from 'react';
import './Items.css';
import Content from '../Content/Content';
import Lapsikortti from '../Lapsikortti/Lapsikortti';  

function Items(props) {

  let kids = props.data.map(child => {
    return (
      <Lapsikortti data={child} key={child.id}/>
    );
  }
 );
  return (
    <div className='items'>
     <Content> 
       {kids}
     </Content>        
    </div>
  );  
}

export default Items;