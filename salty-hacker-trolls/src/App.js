import React from "react";
import Login from './components/login.js';
import NewUser from './components/newUser.js'
import PrivateRoute from './utils/privateRoute.js';
import SaltyUsers from './components/saltyData.js';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './styles-custom.css';
import './styles.css';

function App() {

  return (
    <>
    <Router>
      <div className='App'>
       
        <div>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
          <PrivateRoute exact path='/protected' component={SaltyUsers} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/public' component={NewUser} />
        </div> 
      </div>
    </Router>
    </>
  );
}

export default App;
