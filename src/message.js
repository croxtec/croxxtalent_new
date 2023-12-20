import axios from 'axios';
axios.defaults.baseURL = 'https://squid-app-8bv4u.ondigitalocean.app/api';

/*
 Axios Interceptor to log user out
*/

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default axios;
