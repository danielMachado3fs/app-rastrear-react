import axios from 'axios';

//CONFIGURA A API GLOBALMENTE
export const api = axios.create({
  baseURL: 'http:192.168.10.35:3306'
})