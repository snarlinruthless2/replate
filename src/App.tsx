import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { ForRestaurants } from './components/ForRestaurants';
import { ForCharities } from './components/ForCharities';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1e4d2b] dark:bg-[#0a180e] transition-colors duration-200 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <HowItWorks />
        <ForRestaurants />
        <ForCharities />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

