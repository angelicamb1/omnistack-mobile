import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackangel.herokuapp.com',
});

export default api;
