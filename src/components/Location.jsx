import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import './Location.css';

const Location = () => {
    return (
        <section id="location" className="section location-section">
            <div className="container">
                <h2 className="section-title">Find Us Here</h2>
                <p className="section-subtitle">
                    Located inside DY Patil Knowledge City. Drop by for great food and coffee.
                </p>

                <div className="location-card">
                    <div className="map-container">
                        {/* Using a placeholder iframe for the map. For a real location, the Google Maps embed code goes here */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.083!2d73.9130709!3d18.6199324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7fd42cb3dc1%3A0x5c7e0283bf1c7234!2sCommunion%20Cafe%20Pune!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Communion Cafe Location"
                        ></iframe>
                    </div>

                    <div className="location-info">
                        <div className="address-block">
                            <MapPin size={24} className="text-accent mb-3" />
                            <h3>Communion Cafe Pune<br /><span style={{ fontWeight: 'normal', fontSize: '0.9em', color: 'var(--text-secondary)' }}>कम्युनिअन कॅफे पुणे</span></h3>
                            <p className="address-text">
                                DY Patil Knowledge City,<br />
                                Via Lohegaon, Airport Road,<br />
                                Charholi Budruk, Pune,<br />
                                Maharashtra 412105
                            </p>
                        </div>

                        <a
                            href="https://www.google.com/maps/place/Communion+Cafe+Pune/@18.6199324,73.9130709,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c7fd42cb3dc1:0x5c7e0283bf1c7234!8m2!3d18.6199324!4d73.9130709!16s%2Fg%2F11vrckxpdp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary full-width mt-4"
                        >
                            <Navigation size={18} /> Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
