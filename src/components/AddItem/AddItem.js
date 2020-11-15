import React from 'react';

import Content from '../Content/Content';
import ItemForm from '../ItemForm/ItemForm';
import './AddItem.css';

function AddItem(props) {
  return (
    <Content>
      <div className='additem'>
        <h2>Lisää uusi lapsi</h2> 
         <div className='additem__lisaa'>
           <ItemForm onFormSubmit={props.onFormSubmit}/>  
         </div>
       </div>
    </Content>
  );
}

export default AddItem;