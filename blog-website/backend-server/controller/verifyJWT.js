const jwt= require('jsonwebtoken');
require('dotenv').config();

const verifyJwt = (req, res, next)=>{
    const auth=req.headers.authorization;
    console.log(req.headers)
    if(!auth) return res.status(403).send('auth header not presnt in VerifyJWT');
    const token =auth.split(' ')[1];
    console.log(token);
    const match=jwt.verify(
        token,
        process.env.accessToken,
        (err, decoded)=>{
            if(err) {console.log(err); return res.sendStatus(403);}
            req.user=decoded.userInfo.name;
            
         next();
        }

    )
}

module.exports=verifyJwt;