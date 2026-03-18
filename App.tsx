
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar, { ViewState } from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import AIModels from './components/AIModels';
import Features from './components/Features';
import Trust from './components/Trust';
import Audience from './components/Audience';
import Products from './components/Products';
import Team from './components/Team';
import Careers from './components/Careers';
import Footer from './components/Footer';
import JoinAccessModal from './components/JoinAccessModal';
import InvestorModal from './components/InvestorModal';
import CrowdfundModal from './components/CrowdfundModal';
import FocusAreasPage from './components/FocusAreasPage';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';
import LegalPage from './components/LegalPage';
import { LanguageProvider } from './components/LanguageContext';

const AppContent: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isInvestorOpen, setIsInvestorOpen] = useState(false);
  const [isCrowdfundOpen, setIsCrowdfundOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  // Determine current view based on pathname for Navbar highlight
  const getCurrentView = (): ViewState => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/team') return 'team';
    if (path === '/focus') return 'focus';
    if (path === '/products') return 'products';
    if (path === '/contact') return 'contact';
    if (['/privacy', '/terms', '/confidentiality'].includes(path)) return 'legal';
    return 'home';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentView={getCurrentView()} />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero 
                onJoinClick={() => setIsWaitlistOpen(true)} 
                onInvestorClick={() => setIsInvestorOpen(true)}
                onCrowdfundClick={() => setIsCrowdfundOpen(true)}
              />
              <Partners />
              <Features />
              <Trust />
              <AIModels />
              <Audience />
              <Products 
                onJoinWaitlistClick={() => setIsWaitlistOpen(true)} 
                onQuoteClick={handleQuoteClick}
              />
              <Careers />
            </>
          } />
          <Route path="/team" element={
            <div className="pt-24 min-h-screen bg-slate-50">
              <Team />
            </div>
          } />
          <Route path="/focus" element={
            <div className="pt-24 min-h-screen bg-slate-50">
              <FocusAreasPage />
            </div>
          } />
          <Route path="/products" element={
            <div className="pt-24 min-h-screen bg-slate-50">
              <ProductsPage 
                onJoinWaitlistClick={() => setIsWaitlistOpen(true)} 
                onQuoteClick={handleQuoteClick}
              />
            </div>
          } />
          <Route path="/contact" element={
            <div className="pt-24 min-h-screen bg-slate-50">
              <ContactPage />
            </div>
          } />
          <Route path="/privacy" element={
            <div className="pt-24 min-h-screen bg-slate-50">
              <LegalPage initialSection="privacy" />
            </div>
          } />
          <Route path="/terms" element={
            <div className="pt-24 min-h-screen bg-slate-50">
              <LegalPage initialSection="terms" />
            </div>
          } />
          <Route path="/confidentiality" element={
            <div className="pt-24 min-h-screen bg-slate-50">
              <LegalPage initialSection="confidentiality" />
            </div>
          } />
        </Routes>
      </main>
      <Footer />
      
      {/* Modal Overlays */}
      <JoinAccessModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
      
      <InvestorModal 
        isOpen={isInvestorOpen}
        onClose={() => setIsInvestorOpen(false)}
      />

      <CrowdfundModal
        isOpen={isCrowdfundOpen}
        onClose={() => setIsCrowdfundOpen(false)}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
