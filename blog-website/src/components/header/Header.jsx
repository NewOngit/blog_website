import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({isSign}) => {
  return (
    <header>
      <img src="/logo.png" alt="Logo" className="logo" />
      {
      isSign?  <Link to={'/mycontent'} className="your-content">your content</Link>:<Link to={'/signin'} className="sign-in">Sign In</Link>
      }
      
    </header>
  );
};

export default Header;
