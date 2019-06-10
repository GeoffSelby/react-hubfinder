import React, { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import ProfileHead from './ProfileHead';
import RepoList from '../repos/RepoList';
import { isObjectEmpty } from '../../helpers';
import GithubContext from '../../context/github/githubContext';

const Profile = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, loading, getUser, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  if (!isObjectEmpty(user)) {
    return (
      <div className="flex flex-col flex-1">
        <ProfileHead />
        <div className="bg-white w-full flex-1">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-lg text-gray-900 tracking-wide pt-4">
              Recent Repositories
            </h1>
            <hr className="border-b border-gray-300 mb-6" />
            <RepoList />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Profile;
