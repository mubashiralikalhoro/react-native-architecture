import axios from 'axios';
import endPoints from '../constants/apiEndPoints';

// setup base thing
const api = axios.create({
  baseURL: endPoints.BASE_URL,
  responseType: 'json',
  headers: { 'Content-Type': 'application/json' },
});

export default api;
