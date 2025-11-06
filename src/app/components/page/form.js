'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import '../../components/form/form.css';

export default function AppointmentForm() {
    const router = useRouter();
    // Your original state structure is kept the same
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        appointmentDate: '',
        gender: '',
        reasonForVisit: '',
    });

    const [selectedTest, setSelectedTest] = useState('');

    useEffect(() => {
        const test = localStorage.getItem('selectedTest');
        if (test) {
            setSelectedTest(test);
            // Pre-fill the reason for visit, just like in your original code
            setFormData(prev => ({
                ...prev,
                reasonForVisit: `Lab Test: ${test}`
            }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // --- THIS IS THE UPDATED SUBMIT FUNCTION ---
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        for (const key in formData) {
            if (formData[key] === '') {
                alert('Please fill out all fields.');
                return;
            }
        }

        // This is the data object that will be sent to the backend.
        // It matches the backend 'labTestBookingModel'.
        const bookingData = {
            ...formData,
            testName: selectedTest, // Include the selected test name
        };

        try {
            // The fetch call to your backend API endpoint
            const res = await fetch('https://medlist-backend.vercel.app/api/lab-tests/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData),
            });

            const data = await res.json();

            if (res.ok) {
                alert(`Appointment for "${selectedTest}" booked successfully!`);
                localStorage.removeItem('selectedTest'); // Clean up localStorage on success
                router.push('/labtest'); // Redirect back to the lab test page
            } else {
                // If the backend returns an error, display it
                throw new Error(data.message || 'Booking failed. Please try again.');
            }
        } catch (error) {
            console.error('Booking error:', error);
            alert(`An error occurred: ${error.message}`);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="form-page-container">
                <div className="form-wrapper">
                    <h1>Book an Appointment</h1>
                    {selectedTest && (
                        <div style={{ 
                            backgroundColor: '#e8f5e8', 
                            padding: '10px', 
                            borderRadius: '5px', 
                            marginBottom: '20px',
                            border: '1px solid #4caf50'
                        }}>
                            <strong>Selected Test:</strong> {selectedTest}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" name="fullName" className="form-input" value={formData.fullName} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" className="form-input" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="appointmentDate">Preferred Date</label>
                                <input type="date" id="appointmentDate" name="appointmentDate" className="form-input" value={formData.appointmentDate} onChange={handleChange} required/>
                            </div>
                            <div className="form-group full-width">
                                <label htmlFor="gender">Gender</label>
                                <select id="gender" name="gender" className="form-select" value={formData.gender} onChange={handleChange} required>
                                    <option value="" disabled>Select your gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group full-width">
                                <label htmlFor="reasonForVisit">Reason for Visit</label>
                                <textarea id="reasonForVisit" name="reasonForVisit" className="form-textarea" value={formData.reasonForVisit} onChange={handleChange} required></textarea>
                            </div>
                        </div>
                        <button type="submit" className="submit-btn">
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}