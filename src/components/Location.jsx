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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9576404285874!2d73.92383861502444!3d18.62100868735075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12b7754eb27%3A0x6bba3a6a12b4ba!2sD.%20Y.%20Patil%20Knowledge%20City!5e0!3m2!1sen!2sin!4v1695460593452!5m2!1sen!2sin"
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
                            href="https://maps.google.com/?q=Communion+Cafe+DY+Patil+Knowledge+City+Pune"
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
