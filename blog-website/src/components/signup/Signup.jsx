import React, { useState } from "react";
import axiosUrl from "../../api/axiosUrl";
import "./signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    // try {
    //     const res=await axiosUrl.post('/register',{userName:username,
    //         password:password

    //     });
    //     if(res.status!==200) return console.log('user not created'); 
    // } catch (error) {
    //     console.log(error);
    // }
    const data={userName:username,
             password:password}
axiosUrl.post('/register',data).then(res=>{if (res.status===200)  alert('Data posted successfully')})
    
    .catch(err=>alert(err));
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h1>Sign Up</h1>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </fieldset>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
