import React from 'react';

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user info from localStorage
        window.location.href = '/'; // Redirect to home page
    };

    return (
        <div>
            <h2>You have been logged out.</h2>
            <button onClick={handleLogout}>Go to Home</button>
        </div>
    );
};

export default Logout;