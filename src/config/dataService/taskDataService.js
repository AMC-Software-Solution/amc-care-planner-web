import axios from 'axios';

import API from './apiUrl';
import { getItem } from '../../utility/localStorageControl';

const API_URL = API;

const fetchAllTasks = employeeId => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-all-tasks-by-client-id-employee-id/${employeeId}`, header);
};

const fetchSingleTask = id => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-one-task-by-client-id/${id}`, header);
};

export { fetchAllTasks, fetchSingleTask };
