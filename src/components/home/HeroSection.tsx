import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMTcgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMTcgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-lg">
              We create stunning websites, powerful e-commerce solutions, and effective digital marketing campaigns that drive results.
            </p>
            
            <div className="mb-8">
              <div className="flex flex-col space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-400 mr-2 mt-0.5" />
                  <span className="text-primary-100">Custom websites tailored to your brand</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-400 mr-2 mt-0.5" />
                  <span className="text-primary-100">E-commerce solutions that convert visitors</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-400 mr-2 mt-0.5" />
                  <span className="text-primary-100">Digital marketing that drives targeted traffic</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn btn-accent">
                Get Started
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 bg-accent-500 w-12 h-12 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 bg-secondary-500 w-12 h-12 rounded-lg"></div>
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital team working together"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-primary-700">
          <p className="text-center text-primary-300 mb-6">Trusted by leading brands worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-75">
            <img src="https://placehold.co/200x80/ffffff/333333?text=BRAND&font=montserrat" alt="Brand Logo" className="h-8 mx-auto" />
            <img src="https://placehold.co/200x80/ffffff/333333?text=BRAND&font=montserrat" alt="Brand Logo" className="h-8 mx-auto" />
            <img src="https://placehold.co/200x80/ffffff/333333?text=BRAND&font=montserrat" alt="Brand Logo" className="h-8 mx-auto" />
            <img src="https://placehold.co/200x80/ffffff/333333?text=BRAND&font=montserrat" alt="Brand Logo" className="h-8 mx-auto" />
            <img src="https://placehold.co/200x80/ffffff/333333?text=BRAND&font=montserrat" alt="Brand Logo" className="h-8 mx-auto hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;