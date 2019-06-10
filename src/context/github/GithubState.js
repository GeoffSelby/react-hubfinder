import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  CLEAR_LOADING,
  GET_USER,
  GET_REPOS,
  CLEAR_REPOS,
  SET_SEARCH,
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const initialState = {
    searchTerm: '',
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Set search term
  const setSearch = text => {
    dispatch({
      type: SET_SEARCH,
      payload: text,
    });
  };

  // Search GitHub Users
  const searchUsers = async text => {
    clearUsers();
    setLoading();

    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
      );

      if (res.data.items.length >= 1) {
        res.data.items.map(async userInfo => {
          const fullUser = await axios.get(
            `https://api.github.com/users/${
              userInfo.login
            }?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
          );
          dispatch({
            type: SEARCH_USERS,
            payload: fullUser.data,
          });
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
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Get user repos
  const getUserRepos = async username => {
    clearRepos();
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=updated&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    if (res.data.length >= 1) {
      res.data.map(async repo => {
        const fullRepo = await axios.get(
          `https://api.github.com/repos/${repo.owner.login}/${
            repo.name
          }?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
        );

        dispatch({
          type: GET_REPOS,
          payload: fullRepo.data,
        });
      });

      clearLoading();
    }
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Clear Repos
  const clearRepos = () => dispatch({ type: CLEAR_REPOS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Clear Loading
  const clearLoading = () => dispatch({ type: CLEAR_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchTerm: state.searchTerm,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        setSearch,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
