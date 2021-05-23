import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.thecocktaildb.com'
});

export default api;
