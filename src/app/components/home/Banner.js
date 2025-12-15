'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Banner = () => {
    const [speciality, setSpeciality] = useState('');
    const [location, setLocation] = useState('');
    const router = useRouter();

    const handleSpecialityChange = (e) => {
        setSpeciality(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleSubmit = () => {
        if (speciality) {
            localStorage.setItem('selectedSpecialty', speciality);
            router.push('/doctorsec');
        } else {
            alert('Please select a speciality first.');
        }
    };

    const specialities = [
        "Cardiologist", "Dermatologist", "General Physician", "Orthopedic Surgeon",
        "Pediatrician", "Gynecologist", "Neurologist", "Psychiatrist",
        "ENT Specialist", "Gastroenterologist"
    ];

    const locations = [
        "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata",
        "Hyderabad", "Pune", "Ahmedabad", "Jaipur"
    ];

    return (
        <section className="integrated-banner">
            <div className="banner-section">
                <div className="banner-text">
                    <h1>Find the right doctor for your ailments</h1>
                    <p>📞 Call +91-8040245807 to book an appointment</p>
                </div>
                <div className="banner-image">
                    <Image src="/image/16 img.jpg" alt="Doctors" width={200} height={130} />
                </div>
            </div>
            
            <div className="find-doctor-section">
                <h3>Book Your Doctor in easy steps</h3>
                <div className="steps-container">
                    <div className="step">
                        <label htmlFor="speciality">Select Speciality</label>
                        <select 
                            id="speciality" 
                            value={speciality} 
                            onChange={handleSpecialityChange}
                            suppressHydrationWarning={true} // <-- ADD THIS
                        >
                            <option value="" disabled>Enter Speciality</option>
                            {specialities.map(spec => (
                                <option key={spec} value={spec}>{spec}</option>
                            ))}
                        </select>
                    </div>

                    <div className="step">
                        <label htmlFor="date">Select Date</label>
                        <input type="date" id="date" defaultValue="2025-03-23" />
                    </div>

                    <div className="step">
                        <label htmlFor="location">Preferred Location/Pincode</label>
                        <input
                            type="text"
                            id="location"
                            list="location-list"
                            placeholder="Search location"
                            value={location}
                            onChange={handleLocationChange}
                            suppressHydrationWarning={true} // <-- ADD THIS
                        />
                        <datalist id="location-list">
                            {locations.map(loc => (
                                <option key={loc} value={loc} />
                            ))}
                        </datalist>
                    </div>
                </div>
                <button 
                    className="submit-btn" 
                    onClick={handleSubmit}
                    suppressHydrationWarning={true} // <-- ADD THIS
                >
                    Submit
                </button>
            </div>
        </section>
    );
};

export default Banner;