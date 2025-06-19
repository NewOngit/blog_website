// //const{executeQuery}=require('../connectdatabase/connectToSql');
// const connection =require('../connectdatabase/db');

// const blogFetcth=async(req, res)=>{
// try {
//     const query='select * from table';
//     const res=connection.query(query);
//     return res.json(res.data);
// } catch (error) {
//     res.sendStatus(401);
// }
    

// }

// const blogPost=async(req, res)=>{
//     const{author, title, article}=req.body;
//     if(!author || !title || !article){
//         return res.sendStatus(402);
//     }
// const query='';
// const res= await connection.query(query);
// if(res.status!==200)
//     res.status(401).send('not uploaded');
// }

// const blogUpdate=async(req, res)=>{
// const {id}=req.body;

// }

// const blogDelete=async(req, res)=>{


// }
//import { connection } from '../connectdatabase/db.mjs';
//const mysql = require('mysql2/promise');
const {connect}=require('../connectdatabase/db');
// Create connection pool
// const pool = mysql.createConnection({
//   host: 'localhost',
//   user: 'your_user',
//   password: 'your_password',
//   database: 'your_database'
// });

// CREATE a new blog post
//const{connect} =require('../connectdatabase/db')

const createBlog = async (req, res) => {
  const {author, title, content,foreign_key } = req.body;
  const connection=await connect();
  try {
    const [result] = await connection.execute(
      'INSERT INTO Blog (author ,title, content, foreign_key) VALUES (?, ?,?,?)',
      [author, title, content,foreign_key]
    );
    res.status(201).json({ message: 'Blog created', blogId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  connection.close();
};

// READ all blog posts
const getBlogs = async (req, res) => {
  const connection=await connect();
  try {
    const [rows] = await connection.query('SELECT * FROM Blog');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  connection.close();
};

const postBlog = async (req, res) => {
  const { author, title, content, foreign_key } = req.body;
  if(!author|| !title|| !content ||!foreign_key){
    return res.sendStatus(401);
  }
  const connection=await connect();
  try {
    await connection.execute(
      'UPDATE blogs SET author=?, title = ?, content = ? WHERE id = ?',
      [author, title, content, id]
    );
    res.status(200).json({ message: 'Blog updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  connection.close();
};


// UPDATE a blog post by ID
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { author, title, content } = req.body;
  const connection=await connect();
  try {
    await connection.execute(
      'UPDATE Blog SET author=?, title = ?, content = ? WHERE id = ?',
      [author, title, content, id]
    );
    
    res.status(200).json({ message: 'Blog updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  connection.close();
};

// DELETE a blog post by ID
const deleteBlog = async (req, res) => {
  const { id } = req.body;
  const connection=await connect();
  try {
    await connection.execute('DELETE FROM Blog WHERE id = ?', [id]);
    res.status(200).json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  connection.close();
};

const getMydata=async(req, res)=>{
  const id=req.params.id;
  console.log(id)
  const connection=await connect();
  try {
    const [results, rows]=await connection.query('select * FROM Blog WHERE foreign_key = ?', [id]);
    console.log(results);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  connection.close();
}

module.exports={createBlog, getBlogs, updateBlog, postBlog, deleteBlog, getMydata};