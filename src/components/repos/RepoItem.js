import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const RepoItem = ({ repo }) => {
  return (
    <Fragment>
      <div className="repo-item flex flex-col px-3">
        <h3 className="font-medium tracking-loose text-gray-700 text-xl">
          <a
            className="hover:text-gray-800 hover:underline"
            href={repo.html_url}
          >
            {repo.name}
          </a>
        </h3>
        {repo.fork && (
          <p className="mb-1 text-xs text-gray-600">
            Forked from{' '}
            <a
              className="text-gray-700 font-medium hover:underline"
              href={repo.parent.html_url}
            >
              {repo.parent.full_name}
            </a>
          </p>
        )}
        <p className="flex-1 text-sm text-gray-600 font-light mb-3">
          {repo.description ? repo.description : 'No description'}
          {/* {repo.description} */}
        </p>
        <ul className="flex flex-wrap">
          {repo.language && (
            <li className="mr-3 md:mr-6 mt-2 md:mt-0 text-gray-600 text-xs">
              <svg
                className="inline-block w-4 h-4 fill-current text-gray-500 mr-1 -mt-1"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>code</title>
                <defs />
                <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g id="code">
                    <path
                      d="M0.707106781,10.7071068 L-2.00988464e-13,10 L5.48528137,4.51471863 L6.89949494,5.92893219 L2.82842712,10 L6.89949494,14.0710678 L5.48528137,15.4852814 L0.707106781,10.7071068 Z M19.2928932,10.7071068 L20,10 L14.5147186,4.51471863 L13.1005051,5.92893219 L17.1715729,10 L13.1005051,14.0710678 L14.5147186,15.4852814 L19.2928932,10.7071068 Z"
                      id="Combined-Shape"
                    />
                  </g>
                </g>
              </svg>
              {repo.language}
            </li>
          )}
          {repo.stargazers_count >= 1 && (
            <li className="mr-3 md:mr-6 mt-2 md:mt-0 text-gray-600 text-xs">
              <svg
                className="inline-block w-4 h-4 fill-current text-gray-500 mr-1 -mt-1"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>stargazers</title>
                <defs />
                <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g id="star-full">
                    <polygon
                      id="Star-3"
                      points="10 15 4.12214748 18.0901699 5.24471742 11.545085 0.489434837 6.90983006 7.06107374 5.95491503 10 0 12.9389263 5.95491503 19.5105652 6.90983006 14.7552826 11.545085 15.8778525 18.0901699"
                    />
                  </g>
                </g>
              </svg>
              {repo.stargazers_count}
            </li>
          )}
          {repo.forks_count >= 1 && (
            <li className="mr-3 md:mr-6 mt-2 md:mt-0 text-gray-600 text-xs">
              <svg
                className="inline-block w-3 stroke-current fill-current text-gray-500 mr-1 -mt-1"
                viewBox="0 0 9 13"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>forks</title>
                <g id="Symbols" strokeWidth="1" fillRule="evenodd">
                  <g id="icon/fork" transform="translate(1.000000, 1.000000)">
                    <g id="Group">
                      <circle
                        id="Oval"
                        strokeWidth="0.8"
                        fill="none"
                        cx="1.5"
                        cy="1.5"
                        r="1.5"
                      />
                      <circle
                        id="Oval-Copy-2"
                        strokeWidth="0.8"
                        fill="none"
                        cx="3.5"
                        cy="9.5"
                        r="1.5"
                      />
                      <circle
                        id="Oval-Copy"
                        strokeWidth="0.8"
                        fill="none"
                        cx="5.5"
                        cy="1.5"
                        r="1.5"
                      />
                      <path
                        d="M1,3.42544096 L1.83391896,3 C2.59436285,4.40211877 3.22221089,5.08613175 3.55595808,5.08613175 C4.02126785,5.08613175 5.05774804,3.70580642 5.05774804,3.21272048 L6,3.21272048 C6,4.15931015 4.61783411,6 3.55595808,6 C2.72286814,6 1.92471712,5.13044938 1,3.42544096 Z"
                        id="Path-2"
                        fillRule="nonzero"
                      />
                      <polygon
                        id="Path-3"
                        fillRule="nonzero"
                        points="3 5 4 5 4 8 3 8"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              {repo.forks_count}
            </li>
          )}
          {repo.license && (
            <li className="mr-3 md:mr-6 mt-2 md:mt-0 text-gray-600 text-xs">
              <svg
                className="inline-block w-4 h-4 fill-current text-gray-500 mr-1 -mt-1"
                viewBox="0 0 14 16"
                version="1.1"
                width="14"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"
                />
              </svg>
              {repo.license.spdx_id}
            </li>
          )}
          <li className="mr-3 md:mr-6 mt-2 md:mt-0 text-gray-600 text-xs">
            Updated <Moment fromNow>{repo.updated_at}</Moment>
          </li>
        </ul>
      </div>
      <hr className="border-b border-gray-300 my-6" />
    </Fragment>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
