import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from './components/post/Post';
//import Home from "./pages/Home";
import Blog from "./pages/Blog";
import axiosUrl from "./api/axiosUrl";
//import About from "./pages/About";
import PostDetails from "./components/PostDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";
import { SignUpPage } from "./pages/SignUpPage";
import Writing from "./components/writing/Writing";
import { useEffect, useState } from "react";
import ShowBlogContent from "./pages/ShowBlogContent";
import MyContentPage from "./pages/MyContentPage";
import ReadMyBlogPage from "./pages/ReadMyBlogPage";
import UpdateBlog from "./components/updateblog/UpdateBlog";

function App() {
    const[isSign, setIsSign]=useState(false);

    const[token, setToken]=useState('');
    const[title, setTitle]=useState('');
    const[content, setContent]=useState('');
    const[id, setId]=useState('');
    const [author, setAuthor]=useState('');
    const[blogData, setBlogdata]=useState([]);
    const[myData, setMyData]=useState([]);

    useEffect(()=>{
    

        const  fetchData=async()=>{
        try {
        const res=await axiosUrl.get('/home');
        const data= await res.data;
        console.log(data)
        setBlogdata(data)
        } catch (error) {
    console.log(error);
        }
    }
fetchData();
},
[]);
    const data={id:'1', 
        title:"my article",
        content:"Hello this is mmy article and today we are currently blogging the website",
        author:"Chandrashekharan Rao"
    };
    return (
        <Router>
            
            <Routes>
              <Route path="/" element={<Home isSign={isSign} blogData={blogData}/>}/>
                {/* <Route path="/" element={<Home />} /> */}
                {/* <Route path="/blog" element={<Blog />} /> */}
                <Route path="/signin" element={<SigninPage setAuthor={setAuthor} setId={setId} setToken={setToken} setIsSign={setIsSign}/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/createblog" element={<Blog author={author} title={title} setTitle={setTitle} content={content} setContent={setContent} id={id} token={token} setBlogdata={setBlogdata}/>}/>   
                <Route path="/showblog/:id" element={<ShowBlogContent blogData={blogData}/>}/>
                <Route path="/mycontent" element={<MyContentPage isSign={isSign} id={id} token={token} myData={myData} setMyData={setMyData}/>}/>
                <Route path="/readmyblog/:id" element={<ReadMyBlogPage blogData={blogData}/>}/>
                <Route path="/showmyblog/:id" element={<ReadMyBlogPage myData={myData} setMyData={setMyData} token={token}/>}/>
                <Route path="/updateblog/:id" element={<UpdateBlog myData={myData}  setMyData={setMyData} token={token}/>}/>

                <Route path="/writing/:id" element={<Writing data={data}/>}/>
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/blog/:id" element={<PostDetails />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
