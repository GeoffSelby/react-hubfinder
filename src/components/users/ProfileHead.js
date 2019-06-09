import React, { Fragment, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const ProfileHead = () => {
  const githubContext = useContext(GithubContext);

  const {
    name,
    email,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = githubContext.user;

  return (
    <Fragment>
      <div className="container mx-auto px-2 py-10">
        <div className="flex justify-center mx-auto">
          <div>
            <img
              className="rounded-full w-32 text-center shadow mr-6"
              src={avatar_url}
              alt={login}
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl text-gray-700 leading-tight">
              {name}{' '}
              {hireable && (
                <span className="px-4 py-1 bg-green-500 text-white text-sm font-light rounded shadow">
                  Hireable
                </span>
              )}
            </h1>
            <p className="mb-2">
              <a
                href={html_url}
                className="text-sm text-gray-600 font-light leading-snug hover:underline"
              >
                @{login}
              </a>
            </p>
            {bio && (
              <p className="text-gray-700 text-sm font-light mb-3">{bio}</p>
            )}
            <div className="flex mb-5">
              {location && (
                <span className="text-gray-600 text-xs mr-8 font-light">
                  <svg
                    className="inline-block w-4 h-4 mr-1 text-gray-700 fill-current"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>location</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fillRule="evenodd"
                    >
                      <g id="location">
                        <path
                          d="M10,20 C10,20 17,10.8659932 17,7 C17,3.13400675 13.8659932,0 10,0 C6.13400675,0 3,3.13400675 3,7 C3,10.8659932 10,20 10,20 Z M10,9 C11.1045695,9 12,8.1045695 12,7 C12,5.8954305 11.1045695,5 10,5 C8.8954305,5 8,5.8954305 8,7 C8,8.1045695 8.8954305,9 10,9 Z"
                          id="Combined-Shape"
                        />
                      </g>
                    </g>
                  </svg>
                  {location}
                </span>
              )}
              {blog && (
                <span className="text-gray-600 text-xs mr-8 font-light">
                  <svg
                    className="inline-block w-4 h-4 mr-1 text-gray-700 fill-current"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>link</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fillRule="evenodd"
                    >
                      <g id="link">
                        <path
                          d="M13.9001835,11 C13.9656429,10.6768901 14,10.3424658 14,10 C14,7.24419519 11.7636493,5 9.00497092,5 L4.99502908,5 C2.23382212,5 0,7.23857625 0,10 C0,12.7558048 2.23635069,15 4.99502908,15 L6.10084114,15 C5.5100328,14.4211996 5.02141756,13.7385101 4.66454706,12.9813785 C3.16556053,12.8140816 2,11.5402162 2,10 C2,8.34314575 3.3486445,7 5.00032973,7 L8.99967027,7 C10.6567066,7 12,8.34651712 12,10 C12,10.3506354 11.9395995,10.6872211 11.8287087,11 L13.9001835,11 Z M6.09981648,9 C6.03435714,9.32310994 6,9.65753416 6,10 C6,12.7558048 8.23635069,15 10.9950291,15 L15.0049709,15 C17.7661779,15 20,12.7614237 20,10 C20,7.24419519 17.7636493,5 15.0049709,5 L13.9005653,5 C14.4909917,5.5788138 14.9792888,6.26152143 15.3359225,7.01867392 C16.8346829,7.18618441 18,8.45994465 18,10 C18,11.6568542 16.6513555,13 14.9996703,13 L11.0003297,13 C9.34329338,13 8,11.6534829 8,10 C8,9.64936458 8.06040049,9.31277893 8.17129128,9 L6.09981648,9 L6.09981648,9 Z"
                          id="Combined-Shape"
                        />
                      </g>
                    </g>
                  </svg>
                  <a className="hover:underline" href={blog}>
                    {blog}
                  </a>
                </span>
              )}
              {email && (
                <span className="text-gray-600 text-xs mr-8 font-light">
                  <svg
                    className="inline-block w-4 h-4 mr-1 text-gray-700 fill-current"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>envelope</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fillRule="evenodd"
                    >
                      <g id="envelope">
                        <path
                          d="M14.8780488,10.097561 L20,14 L20,16 L13.627451,11.0980392 L10,14 L6.37254902,11.0980392 L0,16 L0,14 L5.12195122,10.097561 L0,6 L0,4 L10,12 L20,4 L20,6 L14.8780488,10.097561 Z M18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 Z"
                          id="Combined-Shape"
                        />
                      </g>
                    </g>
                  </svg>
                  <a className="hover:underline" href={`mailto:${email}`}>
                    {email}
                  </a>
                </span>
              )}
            </div>
            <div className="flex">
              <span className="text-gray-600 text-sm mr-8 font-semibold tracking-wide">
                Followers{' '}
                <span className="rounded-full py-1 px-2 bg-gray-400 text-gray-600">
                  {followers}
                </span>
              </span>
              <span className="text-gray-600 text-sm mr-8 font-semibold tracking-wide">
                Following{' '}
                <span className="rounded-full py-1 px-2 bg-gray-400 text-gray-600">
                  {following}
                </span>
              </span>
              <span className="text-gray-600 text-sm mr-8 font-semibold tracking-wide">
                Repositories{' '}
                <span className="rounded-full py-1 px-2 bg-gray-400 text-gray-600">
                  {public_repos}
                </span>
              </span>
              <span className="text-gray-600 text-sm mr-8 font-semibold tracking-wide">
                Gists{' '}
                <span className="rounded-full py-1 px-2 bg-gray-400 text-gray-600">
                  {public_gists}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileHead;
