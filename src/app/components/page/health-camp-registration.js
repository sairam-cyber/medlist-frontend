'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import '../../components/health-camp/health-camp.css';

export default function HealthCampRegistration() {
    const router = useRouter();
    const [selectedCamp, setSelectedCamp] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '', age: '', gender: '', address: ''
    });

    useEffect(() => {
        const campData = localStorage.getItem('selectedCamp');
        if (campData) {
            setSelectedCamp(JSON.parse(campData));
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedCamp) {
            alert("No camp selected. Please go back and choose a camp.");
            return;
        }

        try {
            const registrationData = {
                ...formData,
                campId: selectedCamp._id,
                campName: selectedCamp.title,
                age: Number(formData.age)
            };

            const res = await fetch('http://localhost:5000/api/health-camps/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registrationData),
            });

            const data = await res.json();

            if (res.ok) {
                alert(`Registration successful for ${selectedCamp.title}!`);
                localStorage.removeItem('selectedCamp');
                router.push('/health-camp');
            } else {
                alert(`Registration failed: ${data.message}`);
            }
        } catch (error) {
            // Fixed: Use the 'error' variable to log it
            console.error("Registration failed:", error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="health-camp-registration-page">
            <Navbar />
            <div className="registration-container">
                <div className="registration-header">
                    <h1>Health Camp Registration</h1>
                    {selectedCamp && (
                        <div className="selected-camp-info">
                            <h3>Registering for: {selectedCamp.title}</h3>
                        </div>
                    )}
                </div>
                <form onSubmit={handleSubmit} className="registration-form">
                    <div className="form-section">
                        <h3>Personal Information</h3>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input type="text" name="fullName" onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Email Address *</label>
                                <input type="email" name="email" onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number *</label>
                                <input type="tel" name="phone" onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Age *</label>
                                <input type="number" name="age" onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Gender *</label>
                                <select name="gender" onChange={handleChange} required>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group full-width">
                                <label>Address *</label>
                                <textarea name="address" onChange={handleChange} required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="submit-btn">Submit Registration</button>
                        <button type="button" className="cancel-btn" onClick={() => router.push('/health-camp')}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}