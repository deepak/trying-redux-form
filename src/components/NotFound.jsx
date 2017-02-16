import React from 'react';
import { Link } from 'react-router';
import { ROOT_PATH } from '../routes/urls';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-message">
        <h4>404</h4>
        You are looking for a page that doesn't actually exists!!
        <br/>
        <Link
          to={ROOT_PATH}
          className="not-found-message-btn">
          Friend, Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
