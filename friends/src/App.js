import React from 'react';
import Login from './components/Login';
import FriendsList from './components/FrinedsList';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import  PrivateRoute  from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <h1>Test</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
        <Link  to="/protected">FriendsList</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path='/protected' component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
