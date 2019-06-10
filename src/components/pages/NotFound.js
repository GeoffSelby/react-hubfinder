import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto mt-16 px-4 flex flex-col items-center h-full">
      <h1 className="text-3xl md:text-5xl text-gray-600">Page not found.</h1>
      <p className="text-gray-600 text-center">
        The page you are looking for does not exist.{' '}
      </p>
      <p className="text-gray-600 text-center">
        <Link to="/" className="underline font-medium hover:text-gray-700">
          Go home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
