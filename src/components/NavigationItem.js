import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    const { className, children, ...others } = this.props;

    return (
      <li className={`NavigationItem ${className || ""}`.trim()} {...others}>
        {children}
      </li>
    );
  }
}
