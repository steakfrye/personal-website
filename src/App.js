import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Main from './Main';
import NoPage from './NoPage';
import Portfolio from './Portfolio';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NoPage />
        {/* <Route exact path='/' render={() => {
          <div className="index">
            <Main />
          </div>;
        }}/>

        <Route path='/About' render={() => {
          <div className="index">
            <About />
          </div>;
        }}/>

        <Route path='/Contact' render={() => {
          <div className="index">
            <Contact />
          </div>;
        }}/>

        <Route path='/Portfolio' render={() => {
          <div className="index">
            <Portfolio />
          </div>;
        }}/> */}

      </div>
    );
  }
}

export default App;
