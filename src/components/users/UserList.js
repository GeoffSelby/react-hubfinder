import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/githubContext';

const UserList = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  }

  if (!loading && users.length >= 1) {
    return (
      <div className="flex flex-wrap -mx-2">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full py-12">
      <h2 className="text-5xl text-center">Search for someone</h2>
    </div>
  );
};

export default UserList;
