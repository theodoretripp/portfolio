import React from 'react';

const About = props => {
  return (
    <div id="about">
      <h2>About</h2>
      <p>
        My portfolio is made with create-react-app. I used Cloud9 as my dev environment and deploy to Heroku.
      </p>
      <strong>Todo List</strong>
      <ul>
        <li>Fix social buttons</li>
        <li>Add Navbar expansion and pushes down content</li>
        <li>Make portfolio grid a loop instead of hard coding it.</li>
        <li>Deploy to Heroku free</li>
      </ul>

    </div>
  );
};

export default About;