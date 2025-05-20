import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from '../ui/Logo.tsx';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 flex flex-col items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo isLight={true} />
            <p className="mt-4 text-gray-400 leading-relaxed">
              We help businesses transform their digital presence with cutting-edge web development, e-commerce solutions, and digital marketing strategies.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-design" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Website Development <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  E-commerce Development <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Digital Marketing <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-gray-400">
                  123 Digital Avenue<br />
                  Athens, 10434<br />
                  Greece
                </p>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <a href="tel:+302101234567" className="text-gray-400 hover:text-white transition-colors">
                  +30 210 123 4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@digitalservices.com" className="text-gray-400 hover:text-white transition-colors">
                  info@digitalservices.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Digital Services Co. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap space-x-4 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;