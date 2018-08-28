import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import axios from 'axios';
import config from '../config';

export default class Page extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    page: PropTypes.string,
  }

  state = {
    progress: 0,
    content: ""
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.path !== prevProps.path || this.props.page !== prevProps.page) {
      this.updatePage();
    }
  }

  componentDidMount() {
    this.updatePage();
  }

  updatePage = async () => {
    try {
      const { data: { content } } = await axios.get(`${config.api}/pages${this.props.page || this.props.path}`, {
        onDownloadProgress: progressEvent => {
          if (progressEvent.total > 0) {
            const progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total);

            this.setState({ progress });
          }
        }
      });

      this.setState({ content });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { path, page, ...others } = this.props;

    return (
      <Route path={path} {...others}>
        <ReactMarkdown source={this.state.content} />
      </Route>
    );
  }
}