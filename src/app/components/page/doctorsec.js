'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import '../../components/doctorsec/doctorsec.css';
import { useRouter } from 'next/navigation'; // Make sure useRouter is imported
import Image from 'next/image'; // Import Image

export default function DoctorSec() {
    // ... (rest of your state and useEffects) ...
    const [allDoctors, setAllDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [filters, setFilters] = useState({
        consultationType: '',
        experience: '',
        fees: '',
        language: '',
        rating: ''
    });
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [showAppointmentModal, setShowAppointmentModal] = useState(false);
    
    const [selectedSlot, setSelectedSlot] = useState({ day: null, time: null });

    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [hasMounted, setHasMounted] = useState(false);
    const router = useRouter(); // Initialize router

    useEffect(() => {
        setHasMounted(true);

        const fetchDoctors = async () => {
            try {
                const res = await fetch('https://medlist-backend.vercel.app/api/doctors');
                const data = await res.json();
                setAllDoctors(data);
            } catch (error) {
                console.error("Failed to fetch doctors:", error);
            }
        };

        fetchDoctors();

        const specialtyFromStorage = localStorage.getItem('selectedSpecialty');
        if (specialtyFromStorage) {
            setSelectedSpecialty(specialtyFromStorage);
        }
    }, []);

    useEffect(() => {
        let doctorsToFilter = [...allDoctors];

        if (selectedSpecialty) {
            const specialtyMapping = {
                'Obstetrics & Gynaecology': 'Gynecologist',
                'Orthopaedics': 'Orthopedic Surgeon',
                'ENT': 'ENT Specialist',
                'Gastroenterology/GI medicine': 'Gastroenterologist',
                'Paediatrics': 'Pediatrician',
                'Pulmonology/Respiratory': 'Pulmonologist',
                'Infection Disease': 'Infectious Disease Specialist'
            };
            const mappedSpecialty = specialtyMapping[selectedSpecialty] || selectedSpecialty;
            doctorsToFilter = doctorsToFilter.filter(doc => doc.specialty.toLowerCase() === mappedSpecialty.toLowerCase());
        }

        if (filters.consultationType) {
            doctorsToFilter = doctorsToFilter.filter(doctor => doctor.consultationType === filters.consultationType || doctor.consultationType === 'Both');
        }
        if (filters.experience) {
            doctorsToFilter = doctorsToFilter.filter(doctor => parseInt(doctor.experience) >= parseInt(filters.experience));
        }
        if (filters.fees) {
            doctorsToFilter = doctorsToFilter.filter(doctor => parseInt(doctor.fees.replace('₹', '')) <= parseInt(filters.fees));
        }
        if (filters.language) {
            doctorsToFilter = doctorsToFilter.filter(doctor => doctor.languages.includes(filters.language));
        }
        if (filters.rating) {
            doctorsToFilter = doctorsToFilter.filter(doctor => doctor.rating >= parseFloat(filters.rating));
        }

        setFilteredDoctors(doctorsToFilter);

    }, [filters, selectedSpecialty, allDoctors]);

    const getUniqueLanguages = () => {
        const allLangs = allDoctors.flatMap(doc => doc.languages);
        return [...new Set(allLangs)].sort();
    };

    const handleFilterChange = (filterType, value) => setFilters(prev => ({ ...prev, [filterType]: value }));
    const clearFilters = () => {
        setFilters({ consultationType: '', experience: '', fees: '', language: '', rating: '' });
        setSelectedSpecialty('');
        localStorage.removeItem('selectedSpecialty');
    };

    const handleBookAppointment = (doctor) => {
        setSelectedDoctor(doctor);
        setShowAppointmentModal(true);
    };

    const handleSlotSelection = (day, time) => {
        setSelectedSlot({ day, time });
    };

    const handleCancel = () => {
        setShowAppointmentModal(false);
        setSelectedDoctor(null);
        setSelectedSlot({ day: null, time: null });
    };

    const handlePayment = () => {
        if (selectedSlot.day && selectedSlot.time) {
            const appointmentDetails = {
                doctor: selectedDoctor,
                slot: `${selectedSlot.day} at ${selectedSlot.time}`, // Combine for display
            };
            localStorage.setItem('appointmentDetails', JSON.stringify(appointmentDetails));
            router.push('/appointment');
        } else {
            alert('Please select a time slot first.');
        }
    };

    if (!hasMounted) {
        return null;
    }

    return (
        <div className="doctor-listing-page">
            <Navbar />
            <div className="listing-container">
                {/* ... (header and filters) ... */}
                <header className="listing-header">
                    <h1>{selectedSpecialty || 'All Specialists'}</h1>
                    <p>Find the right specialist for your health needs</p>
                </header>
                <div className="main-content">
                    <div className="filter-sidebar">
                        <h3>Filters</h3>
                        <div className="filter-section">
                            <label>Language</label>
                            <select value={filters.language} onChange={(e) => handleFilterChange('language', e.target.value)}>
                                <option value="">Any</option>
                                {getUniqueLanguages().map(lang => <option key={lang} value={lang}>{lang}</option>)}
                            </select>
                        </div>
                        <div className="filter-section">
                            <label>Consultation Type</label>
                            <select value={filters.consultationType} onChange={(e) => handleFilterChange('consultationType', e.target.value)}>
                                <option value="">All</option>
                                <option value="Hospital">Hospital</option>
                                <option value="Online">Online</option>
                            </select>
                        </div>
                        <div className="filter-section">
                            <label>Minimum Experience</label>
                            <select value={filters.experience} onChange={(e) => handleFilterChange('experience', e.target.value)}>
                                <option value="">Any</option>
                                <option value="5">5+ years</option>
                                <option value="10">10+ years</option>
                                <option value="15">15+ years</option>
                            </select>
                        </div>
                        <div className="filter-section">
                            <label>Maximum Fees</label>
                            <select value={filters.fees} onChange={(e) => handleFilterChange('fees', e.target.value)}>
                                <option value="">Any</option>
                                <option value="1000">Under ₹1000</option>
                                <option value="1500">Under ₹1500</option>
                                <option value="2500">Under ₹2500</option>
                            </select>
                        </div>
                        <div className="filter-section">
                            <label>Minimum Rating</label>
                            <select value={filters.rating} onChange={(e) => handleFilterChange('rating', e.target.value)}>
                                <option value="">Any</option>
                                <option value="4">4+ stars</option>
                                <option value="4.5">4.5+ stars</option>
                            </select>
                        </div>
                        <button className="clear-filters-btn" onClick={clearFilters}>Clear Filters</button>
                    </div>

                    <div className="doctor-list-container">
                        <div className="results-header">
                            <h2>{filteredDoctors.length} Doctors Found</h2>
                        </div>
                        <div className="doctor-list">
                            {filteredDoctors.map(doctor => (
                                <div key={doctor._id || doctor.id} className="doctor-card">
                                    {/* Fixed Image 1 */}
                                    <Image 
                                        src={doctor.image} 
                                        alt={doctor.name} 
                                        className="doctor-image" 
                                        width={150} 
                                        height={150} 
                                    />
                                    <div className="doctor-info">
                                        {/* ... (doctor info) ... */}
                                        <div className="doctor-header">
                                            <h2>{doctor.name}</h2>
                                            <div className="rating">⭐ {doctor.rating}</div>
                                        </div>
                                        <p className="specialty">{doctor.specialty}</p>
                                        <p className="experience">🕒 {doctor.experience}</p>
                                        <p className="location">📍 {doctor.location}</p>
                                        <p className="consultation-type">
                                            {doctor.consultationType === 'Both' ? '🏥 & 💻' :
                                             doctor.consultationType === 'Hospital' ? '🏥' : '💻'}
                                        </p>
                                        <p className="fees">💰 {doctor.fees}</p>
                                        <p className="languages">🗣️ {doctor.languages.join(', ')}</p>
                                        <div className="bio"><p>{doctor.bio}</p></div>
                                    </div>
                                    <div className="doctor-actions">
                                        <button className="book-appointment-btn" onClick={() => handleBookAppointment(doctor)}>
                                            Book Appointment
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Appointment Modal */}
            {showAppointmentModal && selectedDoctor && (
                <div className="modal-overlay">
                    <div className="appointment-modal">
                        <div className="modal-header">
                            <h2>Book Appointment</h2>
                            <button onClick={handleCancel} className="close-btn">&times;</button>
                        </div>
                        <div className="modal-content">
                            <div className="doctor-summary">
                                {/* Fixed Image 2 */}
                                <Image 
                                    src={selectedDoctor.image} 
                                    alt={selectedDoctor.name} 
                                    width={80} 
                                    height={80} 
                                />
                                <div>
                                    <h3>{selectedDoctor.name}</h3>
                                    <p>{selectedDoctor.specialty}</p>
                                    <p>💰 {selectedDoctor.fees}</p>
                                </div>
                            </div>
                            {/* ... (rest of modal) ... */}
                            <div className="availability-section">
                                <h3>Select a Time Slot</h3>
                                <div className="slots-container">
                                    {selectedDoctor.availability?.hospital && (
                                        <div className="hospital-slots">
                                            <h4>🏥 In-Hospital</h4>
                                            {selectedDoctor.availability.hospital.map(day => (
                                                <div key={day} className="day-slots">
                                                    <h5>{day}</h5>
                                                    <div className="time-slots">
                                                        {selectedDoctor.availability.timeSlots.map(time => (
                                                            <button
                                                                key={time}
                                                                className={`time-slot ${selectedSlot.day === day && selectedSlot.time === time ? 'selected' : ''}`}
                                                                onClick={() => handleSlotSelection(day, time)}
                                                            >
                                                                {time}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {selectedSlot.day && selectedSlot.time && (
                                    <div className="selected-slot">
                                        <h4>Selected Slot</h4>
                                        <p>You have selected: <strong>{selectedSlot.day} at {selectedSlot.time}</strong></p>
                                    </div>
                                )}
                            </div>
                            <div className="modal-actions">
                                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                                <button className="pay-btn" onClick={handlePayment} disabled={!selectedSlot.time}>
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}