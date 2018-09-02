import React, { Component } from 'react';
import axios from 'axios';
import config from '../config';

export default class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`${config.api}/posts`)
      .then(({ data: posts }) => this.setState({ posts: Object.keys(posts).map(id => posts[id]) }))
      .catch(err => console.log(err));
  }

  render() {
    const skeletons = [];

    if (this.state.posts.length <= 0) {
      for (let i = 0; i < 10; i++) {
        skeletons.push(
          <div className="pre-article" key={`pre-article${i}`}>
            <div className="pre-article-thumbnail skeleton"></div>
            <div className="pre-article-content">
              <div className="pre-article-title skeleton"></div>
              <div className="pre-article-text skeleton"></div>
              <div className="pre-article-text end skeleton"></div>
            </div>
          </div>
        );
      }
    }

    return (
      <div>
        <h1>Medium articles</h1>
        {
          this.state.posts.map(post => (
            <a href={post.url} target="blank" key={post.id} className="pre-article">
              <div className="pre-article-thumbnail" style={{ backgroundImage: `url(${post.thumbnail})` }}></div>
              <div className="pre-article-content">
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
              </div>
            </a>
          ))
        }
        {
          skeletons.map(skeleton => skeleton)
        }
      </div>
    );
  }
}