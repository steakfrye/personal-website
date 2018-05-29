import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <p className='bio'>
          <img className='img-circle' src={require('./files/IMG_2905.jpg')} alt={'dylan-portrait'}/>
          When I'm not coding, I'm probably spending
          time with my wife and son (with another on the way!). I do a lot
          of cooking, even making my own butter and nursing my sourdough starter.
          I pride myself in my culinary abilities, and I like to educate myself in
          an array of crafts and keep my skills sharp.
        </p>
      </div>
    );
  }
}

export default About;
