import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text.length >= 1) {
      githubContext.searchUsers(text);
    }
  };

  const clearForm = e => {
    setText('');
    githubContext.clearUsers();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-input-group md:w-3/4 lg:w-1/2 mx-auto shadow-lg my-8 relative">
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

export default Search;
