import axios from 'axios';

import API from './apiUrl';
import { setItem, getItem } from '../../utility/localStorageControl';

const API_URL = API;

const register = (username, email, password) => {
  return axios.post(`${API_URL}signup`, {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(`${API_URL}/authenticate`, {
      username,
      password,
    })
    .then(response => {
      let jwt;
      const bearerToken = response.headers.authorization;
      if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        jwt = bearerToken.slice(7, bearerToken.length);
        setItem('access_token', jwt);
      }

      return jwt;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getAccount = () => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/account`, header);
};

export default {
  register,
  login,
  logout,
  getAccount,
};
