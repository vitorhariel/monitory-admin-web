import axios from 'axios';

export const suapApi = axios.create({
  baseURL: 'https://suap.ifrn.edu.br/api/v2',
});

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
