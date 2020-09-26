import React from 'react';
import { withRouter } from 'react-router';

import Button from '../buttons';

import './ItemForm.css';

class ItemForm extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          data: {
              nimi: ''
            }
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel= this.handleCancel.bind(this);
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
      console.log('Lähetä lomake');
      this.props.onFormSubmit(this.state.data);
      this.props.history.push('/');

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='itemform'>
          <div className='itemform__row'>
            <div>
              <label for='nimi'>Nimi</label>
              <input type='text' name='nimi' value={this.state.data.nimi} onChange={this.handleInputChange}/> 
            </div> 
          </div>
          
          <div className='itemform__row'>
            <div className='itemform__buttonper'>
              <Button onClick={this.handleCancel}>PERUUTA</Button>
            </div>
            <div className='itemform__buttonlis'>
              <Button type='submit' primary>LISÄÄ</Button> 
            </div>
          </div>
        </div>  
      </form>         
    );
  }
}

export default withRouter(ItemForm);