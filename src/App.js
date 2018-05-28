import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Main from './Main';
import NoPage from './NoPage';
import Portfolio from './Portfolio';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        {/* <NoPage /> */}
        <Header />
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/About' component={About}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/Portfolio' component={Portfolio}/>
        </Switch>
      </div>
    );
  }
}

export default App;
