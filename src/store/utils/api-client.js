import axios from 'axios';

const apiUrl = 'http://127.0.0.1:4010';
const token = '758a758d-c57a-4522-aa26-ed9f83577a9f';

const axiosInstance = axios.create({
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    config.url = `${apiUrl}${config.url}`;
    config.headers['token'] = token;

    return config;
  },
  error => Promise.reject(error),
);

export default axiosInstance;