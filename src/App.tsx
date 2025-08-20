import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Properties from './components/Properties';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Properties />
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

export default App;