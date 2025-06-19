const blogController =require('../controller/blogContentController');
const express=require('express');
const router=express.Router();

router.route('/')
    .get(blogController.getBlogs)
    .post(blogController.createBlog)
    .put(blogController.updateBlog)
    .delete(blogController.deleteBlog);

    module.exports=router;
    
