/*import axios from 'axios';
import { getItem } from '../../utility/localStorageControl';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const authHeader = () => ({
  Authorization: `Bearer ${getItem('access_token')}`,
});

const client = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    Authorization: `Bearer ${getItem('access_token')}`,
    'Content-Type': 'application/json',
  },
});

class DataService {
  static get(path = '') {
    return client({
      method: 'GET',
      url: path,
      headers: { ...authHeader() },
    });
  }

  static post(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static patch(path = '', data = {}) {
    return client({
      method: 'PATCH',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }

  static put(path = '', data = {}) {
    return client({
      method: 'PUT',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }
}


client.interceptors.request.use(config => {
  // do something before executing the request
  // For example tag along the bearer access token to request header or set a cookie
  const requestConfig = config;
  const { headers } = config;
  requestConfig.headers = { ...headers, Authorization: `Bearer ${getItem('access_token')}` };

  return requestConfig;
});

client.interceptors.response.use(
  response => response,
  error => {

    const { response } = error;
    const originalRequest = error.config;
    if (response) {
      if (response.status === 500) {
        // do something here
      } else {
        return originalRequest;
      }
    }
    return Promise.reject(error);
  },
);
export { DataService };
*/

import axios from 'axios';

import { setItem, getItem } from '../../utility/localStorageControl';
const API_URL = "http://localhost:8080/api";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "/authenticate", {
      username,
      password,
    })
    .then((response) => {
      let jwt;
      const bearerToken = response.headers.authorization;
      if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
         jwt = bearerToken.slice(7, bearerToken.length);
         setItem("access_token", jwt);
   
      }

      return jwt;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getAccount = () => {
  let header = {headers : { Authorization: 'Bearer ' + getItem("access_token") }};
  return axios.get(API_URL + "/account",header);
}

export default {
  register,
  login,
  logout,
  getAccount
};