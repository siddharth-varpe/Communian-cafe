import React from 'react';
import { ArrowRight } from 'lucide-react';
import './SignatureDishes.css';

const SignatureDishes = () => {
    const dishes = [
        {
            name: "Khao Suey",
            description: "A rich, fragrant Burmese coconut curry noodle soup served with an array of crunchy condiments.",
            image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
        },
        {
            name: "Pulled Jackfruit Tacos",
            description: "Soft shells loaded with slow-cooked shredded jackfruit, fresh salsa, and vegan cream.",
            image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
        },
        {
            name: "Veg Penne Arrabbiata",
            description: "Al dente pasta tossed in a fiery, garlic-infused tomato sauce with fresh basil.",
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
        },
        {
            name: "Sizzling Gambas",
            description: "Sizzling hot, flavor-packed vegetarian mock-prawns in a garlic butter sauce.",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
        },
        {
            name: "Mr Lee's Manchurian Bowl",
            description: "Crispy vegetable dumplings in a sweet and spicy soy glaze, served over steamed rice.",
            image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
        },
        {
            name: "Karishma's Avocado Toast",
            description: "Smashed avocado on artisan sourdough topped with cherry tomatoes and microgreens.",
            image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
        }
    ];

    return (
        <section id="menu" className="section signature-dishes">
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2 className="section-title text-left">Signature Dishes</h2>
                        <p className="section-subtitle text-left mb-0">
                            Discover the flavors that keep our guests coming back for more.
                        </p>
                    </div>
                    <a href="#" className="btn btn-outline view-all-btn">
                        View Full Menu <ArrowRight size={18} />
                    </a>
                </div>

                <div className="dishes-grid">
                    {dishes.map((dish, index) => (
                        <div key={index} className="dish-card">
                            <div className="dish-image-container">
                                <img src={dish.image} alt={dish.name} className="dish-image" loading="lazy" />
                            </div>
                            <div className="dish-content">
                                <h3 className="dish-name">{dish.name}</h3>
                                <p className="dish-desc">{dish.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mobile-view-all">
                    <a href="#" className="btn btn-outline full-width">
                        View Full Menu <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SignatureDishes;
