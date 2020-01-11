import React from "react";
import Login from './components/Login.js';
import NewUser from './components/newUser.js'
import PrivateRoute from './utils/privateRoute.js';
import SaltyUsers from './components/saltyData.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './styles-custom.css';
import './styles.css';
import styled from 'styled-components';
// import Jumbotron from 'react-bootstrap/Jumbotron';



function App() {

  // const styledHeader = styled.div`
  //   width: 100%;
  //   color: black;
  //   height: 10%;

  // `
  
  return (
    <>
    <Router>
      <div className='App'>
        {/* <div>
          <Jumbotron>
              <h1>Saltiest Hackers</h1>
          </Jumbotron>
        </div> */}
       
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
