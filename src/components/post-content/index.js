import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import './style.scss';

function PostContent({ html }) {
  return (
    <div className="post-content">
      <div className="markdown">
        <MDXRenderer >{html}</MDXRenderer>
      </div>
    </div>
  );
}

export default PostContent;
