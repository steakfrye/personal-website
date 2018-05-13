import { Navbar, Jumbotron, Button, Grid } from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';

class Nav extends Component {
  render() {
    return (
      <div>
          <Navbar inverse fixedTop>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/"> Front Page </a>
                  <a href="#"> About </a>
                  <a href="#"> Contact </a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
            </Grid>
          </Navbar>
        </div>
    );
  }
}

export default Nav;
