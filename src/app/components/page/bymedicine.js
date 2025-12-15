'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import '../../components/bymedicine/bymedicine.css';
import { useRouter } from 'next/navigation';
import { mockMedicines } from '../../utils/mockData'; // Import mock data 

export default function ByMedicine() {
    const [medicines, setMedicines] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);
    const router = useRouter();

    // --- FIX: Add hasMounted state ---
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const res = await fetch('https://medlist-backend.vercel.app/api/medicines');
                const data = await res.json();
                // Use API data if available, otherwise use mock data
                if (data && data.length > 0) {
                    setMedicines(data);
                } else {
                    setMedicines(mockMedicines);
                }
            } catch (error) {
                console.error("Failed to fetch medicines, using mock data:", error);
                // Use mock data as fallback
                setMedicines(mockMedicines);
            }
        };
        fetchMedicines();
    }, []);

    useEffect(() => {
        // --- FIX: Set mounted to true on client ---
        setHasMounted(true);

        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const addToCart = (medicine) => {
        const newCart = [...cart, medicine];
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        alert(`${medicine.name} has been added to your cart.`);
    };

    const filteredMedicines = medicines.filter(med =>
        med.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <div className="medicine-container">
                <header className="medicine-header">
                    <h1>Order Medicines Online</h1>
                    <p>Your one-stop shop for all your healthcare needs.</p>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search for medicines..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <button className="cart-button" onClick={() => router.push('/cart')}>
                        {/* --- FIX: Show 0 before mount, and real length after --- */}
                        Go to Cart ({hasMounted ? cart.length : 0})
                    </button>
                </header>

                <div className="medicine-grid">
                    {filteredMedicines.length > 0 ? (
                        filteredMedicines.map(med => (
                            <div key={med._id} className="medicine-card">
                                <div className="medicine-info">
                                    <h3 className="medicine-name">{med.name}</h3>
                                    <p className="medicine-desc">{med.description}</p>
                                    <p className="medicine-category">{med.category}</p>
                                </div>
                                <div className="medicine-footer">
                                    <p className="medicine-price">₹{med.price.toFixed(2)}</p>
                                    <button
                                        className="add-to-cart-btn"
                                        onClick={() => addToCart(med)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No medicines found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}