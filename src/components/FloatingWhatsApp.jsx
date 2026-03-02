import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
    // WhatsApp link format with pre-filled message
    const whatsappNumber = "918624993661";
    const message = encodeURIComponent("Hi Communion Cafe Pune! I would like to make a reservation/inquiry.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            className="floating-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="tooltip">Chat with us!</span>
        </a>
    );
};

export default FloatingWhatsApp;
