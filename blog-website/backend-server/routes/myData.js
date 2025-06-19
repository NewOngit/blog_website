const blogController =require('../controller/blogContentController');
const express=require('express');
const router=express.Router();

router.route('/myblog/:id')
.get(blogController.getMydata);

module.exports=router;