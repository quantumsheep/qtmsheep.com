import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import hamburger from '../resources/hamburger.svg';
import arrowDown from '../resources/arrow-down.svg';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="side-menu">
            <a href="#about">
              <span>About</span>
              <div></div>
            </a>
            <a href="#about">
              <span>Skills</span>
              <div></div>
            </a>
          </div>
          <main>
            <header>
              <h1 className="title">QuantumSheep</h1>
              <img className="hamburger" src={hamburger} alt="Menu" />
            </header>
            <section id="about">
              <div className="section-content">
                <div className="section-title">Hi! I’m <span className="blue">Nathanael</span>, and I’m a fullstack developer.</div>
                <div className="section-divider"></div>
                <div className="section-description">Driven by my passion, I put my all in everything I do programming-wise. Join me in my coding adventure!</div>
              </div>
              <div className="section-footer">
                <img className="down-arrow" src={arrowDown} alt="Next" />
              </div>
            </section>
          </main>
        </div>
      </Router>
    );
  }
}
