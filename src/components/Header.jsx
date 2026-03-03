import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Hide on scroll down
            } else {
                setIsVisible(true);  // Show on scroll up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}>
            <div className="container header-content">
                <a href="#" className="logo">
                    <span className="logo-text">Communion Cafe</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#location">Location</a></li>
                    </ul>
                </nav>

                {/* Desktop CTAs */}
                <div className="header-actions">
                    <a href="tel:08624993661" className="btn btn-primary cta-btn">
                        <Phone size={18} />
                        <span className="cta-text">Call Now</span>
                    </a>

                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
                    <li><a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a></li>
                    <li><a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a></li>
                    <li><a href="#location" onClick={() => setMobileMenuOpen(false)}>Location</a></li>
                    <li>
                        <a href="tel:08624993661" className="btn btn-primary full-width mt-4">
                            <Phone size={18} /> Call Now: 086249 93661
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
