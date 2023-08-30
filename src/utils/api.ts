import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export const TOKEN_API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: ACCESS_TOKEN,
  },
});
