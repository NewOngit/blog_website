import React from "react";
import Header from "../components/header/Header";
import Articles from "../components/articles/Articles";
import Footer from "../components/footer/Footer";
import BlogNav from "../components/blognavigation/BlogNav";

const Home = ({isSign, blogData}) => {
  return (
    <div>
      <Header isSign={isSign} />
      <Articles  blogData={blogData}/>
      <BlogNav isSign={isSign}/>
      <Footer />
    </div>
  );
};

export default Home;
