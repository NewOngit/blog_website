const mysql2 = require('mysql2/promise');
const mysql=  require('mysql');




// await connection.connect();
//     console.log('Connected to MySQL');
// } catch (error) {
//     console.error('Error connecting to MySQL:', err);
// }

const connect =async()=>{
try {
const conn =await mysql2.createConnection({
  host: process.env.host, 
  port:process.env.port,
  user: process.env.user,    
  password: process.env.password,
  database: process.env.database
});
console.log('connected to SQL')  ;
return conn;
} catch (error) {
  console.log(error);
}  

}





// connection.connect(err => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL');
//});
module.exports= {connect};
//export {connection};
