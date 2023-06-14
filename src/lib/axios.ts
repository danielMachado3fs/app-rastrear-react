import axios from 'axios';

//CONFIGURA A API GLOBALMENTE
export const api = axios.create({
  baseURL: 'http://192.168.50.250:3000/api'
})