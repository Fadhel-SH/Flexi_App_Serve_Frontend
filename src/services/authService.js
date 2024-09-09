// src/services/authService.js

const API_URL = '/api/auth'; // Adjust based on your backend API URL

const login = async (token) => {
    try {
        const response = await fetch(`${API_URL}/callback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
        return data; // Return user data
    } catch (error) {
        console.error(error);
        throw error; // Rethrow error for handling in the component
    }
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export default {
    login,
    logout,
    getCurrentUser,
};