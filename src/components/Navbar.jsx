// src/components/Navbar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/stylesheet.css';
import authService from '../services/authService'; 

export default function Navbar({ user, setUser }) {
    const navigate = useNavigate();

    async function signout() {
        try {
            console.log('signing out');
            await authService.logout(); 
            setUser('');
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className="navbar">
            <div className="logo">My App</div>
            <ul className="nav-links">
                {user ? (
                    <>
                        <Link to={`${user.id}/Profile`}>Profile</Link>
                        <button className='but-Sign-Out' onClick={signout}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <li><Link to="/#">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/Register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}