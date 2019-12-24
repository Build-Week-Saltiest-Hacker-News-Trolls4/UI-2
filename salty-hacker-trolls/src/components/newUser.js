import React, { useState } from "react";
import axios from 'axios';

const NewUser = () => {
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

    const handleSubmit = e => {
      e.preventDefault();
      axios
      .post('https://saltiest-hacker-news-trolls-be.herokuapp.com/api/register', user)
        .then(res => {
          console.log(res.data);
          setUser(res)  
        //   .setItem(res.data.payload);
          
        })
        .catch(err => console.log(err))

    };


    
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
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
