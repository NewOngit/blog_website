const jwt =require('jsonwebtoken');
require('dotenv').config();
//const user =require('../model/User');
//const {data}=require('./register.js');

const {connect} =require('../connectdatabase/db');
//import { connection } from '../connectdatabase/db.mjs';



    const accessTokenController=async(req, res, next,)=>{
    const cookies=req.cookies;
    if(!cookies?.jwt)  return res.send('No jwt  token in cookies');
    console.log(cookies.jwt);
    const refreshToken=req.cookies.jwt;
    const connection=await connect();
    //const foundUser= data.userData.find((data, idx)=>data.refreshToken===refreshToken);
    //const foundUser= await user.findOne({refreshToken}).exec();
try {
const data= await connection.query(`SELECT * from table where refreshToken=? `,[refreshToken]);
if(data.status!==200)    
console.log('unable to fetch data from mysql');
const user=await data.json();
} catch (error) {
    console.log(error);
}

const foundUser=user.find((data)=>data.refreshToken===refreshToken);

    if(!foundUser){ res.send('user Not found');
        return;
    }
    
    //const roles=Object.values(foundUser.roles);

    jwt.verify(
    refreshToken,
    process.env.refreshToken,
    (err, decoded)=>{
        if(err){return res.send('refreshToken not matched');
        }

        const accessToken=jwt.sign(
            {"userInfo":{"userName":`${foundUser.userName}`}},
            process.env.accessToken,
            {expiresIn:"2000s"}
        );
        return res.send(`${accessToken}`);
        
    }
);

}
module.exports=accessTokenController;