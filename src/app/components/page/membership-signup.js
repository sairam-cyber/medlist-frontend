'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import QRCodeModal from './QRCodeModal'; // Import the modal
import '../../components/membership/membership-signup.css';

export default function MembershipSignup() {
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '', address: ''
    });
    const [showQRModal, setShowQRModal] = useState(false); // State for the modal

    useEffect(() => {
        const planData = localStorage.getItem('selectedPlan');
        if (planData) {
            setSelectedPlan(JSON.parse(planData));
        } else {
            router.push('/membership');
        }
    }, [router]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedPlan) return;
        // Basic validation
        if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
            alert('Please fill out all fields.');
            return;
        }
        setShowQRModal(true);
    };

    const handlePaymentSuccess = async () => {
        setShowQRModal(false);
        const subscriptionData = {
            ...formData,
            planName: selectedPlan.planName,
            price: selectedPlan.price,
        };

        try {
            const res = await fetch('http://localhost:5000/api/memberships/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(subscriptionData)
            });

            const data = await res.json();
            if (res.ok) {
                alert(`Payment successful! Subscription to ${selectedPlan.planName} plan is active.`);
                localStorage.removeItem('selectedPlan');
                router.push('/');
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            alert(`Subscription failed: ${error.message}`);
        }
    };

    if (!selectedPlan) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <QRCodeModal
                show={showQRModal}
                onClose={() => setShowQRModal(false)}
                amount={selectedPlan.price}
                paymentFor={`Medlist ${selectedPlan.planName} Plan`}
                onPaymentSuccess={handlePaymentSuccess}
            />
            <div className="membership-signup-page">
                {/* ... Rest of your membership signup JSX remains the same ... */}
                 <div className="signup-form-container">
                    <div className="signup-form-header">
                        <h1>Complete Your Membership</h1>
                        {selectedPlan && (
                            <div className="selected-plan-info">
                                {/* Fixed: Replaced ' with &apos; */}
                                <h3>You&apos;ve selected the <strong>{selectedPlan.planName}</strong> plan for ₹{selectedPlan.price}/year</h3>
                            </div>
                        )}
                    </div>
                    <form onSubmit={handleSubmit} className="membership-form">
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" name="fullName" onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" onChange={handleChange} required />
                            </div>
                            <div className="form-group full-width">
                                <label htmlFor="address">Full Address</label>
                                <textarea id="address" name="address" rows="3" onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-actions">
                            <button type="button" className="cancel-btn" onClick={() => router.push('/membership')}>Cancel</button>
                            <button type="submit" className="submit-btn">Submit & Proceed to Pay</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}