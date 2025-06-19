import React, { useState } from "react";
import axiosUrl from '../../api/axiosUrl';
import "./signin.css";
import { useNavigate } from "react-router-dom";

const Signin = ({setId, setAuthor, setToken, setIsSign}) => {
  const navigate=useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async(e) => {
 e.preventDefault();
    alert(`Signing in as: ${username}`);
    const data={username:username,
             password:password}
axiosUrl.post('/auth',data).then(res=>{if (res.status===200)  {alert('Data posted successfully');  
  
  setToken(res.data.accessToken)
  setIsSign(prev=>!prev);;
  setId(res.data.id);
  setAuthor(res.data.username);
  navigate('/')
  console.log(res.data);
}})
        .catch(err=>alert(err));
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="sign-in-button" onClick={handleSignIn}>
        Sign In
      </button>

      <div className="sign-up-section">
        <p>Don't have an account?</p>
        <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default Signin;
