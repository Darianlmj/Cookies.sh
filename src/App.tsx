import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <Router basename="/">
      <NavigationBar/>
      <Switch>
        <Route path='/' component={HomePage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
