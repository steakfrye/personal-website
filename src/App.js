import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';


class App extends Component {
  render() {
    return (
      <div className="index">
        <Nav />
        <header className="App-header">
          <h1 className="App-title">Dylan Frye</h1>
        </header>
      </div>
    );
  }
}

export default App;
