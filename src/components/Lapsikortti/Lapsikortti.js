import React from 'react';

import { withRouter } from "react-router";

import ArrowRight from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';

import './Lapsikortti.css'
import Button from '../buttons';

const grey = '#E5E8E8';
const green = '#0ebe0e';

class Lapsikortti extends React.Component {  
    constructor(props) {
      super(props);

    this.state = {
      color: grey
    };
    
    this.changeColor = this.changeColor.bind(this);
    }    

    changeColor() {      
      const newColor = this.state.color === grey ? green : grey;
      this.setState({
        color: newColor
      });
    }

 render() {       

   return (        
    
      <div className='lapsikortti' style={{backgroundColor: this.state.color}}> 
        <div>                                         
        <Button 
           onClick={this.changeColor}
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
export default withRouter(Lapsikortti);