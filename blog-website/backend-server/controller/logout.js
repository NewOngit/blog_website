// const path=require('path');
// const fsPromises=require('fs').promises;
// const {data}=require('./register')
//const user=require('../model/User');
const {connect}= require('../connectdatabase/db');
//import { connection } from '../connectdatabase/db.mjs';
const logout=async(req, res)=>{
    const cookie=req.cookies;
    if(!cookie?.jwt){
        res.sendStatus(204);
        return;
    }
const refreshToken=cookie.jwt;
//const filterUser=data.userData.filter((data,idx)=>data.refreshToken!==refreshToken);
//const findUser=data.userData.find((data, idx)=>data.refreshToken===refreshToken);
//const findUser= await user.findOne({refreshToken}).exec();
const connection=await connect();
try {
const data= await connection.query(`SELECT * from table where name=? `,[name]);
if(data.status!==200)    
console.log('unable to fetch data from mysql');
const user=await data.json();
} catch (error) {
    console.log(error);
}

const findUser=user.map((data)=>data.refreshToken===refreshToken);
const id=findUser.id;
//findUser.refreshToken='';
//const loggedData={...findUser, refreshToken:''};
//const refreshedData=[...filterUser,  loggedData];
//data.setuserData(refreshedData);

//const loggedOutUser= await findUser.save();
const query='update table set refreshToken=? where id=?';
try {
    const res= await connection.execute(query,
        [refreshToken, id]
    );
    if(res.status!==200)
        return res.sendStatus(401);

} catch (error) {
    res.status(401).send('something went wrong during logout');
}
//await fsPromises.writeFile(path.join(__dirname,'..','userDb','user.json'), JSON.stringify(refreshedData));
    res.status(203).send('logged out');
}

module.exports=logout;