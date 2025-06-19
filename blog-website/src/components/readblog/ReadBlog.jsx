import React from 'react';
import './readBlog.css';

function ReadBlog({id, blogData}) {
    const data=blogData.find(data=>data.id==id);
  return (
    <main className="blog-container">
        
      <h1 className="blog-title">{data.title}</h1>
      <p className="blog-content">
        {data.content}
      </p>
      <span className="author-name">{data.author}</span>
    </main>
  );
}

export default ReadBlog;
