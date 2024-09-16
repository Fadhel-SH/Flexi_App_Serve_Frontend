import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

export const login = async (credentials) => {
    return await axios.post(`${API_URL}login`, credentials);
};

export const register = async (userData) => {
    return await axios.post(`${API_URL}register`, userData);
};

export const callback = async (userData) => {
    console.log(userData)
    return await axios.post(`${API_URL}callback`, userData);
};