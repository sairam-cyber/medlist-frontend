'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import QRCodeModal from './QRCodeModal'; // Import the modal
import '../../components/card/card.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import Image

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [deliveryDetails, setDeliveryDetails] = useState({
        customerName: '', customerEmail: '', address: '', city: '', postalCode: ''
    });
    const [showQRModal, setShowQRModal] = useState(false); // State for the modal
    const router = useRouter();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        const consolidatedItems = items.reduce((acc, item) => {
            const existingItem = acc.find(i => i._id === item._id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                acc.push({ ...item, quantity: 1 });
            }
            return acc;
        }, []);
        setCartItems(consolidatedItems);
    }, []);
    
    // Functions for handleQuantityChange, handleRemoveItem, updateCartInStorage remain the same...

    const updateCartInStorage = (items) => {
        const expandedItems = [];
        items.forEach(item => {
            for (let i = 0; i < item.quantity; i++) {
                const baseItem = { ...item };
                delete baseItem.quantity;
                expandedItems.push(baseItem);
            }
        });
        localStorage.setItem('cart', JSON.stringify(expandedItems));
        setCartItems(items);
    };

    const handleQuantityChange = (id, amount) => {
        const updatedItems = cartItems.map(item => {
            if (item._id === id) {
                const newQuantity = item.quantity + amount;
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
            }
            return item;
        }).filter(item => item.quantity > 0);
        updateCartInStorage(updatedItems);
    };

    const handleRemoveItem = (id) => {
        const updatedItems = cartItems.filter(item => item._id !== id);
        updateCartInStorage(updatedItems);
    };


    const handleAddressChange = (e) => {
        setDeliveryDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleCheckout = () => {
        if (!showAddressForm) {
            setShowAddressForm(true);
            return;
        }

        for (const key in deliveryDetails) {
            if (!deliveryDetails[key]) {
                alert('Please fill out all delivery details.');
                return;
            }
        }
        setShowQRModal(true); // Show QR modal
    };

    const handlePaymentSuccess = async () => {
        setShowQRModal(false);
        const orderData = {
            orderItems: cartItems,
            shippingAddress: {
                address: deliveryDetails.address,
                city: deliveryDetails.city,
                postalCode: deliveryDetails.postalCode,
            },
            totalPrice: total,
            customerName: deliveryDetails.customerName,
            customerEmail: deliveryDetails.customerEmail
        };

        try {
            const res = await fetch('https://medlist-backend.vercel.app/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            });

            if (res.ok) {
                alert('Payment successful! Order placed.');
                setCartItems([]);
                localStorage.removeItem('cart');
                router.push('/');
            } else {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Failed to place order.');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 50.00 : 0;
    const total = subtotal + shipping;

    return (
        <div>
            <Navbar />
            <QRCodeModal
                show={showQRModal}
                onClose={() => setShowQRModal(false)}
                amount={total}
                paymentFor="Medicine Order"
                onPaymentSuccess={handlePaymentSuccess}
            />
            <div className="cart-page">
                 <h1>Your Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your cart is currently empty.</p>
                    </div>
                ) : (
                    <div className="cart-layout">
                        <div className="cart-items">
                            {cartItems.map(item => (
                                <div key={item._id} className="cart-item">
                                    {/* Fixed: Replaced <img> with next/image <Image /> */}
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className="item-image"
                                        width={100} // Added width
                                        height={100} // Added height
                                    />
                                    <div className="item-details">
                                        <h3>{item.name}</h3>
                                        <p className="item-price">₹{item.price.toFixed(2)}</p>
                                        <div className="quantity-controls">
                                            <button className="quantity-btn" onClick={() => handleQuantityChange(item._id, -1)}>-</button>
                                            <span className="quantity-display">{item.quantity}</span>
                                            <button className="quantity-btn" onClick={() => handleQuantityChange(item._id, 1)}>+</button>
                                        </div>
                                    </div>
                                    <button className="remove-btn" onClick={() => handleRemoveItem(item._id)}>Remove</button>
                                </div>
                            ))}
                        </div>

                        <div className="order-summary">
                            <h2>Order Summary</h2>
                            <div className="summary-row"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
                            <div className="summary-row"><span>Shipping</span><span>₹{shipping.toFixed(2)}</span></div>
                            <div className="summary-total"><span>Total</span><span>₹{total.toFixed(2)}</span></div>
                            
                            {showAddressForm && (
                                <div className="delivery-address-form">
                                    <h3>Delivery Details</h3>
                                    <div className="address-form-grid">
                                        <input type="text" name="customerName" placeholder="Full Name" onChange={handleAddressChange} className="address-input" />
                                        <input type="email" name="customerEmail" placeholder="Email" onChange={handleAddressChange} className="address-input" />
                                        <textarea name="address" placeholder="Address" onChange={handleAddressChange} className="address-textarea" rows="2" />
                                        <input type="text" name="city" placeholder="City" onChange={handleAddressChange} className="address-input" />
                                        <input type="text" name="postalCode" placeholder="Pincode" onChange={handleAddressChange} className="address-input" />
                                    </div>
                                </div>
                            )}
                            
                            <button className="checkout-btn" onClick={handleCheckout}>
                                {showAddressForm ? 'Place Order' : 'Proceed to Checkout'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}