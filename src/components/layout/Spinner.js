import React, { Fragment } from 'react';

const Spinner = () => {
  return (
    <Fragment>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
      <p className="text-center">
        <span>Loading...</span>
      </p>
    </Fragment>
  );
};

export default Spinner;
