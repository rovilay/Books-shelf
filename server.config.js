import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();

let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000/api/v1';
} else {
  baseURL = 'https://book-shelf-api.herokuapp.com/api/v1';
  console.log('=====the===', baseURL); // eslint-disable-line
}



const instance = () => {
  const token = localStorage.getItem('bs-token');
  return axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: token
    },
  });
};

export default instance;
