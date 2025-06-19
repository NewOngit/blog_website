import React from 'react'
import ReadBlog from '../components/readblog/ReadBlog'
import { useParams } from 'react-router-dom'


const ShowBlogContent = ({blogData}) => {
    const {id}=useParams();
  return (
    <>    
    <ReadBlog id={id} blogData={blogData}/>
    </>
  )
}

export default ShowBlogContent