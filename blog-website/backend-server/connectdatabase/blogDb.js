const mysql = require('mysql2');
const uri='mysql://avnadmin:AVNS_nIS1KctUyYbMyPKYIB8@my-database-space-country.e.aivencloud.com:26943/defaultdb?ssl-mode=REQUIRED';

const connection = mysql.createConnection({
  host: 'my-database-space-country.e.aivencloud.com', 
  port:26943,
  user: 'avnadmin',    
  password: 'AVNS_nIS1KctUyYbMyPKYIB8',
  database: 'db'
});

const connectToSql=()=>{
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the remote MySQL database!');
});

}

const executeQuery=(query)=>{
connection.query(query, (err, results) => {
  if (err) {
    console.error('Error executing query:', err.message);
    return;
  }
  console.log('Query results:', results);
});

}

//connection.end();
module.exports={connectToSql, executeQuery};