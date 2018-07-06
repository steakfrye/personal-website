import React, { Component } from 'react';
import Icon from './Icon';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <p className='bio'>
          When I'm not coding, I'm probably spending
          time with my wife and son (with another on the way!). I do a lot
          of cooking, even making my own butter and nursing my sourdough starter.
          I pride myself in my culinary abilities, and I like to educate myself in
          an array of crafts and keep my skills sharp.
          <Icon />
        </p>
      </div>
    );
  }
}

export default About;
