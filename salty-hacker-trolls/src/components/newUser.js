import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const NewUser = (props) => {
  
  const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 1%;
    
    
  `

    // make a post request to retrieve a token from the api
    const formik = useFormik({
      initialValues: {
          username: '',
          password: ''
      },
      onSubmit: values => {
         
          axios
        .post('https://saltiest-hacker-news-trolls-be.herokuapp.com/api/register/', values)
          .then(res => {
            
            
          })
          .catch(err => console.log(err))

          axios
          .post('https://saltiest-hacker-news-trolls-be.herokuapp.com/api/login/', values, null ,2)
            .then(res => {
             
              localStorage.setItem('token', res.data.token);
              props.history.push('/protected');
            })
            .catch(err => console.log(err))
      },
    });
    



    
    return (
      <>
      <div className='header-link'>
        <h1 className='saltyh1'>Saltiest Hackers</h1>       
        <StyledLink className='link' to="/login">Login</StyledLink><br />
      </div>
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
      <button type="submit">Add User</button>
    </form>
    </>
  )
}



export default NewUser;
