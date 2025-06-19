import React from 'react';
import { Link } from 'react-router-dom';
import './blogNav.css'; 

function BlogNav({isSign}) {
  return (
    
    <Link to={isSign ? '/createblog':'/signin'} className="floating-button" aria-label="Create Blog">
      +
    </Link>
  );
}

export default BlogNav;
