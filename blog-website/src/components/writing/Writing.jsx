import React, { useState } from "react";
import "./writing.css";
import { useParams } from "react-router-dom";

const Writing = ({data}) => {
    const id=useParams().id;
    const article=data.find(data=>data.id===id);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="writing-container">
        {
            article?<>
                <h1>{article.title}</h1>
      <p>{article.content}</p>
      <button className={`favorite-button ${isFavorite ? "favorited" : ""}`} onClick={handleFavorite}>
        {isFavorite ? "Favorited" : "Add as Favorite"}
      </button>
      <div className="author-name">{article.author}</div>
                </>
            :<p>No data found </p>
        }
      
    </div>
  );
};

export default Writing;
