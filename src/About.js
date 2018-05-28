import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <p className="bio">
          When I'm not coding, I'm probably spending
          time with my wife and son (with another on the way!). I do a lot
          of cooking, even making my own butter and nursing my sourdough starter.
          I pride myself in my culinary abilities, and I like to educate myself in
          an array of crafts and keep my skills sharp.
        </p>
        <img className='img-circle' src={require('./files/IMG_2905.jpg')} alt={'dylan-portrait'}/>
      </div>
    );
  }
}

export default About;
