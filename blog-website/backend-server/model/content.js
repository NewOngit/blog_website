const {connectToSql, executeQuery} =require('../connectdatabase/connectToSql');
const schema='CREATE TABLE employees (id INT AUTO_INCREMENT PRIMARY KEY,author VARCHAR(50) NOT NULL,title VARCHAR(100),article VARCHAR(5000));'
const createContentSchema=()=>{
try {
    connectToSql();
executeQuery(schema);
} catch (error) {
    console.log('unable to create schema');
}
    
}

export default createContentSchema;