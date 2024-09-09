// src/pages/Profile.js

import React from 'react';
import authService from '../services/authService';

const Profile = () => {
    const user = authService.getCurrentUser();

    if (!user) {
        return <p>Please log in to view your profile.</p>;
    }

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <img src={user.thumbnail} alt="Profile" />
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;