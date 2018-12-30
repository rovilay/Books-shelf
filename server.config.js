import axios from 'axios'

let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000/api/v1'
} else {
  baseURL = 'http://api.example.com'
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
