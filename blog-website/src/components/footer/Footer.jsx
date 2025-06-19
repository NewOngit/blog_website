import React, { useState } from 'react';
import './footer.css';

function Footer() {
  const [dummy , setDummy]=useState('');
  return (
    <footer className="site-footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>About</h4>
          <p>
            MyBlog is a place to share thoughts, stories, and creative ideas.
            Built with passion and ☕️.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/createblog">Create Blog</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" value={dummy} onChange={(e)=>{
              setDummy(e.target.value);
              return alert('This is dummy ):')
            }}/>
            <button type="submit">Subscribe</button>
          </form>
        </div>
        
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><span>🌐</span></a>
          <a href="#"><span>🐦</span></a>
          <a href="#"><span>📸</span></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
