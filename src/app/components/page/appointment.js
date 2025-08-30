'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import QRCodeModal from './QRCodeModal'; // Import the new modal
import '../../components/appointment/appointment.css';

export default function Appointment() {
    const router = useRouter();
    const [appointmentDetails, setAppointmentDetails] = useState(null);
    const [patientDetails, setPatientDetails] = useState({
        name: '', email: '', mobile: ''
    });
    const [showQRModal, setShowQRModal] = useState(false); // State for the modal

    useEffect(() => {
        const details = localStorage.getItem('appointmentDetails');
        if (details) {
            setAppointmentDetails(JSON.parse(details));
        } else {
            router.push('/doctorsec');
        }
    }, [router]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPatientDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleProceedToPay = () => {
        if (!patientDetails.name || !patientDetails.email || !patientDetails.mobile) {
            alert('Please fill in all your details.');
            return;
        }
        setShowQRModal(true); // Show the QR modal instead of calling the backend directly
    };

    const handlePaymentSuccess = async () => {
        setShowQRModal(false); // Close the modal first

        const bookingData = {
            doctor: appointmentDetails.doctor._id,
            doctorName: appointmentDetails.doctor.name,
            patientName: patientDetails.name,
            patientEmail: patientDetails.email,
            patientMobile: patientDetails.mobile,
            appointmentDate: new Date().toISOString().split('T')[0],
            appointmentTime: appointmentDetails.slot,
            fees: parseInt(appointmentDetails.doctor.fees.replace('₹', '')),
        };

        try {
            const res = await fetch('http://localhost:5000/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData),
            });

            if (res.ok) {
                alert('Payment successful! Appointment booked.');
                localStorage.removeItem('appointmentDetails');
                router.push('/');
            } else {
                throw new Error('Failed to book appointment.');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    if (!appointmentDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <QRCodeModal
                show={showQRModal}
                onClose={() => setShowQRModal(false)}
                amount={parseInt(appointmentDetails.doctor.fees.replace('₹', ''))}
                paymentFor={`Appointment with ${appointmentDetails.doctor.name}`}
                onPaymentSuccess={handlePaymentSuccess}
            />
            <div className="appointment-page">
                <div className="appointment-container">
                    <h1>Confirm Your Appointment</h1>
                    <div className="appointment-summary">
                        <h2>Booking Summary</h2>
                        <p><strong>Doctor:</strong> {appointmentDetails.doctor.name}</p>
                        <p><strong>Specialty:</strong> {appointmentDetails.doctor.specialty}</p>
                        <p><strong>Time Slot:</strong> {appointmentDetails.slot}</p>
                        <p><strong>Fees:</strong> {appointmentDetails.doctor.fees}</p>
                    </div>
                    <div className="patient-details-form">
                        <h2>Your Details</h2>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="tel" id="mobile" name="mobile" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="appointment-actions">
                        <button className="cancel-btn" onClick={() => router.back()}>Cancel</button>
                        <button className="pay-btn" onClick={handleProceedToPay}>Proceed to Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}