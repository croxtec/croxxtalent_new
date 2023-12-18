/* src/axios.js */
import Cookies from 'js-cookie';
import axios from 'axios';
import config from './config';

const $axios = axios.create({
  baseURL: config.realtimeUrl, // Set api base url from .env
  // timeout: 30000, // default is `0` millisecods (no timeout)
  headers: {
    // Accept: "application/json",
    //"Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*, http://localhost:8080",
    // "X-Authorization": config.apiKey,
    // Set api key from .env
  }
});
// Add access token to header if any
const accessToken = Cookies.get(config.accessRealTimeToken);

if (accessToken) {
  $axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
} else {
  $axios.defaults.headers.common['Authorization'] = null;
  delete $axios.defaults.headers.common['Authorization'];
}

// Add a request interceptor
$axios.interceptors.request.use(
  function (axiosConfig) {
    // Add access token to header before request is sent if any
    const accessToken = Cookies.get(config.accessRealTimeToken);
    if (accessToken) {
      axiosConfig.headers.Authorization = 'Bearer ' + accessToken;
    } else {
      axiosConfig.headers.Authorization = null;
      delete axiosConfig.headers.Authorization;
    }
    return axiosConfig;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
$axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response.status === 401) {
      //place your re-entry code
      //app.$router.push('/login?expired=1');
    }
    //return Promise.reject(error);
    return Promise.reject(error.response);
  }
);

export default $axios;
