import React from 'react';
import { withRouter } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import Button from '../buttons';

import './ItemForm.css';

class ItemForm extends React.Component {

  constructor(props) {
    super(props);
    const data = props.data ? props.data: {
      nimi: ''
    }
    this.state = {
        data: data
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel= this.handleCancel.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      data: {
          ...this.state.data,
          [name]: value
        }
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.replace('/');
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state.data;
    data.id = data.id ? data.id : uuidv4(); 
    this.props.onFormSubmit(this.state.data);
    this.props.history.push('/');
  }

  handleDeleteItem(event) {
    event.preventDefault();
    this.props.onDeleteItem(this.state.data.id);
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='itemform'>
          <div className='itemform__row'>
            <div>
              <label htmlFor='nimi'>Nimi</label>
              <input type='text' name='nimi' value={this.state.data.nimi} onChange={this.handleInputChange}/> 
            </div> 
          </div>
          
          <div className='itemform__row'>
            <div className='itemform__buttonper'>
              <Button onClick={this.handleCancel}>PERUUTA</Button>
            </div>
            <div className='itemform__buttonlis'>
              <Button type='submit' primary>{this.state.data.id ? "TALLENNA" : "LISÄÄ"} </Button> 
            </div>
          </div>

         {this.props.onDeleteItem ? 
         <div className='itemform__row'>
            <div className='itemform__buttonpoi'>
              <Button onClick={this.handleDeleteItem}>POISTA</Button>
            </div><br></br>            
         </div> : ""}
        </div>         
      </form>         
    );
  }
}

export default withRouter(ItemForm);