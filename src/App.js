import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import UserList from './components/users/UserList';
import Profile from './components/users/Profile';

const App = () => {
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState({});
  let [repos, setRepos] = useState([]);
  let [loading, setLoading] = useState(false);

  // Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Search GitHub Users
  const searchUsers = async text => {
    setUsers([]);
    setLoading(true);

    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
      );

      if (res.data.items.length >= 1) {
        res.data.items.map(async userInfo => {
          const fullUser = await axios.get(
            `https://api.github.com/users/${userInfo.login}?client_id=${
              process.env.REACT_APP_GITHUB_CLIENT_ID
            }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
          );
          setUsers(prevUsers => [...prevUsers, fullUser.data]);
        });

        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  // Get single user
  const getUser = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );

    setUser(res.data);
    setLoading(false);
  };

  // Get user repos
  const getUserRepos = async username => {
    setRepos([]);
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=updated&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );

    if (res.data.length >= 1) {
      res.data.map(async repo => {
        const fullRepo = await axios.get(
          `https://api.github.com/repos/${repo.owner.login}/${
            repo.name
          }?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
            process.env.REACT_APP_GITHUB_CLIENT_SECRET
          }`,
        );
        setRepos(prevRepos => [...prevRepos, fullRepo.data]);
      });

      setLoading(false);
    }
  };

  return (
    <Router>
      <div id="app" className="flex flex-col h-full">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Fragment>
                <div className="container mx-auto px-2">
                  <Search searchUsers={searchUsers} clearUsers={clearUsers} />
                  <UserList loading={loading} users={users} />
                </div>
              </Fragment>
            )}
          />
          <Route
            exact
            path="/user/:login"
            render={props => (
              <Profile
                {...props}
                getUser={getUser}
                getUserRepos={getUserRepos}
                user={user}
                repos={repos}
                loading={loading}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
