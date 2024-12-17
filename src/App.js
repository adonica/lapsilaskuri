import React, { Component }  from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { auth, provider, db } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Menu from './components/Menu/Menu';
import Settings from './components/Settings/Settings';
import AddItem from './components/AddItem/AddItem';
import EditItem from './components/EditItem/EditItem';
import Content from './components/Content/Content';
import Button from './components/buttons';
import { collection, query, orderBy, onSnapshot, doc, setDoc, deleteDoc } from 'firebase/firestore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user: null,
      error: null
   }

    // Firestore reference is initialized to empty
    this.refData = null;

    // Binding functions
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });

        // Set a reference to the Firestore collection
        this.refData = collection(db, 'users', user.uid, 'data');

        const q = query(this.refData, orderBy('nimi'));
          onSnapshot(q, (querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });
          this.setState({ data });
        });
      }
    });
  }

  async handleFormSubmit(newdata) {
    try {
      const docRef = doc(this.refData, newdata.id);
      await setDoc(docRef, newdata);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  async handleDeleteItem(id) {
    try {
      const docRef = doc(this.refData, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  }

  async changeStatus(newdata) {
    await this.handleFormSubmit(newdata);
  }

  async login() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      this.setState({ user, error: null });
    } catch (error) {
      this.setState({ error: error.message });
      this.refData = null;
    }
  }

  async logout() {
    try {
      await signOut(auth);
      this.setState({ user: null });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  render() {
    if (!this.state.user) {
      return (
       <Router>
          <div className='App'>
            <Header />
            <Content>
              <div className='app_welcome'>
                <div>Et ole vielä kirjautunut sisälle.</div>
                <div><Button primary onClick={this.login}>Kirjaudu tästä</Button></div>
                <div>{this.state.error?<p>{this.state.error}</p> : null}</div>
              </div>
            </Content>
            <Menu />
          </div>
       </Router>
      );
    }

    return (
      <Router>
        <div className='App'>
          <Header data={this.state.data} />
                                                     {/*Itemsin kautta yritän ohjata tietoa Lapsikortille(joka on tuotu Itemsiin)*/}
          <Route path='/' exact render={() => <Items data={this.state.data} changeStatus={this.changeStatus} /> } />
          <Route path='/settings' render={() => <Settings onLogout={this.logout}
                                                          user={this.state.user} /> } />
          <Route path='/add' render={() => <AddItem onFormSubmit={this.handleFormSubmit}/>} />
          <Route path='/edit/:id' render={(props) => <EditItem data={this.state.data}
                                                               onFormSubmit={this.handleFormSubmit}
                                                               onDeleteItem={this.handleDeleteItem}
                                                               {...props} />} />
          <Menu />
        </div>
      </Router>
    );
  }
}

export default App;
