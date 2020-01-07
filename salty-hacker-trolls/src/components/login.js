import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
// import axiosWithAuth from "../utils/axiosWithAuth";

const Login = (props) => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    background-color: gray;
    height: 500px; 
  `

  // const FormContainer = styled.div`
  //   width: 90%;
  //   height: 90%;
  //   display: flex;
  //   flex-flow: column nowrap;
  //   background-color: white;
  //   margin: auto;
  // `


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
      e.preventDefault();
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
