import React from 'react';
import './readMyBlog.css';
import { Link, useParams } from 'react-router-dom';
import axiosUrl from '../../api/axiosUrl';

function ReadMyBlog({ myData,token, setMyData, id }) {
    const data=myData?.find(data=>data.id==id);

    

    const deleteMyData=async()=>{
 try {
    const res=await axiosUrl.delete(`/myblog`,{
            id:id
        },
            {headers:{'Authorization':`Bearer ${token}`}}
        );
        const filtered=myData?.filter(data=>data.id==id);
        setMyData(filtered);
 } catch (error) {
    console.log(error);
 }
        
    }

  return (
    <div className="blog-card">
      <h2 className="blog-title">{data.title}</h2>
      <p className="blog-content">{data.content}</p>
      <span className="blog-author">— {data.author}</span>

      <div className="blog-buttons">
        <button className="btn update-btn" ><Link to={`/updateBlog/${id}`} >Update</Link> </button>
        <button className="btn delete-btn" onClick={deleteMyData}>Delete</button>
      </div>
    </div>
  );
}

export default ReadMyBlog;
