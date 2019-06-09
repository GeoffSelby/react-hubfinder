import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const UserList = ({ users, loading }) => {
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

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default UserList;
