'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../../components/login/login.css';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // --- THIS IS THE NEW LOGIN HANDLER ---
    const handleLogin = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        try {
            // 1. Send the user's email and password to the backend login endpoint.
            const res = await fetch('https://medlist-backend.vercel.app/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                // 2. If the login is successful, the backend sends back user data. We save this in localStorage to create a "session".
                localStorage.setItem('user', JSON.stringify(data));
                
                alert(`Welcome back, ${data.fullName}!`);
                
                // 3. Redirect the now-logged-in user to their profile page.
                router.push('/profile');
            } else {
                // 4. If the backend returns an error (e.g., "Invalid password"), display it.
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert(`Login failed: ${error.message}`);
        }
    };

    const handleGoogleLogin = () => {
        alert('Google Sign-In is not yet implemented.');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Welcome Back!</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
                
                <div className="divider">
                    <span>OR</span>
                </div>
                
                <button onClick={handleGoogleLogin} className="google-login-btn">
                    <div className="google-icon">
                        {/* SVG Icon */}
                    </div>
                    Sign in with Google
                </button>
                
                <div className="extra-links">
                    <Link href="#">Forgot Password?</Link>
                    <span className="separator">|</span>
                    {/* Fixed Apostrophe */}
                    <Link href="/signup">Don&apos;t have an account? Sign Up</Link>
                </div>
            </div>
        </div>
    );
}