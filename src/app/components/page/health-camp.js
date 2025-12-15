'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import '../../components/health-camp/health-camp.css';
import Image from 'next/image';
import { mockHealthCamps } from '../../utils/mockData';

export default function HealthCamp() {
    const router = useRouter();
    const [camps, setCamps] = useState([]);

    useEffect(() => {
        const fetchCamps = async () => {
            try {
                const res = await fetch('https://medlist-backend.vercel.app/api/health-camps');
                const data = await res.json();
                // Use API data if available, otherwise use mock data
                if (data && data.length > 0) {
                    setCamps(data);
                } else {
                    setCamps(mockHealthCamps);
                }
            } catch (error) {
                console.error("Failed to fetch health camps, using mock data:", error);
                // Use mock data as fallback
                setCamps(mockHealthCamps);
            }
        };
        fetchCamps();
    }, []);

    const handleRegister = (camp) => {
        localStorage.setItem('selectedCamp', JSON.stringify(camp));
        router.push('/health-camp-registration');
    };

    return (
        <div className="health-camp-page">
            <Navbar />
            <header className="camp-header">
                <Image
                    src="/image/health-camp-banner.jpg"
                    alt="Health Camp"
                    className="header-image"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div className="header-text">
                    <h1>Our Health Camps</h1>
                    <p>Bringing healthcare closer to the community.</p>
                </div>
            </header>
            <main className="main-camp-content">
                <h2 className="section-title">Upcoming Camps</h2>
                <div className="camps-grid">
                    {camps.map((camp) => (
                        <div key={camp._id} className="camp-card-simple">
                            <div className="camp-card-content">
                                <h3>{camp.title}</h3>
                                <div className="camp-details">
                                    <p className="camp-location">
                                        <span className="icon">📍</span>
                                        {camp.location}
                                    </p>
                                    <p className="camp-date">
                                        <span className="icon">🗓️</span>
                                        {camp.date}
                                    </p>
                                    {camp.time && (
                                        <p className="camp-time">
                                            <span className="icon">🕒</span>
                                            {camp.time}
                                        </p>
                                    )}
                                    {camp.description && (
                                        <p className="camp-description">{camp.description}</p>
                                    )}
                                </div>
                                <button className="register-btn" onClick={() => handleRegister(camp)}>
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}