import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({
  user: { avatar_url, login, name, public_repos, followers, hireable },
}) => {
  return (
    <div className="md:w-1/2 lg:w-1/4 px-2 mb-8">
      <div className="relative flex flex-col items-center justify-center w-full rounded-lg bg-white overflow-hidden shadow-lg p-6 mb-8 min-h-full">
        <div className="flex flex-col flex-grow items-center">
          {hireable && (
            <div className="absolute px-2 bg-green-500 text-white text-xs font-light top-0 right-0 mt-4">
              Hireable
            </div>
          )}
          <img
            className="rounded-full w-24 text-center shadow"
            src={avatar_url}
            alt={login}
          />
          <h3 className="text-center">{name}</h3>
          <Link
            to={`/user/${login}`}
            className="text-sm text-center font-light text-gray-500"
          >
            @{login}
          </Link>
        </div>
        <div className="flex items-center justify-around">
          <div className="p-4">
            <p className="text-sm text-center uppercase font-semibold text-gray-500 tracking-wider">
              Repositories
            </p>
            <h4 className="text-2xl text-center">{public_repos}</h4>
          </div>
          <div className="p-4">
            <p className="text-sm text-center uppercase font-semibold text-gray-500 tracking-wider">
              Followers
            </p>
            <h4 className="text-2xl text-center">{followers}</h4>
          </div>
        </div>
        <div className="mt-6">
          <Link
            to={`/user/${login}`}
            className="bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
