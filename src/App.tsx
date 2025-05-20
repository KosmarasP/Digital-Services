import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import PricingPage from './pages/PricingPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import WebDesignPage from './pages/services/WebDesignPage.tsx';
import EcommercePage from './pages/services/EcommercePage.tsx';
import DigitalMarketingPage from './pages/services/DigitalMarketingPage.tsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/web-design" element={<WebDesignPage />} />
          <Route path="/services/ecommerce" element={<EcommercePage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;