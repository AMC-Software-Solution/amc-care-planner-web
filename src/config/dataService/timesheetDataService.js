import axios from 'axios';

import API from './apiUrl';
import { getItem } from '../../utility/localStorageControl';

const API_URL = API;

const fetchAllTimesheets = employeeId => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-all-timesheet-by-client-id-employee-id/${employeeId}`, header);
};

const fetchSingleTimesheet = id => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-one-timesheet-by-client-id/${id}`, header);
};

export { fetchAllTimesheets, fetchSingleTimesheet };
