import axios from 'axios';

import API from './apiUrl';
import { getItem } from '../../utility/localStorageControl';

const API_URL = API;

const fetchAllDocuments = employeeId => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-all-employee-documents-by-client-id-employee-id/${employeeId}`, header);
};

const fetchSingleDocument = id => {
  const header = { headers: { Authorization: `Bearer ${getItem('access_token')}` } };
  return axios.get(`${API_URL}/v1/get-one-document-by-client-id/${id}`, header);
};

export { fetchAllDocuments, fetchSingleDocument };
