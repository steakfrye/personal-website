import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <ul className='nav'>
          <li><Link className='link' to='/'>home</Link></li>
          <li><Link className='link' to='/About'>about</Link></li>
          <li className='dropdown'>
            <Link className='link' id='drop-btn' to='/Contact'>contact</Link>
            <div className='dropdown-content'>
              <li><a href='mailto:dfryed@gmail.com' className='link'>gmail</a></li>
              <li><a href='https://github.com/steakfrye' className='link'>GitHub</a></li>
              <li><a href='file:///./files/Resume.pdf' className='link'>resume</a></li>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
