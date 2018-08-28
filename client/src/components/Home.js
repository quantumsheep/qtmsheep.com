import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

import axios from 'axios';
import config from '../config';

export default class Home extends Component {
  state = {
    content: ""
  }

  async componentDidMount() {
    try {
      const { data: content } = await axios.get(`${config.api}/pages/home`);

      if (content) {
        this.setState({ content });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <ReactMarkdown source={this.state.content} />
      </div>
    );
  }
}