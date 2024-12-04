import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';




export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div id="login-form">
      <h2>Log In </h2> <br />
      {/* validate Email */}
      <label>Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> <br />
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email Id"
      />
      <br /> <br />
      <label>Password :</label> <br />
      <input
        type="password"
        id="pd"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Type Your Password" />
      <br /> <br /> <br />
      
      <Link to={'/Certify'} id="login-btn">Log in</Link>
    </div>



  )
}

