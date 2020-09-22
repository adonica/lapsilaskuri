import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Lapsikortti from './components/Lapsikortti/Lapsikortti';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Content> 
          <Lapsikortti />
          <Lapsikortti />        
          <Lapsikortti />
          <Lapsikortti />
          <Lapsikortti /> 
          <Lapsikortti />
          <Lapsikortti />        
          <Lapsikortti />
          <Lapsikortti />
          <Lapsikortti /> 
        </Content>          
        <Menu />        
      </div>
    );
  }
}

export default App;
