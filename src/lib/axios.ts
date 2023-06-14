import axios from 'axios';

//CONFIGURA A API GLOBALMENTE
export const api = axios.create({
  baseURL: 'http://10.0.0.174:3000/api'
})