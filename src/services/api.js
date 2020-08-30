import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sharing-news.herokuapp.com'
});

export default api;