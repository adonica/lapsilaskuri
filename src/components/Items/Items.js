import React from 'react';
import './Items.css';
import Content from '../Content/Content';
import Lapsikortti from '../Lapsikortti/Lapsikortti';  

function Items(props) {  
  
  function changeStatus(child) {
    child.status=child.status ? 0 : 1;
    props.changeStatus(child);
  }
  let kids = props.data.map(child => {
    return (
      <Lapsikortti data={child} key={child.id} changeStatus={() => {changeStatus(child)}}/>
    );
  }
  );

  return (
    <div className='items'>         
      <Content>  
        <div className= 'content__childlist'>
          {kids}
        </div> 
      </Content>        
    </div>     
  );  
}

export default Items;