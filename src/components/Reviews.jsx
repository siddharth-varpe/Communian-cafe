import React from 'react';
import { Star, Instagram, Quote } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
    const reviews = [
        {
            text: "Amazing ambience, amazing service, amazing food 🤩",
            author: "Priya M.",
            rating: 5,
        },
        {
            text: "Every vegetarian dish I've tried has been superb. Highly recommend the Khao Suey!",
            author: "Rahul D.",
            rating: 5,
        },
        {
            text: "Beautiful decor and aesthetically done interiors. Perfect place for a calm evening.",
            author: "Sneha K.",
            rating: 5,
        }
    ];

    return (
        <section id="reviews" className="section reviews-section bg-light">
            <div className="container">
                <div className="reviews-header text-center">
                    <h2 className="section-title">Loved by our Guests</h2>
                    <div className="live-google-rating-container" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', width: '100%', maxWidth: '400px', height: '140px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-light)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1!2d73.9130709!3d18.6199324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7fd42cb3dc1%3A0x5c7e0283bf1c7234!2sCommunion%20Cafe%20Pune!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                                width="100%"
                                height="250px"
                                style={{ border: 0, marginTop: '-10px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Live Google Rating"
                            ></iframe>
                        </div>
                        <a href="https://www.google.com/maps/place/Communion+Cafe+Pune/@18.6199324,73.9130709,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c7fd42cb3dc1:0x5c7e0283bf1c7234!8m2!3d18.6199324!4d73.9130709!16s%2Fg%2F11vrckxpdp" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <Star size={18} fill="#f59e0b" color="#f59e0b" />
                            Read All Google Reviews
                        </a>
                    </div>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <Quote size={40} className="quote-icon text-accent opacity-20" />
                            <div className="review-stars mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <p className="review-author">- {review.author}</p>
                        </div>
                    ))}
                </div>

                <div className="social-proof-banner mt-12">
                    <div className="insta-preview">
                        <div className="insta-header">
                            <div className="insta-logo">
                                <Instagram size={24} />
                                <span>@communioncafe_pune</span>
                            </div>
                            <a href="https://instagram.com/communioncafe_pune" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Follow Us</a>
                        </div>
                        <div className="insta-grid">
                            <div className="insta-img"><img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=300" alt="Instagram post" loading="lazy" /></div>
                            <div className="insta-img"><img src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=300" alt="Instagram post" loading="lazy" /></div>
                            <div className="insta-img"><img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=300" alt="Instagram post" loading="lazy" /></div>
                            <div className="insta-img d-none-sm"><img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=300" alt="Instagram post" loading="lazy" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
