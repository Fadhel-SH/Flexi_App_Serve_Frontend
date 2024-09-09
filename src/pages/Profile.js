import React from 'react';

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user')); 

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <img src={user.thumbnail} alt="Profile" />
            <p>Email: {user.email}</p>
            {/* Add more user-specific information as needed */}
        </div>
    );
};

export default Profile;