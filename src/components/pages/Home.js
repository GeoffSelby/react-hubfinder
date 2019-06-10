import React, { Fragment } from 'react';
import Search from '../users/Search';
import UserList from '../users/UserList';

const Home = () => {
  return (
    <Fragment>
      <div className="container mx-auto px-4">
        <Search />
        <UserList />
      </div>
    </Fragment>
  );
};

export default Home;
