import React, { useState } from 'react';
import './createBlog.css'; // Import external CSS
import axiosUrl from '../../api/axiosUrl';

function CreateBlog({author, title, setTitle, content, setContent, id, token, setBlogData}) {
    

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data={
        author:author,
        title:title,
        content:content,
        foreign_key:id

    }
    axiosUrl.post('/blog',data,
        {headers:{'Authorization':`Bearer ${token}`}}
    ).then(res=>{if(res.status===200){setBlogData(prev=>[...prev,data]); return console.log('Data uploaded successfully')}})
    .catch((err)=>console.log(err))


    setTitle('');
    setContent('');
  };

  return (
    <section className="form-container">
      <h1>Create a Blog Post</h1>
      <form onSubmit={handleSubmit} aria-label="Blog post creation form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)} 
            required 
          />
        </div>
<div>${token}</div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea 
            id="content" 
            name="content" 
            rows="6" 
            value={content} 
            onChange={(e)=>setContent(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
}

export default CreateBlog;
