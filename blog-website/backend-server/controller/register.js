const bcrypt=require('bcrypt');
const fsPromises=require('fs').promises;
const fs=require('fs')
const path=require('path');
const {connect} =require('../connectdatabase/db');
//import { connection } from '../connectdatabase/db.mjs';


var user;
const registerUser=async(req, res)=>{

    const {userName, password}=req.body;
    console.log(`${userName}     ${ password}`)
    if(!userName||!password){
return        res.status(400).send('username or password is not present');
    }
const connection=await connect();
    try {
        
const [result, fields]= await connection.query('SELECT * from Users');
console.log(result);
user=result;
// console.log(`${rows}unable to fetch data from mysql`);
// const user=data;
} catch (error) {
    
    console.log(error);
}


//const duplicate = await user.findOne({userName}).exec();
if(!user){
console.log('no user found');
}
const duplicate= user?.find((data, idx)=>data.name===userName);


console.log(duplicate)
if(duplicate) return  res.sendStatus(409);
    const hashedpassword=await bcrypt.hash(password, 10);
    const newUser={'nameName':userName, 

        'password':hashedpassword};
        //const registerUser= new user(newUser);
        //const newDat=await user.save();
        const query='insert into Users(name, password, refreshToken) values(?,?,?)'
        try {
        const response=await connection.execute(query,[userName, hashedpassword,'a']);    
            console.log(`${userName} registerd`);
            res.status(200).send(`${userName} created`)
            connection.close();
        } catch (error) {
            console.log(error);
        }
        
        // if(response.status!==200)
        //     return res.sendStatus(401);



    
}

module.exports={registerUser};