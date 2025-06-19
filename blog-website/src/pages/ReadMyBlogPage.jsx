import React from 'react'
import ReadMyBlog from '../components/readmyblog/ReadMyBlog'
import { useParams } from 'react-router-dom';

const ReadMyBlogPage = ({myData, setMyData, token}) => {
    const param=useParams();
    const id=param.id;
    
  return (
    <>
    <ReadMyBlog myData={myData} id={id} setMyData={setMyData} token={token}/>
    </>
  )
}

export default ReadMyBlogPage