'use client';

import React, { useState, useEffect, useCallback } from 'react'; // Import useCallback
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import './profile.css';

export default function Profile() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('appointments');
    
    // The edit form is now initialized as empty
    const [editForm, setEditForm] = useState({
        fullName: '', email: '', phone: '', dateOfBirth: '', gender: '',
        address: '', emergencyContact: '', bloodGroup: '', allergies: '', medicalHistory: ''
    });

    // Fixed: Wrapped handleLogout in useCallback
    const handleLogout = useCallback(() => {
        localStorage.removeItem('user');
        alert('You have been logged out successfully.');
        router.push('/');
    }, [router]);

    useEffect(() => {
        const fetchUserData = async () => {
            const userInfoFromStorage = localStorage.getItem('user');
            if (userInfoFromStorage) {
                const parsedInfo = JSON.parse(userInfoFromStorage);
                
                try {
                    // Fetch full profile from the backend using the stored user ID
                    const res = await fetch(`https://medlist-backend.vercel.app/api/users/profile/${parsedInfo._id}`);
                    if (!res.ok) throw new Error('Could not fetch user data.');
                    
                    const fullUserData = await res.json();
                    setUser(fullUserData);
                    setEditForm(fullUserData); // Pre-fill the form with fetched data
                } catch (error) {
                    console.error(error);
                    // If backend fetch fails, logout to clear inconsistent state
                    handleLogout();
                }
            } else {
                router.push('/login');
            }
            setIsLoading(false);
        };

        fetchUserData();
    }, [router, handleLogout]); // Fixed: Added handleLogout to dependency array

    const handleEditToggle = () => setIsEditing(!isEditing);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveProfile = async (e) => {
        e.preventDefault();
        
        try {
            // Send updated data to the backend
            const res = await fetch(`https://medlist-backend.vercel.app/api/users/${user._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editForm),
            });

            if (!res.ok) throw new Error('Failed to update profile.');

            const updatedUser = await res.json(); // This is now used
            
            // Fixed: Use updatedUser (from server) to set state
            setUser(updatedUser); 
            // Update the session storage with the new name/email from the server response
            // We update the 'user' object from storage with the new fullName and email
            const storedUser = JSON.parse(localStorage.getItem('user'));
            localStorage.setItem('user', JSON.stringify({ ...storedUser, fullName: updatedUser.fullName, email: updatedUser.email }));

            setIsEditing(false);
            alert('Profile updated successfully!');

        } catch (error) {
            alert(error.message);
        }
    };

    // ... (rest of your component, handleDownloadReport, and return statement) ...
    // ... (no changes needed in the JSX for these fixes) ...
    const handleDownloadReport = (reportName, reportDate, labName) => {
        // Create dummy PDF content
        const reportContent = `
MEDICAL REPORT
==============

Report: ${reportName}
Date: ${reportDate}
Laboratory: ${labName}
Patient: ${user.fullName}
Patient ID: ${user._id}

REPORT DETAILS:
--------------

${reportName === 'Complete Blood Count (CBC)' ? `
Hemoglobin: 14.2 g/dL (Normal: 12.0-15.5)
White Blood Cells: 7,200/μL (Normal: 4,500-11,000)
Red Blood Cells: 4.8 million/μL (Normal: 4.2-5.4)
Platelets: 280,000/μL (Normal: 150,000-450,000)
Hematocrit: 42% (Normal: 36-46%)

INTERPRETATION: All values within normal range.
` : reportName === 'Lipid Profile' ? `
Total Cholesterol: 185 mg/dL (Normal: <200)
LDL Cholesterol: 110 mg/dL (Normal: <100)
HDL Cholesterol: 55 mg/dL (Normal: >40)
Triglycerides: 120 mg/dL (Normal: <150)

INTERPRETATION: Slightly elevated LDL. Recommend dietary modifications.
` : reportName === 'Chest X-Ray' ? `
FINDINGS:
- Heart size and shape: Normal
- Lung fields: Clear, no infiltrates
- Diaphragm: Normal position and contour
- Bone structures: No abnormalities detected

IMPRESSION: Normal chest X-ray
` : reportName === 'Thyroid Function Test' ? `
TSH: 2.1 mIU/L (Normal: 0.4-4.0)
Free T4: 1.3 ng/dL (Normal: 0.8-1.8)
Free T3: 3.2 pg/mL (Normal: 2.3-4.2)

INTERPRETATION: Normal thyroid function
` : 'Report details not available'}

Doctor's Notes:
${reportName === 'Complete Blood Count (CBC)' ? 'Patient shows healthy blood parameters. Continue current lifestyle.' :
  reportName === 'Lipid Profile' ? 'Recommend reducing saturated fat intake and increasing exercise.' :
  reportName === 'Chest X-Ray' ? 'No abnormalities detected. Routine follow-up as needed.' :
  'Thyroid function within normal limits. No intervention required.'}

---
Report generated on: ${new Date().toLocaleDateString()}
Laboratory: ${labName}
        `;

        // Create and download the file
        const blob = new Blob([reportContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${reportName.replace(/\s+/g, '_')}_${reportDate.replace(/,/g, '').replace(/\s+/g, '_')}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        alert(`${reportName} downloaded successfully!`);
    };

    if (isLoading) {
        return <div><Navbar /><div className="loading">Loading Profile...</div></div>;
    }

    if (!user) {
        // This can happen if the user was redirected, helps prevent errors
        return null;
    }

    return (
        <div>
            <Navbar />
            <div className="profile-container">
                {/* Your JSX for displaying the profile and form remains largely the same */}
                {/* Header Section */}
                <div className="profile-header">
                    <div className="profile-avatar">
                         <div className="avatar-placeholder">
                            {user.fullName ? user.fullName.charAt(0).toUpperCase() : 'U'}
                        </div>
                    </div>
                    <div className="profile-info">
                        <h1>{user.fullName}</h1>
                        <p className="profile-email">{user.email}</p>
                        <div className="profile-actions">
                             <button onClick={handleEditToggle} className={`edit-btn ${isEditing ? 'cancel' : 'edit'}`}>
                                {isEditing ? 'Cancel' : 'Edit Profile'}
                            </button>
                            <button onClick={handleLogout} className="logout-btn">Logout</button>
                        </div>
                    </div>
                </div>

                {/* Content Section (View or Edit Form) */}
                <div className="profile-content">
                    {isEditing ? (
                        <form onSubmit={handleSaveProfile} className="edit-form">
                            <h2>Edit Profile Information</h2>
                            <div className="form-grid">
                               {/* Full Name */}
                               <div className="form-group">
                                   <label htmlFor="fullName">Full Name</label>
                                   <input type="text" id="fullName" name="fullName" value={editForm.fullName} onChange={handleInputChange} className="form-input" required />
                               </div>
                               {/* Email */}
                               <div className="form-group">
                                   <label htmlFor="email">Email</label>
                                   <input type="email" id="email" name="email" value={editForm.email} onChange={handleInputChange} className="form-input" required />
                               </div>
                               {/* Phone */}
                               <div className="form-group">
                                   <label htmlFor="phone">Phone</label>
                                   <input type="tel" id="phone" name="phone" value={editForm.phone} onChange={handleInputChange} className="form-input" />
                               </div>
                               {/* ... other form fields (Date of Birth, Gender, etc.) ... */}
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="save-btn">Save Changes</button>
                            </div>
                        </form>
                    ) : (
                        <div className="dashboard-container">
                            <h2>User Dashboard</h2>
                            
                            {/* Tab Navigation */}
                            <div className="tab-navigation">
                                <button 
                                    className={`tab-btn ${activeTab === 'appointments' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('appointments')}
                                >
                                    Appointments
                                </button>
                                <button 
                                    className={`tab-btn ${activeTab === 'medicine' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('medicine')}
                                >
                                    Medicine Orders
                                </button>
                                <button 
                                    className={`tab-btn ${activeTab === 'reports' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('reports')}
                                >
                                    Medical Reports
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="tab-content">
                                {activeTab === 'appointments' && (
                                    <div className="appointments-tab">
                                        <h3>Your Appointments</h3>
                                        <div className="records-list">
                                            <div className="record-item">
                                                <div className="record-info">
                                                    <h4>Dr. Sarah Johnson</h4>
                                                    <p className="specialty">Cardiologist</p>
                                                    <p className="datetime">September 15, 2024 at 10:30 AM</p>
                                                </div>
                                                <div className="record-actions">
                                                    <span className="status-badge upcoming">Upcoming</span>
                                                    <button className="action-btn reschedule">Reschedule</button>
                                                </div>
                                            </div>
                                            
                                            <div className="record-item">
                                                <div className="record-info">
                                                    <h4>Dr. Michael Chen</h4>
                                                    <p className="specialty">Dermatologist</p>
                                                    <p className="datetime">September 20, 2024 at 2:00 PM</p>
                                                </div>
                                                <div className="record-actions">
                                                    <span className="status-badge upcoming">Upcoming</span>
                                                    <button className="action-btn reschedule">Reschedule</button>
                                                </div>
                                            </div>
                                            
                                            <div className="record-item">
                                                <div className="record-info">
                                                    <h4>Dr. Emily Rodriguez</h4>
                                                    <p className="specialty">General Physician</p>
                                                    <p className="datetime">August 25, 2024 at 11:00 AM</p>
                                                </div>
                                                <div className="record-actions">
                                                    <span className="status-badge completed">Completed</span>
                                                </div>
                                            </div>
                                            
                                            <div className="record-item">
                                                <div className="record-info">
                                                    <h4>Dr. James Wilson</h4>
                                                    <p className="specialty">Orthopedic</p>
                                                    <p className="datetime">August 18, 2024 at 3:30 PM</p>
                                                </div>
                                                <div className="record-actions">
                                                    <span className="status-badge completed">Completed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {activeTab === 'medicine' && (
                                    <div className="medicine-tab">
                                        <h3>Medicine Order History</h3>
                                        <div className="records-list">
                                            <div className="record-item">
                                                <div className="record-info">
                                                    <h4>Order #ORD-2024-001</h4>
                                                    <p className="order-date">September 1, 2024</p>
                                                    <p className="order-items">Paracetamol 500mg (30 tablets), Vitamin D3 (60 capsules)</p>
                                                    <p className="order-total">Total: $24.99</p>
                                                </div>
                                                <div className="record-actions">
                                                    <span className="status-badge delivered">Delivered</span>
                                                    <button className="action-btn view-details">View Details</button>
                                                </div>
                                            </div>
                                            
                                            <div className="record-item">
                                                <div className="record-info">
                                                    <h4>Order #ORD-2024-002</h4>
                                                    <p className="order-date">August 28, 2024</p>
                                                    <p className="order-items">Amoxicillin 250mg (21 capsules), Probiotics (30 tablets)</p>
                                                    <p className="order-total">Total: $18.50</p>
                                                </div>
                                                <div className="record-actions">
                                                    <span className="status-badge delivered">Delivered</span>
                                                    <button className="action-btn view-details">View Details</button>
                                                </div>
                                            </div>
                                            
                                            <div className="record-item">
                                                <div className="record-info">
                                                    <h4>Order #ORD-2024-003</h4>
                                                    <p className="order-date">August 15, 2024</p>
                                                    <p className="order-items">Ibuprofen 400mg (20 tablets)</p>
                                                    <p className="order-total">Total: $12.75</p>
                                                </div>
                                                <div className="record-actions">
                                                    <span className="status-badge cancelled">Cancelled</span>
                                                    <button className="action-btn view-details">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {activeTab === 'reports' && (
                                    <div className="reports-tab">
                                        <h3>Medical Reports</h3>
                                        <div className="records-list">
                                            <div className="record-item">
                                                <div className="record-info">
                                                    <h4>Complete Blood Count (CBC)</h4>
                                                    <p className="report-date">August 30, 2024</p>
                                                    <p className="lab-name">City Medical Laboratory</p>
                                                </div>
                                                <div className="record-actions">
                                                    <button 
                                                        className="action-btn download"
                                                        onClick={() => handleDownloadReport('Complete Blood Count (CBC)', 'August 30, 2024', 'City Medical Laboratory')}
                                                    >
                                                        Download Report
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div className="record-item">
                                                <div className="record-info">
                                                    <h4>Lipid Profile</h4>
                                                    <p className="report-date">August 25, 2024</p>
                                                    <p className="lab-name">HealthCare Diagnostics</p>
                                                </div>
                                                <div className="record-actions">
                                                    <button 
                                                        className="action-btn download"
                                                        onClick={() => handleDownloadReport('Lipid Profile', 'August 25, 2024', 'HealthCare Diagnostics')}
                                                    >
                                                        Download Report
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div className="record-item">
                                                <div className="record-info">
                                                    <h4>Chest X-Ray</h4>
                                                    <p className="report-date">August 18, 2024</p>
                                                    <p className="lab-name">Metro Imaging Center</p>
                                                </div>
                                                <div className="record-actions">
                                                    <button 
                                                        className="action-btn download"
                                                        onClick={() => handleDownloadReport('Chest X-Ray', 'August 18, 2024', 'Metro Imaging Center')}
                                                    >
                                                        Download Report
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div className="record-item">
                                                <div className="record-info">
                                                    <h4>Thyroid Function Test</h4>
                                                    <p className="report-date">July 15, 2024</p>
                                                    <p className="lab-name">Advanced Lab Services</p>
                                                </div>
                                                <div className="record-actions">
                                                    <button 
                                                        className="action-btn download"
                                                        onClick={() => handleDownloadReport('Thyroid Function Test', 'July 15, 2024', 'Advanced Lab Services')}
                                                    >
                                                        Download Report
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}