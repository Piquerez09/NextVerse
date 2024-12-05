import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Marketplace from './components/Marketplace';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Marketplace />
      <Footer />
    </div>
  );
}

export default App;
