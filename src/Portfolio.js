import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <div className='box'>
        <ul className='projects'>
          <li className='li-nk'>
            <a href='https://www.github.com/steakfrye/speller' className='link'>
              Spellcheck and Dictionary Loader
              <img className='image' src={require('./files/dictionary.png')}
              alt='Spellcheck and Dictionary Loader' height='300px'/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Portfolio;
