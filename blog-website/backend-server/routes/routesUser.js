const  {createBlog, getBlogs, updateBlog, postBlog, deleteBlog}=require('../controller/blogContentController')
const express= require('express');
const router=express.Router();

router.route('/')
    .get(getBlogs)
    .post(postBlog)
    .put(updateBlog)
    .delete(deleteBlog);

    module.exports={router};
