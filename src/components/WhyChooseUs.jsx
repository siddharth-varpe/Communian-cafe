import React from 'react';
import { Leaf, Users, Coffee, Home, Clock, Smile } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Home size={32} />,
            title: "Beautiful Interiors",
            description: "Aesthetic indoor & outdoor seating designed for relaxation and great photos."
        },
        {
            icon: <Leaf size={32} />,
            title: "Global Vegetarian menu",
            description: "A wide variety of delicious, freshly prepared vegetarian dishes."
        },
        {
            icon: <Users size={32} />,
            title: "Perfect for Groups",
            description: "Kid-friendly environment ideal for family outings and casual meetings."
        },
        {
            icon: <Coffee size={32} />,
            title: "Premium Beverages",
            description: "Expertly brewed coffees and refreshing signature drinks."
        }
    ];

    return (
        <section id="about" className="section why-choose-us">
            <div className="container">
                <h2 className="section-title">Why Choose Communion Cafe?</h2>
                <p className="section-subtitle">
                    Experience the perfect blend of taste, ambience, and hospitality right inside DY Patil Knowledge City.
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
