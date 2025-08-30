'use client'; 

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../../components/sinup/sinup.css';

export default function SignUp() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log('Form submission prevented.');

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        console.log('Passwords match. Preparing to send data...');
        
        try {
            console.log('Attempting to send request to backend...');
            
            const res = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            console.log('Backend response received:', res); 

            const data = await res.json();
            console.log('Response data parsed:', data);

            if (res.ok) {
                alert(`Account created successfully for ${data.fullName}! You will be redirected to the login page.`);
                router.push('/login');
            } else {
                alert(`Signup failed: ${data.message}`);
            }
        } catch (error) {
            console.error('An error occurred during the signup fetch call:', error);
            alert('An error occurred. Check the console for details. Could not connect to the server.');
        }
    };

    const handleGoogleSignup = () => {
        alert('Google Sign-up is not yet implemented.');
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h1>Create Your Account</h1>
                <form onSubmit={handleSignUp}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="form-input"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="form-input"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* --- NEW: Added onClick for debugging --- */}
                    <button 
                        type="submit" 
                        className="signup-btn"
                        onClick={() => console.log('Sign Up button was clicked!')}
                    >
                        Sign Up
                    </button>
                </form>
                
                <div className="divider">
                    <span>OR</span>
                </div>
                
                <button onClick={handleGoogleSignup} className="google-signup-btn">
                    <div className="google-icon">
                        {/* SVG content */}
                    </div>
                    Sign up with Google
                </button>
                
                <div className="login-link">
                    <p>
                        Already have an account? <Link href="/login">Log In</Link>
                    </p>
                </div>
                <div className="guest-option">
                    <Link href="/" className="guest-link">
                        Continue as Guest
                    </Link>
                </div>
            </div>
        </div>
    );
}