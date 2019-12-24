import React, { useState } from "react";
import axios from 'axios';
// import axiosWithAuth from "../utils/axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

    const handleSubmit = e => {
      e.preventDefault();
      axios
      .post('https://saltiest-hacker-news-trolls-be.herokuapp.com/api/login/', credentials)
        .then(res => {
          console.log(res.data);
          localStorage.setItem('token', res.data.token);
          props.history.push('/protected');
        })
        .catch(err => console.log(err))

    };

    const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      })
      
    }
  
  return (
    <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
    </>
  )
}



export default Login;
