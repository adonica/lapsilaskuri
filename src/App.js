import React, { Component }  from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import testdata from './testdata';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Menu from './components/Menu/Menu';
import Settings from './components/Settings/Settings';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: testdata
    }
  }

  render() {
    return (
      <Router>  {/*reitittää sovelluksen sisällä tietoja */}
        <div className='App'>
          <Header />
          <Route path='/' exact render={() => <Items data={this.state.data} /> } />  {/*reittipolku etusivulle tuo Itemsin tiedot*/}
          <Route path='/settings' component={Settings} /> 
          <Menu />  
        </div>
      </Router> 
    );
  }
}

export default App;
