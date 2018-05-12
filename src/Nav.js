//import 'bootstrap';
import React, { Component } from 'react';
import './App.css';

class Nav extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
            <ul className="Nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
      </div>
    );
  }
}

export default Nav;
