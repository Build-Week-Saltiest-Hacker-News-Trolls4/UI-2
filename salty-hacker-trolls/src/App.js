import React from "react";
import Login from './components/Login.js';
import NewUser from './components/newUser.js'
import PrivateRoute from './utils/privateRoute.js';
import SaltyUsers from './components/saltyData.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


function App() {
  
  return (
    <>
    {/* <div><Login /></div> */}
    
    <Router>
      <div className='App'>
        <div>
          <Link to="/login">Login</Link><br />
          <Link to='/public'>New User</Link>
        </div> 
        
       
        <div>
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
