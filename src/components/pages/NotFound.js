import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto px-2 flex flex-col justify-center items-center h-full">
      <h1 className="text-5xl text-gray-600">Page not found.</h1>
      <p className="text-gray-600">
        The page you are looking for does not exist.{' '}
        <Link to="/" className="underline hover:text-gray-700">
          Go home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
