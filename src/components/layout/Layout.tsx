import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import CookieBanner from '../ui/CookieBanner.tsx';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      // Show cookie banner after a short delay
      const timer = setTimeout(() => {
        setShowCookieBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieBanner(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      {showCookieBanner && (
        <CookieBanner onAccept={handleAcceptCookies} />
      )}
    </div>
  );
};

export default Layout;