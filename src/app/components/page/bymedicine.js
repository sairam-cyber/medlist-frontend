'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import '../../components/bymedicine/bymedicine.css';
import { useRouter } from 'next/navigation';

export default function ByMedicine() {
    const [medicines, setMedicines] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);
    const router = useRouter();

    // Fetch medicines from your new backend API
    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/medicines');
                const data = await res.json();
                setMedicines(data);
            } catch (error) {
                console.error("Failed to fetch medicines:", error);
            }
        };
        fetchMedicines();
    }, []);

    // Load cart from localStorage when the component mounts
    useEffect(() => {
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
                        Go to Cart ({cart.length})
                    </button>
                </header>

                <div className="medicine-grid">
                    {filteredMedicines.length > 0 ? (
                        filteredMedicines.map(med => (
                            <div key={med._id} className="medicine-card">
                                <img src={med.image} alt={med.name} className="medicine-image" />
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