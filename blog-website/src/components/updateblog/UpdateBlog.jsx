import React, { useState } from 'react';
import './updateBlog.css';
import { useParams } from 'react-router-dom';
import axiosUrl from '../../api/axiosUrl';

function UpdateBlog({myData, setMyData, token}) {
 
  const param=useParams();
  const id=param.id;
  const data=myData?.find(data=>data.id==id);
    const[title, setTitle]=useState(data?.title);
    const[content, setContent]=useState(data?.content);
    
  const updataMyData=async()=>{
 try {
    const res=await axiosUrl.put(`/myblog`,{
            id:id,  title:title, content:content
        },
            {headers:{'Authorization':`Bearer ${token}`}}
        );

        const filtered=myData?.((data)=>data.id!==id);
        const d=[...filtered,{id, title, content, author:data.author} ]
        setMyData(filtered);

 } catch (error) {
    console.log(error);
 }
   };

  return (
    <div className="update-form-wrapper">
      <h2>Update Blog</h2>
      <form className="update-form" onSubmit={updataMyData}>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          value={title} 
          onChange={(e)=>setTitle(e.target.value)} 
          required 
        />

        <label htmlFor="content">Content</label>
        <textarea 
          id="content" 
          name="content" 
          rows="6" 
          value={content} 
          onChange={(e)=>setContent(e.target.value)} 
          required 
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateBlog;
