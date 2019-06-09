import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import ProfileHead from './ProfileHead';
import RepoList from '../repos/RepoList';

const Profile = ({ loading, user, repos, match, getUser, getUserRepos }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="flex flex-col flex-1">
      <ProfileHead user={user} />
      <div className="bg-white w-full flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-lg text-gray-900 tracking-wide pt-4">
            Recent Repositories
          </h1>
          <hr className="border-b border-gray-300 mb-6" />
          <RepoList repos={repos} />
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

export default Profile;
