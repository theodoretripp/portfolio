import React from 'react';

const Social = props => {
  return (
    <div id="links">
      <h2>Social</h2>
      <button type="button" className="btn btn-default btn-circle">
        <a href="https://www.linkedin.com/in/theodoretripp">
          <i className="fa fa-linkedin" />
        </a>
      </button>
      <button type="button" className="btn btn-default btn-circle">
        <a href="https://github.com/theodoretripp">
          <i className="fa fa-github" />
        </a>
      </button>
      <button type="button" className="btn btn-default btn-circle">
        <a href="https://twitter.com/TJTripp3">
          <i className="fa fa-twitter" />
        </a>
      </button>
    </div>
  );
};

export default Social;