import React, { Component }  from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import testdata from './testdata';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Menu from './components/Menu/Menu';
import Settings from './components/Settings/Settings';
import AddItem from './components/AddItem/AddItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: testdata
   }
   this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleFormSubmit(newdata) {
    let storeddata = this.state.data.slice();
    storeddata.push(newdata);
    storeddata.sort((a,b) => {
      const aNimi = a.nimi;
      const bNimi = b.nimi;

      if (aNimi > bNimi) {      
      return 1 
      } else {
        return -1
      }     

     });
    this.setState({
      data: storeddata
    });
  }

  render() {   
  
    return (
      <Router>  {/*reitittää sovelluksen sisällä tietoja */}
        <div className='App'>
          <Header />
          <Route path='/' exact render={() => <Items data={this.state.data} onColorChange={this.state.color} /> } /> 
          <Route path='/settings' component={Settings} /> 
          <Route path='/add' render={() => <AddItem onFormSubmit={this.handleFormSubmit}/>} />
          <Menu />  
        </div>
      </Router> 
    );
  }
}

export default App;
