import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import AboutCtf from './pages/AboutCtf/AboutCtf';
import DDosInfoPage from './pages/DDosInfoPage';
import SettingUpKaliLinuxPage from './pages/SettingUpKaliLinuxPage';

function App() {
  return (
    <Router basename="/">
      <NavigationBar/>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/post/2' component={DDosInfoPage} exact/>
        <Route path='/post/3' component={AboutCtf} exact/>
        <Route path='/post/5' component={SettingUpKaliLinuxPage} exact/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
