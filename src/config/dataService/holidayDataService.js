import axios from 'axios';

import API from './apiUrl';
import { getItem } from '../../utility/localStorageControl';

const API_URL = API;

const fetchAllHolidays = employeeId => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-all-employee-holidays-by-client-id-employee-id/${employeeId}`, header);
};

const fetchSingleHoliday = id => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-one-employee-holiday-by-client-id/${id}`, header);
};

export { fetchAllHolidays, fetchSingleHoliday };
