import React from 'react';
import Login from './components/Login';
import FriendsList from './components/FrinedsList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/login">Login</Link>
      <Link  to="/protected">FriendsList</Link>
      <Route path="/login" component={Login} />
      {/* <PrivateRoute exact path='/protected' component={FriendsList} /> */}
    </div>
    </Router>
  );
}

export default App;
