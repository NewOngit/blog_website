


import React from 'react';
import { Link } from 'react-router-dom';

import CreateBlog from '../components/createblog/CreateBlog';

function Blog({author, title, setTitle, content, setContent, id, token,setBlogData }) {
  return (
    <>
    <CreateBlog author={author} title={title} setTitle={setTitle} content={content} setContent={setContent} id={id} token={token} setBlogData={setBlogData}/>
    </>
  );
}



export default Blog;