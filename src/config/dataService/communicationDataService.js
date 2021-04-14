import axios from 'axios';

import API from './apiUrl';
import { getItem } from '../../utility/localStorageControl';

const API_URL = API;

const fetchAllCommunications = employeeId => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-all-communications-by-client-id-employee-id/${employeeId}`, header);
};

const fetchSingleCommunication = id => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-one-communication-by-client-id/${id}`, header);
};

export { fetchAllCommunications, fetchSingleCommunication };
