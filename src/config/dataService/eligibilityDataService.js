import axios from 'axios';

import API from './apiUrl';
import { getItem } from '../../utility/localStorageControl';

const API_URL = API;

const fetchAllBranches = () => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get_eligibilities_by_client_id`, header);
};

const fetchSingleBranch = id => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get_eligibilities_by_client_id/${id}`, header);
};

export { fetchAllBranches, fetchSingleBranch };
