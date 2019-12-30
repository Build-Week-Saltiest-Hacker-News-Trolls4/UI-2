import axios from 'axios';

const axiosWithAuth =() => {
    const token = localStorage.getItem('token');
    // console.log(token);
    
    return axios.create({
        baseURL: 'https://saltiest-hacker-news-trolls-be.herokuapp.com/api',
        headers: {
            Authorization: token,
            Manifest: 'application/json'
        }
    });
};

export default axiosWithAuth;