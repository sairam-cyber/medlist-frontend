'use client'; // This page is interactive, so it must be a Client Component.

import React from 'react';
import Navbar from '../Navbar';
import '../../components/report/report.css';

// Sample data for medical reports. In a real app, this would be fetched from a server.
const userReports = [
    { id: 1, name: 'Complete Blood Count (CBC)', date: '2025-08-15', doctor: 'Dr. Sharma' },
    { id: 2, name: 'Thyroid Profile', date: '2025-07-22', doctor: 'Dr. Gupta' },
    { id: 3, name: 'Lipid Profile', date: '2025-07-22', doctor: 'Dr. Gupta' },
    { id: 4, name: 'X-Ray - Left Arm', date: '2025-06-10', doctor: 'Dr. Reddy' },
];

export default function Report() {

    const handleView = (reportName) => {
        // In a real application, this would open a PDF viewer or a new page with the report details.
        alert(`Opening a preview of your "${reportName}" report...`);
    };

    const handleDownload = (reportName) => {
        // This would trigger a file download from a secure URL.
        alert(`Downloading your "${reportName}" report...`);
    };

    return (
        <div>
            <Navbar />
            <div className="report-page">
                <h1>Your Medical Reports</h1>
                <div className="report-list-container">
                    {userReports.length > 0 ? (
                        userReports.map(report => (
                            <div key={report.id} className="report-item">
                                <div className="report-icon">📄</div>
                                <div className="report-details">
                                    <h3>{report.name}</h3>
                                    <p>Date: {report.date} | Consultant: {report.doctor}</p>
                                </div>
                                <div className="report-actions">
                                    <button className="report-btn" onClick={() => handleView(report.name)}>
                                        View
                                    </button>
                                    <button className="report-btn primary" onClick={() => handleDownload(report.name)}>
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-reports">
                            <p>You have no reports available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}