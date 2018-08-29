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
    return (
      <div>
        <h1>Articles</h1>
        {
          this.state.posts.map(post => (
            <a href={`https://medium.com/@nathanaeldemacon/${post.id}`} target="blank" key={post.id} className="pre-article">
              <div className="pre-article-thumbnail" style={{backgroundImage: `url(https://cdn-images-1.medium.com/max/1000/${post.virtuals.previewImage.imageId})`}}></div>
              <div className="pre-article-content">
                <h2>{post.title}</h2>
                <p>{post.content.subtitle}</p>
              </div>
            </a>
          ))
        }
      </div>
    );
  }
}