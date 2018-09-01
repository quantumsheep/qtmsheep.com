import React, { Component } from 'react';
import axios from 'axios';

import ReactMarkdown from 'react-markdown';

export default class Blog extends Component {
  state = {
    readme: ""
  }

  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/QuantumSheep/${this.props.computedMatch.params.project}/master/README.md`)
      .then(({ data: readme }) => this.setState({ readme }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ReactMarkdown source={this.state.readme} />
    );
  }
}