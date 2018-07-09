import React, { Component } from 'react';
import Icon from './Icon';

class Main extends Component {
  render() {
    return (
        <div className='home'>
          <h1>I'm Dylan Frye. <Icon /></h1>
          <p>
          Crafting is my passion. I love challenges
          and those impossible-at-first-glance problems. Give me critiques and feedback
          so I can build your project the best I can.
          </p>
          <div className='box'>
            <h2>
              Current Projects
            </h2>
            <ul className='projects'>
              <li className='no-projects'>Nothing at the Moment.</li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Main;
