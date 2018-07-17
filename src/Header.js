import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <ul className='nav'>
          <li className='li-nk'><Link className='link' to='/'>home</Link></li>
          <li className='li-nk'><Link className='link' to='/About'>about</Link></li>
          <li className='li-nk'><Link className='link' to='/Portfolio'>portfolio</Link></li>
          <li className='dropdown'>
            <Link className='link' to='#'>reach out</Link>
            <ul className='nav1'>
              <div className='dropdown-content'>
                <li><a href='mailto:dfryed@gmail.com' className='link'>gmail</a></li>
                <li><a href='https://github.com/steakfrye' className='link'>GitHub</a></li>
                <li><a href='https://twitter.com/Pixiestiks' className='link'>Twitter</a></li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
