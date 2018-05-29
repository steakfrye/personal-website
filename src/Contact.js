import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <div>
          <ul className='contact'>
            <li><a href='mailto:dfryed@gmail.com' className='link'>gmail</a></li>
            <li><a href='https://github.com/steakfrye' className='link'>GitHub</a></li>
            <li><a href='./files/resume.pdf' className='link'>resume</a></li>
          </ul>
        </div>
    );
  }
}

export default Contact;
