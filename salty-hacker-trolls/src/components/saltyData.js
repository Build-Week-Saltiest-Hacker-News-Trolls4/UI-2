import React, { useState,useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const SaltyUsers = () => {
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
        axiosWithAuth()
        .get('users')
            .then(res => {
                
                
                setData(res.data)
            
            })
            .catch(err => console.log(err))
    })
    
    return (
        <>
           <ul> 
            {data.map(user => (
                <li key={user.id} >{user.username}</li>    
            ))}
           </ul>     
                
            
        </>
    )
}

export default SaltyUsers;