import React from "react";
import "./myArticle.css";
import { Link } from "react-router-dom";

// const articlesData = [
//   { id: 1, title: "Article 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae..." },
//   { id: 2, title: "Article 2", content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices..." },
//   { id: 3, title: "Article 3", content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem..." },
// ];

const MyArticle = ({myData}) => {
  
  return (
    <div className="articles">
      {myData?.length?myData.map((article) => (
        <article key={article.id}>
          <h2>{article.title}</h2>
          <p>
            {article.content.slice(0, 100)}... <Link to={`/showmyblog/${article.id}`}>Read more</Link>
          </p>
        </article>
      )):<><p>Loading...</p></>}
    </div>
  );
};

export default MyArticle;
