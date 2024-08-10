import React, { useState } from "react";
import axios from "axios";

projectID = process.env.REACT_APP_PROJECT_ID;
const LoginForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-secret': password};

    try{
        await axios.get('https://api.chatengine.io/chats', {headers: authObject});
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.reload()
        setError('')
    } catch(error){
        setError("Sorry, Incorrect credentials")
    }
  }


  return (
    <div>
      <div className="wrapper">
        <div className="form">
          <h1 className="title">Chat App</h1>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              style={{
                align: "center",
              }}
            >
                <button className="button">
                    <span>Start Chatting</span>
                </button>
            </div>
          </form>
          <h1 style={{color:'red'}}>{error}</h1>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
