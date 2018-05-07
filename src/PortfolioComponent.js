import React from 'react';

const Portfolio = props => { // add api query for pen rss feeds
  return (
    <div>
      <h2 id="portfolio">Portfolio</h2>
      <div className="row">
        <div className="col-sm-2" id="proj_1">
          <h4>Local Weather</h4>
          <a href="https://codepen.io/theodoretripp/full/XZNZKo/">
            <img
              src="https://codepen.io/theodoretripp/pen/XZNZKo/image/small.png"
              alt="Thumbnail"
              className="img-responsive img-thumbnail"
            />
          </a>
        </div>
        <div className="col-sm-2" id="proj_2">
          <h4>Get Quote</h4>
          <a href="https://codepen.io/theodoretripp/full/mqVRKM/">
            <img
              src="https://codepen.io/theodoretripp/pen/mqVRKM/image/small.png"
              alt="Thumbnail"
              className="img-responsive img-thumbnail"
            />
          </a>
        </div>
        <div className="col-sm-2" id="proj_3">
          <h4>Wikipedia Viewer</h4>
          <a href="https://codepen.io/theodoretripp/full/gXLqOG">
            <img
              src="https://codepen.io/theodoretripp/pen/gXLqOG/image/small.png"
              alt="Thumbnail"
              className="img-responsive img-thumbnail"
            />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2" id="proj_3">
          <h4>Twitch Status</h4>
          <a href="https://codepen.io/theodoretripp/full/xPrRdM">
            <img
              src="https://codepen.io/theodoretripp/pen/xPrRdM/image/small.png"
              alt="Thumbnail"
              className="img-responsive img-thumbnail"
            />
          </a>
        </div>
        <div className="col-sm-2" id="proj_4">
          <h4>Javascript Calculator</h4>
          <a href="https://codepen.io/theodoretripp/full/dZKYOR">
            <img
              src="https://codepen.io/theodoretripp/pen/dZKYOR/image/small.png"
              alt="Thumbnail"
              className="img-responsive img-thumbnail"
            />
          </a>
        </div>
        <div className="col-sm-2" id="proj_4">
          <h4>Pomodoro Timer</h4>
          <a href="https://codepen.io/theodoretripp/full/ppRLXO">
            <img
              src="https://codepen.io/theodoretripp/pen/ppRLXO/image/small.png"
              alt="Thumbnail"
              className="img-responsive img-thumbnail"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;