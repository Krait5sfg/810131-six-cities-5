import axios from 'axios';

const URL = `https://5.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;
const UNAUTHORIZED_ERROR = 401;

export const createApi = (onUnauthorized) => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    const {response} = error;

    if (response.status === UNAUTHORIZED_ERROR) {
      onUnauthorized();
      throw error;
    }
    throw error;
  };

  // перехватчики axios
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
