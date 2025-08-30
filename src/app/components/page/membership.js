'use client';

import React from 'react';
import Navbar from '../Navbar';
import '../../components/membership/membership.css';
import { useRouter } from 'next/navigation';

export default function Membership() {
    const router = useRouter();

    // This function now saves the selected plan and navigates to the form
    const handleChoosePlan = (planName, price) => {
        const selectedPlan = { planName, price };
        // Use localStorage to pass the selected plan data to the next page
        localStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));
        // Navigate to our new signup form page
        router.push('/membership-signup');
    };

    return (
        <div className="membership-page">
            <Navbar />
            <header className="membership-header">
                <h1>Medlist Circle Membership</h1>
                <p>
                    Join our exclusive membership program to get the best prices on medicines,
                    priority access to doctors, and a wide range of health benefits for your entire family.
                </p>
            </header>

            <main className="pricing-section">
                {/* Basic Plan */}
                <div className="pricing-card">
                    <div className="card-header">
                        <h3>Basic</h3>
                        <p className="price">₹499<span>/year</span></p>
                    </div>
                    <ul className="features-list">
                        <li>Up to 10% off on medicines</li>
                        <li>Free standard delivery</li>
                        <li>Basic health consultations</li>
                        <li>Access to health articles</li>
                    </ul>
                    <button className="choose-plan-btn btn-secondary" onClick={() => handleChoosePlan('Basic', 499)}>
                        Choose Plan
                    </button>
                </div>

                {/* Plus Plan */}
                <div className="pricing-card popular">
                    <div className="popular-badge">Most Popular</div>
                    <div className="card-header">
                        <h3>Plus</h3>
                        <p className="price">₹999<span>/year</span></p>
                    </div>
                    <ul className="features-list">
                        <li>Up to 20% off on medicines</li>
                        <li>Free express delivery</li>
                        <li>Unlimited doctor consultations</li>
                        <li>2 free lab tests per year</li>
                        <li>Priority customer support</li>
                    </ul>
                    <button className="choose-plan-btn btn-primary" onClick={() => handleChoosePlan('Plus', 999)}>
                        Choose Plan
                    </button>
                </div>

                {/* Premium Plan */}
                <div className="pricing-card">
                    <div className="card-header">
                        <h3>Premium</h3>
                        <p className="price">₹1499<span>/year</span></p>
                    </div>
                    <ul className="features-list">
                        <li>Up to 30% off on medicines</li>
                        <li>Free express delivery</li>
                        <li>Unlimited specialist consultations</li>
                        <li>Full body check-up per year</li>
                        <li>Dedicated health manager</li>
                    </ul>
                    <button className="choose-plan-btn btn-secondary" onClick={() => handleChoosePlan('Premium', 1499)}>
                        Choose Plan
                    </button>
                </div>
            </main>
        </div>
    );
}