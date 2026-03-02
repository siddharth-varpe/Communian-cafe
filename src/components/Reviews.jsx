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
                    <div className="google-rating">
                        <span className="rating-number">4.4</span>
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill={i < 4 ? "#f59e0b" : "transparent"} color="#f59e0b" />
                            ))}
                        </div>
                        <span className="review-count">Based on 138+ Google Reviews</span>
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
