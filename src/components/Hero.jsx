import React from 'react';
import { Phone, Calendar, Star, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="rating"><Star size={16} fill="currentColor" /> 4.4</span>
                        <span className="reviews">138+ Google Reviews</span>
                    </div>

                    <h1 className="hero-title">
                        Where Food Brings <span className="text-accent">People Together.</span>
                    </h1>

                    <p className="hero-subtitle">
                        A warm, welcoming café in Charholi serving global vegetarian delights, fresh coffee, and unforgettable ambience.
                    </p>

                    <div className="hero-info">
                        <div className="info-item">
                            <MapPin size={18} className="text-accent" />
                            <span>DY Patil Knowledge City, Via Lohegaon</span>
                        </div>
                        <div className="info-item">
                            <span className="text-accent font-medium">Open till 10:30 PM</span>
                        </div>
                    </div>

                    <div className="hero-actions">
                        <a href="tel:08624993661" className="btn btn-primary btn-lg pulse-animation">
                            <Phone size={20} />
                            Call Now
                        </a>
                        <a href="#reservation" className="btn btn-secondary btn-lg">
                            <Calendar size={20} />
                            Reserve a Table
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image">
                        {/* We use a placeholder matching the requested premium cafe aesthetic */}
                        <img
                            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1447&ixlib=rb-4.0.3"
                            alt="Communion Cafe Interior"
                        />
                        <div className="image-decoration"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
