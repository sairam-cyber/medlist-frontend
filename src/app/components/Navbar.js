'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const pathname = usePathname();

    // --- FIX: Add hasMounted state ---
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        // --- FIX: Set mounted to true on client ---
        setHasMounted(true);

        // Check if user is logged in
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const navLinks = [
        { href: '/', text: 'Find Doctors' },
        { href: '/medicinesearch', text: 'Buy Medicines' },
        { href: '/labtest', text: 'Lab Tests' },
        { href: '/membership', text: 'Membership' },
        { href: '/donation', text: 'Donation' },
        { href: '/health-camp', text: 'Health Camp' },
    ];

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link href="/">
                    <Image src="/image/1.png" alt="Medlist Logo" width={80} height={40} style={{ objectFit: 'contain' }} />
                </Link>
            </div>

            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={isOpen ? "nav-links active" : "nav-links"}>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={pathname === link.href ? 'active-link' : ''}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.text}
                        </Link>
                    </li>
                ))}

                <li className="nav-login-mobile">
                    {/* --- FIX: Only render this block after mounting --- */}
                    {hasMounted && (<>
                        {user ? (
                            <Link href="/profile" onClick={() => setIsOpen(false)}>
                                <button className="profile-btn">
                                    <span>{user.name || 'Profile'}</span>
                                    <FaUser />
                                </button>
                            </Link>
                        ) : (
                            <Link href="/login" onClick={() => setIsOpen(false)}>
                                <button className="login-btn">
                                    <span>Login</span>
                                    <i>👤</i>
                                </button>
                            </Link>
                        )}
                    </>)}
                </li>
            </ul>

            <div className="nav-actions">
                <Link href="/cart" className="cart-icon">
                    <FaShoppingCart />
                </Link>

                {/* --- FIX: Only render this block after mounting --- */}
                {hasMounted && (<>
                    {user ? (
                        <Link href="/profile" className="nav-profile-desktop">
                            <button className="profile-btn">
                                <FaUser />
                            </button>
                        </Link>
                    ) : (
                        <Link href="/login" className="nav-login-desktop">
                            <button className="login-btn">
                                <span>Login</span>
                                <i>👤</i>
                            </button>
                        </Link>
                    )}
                </>)}
            </div>
        </nav>
    );
};

export default Navbar;