import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import hamburger from '../resources/hamburger.svg';
import arrowDown from '../resources/arrow-down.svg';

export default class App extends Component {
  componentDidMount() {
    this.setAnchor();

    this.selectSideMenuAnchor(window.location.hash || "#about");
  }

  setAnchor = () => {
    const self = this;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');

        window.history.replaceState(null, document.title, href);

        self.selectSideMenuAnchor(href);

        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }

  selectSideMenuAnchor = hash => {
    document.querySelectorAll(`.side-menu > a[href^="#"]`).forEach(link => link.classList.remove('active'));

    const link = document.querySelector(`.side-menu > a[href="${hash}"]`);

    if (link) {
      link.classList.add('active');
    }
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
            <a href="#skills">
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
            <section id="skills">
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
