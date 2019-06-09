import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  CLEAR_LOADING,
  GET_USER,
  GET_REPOS,
  CLEAR_REPOS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: [...state.users, action.payload],
        user: {},
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: [...state.repos, action.payload],
      };
    case CLEAR_REPOS:
      return {
        ...state,
        repos: [],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
