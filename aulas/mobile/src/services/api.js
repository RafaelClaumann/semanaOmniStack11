import axios from 'axios';

const api = axios.create({
    baseURL: '192.168.50.127:3333'
});

export default api;