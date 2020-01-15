import React, { useState } from "react";
import Login from './components/login.js';
import NewUser from './components/newUser.js'
import PrivateRoute from './utils/privateRoute.js';
import SaltyUsers from './components/saltyData.js';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './styles-custom.css';
import './styles.css';
import { UserContext } from './contexts/userContext.js';



function App() {
  const [user, setUser] = useState({})

  const currentUser = localStorage.getItem('token')
  console.log(currentUser);
  


  return (
    <>
    <Router>
      <div className='App'>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <UserContext.Provider value='currentUser'>
          <PrivateRoute exact path='/protected' component={SaltyUsers} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/public' component={NewUser} />
        </UserContext.Provider>
      </div>
    </Router>
    </>
  );
}

export default App;
