'use client';

import React, { useState } from 'react';
import Navbar from '../Navbar';
import QRCodeModal from './QRCodeModal';
import '../../components/donation/donation.css';
import { useRouter } from 'next/navigation';

export default function Donation() {
    const [selectedAmount, setSelectedAmount] = useState(500);
    const [formData, setFormData] = useState({ fullName: '', email: '' });
    const [showQRModal, setShowQRModal] = useState(false);
    const router = useRouter();

    const handleAmountChange = (amount) => {
        setSelectedAmount(amount);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDonate = async (e) => {
        e.preventDefault();
        
        if (!formData.fullName || !formData.email) {
            alert('Please enter your full name and email.');
            return;
        }
        
        setShowQRModal(true); // Show the QR modal for payment
    };

    const handlePaymentSuccess = async () => {
        const donationData = {
            ...formData,
            amount: selectedAmount
        };

        try {
            const res = await fetch('http://localhost:5000/api/donations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(donationData)
            });

            const data = await res.json();

            if (res.ok) {
                setShowQRModal(false);
                alert(`Thank you, ${formData.fullName}, for your generous donation of ₹${selectedAmount}! Your contribution has been recorded.`);
                router.push('/');
            } else {
                throw new Error(data.message || 'Donation failed. Please try again.');
            }
        } catch (error) {
            console.error('Donation error:', error);
            alert(`An error occurred: ${error.message}`);
        }
    };

    return (
        <div className="donation-page">
            <Navbar />
            <QRCodeModal
                show={showQRModal}
                onClose={() => setShowQRModal(false)}
                amount={selectedAmount}
                paymentFor={`Donation to Support Healthcare`}
                onPaymentSuccess={handlePaymentSuccess}
            />
            <div className="donation-container">
                <div className="donation-info">
                    <h1>Support Our Cause</h1>
                    <p>
                        Your contribution can make a significant difference. By donating, you help us provide
                        essential medical care, organize health camps in underserved communities, and
                        offer free medicines to those who cannot afford them.
                    </p>
                    {/* Fixed: Replaced ' with &apos; */}
                    <h3>Your Donation&apos;s Impact:</h3>
                    <ul className="impact-list">
                        <li><strong>₹500:</strong> Provides a consultation and medicines for one patient.</li>
                        {/* Fixed: Replaced ' with &apos; */}
                        <li><strong>₹1000:</strong> Supports a child&apos;s vaccination for a year.</li>
                        <li><strong>₹2500:</strong> Funds a basic health check-up for a family of four.</li>
                    </ul>
                </div>

                <div className="donation-form-card">
                    <h2>Make a Donation</h2>
                    <form onSubmit={handleDonate}>
                        <div className="form-group">
                            <label>Choose an Amount (₹)</label>
                            <div className="amount-options">
                                {[500, 1000, 2500].map((amount) => (
                                    <button
                                        type="button"
                                        key={amount}
                                        className={`amount-btn ${selectedAmount === amount ? 'selected' : ''}`}
                                        onClick={() => handleAmountChange(amount)}
                                    >
                                        {amount}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" className="form-input" onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" className="form-input" onChange={handleInputChange} required />
                        </div>
                        <button type="submit" className="donate-btn">Donate Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}