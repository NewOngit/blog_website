const handleLogIn=require('../controller/auth')
const express=require('express');
const router=express.Router();

router.route('/')
.post(handleLogIn);

module.exports=router;