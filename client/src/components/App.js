import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem';

import Page from './Page';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation>
            <NavigationItem className="NavigationCategory">
              <span>General</span>
            </NavigationItem>
            <NavigationItem>
              <Link to="/">Home</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/blog">Blog</Link>
            </NavigationItem>
            <NavigationItem className="NavigationCategory">
              <span>My projects</span>
            </NavigationItem>
            <NavigationItem>
              <Link to="/">Now for VSCode</Link>
            </NavigationItem>
          </Navigation>

          <main>
            <div>
              <Switch>
                <Page path="/" page="/home" exact />
                <Page path="/blog" exact />
              </Switch>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}
