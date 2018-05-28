import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/Resume'>Resume</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
