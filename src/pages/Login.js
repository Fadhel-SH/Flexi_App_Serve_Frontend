import React, { useState } from 'react';
// import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { login } from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            console.log('Login success:', response.data);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const responseGoogle = (response) => {
        console.log(response);
        // Send the response token to your backend for further handling
        // Example using fetch to send the token
        fetch('/api/auth/callback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: response.tokenId }),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // Handle successful login
        })
        .catch(err => {
            console.error(err);
        });
    };



    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                required 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
            />
            <button type="submit">Login</button>
            <GoogleLogin
                clientId="your_google_client_id" // Use your Google client ID
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </form>
    );
};

export default Login;