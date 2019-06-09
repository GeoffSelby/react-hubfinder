import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Profile from './components/users/Profile';
import GithubState from './context/github/GithubState';

const App = () => {
  return (
    <GithubState>
      <Router>
        <div id="app" className="flex flex-col h-full">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:login" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
