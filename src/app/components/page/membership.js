'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import '../../components/membership/membership.css';
import { mockMembershipPlans } from '../../utils/mockData';

export default function Membership() {
    const router = useRouter();

    const handleSelectPlan = (plan) => {
        localStorage.setItem('selectedPlan', JSON.stringify(plan));
        router.push('/membership-signup');
    };

    return (
        <div className="membership-page">
            <Navbar />
            <div className="membership-container">
                <header className="membership-header">
                    <h1>Choose Your Membership Plan</h1>
                    <p>Get exclusive benefits and save on healthcare services</p>
                </header>
                <div className="plans-grid">
                    {mockMembershipPlans.map((plan, index) => (
                        <div key={index} className={`plan-card ${plan.planName.toLowerCase()}`}>
                            <div className="plan-header">
                                <h2>{plan.planName}</h2>
                                <div className="plan-price">
                                    <span className="currency">₹</span>
                                    <span className="amount">{plan.price}</span>
                                    <span className="period">/year</span>
                                </div>
                            </div>
                            <div className="plan-benefits">
                                <ul>
                                    {plan.benefits.map((benefit, idx) => (
                                        <li key={idx}>
                                            <span className="check-icon">✓</span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                className="choose-plan-btn"
                                onClick={() => handleSelectPlan(plan)}
                            >
                                Choose {plan.planName}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}