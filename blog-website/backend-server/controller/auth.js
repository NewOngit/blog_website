const path =require('path');
const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken');
//const user =require('../model/User');

const {connect} =require('../connectdatabase/db');
//import { connection } from '../connectdatabase/db.mjs';


//const {data}=require('./register.js');
//const users=require('../userDb/user.json');

require('dotenv').config();

    //const fsPromises=require('fs').promises;
    const handleLogIn=async(req, res, next)=>{

    const name=req.body.username;
    const pwd=req.body.password;
    if(!name || !pwd) return res.sendStatus(401);
    console.log(name);
const connection=await connect();
var user;
    //const foundUser=await user.findOne({userName:name}).exec();
    try {
    const [results ]= await connection.query(`SELECT * from Users where name=? `,[name]);
    // if(data.status!==200)    
    // console.log('unable to fetch data from mysql');
    user=results;
    } catch (error) {
    console.log(error);
    } 
    const foundUser=user.find((data)=>data.name===name); 
    console.log(foundUser)      
    //const foundUser=data.userData?.find((data, idx)=>data.userName===name);
    //const exceptUser=data.userData?.filter((data, idx)=>data.userName!==name);
    if(!foundUser) return res.send('not found any user');
    console.log(pwd);
    console.log(foundUser.password)
    const match = await bcrypt.compare(pwd, foundUser.password);
    //const roles=Object.values(foundUser.roles);
    console.log(match)
    if(match){
        const refreshToken=jwt.sign({
            name:name,
        },
            process.env.refreshToken,
            {expiresIn:'1d'}
        );
        
        const accessToken=jwt.sign(
            {"userInfo":{"name":`${name}`}},
            process.env.accessToken,
            {expiresIn:'2000s'}
        );

        const saveRefreshToken='update Users set refreshToken=? where id=?';
        const response=await connection.execute(saveRefreshToken,
            [refreshToken, foundUser.id]
        );
        connection.close();
        // if(res.status!==200){
        //     return res.sendStatus(401);
        // }
        
        //foundUser.refreshToken=refreshToken;
        //const loggedInUer=await foundUser.save();
        //const newUsers={...foundUser, refreshToken};
        //const newnewUser=[...exceptUser,newUsers];
        //data.setuserData(newnewUser)
        //  await fsPromises.writeFile(path.join(__dirname,'..','userDb','user.json'),
        //     '[]')
        //  await fsPromises.writeFile(path.join(__dirname,'..','userDb','user.json'),
        //    JSON.stringify(newnewUser)
        //  );

        res.cookie('jwt',   refreshToken, {httpOnly:true, sameSite:'none', secure:'true', maxAge:24*60*60*1000});
        res.json({accessToken, id:foundUser.id, username:foundUser.name});
        return ;
    }
    connection.close();
    res.sendStatus(401);
    return;
}

module.exports=handleLogIn;




