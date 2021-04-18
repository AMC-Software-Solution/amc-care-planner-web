import axios from 'axios';

import API from './apiUrl';
import { getItem } from '../../utility/localStorageControl';

const API_URL = API;

const fetchAllServiceUsers = () => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-all-service-users-by-client-id`, header);
};

const fetchSingleServiceUser = employeeId => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-all-service-users-by-client-id-employee-id/${employeeId}`, header);
};

export { fetchAllServiceUsers, fetchSingleServiceUser };
