import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="footer-logo">Communion Cafe</h3>
                        <p className="footer-desc">
                            Where food brings people together. Serving global vegetarian delights and fresh coffee in a warm, welcoming ambience.
                        </p>
                        <div className="social-links">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#reservation">Reserve a Table</a></li>
                            <li><a href="#order-online" className="text-accent font-medium">Order Online</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul>
                            <li>
                                <a href="tel:08624993661">
                                    <Phone size={16} className="text-accent" /> 086249 93661
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@communioncafe.com">
                                    <Mail size={16} className="text-accent" /> hello@communioncafe.com
                                </a>
                            </li>
                            <li>
                                <div className="d-flex align-start gap-2">
                                    <MapPin size={16} className="text-accent mt-1" />
                                    <span>
                                        DY Patil Knowledge City,<br />
                                        Via Lohegaon, Charholi Budruk,<br />
                                        Pune 412105
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-hours">
                        <h4 className="footer-heading">Opening Hours</h4>
                        <ul>
                            <li>
                                <div className="d-flex align-center gap-2">
                                    <Clock size={16} className="text-accent" />
                                    <span>Monday - Sunday</span>
                                </div>
                            </li>
                            <li className="font-medium">11:00 AM - 10:30 PM</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Communion Cafe Pune. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
