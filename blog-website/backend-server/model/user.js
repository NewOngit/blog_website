const {connectToSql, executeQuery} =require('../connectdatabase/connectToSql');
const schema='CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(50) NOT NULL,password VARCHAR(100));'
const createContentSchema=()=>{
try {
    connectToSql();
executeQuery(schema);
} catch (error) {
    console.log('unable to create schema');
}
    
}

export default createContentSchema;