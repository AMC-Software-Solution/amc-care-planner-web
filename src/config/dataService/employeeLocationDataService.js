import axios from 'axios';

import API from './apiUrl';
import { getItem } from '../../utility/localStorageControl';

const API_URL = API;

const fetchAllEmployeeLocations = () => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-all-employee-locations-by-client-id`, header);
};

const fetchSingleEmployeeLocation = id => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-employee-location-by-client-id-employee-id/${id}`, header);
};

export { fetchSingleEmployeeLocation, fetchAllEmployeeLocations };
