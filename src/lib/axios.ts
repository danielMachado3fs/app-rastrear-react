import axios from 'axios';

//CONFIGURA BASE_URL DA API
export const api = axios.create({
  baseURL: 'http://192.168.10.2:3000/api'
})