import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import AboutCtf from './pages/AboutCtf/AboutCtf';
import DDosInfoPage from './pages/DDosInfoPage';
import MimikatzPage from './pages/MimikatzPage';

import SettingUpKaliLinuxPage from './pages/SettingUpKaliLinuxPage';
import CtfInvestigatingWindowsPage from './pages/CtfInvestigatingWindowsPage';
import SecurityToolsPage from './pages/SecurityToolsPage';
import SecurityConceptsPage from './pages/SecurityConceptsPage';
import ChallengeWriteupsPage from './pages/ChallengeWriteupsPage';
import RemainingAnonymousPage from './pages/RemainingAnonymousPage';

function App() {
  return (
    <Router basename="/">
      <NavigationBar/>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/post/2' component={SecurityConceptsPage} exact/>
        <Route path='/post/3' component={AboutCtf} exact/>
        <Route path='/post/5' component={SecurityToolsPage} exact/>
        <Route path='/post/6' component={ChallengeWriteupsPage} exact/>
        <Route path='/post/setting-up-kali-linux' component={SettingUpKaliLinuxPage} exact/>
        <Route path='/post/ddos-attacks' component={DDosInfoPage} exact/>
        <Route path='/post/investigating-windows' component={CtfInvestigatingWindowsPage} exact/>
        <Route path='/post/mimikatz' component={MimikatzPage} exact/>
        <Route path='/post/remaining-anonymous' component={RemainingAnonymousPage} exact/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
