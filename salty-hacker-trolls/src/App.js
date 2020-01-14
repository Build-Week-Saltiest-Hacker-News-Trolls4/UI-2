import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';
import SignUp from '/components/SignUp/SignUp';
function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path='/signup' component={SignUp} />
     setup users/login<br />
     setup private routes<br />
     setup data .get from axios call<br />
     setup rendering of data<br />
     setup .put for adding favs to user 
    </div>
    </Router>
  );
}

export default App;

