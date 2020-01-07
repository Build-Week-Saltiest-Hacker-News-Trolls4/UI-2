import React from "react";
import Login from './components/Login.js';
import NewUser from './components/newUser.js'
import PrivateRoute from './utils/privateRoute.js';
import SaltyUsers from './components/saltyData.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import styled from 'styled-components';



function App() {
  const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 90%;
  margin: 0 auto;
  `

  const NavTittle = styled.div`
    margin: 0 auto;
    width: 90%;
    text-align: center;
  `
  
  const NavLinks = styled.div`
    margin: auto;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `
  const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin: 1%;
    
  `
  
  return (
    <>
    {/* <div><Login /></div> */}
    
    <Router>
      <div className='App'>
        <Nav>
          <NavTittle>
            
            <NavLinks>
              <StyledLink to="/login">Login</StyledLink><br />
              <StyledLink to='/public'>New User</StyledLink>
            </NavLinks>
          <h1>Saltiest Hackers</h1>  
          </NavTittle>
          
        </Nav>
         
        
       
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
