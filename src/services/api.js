import axios from 'axios';

const URL = `https://5.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

export const createApi = () => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  return api;
};
