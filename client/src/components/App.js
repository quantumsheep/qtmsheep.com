import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import hamburger from '../resources/hamburger.svg';
import arrowDown from '../resources/arrow-down.svg';

export default class App extends Component {
  componentDidMount() {
    this.setAnchor();
  }

  setAnchor = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }

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
            <section id="about">
              <header>
                <h1 className="title">QuantumSheep</h1>
                <img className="hamburger" src={hamburger} alt="Menu" />
              </header>
              <div className="section-content">
                <div className="section-title">Hi! I’m <span className="blue">Nathanael</span>, and I’m a fullstack developer.</div>
                <div className="section-divider"></div>
                <div className="section-description">Driven by my passion, I put my all in everything I do programming-wise. Join me in my coding adventure!</div>
              </div>
              <div className="section-footer">
                <img className="down-arrow" src={arrowDown} alt="Next" />
              </div>
            </section>
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
