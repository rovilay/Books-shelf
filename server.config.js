import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios';

let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000/api/v1'
} else {
  baseURL = 'http://api.example.com'
}

const instance = axios.create(
  {
    baseURL: baseURL
});

Vue.use(VueAxios, axios);
export default instance;
