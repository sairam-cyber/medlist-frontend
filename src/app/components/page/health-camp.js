'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import '../../components/health-camp/health-camp.css';
import Image from 'next/image'; // Import Image

export default function HealthCamp() {
    const router = useRouter();
    const [camps, setCamps] = useState([]);

    useEffect(() => {
        const fetchCamps = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/health-camps');
                const data = await res.json();
                setCamps(data);
            } catch (error) {
                console.error("Failed to fetch health camps:", error);
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
                {/* Fixed Image 1 */}
                <Image 
                    src="/image/00 img.jpg" 
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
                        <div key={camp._id} className="camp-card">
                            {/* Fixed Image 2 */}
                            <Image 
                                src={camp.image} 
                                alt={camp.title} 
                                className="camp-card-image" 
                                width={300} 
                                height={200}
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="camp-card-content">
                                <h3>{camp.title}</h3>
                                <p>📍 {camp.location}</p>
                                <p>🗓️ {camp.date}</p>
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