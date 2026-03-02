import React, { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import './Reservation.css';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '', phone: '', date: '', time: '', guests: '2', occasion: '', message: ''
            });
        }, 5000);
    };

    return (
        <section id="reservation" className="section reservation-section position-relative">
            <div className="reservation-bg"></div>
            <div className="container">
                <div className="reservation-wrapper">
                    <div className="reservation-content">
                        <h2 className="section-title text-left text-white">Reserve Your Table</h2>
                        <p className="reservation-subtitle text-white">
                            Join us for a memorable dining experience. Whether it's a casual coffee run or a family gathering,
                            we'd love to host you.
                        </p>
                        <div className="contact-direct">
                            <p className="text-white opacity-80 mb-2">Prefer to book over the phone?</p>
                            <a href="tel:08624993661" className="direct-phone">
                                086249 93661
                            </a>
                        </div>
                    </div>

                    <div className="reservation-form-container">
                        {submitted ? (
                            <div className="success-message text-center">
                                <div className="success-icon mb-4 text-accent">✓</div>
                                <h3 className="mb-2">Reservation Request Sent!</h3>
                                <p className="text-muted">We'll confirm your reservation shortly via call.</p>
                            </div>
                        ) : (
                            <form className="booking-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input type="text" id="name" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input type="tel" id="phone" name="phone" required placeholder="98765 43210" value={formData.phone} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="date"><Calendar size={16} /> Date *</label>
                                        <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="time"><Clock size={16} /> Time *</label>
                                        <input type="time" id="time" name="time" required value={formData.time} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="guests"><Users size={16} /> Guests *</label>
                                        <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(num => (
                                                <option key={num} value={num}>{num} Person{num !== 1 ? 's' : ''}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="occasion">Occasion (Optional)</label>
                                    <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                                        <option value="">Select an occasion</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="business">Business Meeting</option>
                                        <option value="casual">Casual Dining</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message"><MessageSquare size={16} /> Special Requests / Message</label>
                                    <textarea id="message" name="message" rows="3" placeholder="Any dietary requirements or special requests?" value={formData.message} onChange={handleChange}></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary full-width mt-4 submit-btn">
                                    Request Reservation
                                </button>
                                <p className="form-note text-center mt-3 text-muted" style={{ fontSize: '0.85rem' }}>
                                    * We'll confirm your reservation shortly via call.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
