import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    const { className, children, ...others } = this.props;

    return (
      <div className={`Navigation ${className || ""}`.trim()}  {...others}>
        <ul>
          {children}
        </ul>
      </div>
    );
  }
}
