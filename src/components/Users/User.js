import Spinner from '../layouts/Spinner';
import React, { useEffect, Fragment, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../Context/github/githubContext'

const User = () => {
  const githubContext = useContext(GithubContext)
  const {getUser, getUserRepos, user, repos, loading} = githubContext

  const { login } = useParams();

  useEffect(() => {
    getUser(login);
    getUserRepos(login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    website,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>

      Hireable: {hireable ? (
        <i className="fas fa-check text-success"/>
      ) : (
        <i className="fas fa-times-circle text-danger"/>
      )}

      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} className='round-img' alt="" style={{width:'150px'}}/>
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && <Fragment>
            <h3>Bio</h3>
            <p>{bio}</p>
          </Fragment>}
          <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
          <ul>
            <li>
              {login && <Fragment>
                <strong>Username:</strong> {login}
              </Fragment>}
            </li>
            <li>
              {company && <Fragment>
                <strong>Company:</strong> {company}
              </Fragment>}
            </li>
            <li>
              {website && <Fragment>
                <strong>Website:</strong> {website}
              </Fragment>}
            </li>
          </ul>
        </div>
      </div>

      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-primary">Public Gists: {public_gists}</div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  );
};



export default User;