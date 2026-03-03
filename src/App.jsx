import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';

// Lazy load below-the-fold components to slash the initial JS bundle size and vastly improve FCP/LCP
const WhyChooseUs = React.lazy(() => import('./components/WhyChooseUs'));
const SignatureDishes = React.lazy(() => import('./components/SignatureDishes'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Reservation = React.lazy(() => import('./components/Reservation'));
const Location = React.lazy(() => import('./components/Location'));
const Footer = React.lazy(() => import('./components/Footer'));
const FloatingWhatsApp = React.lazy(() => import('./components/FloatingWhatsApp'));

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
          <WhyChooseUs />
          <SignatureDishes />
          <Reviews />
          <Reservation />
          <Location />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
}

export default App;
