'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import '../../components/labtest/labtest.css';
import { mockLabTests } from '../../utils/mockData'; // Import mock data

export default function LabTest() {
    const router = useRouter();
    const [labTests, setLabTests] = useState([]);

    useEffect(() => {
        const fetchLabTests = async () => {
            try {
                const res = await fetch('https://medlist-backend.vercel.app/api/lab-tests');
                const data = await res.json();
                // Use API data if available, otherwise use mock data
                if (data && data.length > 0) {
                    setLabTests(data);
                } else {
                    setLabTests(mockLabTests);
                }
            } catch (error) {
                console.error("Failed to fetch lab tests, using mock data:", error);
                // Use mock data as fallback
                setLabTests(mockLabTests);
            }
        };
        fetchLabTests();
    }, []);

    const handleBookNow = (testName) => {
        // Store the selected test name in localStorage to pass it to the form page
        localStorage.setItem('selectedTest', testName);
        router.push('/form');
    };

    return (
        <div className="lab-test-page">
            <Navbar />
            <section className="hero-section">
                <h1>Book Lab Tests Online</h1>
                <p>Convenient, reliable, and accurate tests from the comfort of your home.</p>
            </section>
            <main className="main-content">
                <h2 className="section-title">Popular Health Packages</h2>
                <div className="test-grid">
                    {labTests.map(test => (
                        <div key={test._id} className="test-card">
                            <h3>{test.name}</h3>
                            <p className="test-price">₹{test.price.toFixed(2)}</p>
                            <button className="book-now-btn" onClick={() => handleBookNow(test.name)}>
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
