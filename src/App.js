import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home'
import Alerts from './components/layouts/Alerts';
import About from './components/pages/About';
import User from './components/Users/User';
import NotFound from './components/pages/NotFound';

import GithubState from './Context/github/GithubState';
import AlertState from './Context/alert/AlertState';

const App = ()=> {
  
    
    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <Navbar />
              <div className="container">
                <Alerts />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/user/:login" element={<User />} />
                  <Route exact path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;
