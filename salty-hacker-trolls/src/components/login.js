import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { useFormik } from 'formik';
// import axiosWithAuth from "../utils/axiosWithAuth";

const Login = (props) => {

  const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 1%;
    
  `
  
  const formik = useFormik({
    initialValues: {
        username: '',
        password: ''
    },
    onSubmit: values => {
        console.log(values)
        axios
        .post('https://saltiest-hacker-news-trolls-be.herokuapp.com/api/login/', values, null ,2)
          .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            props.history.push('/protected');
          })
          .catch(err => console.log(err))
    },
  });

  return (
    <>
    <div>
      <h1 className='saltyh1'>Saltiest Hackers</h1>
    </div>
    <StyledLink to="/public">newUser</StyledLink><br />
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">UserName</label>
      <input
        id="username"
        name="username"
        type="username"
        onChange={formik.handleChange}
        value={formik.values.userName}
      /><br/>
      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      /><br/>
      <button type="submit">Login</button>
    </form>
    </>
  );
}



export default Login;
