import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import SignatureDishes from './components/SignatureDishes';
import Reviews from './components/Reviews';
import Reservation from './components/Reservation';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Header />
      <Hero />
      <WhyChooseUs />
      <SignatureDishes />
      <Reviews />
      <Reservation />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
