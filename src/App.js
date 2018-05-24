import 'css-doodle';
import React, { Component } from 'react';
import Header from './Header';
import NoPage from './NoPage';

class App extends Component {
  render() {
    return (
      <div className="index">
        <NoPage />
      </div>
    );
  }
}

export default App;
