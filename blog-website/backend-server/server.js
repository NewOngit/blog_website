const express=require('express');
//const emitter=require('events');
const path =require('path');
const app= express();
const  cookie=require('cookie-parser');
//const logEvent = require('./eventLogs');
//const createLogs=require('./createLogs');
const cors= require('cors');
const verify=require('./controller/verifyJWT.js');
const accessT=require('./controller/accessTokenController.js');
const rem=require('./controller/register.js');
const logout=require('./controller/logout.js');
//const mongoose=require('mongoose');
// const uri = "mongodb+srv://uday45855:Kumar@cluster0.tj6xt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(uri);
// class MyEmitter extends emitter{};

// const myEmitter =new MyEmitter();

//myEmitter.on('log',(msg)=>eventlog(msg));

// setTimeout(()=>{
//     myEmitter.emit('log','log emmited');
// },2000)

app.use(express.json());

//app.use(createLogs);

// app.use((req, res,next)=>{
//     logEvent(`${req.method}\t${req.headers.origin}\t${req.url}`);
//     console.log(`${req.method},${req.path}`);
//     next();
// });

//corsOptions 
const corsAddress=['www.google.com','127.0.0.1','www.youtube.com','http://localhost:3000','http://localhost:3500'];
const corOptio={
    origin:(origin, callback)=>
    {
        if(corsAddress.indexOf(origin)!==-1 || !origin){ 
            callback(null, true);
        }
        else callback(new Error('not allowed by cors'));
    },
    Credential:true,
    optionsSuccessStatus:200

}

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Credentials',true);
    next();
})

app.use(cors(corOptio));

app.use(cookie());
//app.use('/file',require('./routes/csvFileRoute.js'));
app.use('/home', require('./routes/homeData.js'));
app.use('/register', rem.registerUser);

app.use('/auth',require('./routes/logInRoute.js'));

app.use('/refresh', accessT);
app.use(verify);
app.use('/blog', require('./routes/blogRoute.js'));
app.use('/',require('./routes/myData.js'))
app.use('/logout', logout);
app.listen(3500, console.log('server is running on port 3500'));