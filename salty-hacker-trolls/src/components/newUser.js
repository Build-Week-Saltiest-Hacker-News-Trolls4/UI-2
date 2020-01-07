import React, { useState } from "react";
import axios from 'axios';

const NewUser = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    
  });
  console.log(user);
  

    

    const handleChange = e => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      })
      
    }

    // make a post request to retrieve a token from the api
    const handleSubmit = e => {
      e.preventDefault();
      axios
      .post('https://saltiest-hacker-news-trolls-be.herokuapp.com/api/register', user)
        .then(res => setUser(res))
        .catch(err => console.log(err));
        
      
      axios
      .post('https://saltiest-hacker-news-trolls-be.herokuapp.com/api/login/', user)
        .then(res => {
          console.log(res.data);
          localStorage.setItem('token', res.data.token);
          props.history.push('/protected');
        })
        .catch(err => console.log(err))
      

    };
    




  return (
    <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button>Add User</button>
        </form>
    </>
  )
}



export default NewUser;
