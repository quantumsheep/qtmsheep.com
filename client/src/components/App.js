import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem';

import Home from './Home';
import Blog from './Blog';

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
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={Blog} />
              </Switch>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}
