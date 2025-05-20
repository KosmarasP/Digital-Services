import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection.tsx';
import FeaturesSection from '../components/home/FeaturesSection.tsx';
import ServiceHighlights from '../components/home/ServiceHighlights.tsx';
import TestimonialsSection from '../components/home/TestimonialsSection.tsx';
import FaqSection from '../components/home/FaqSection.tsx';
import CtaSection from '../components/home/CtaSection.tsx';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Digital Services - Web Development, E-commerce & Digital Marketing';
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServiceHighlights />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
};

export default HomePage;