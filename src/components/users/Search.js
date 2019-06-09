import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers }) => {
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text.length >= 1) {
      searchUsers(text);
    }
  };

  const clearForm = e => {
    setText('');
    clearUsers();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-input-group w-1/2 mx-auto shadow-lg my-8 relative">
        <input
          type="text"
          name="text"
          value={text}
          className="form-input form-input-group-left w-full border-0 focus:shadow-none"
          placeholder="Search for GitHub users..."
          onChange={onChange}
        />
        {text.length >= 1 && (
          <div className="form-input-group-right">
            <button
              type="button"
              className="bg-white text-gray-600 focus:outline-none"
              onClick={clearForm}
            >
              x
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
};

export default Search;
