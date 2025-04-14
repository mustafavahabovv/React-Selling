import React from 'react';
import { blogs } from '../data/data';

const BlogPosts = () => {
  return (
    <div className="blog-posts" id="blog">
      <div className="container">
        <h3>Blog</h3>
        <h2>Blog Posts</h2>
        <div className="blog-list">
          {blogs.map((blog) => (
            <div className="blog-item" key={blog.id}>
              <img src={blog.img} alt={`blog${blog.id}`} />
              <p>{blog.description}</p>
              <div className="blog-meta">
                <span>{blog.author}</span> • <span>{blog.date}</span> • <a href="#">{blog.category}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;