import React, { Component } from 'react';

class NoPage extends Component {
  render() {
    return (
      <div>
        <h1 className="error-header">Oops.</h1>
        <p className="error-message">You caught me unprepared. This page will be back soon.</p>
      </div>
    );
  }
}

export default NoPage;
