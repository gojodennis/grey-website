import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HeroPage from './pages/HeroPage';
import StudioPage from './pages/StudioPage';
import TeamPage from './pages/TeamPage';
import ProductPage from './pages/ProductPage';
import TextFocusPage from './pages/TextFocusPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between bg-background text-on-surface">
        <Header />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/focus" element={<TextFocusPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
