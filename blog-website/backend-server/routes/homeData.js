const blogController =require('../controller/blogContentController');
const express=require('express');
const router=express.Router();

router.route('/')
.get(blogController.getBlogs);

module.exports=router;