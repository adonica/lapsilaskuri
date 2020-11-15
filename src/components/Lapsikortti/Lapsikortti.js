import React from 'react';

import ArrowRight from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';

import './Lapsikortti.css'
import Button from '../buttons';

const orange = '#F1C40F';
const green = '#0ebe0e';   

class Lapsikortti extends React.Component { 
    constructor(props) {
      super(props);

    this.state = {
      color: orange       
    };   
 
  this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color === orange ? green : orange;      
    this.setState({
      color: newColor
    });
}  

render() {
   return (        
      
      <div className='lapsikortti' style={{backgroundColor: this.props.data.status?"green":"orange"}} > 
        <div>                                         
        <Button     
           onClick={this.props.changeStatus}             
           className='lapsikortti__nappi'>
           {this.props.data.nimi} 
        </Button>            
        </div>         
        <div className='lapsikortti__linkki'>  
          <Link to={'/edit/' + this.props.data.id}><ArrowRight /></Link>   
        </div>
      </div> 
   );          
  }
} 

export default Lapsikortti;