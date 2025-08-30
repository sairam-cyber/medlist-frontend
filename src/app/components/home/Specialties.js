'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
    FaUserMd, 
    FaFemale, 
    FaXRay, 
    FaEye, 
    FaBrain, 
    FaHeartbeat, 
    FaStethoscope, 
    FaUserNurse, 
    FaBaby, 
    FaLungs, 
    FaSyringe, 
    FaVirus, 
    FaProcedures, 
    FaTooth, 
    FaRibbon 
} from 'react-icons/fa';

const SpecialtyCard = ({ href, icon, alt, title }) => {
    const router = useRouter();

    const handleSpecialtyClick = () => {
        // Store the selected specialty in localStorage
        localStorage.setItem('selectedSpecialty', title);
        // Navigate to the doctorsec page
        router.push(href);
    };

    return (
        <div className="specialty-link" onClick={handleSpecialtyClick}>
            <div className="specialty-card">
                <div className="specialty-icon">
                    {icon}
                </div>
                <p>{title}</p>
            </div>
        </div>
    );
};

const Specialties = () => {
    const specialties = [
        { href: "/doctorsec", icon: <FaUserMd size={60} color="#000000" />, alt: "General Physician", title: "General Physician" },
        { href: "/doctorsec", icon: <FaFemale size={60} color="#000000" />, alt: "Obstetrics & Gynaecology", title: "Obstetrics & Gynaecology" },
        { href: "/doctorsec", icon: <FaXRay size={60} color="#000000" />, alt: "Orthopaedics", title: "Orthopaedics" },
        { href: "/doctorsec", icon: <FaEye size={60} color="#000000" />, alt: "ENT", title: "ENT" },
        { href: "/doctorsec", icon: <FaBrain size={60} color="#000000" />, alt: "Neurology", title: "Neurology" },
        { href: "/doctorsec", icon: <FaHeartbeat size={60} color="#000000" />, alt: "Cardiology", title: "Cardiology" },
        { href: "/doctorsec", icon: <FaStethoscope size={60} color="#000000" />, alt: "Gastroenterology/GI medicine", title: "Gastroenterology/GI medicine" },
        { href: "/doctorsec", icon: <FaUserNurse size={60} color="#000000" />, alt: "Psychiatry", title: "Psychiatry" },
        { href: "/doctorsec", icon: <FaBaby size={60} color="#000000" />, alt: "Paediatrics", title: "Paediatrics" },
        { href: "/doctorsec", icon: <FaLungs size={60} color="#000000" />, alt: "Pulmonology/Respiratory", title: "Pulmonology/Respiratory" },
        { href: "/doctorsec", icon: <FaSyringe size={60} color="#000000" />, alt: "Endocrinology", title: "Endocrinology" },
        { href: "/doctorsec", icon: <FaVirus size={60} color="#000000" />, alt: "Infection Disease", title: "Infection Disease" },
        { href: "/doctorsec", icon: <FaVirus size={60} color="#000000" />, alt: "Infectious Disease", title: "Infectious Disease" },
        { href: "/doctorsec", icon: <FaProcedures size={60} color="#000000" />, alt: "Surgical Gastroenterology", title: "Surgical Gastroenterology" },
        { href: "/doctorsec", icon: <FaTooth size={60} color="#000000" />, alt: "Dentist", title: "Dentist" },
        { href: "/doctorsec", icon: <FaRibbon size={60} color="#000000" />, alt: "Medical Oncology", title: "Medical Oncology" },
    ];

    return (
        <section className="specialties">
            <h2>Browse by Specialties</h2>
            <div className="specialties-grid">
                {specialties.map((specialty, index) => (
                    <SpecialtyCard key={index} {...specialty} />
                ))}
            </div>
        </section>
    );
};

export default Specialties;