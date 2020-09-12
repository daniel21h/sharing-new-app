import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://sharing-news.herokuapp.com'
});

export const apiLocal = axios.create({
  baseURL: 'http://192.168.10.104:3333'
});
