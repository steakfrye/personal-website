import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <p>
          <h4></h4>
        </p>
        <p>
          <h4>My Stack</h4>
          <ul>
            <li>Front-end: React</li>
            <li>Back-end: Node</li>
            <li>Database: MongoDB</li>
            <li>Software: Ruby</li>
          </ul>
        </p>
        <p className='bio'>
          <h4>When I'm not coding--</h4>
          I'm probably spending time with my wife and son (with another on the
          way!).
          <br/>I do a lot of cooking, even making my own butter and nursing
          my sourdough starter. I love learning new things in the kitchen and
          how to best create each dish.
          <br/>And when I'm not doing any of that, these days I'm playing video games.
          Nintendo has brought me joy recently with those Classic consoles.
        </p>
      </div>
    );
  }
}

export default About;
