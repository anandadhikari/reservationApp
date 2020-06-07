import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import ReservationList from './components/ReservationList';
import Landing from './components/LandingPage'


import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        
      <BrowserRouter>
      
        <div className="App">
          <AppNavbar />

         
        </div>
        <Switch>
        <Route path="/" exact component={Landing} />
          <Route path ="/reservationList" component={ReservationList}/>
               <Redirect from="*" to="/" />
            </Switch>
         </BrowserRouter>
      </Provider>
   
    );
  }
}

export default App;
