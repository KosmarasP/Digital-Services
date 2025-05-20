import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo.tsx';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="z-10">
          <Logo isLight={!isScrolled && !isMenuOpen && !isHomePage} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors ${
                isScrolled || !isHomePage
                  ? isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-primary-100'
              }`
            }
          >
            Home
          </NavLink>
          
          <div className="relative group">
            <button 
              className={`flex items-center text-sm font-medium transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-primary-100'
              }`}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <div className="py-1">
                    <NavLink
                      to="/services/web-design"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive ? 'bg-gray-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                    >
                      Website Development
                    </NavLink>
                    <NavLink
                      to="/services/ecommerce"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive ? 'bg-gray-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                    >
                      E-commerce Development
                    </NavLink>
                    <NavLink
                      to="/services/digital-marketing"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive ? 'bg-gray-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                    >
                      Digital Marketing
                    </NavLink>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <NavLink 
            to="/pricing" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors ${
                isScrolled || !isHomePage
                  ? isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-primary-100'
              }`
            }
          >
            Pricing
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors ${
                isScrolled || !isHomePage
                  ? isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-primary-100'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-20 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-white overflow-auto"
            >
              <div className="flex flex-col h-full pt-20 px-6 pb-6">
                <nav className="flex flex-col space-y-6 text-lg font-medium">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${isActive ? 'text-primary-600' : 'text-gray-800'} hover:text-primary-600 transition-colors`
                    }
                  >
                    Home
                  </NavLink>

                  <div>
                    <button
                      className="flex items-center justify-between w-full text-left text-gray-800 hover:text-primary-600 transition-colors"
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      aria-expanded={isServicesDropdownOpen}
                    >
                      Services
                      <ChevronDown className={`h-5 w-5 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 ml-4 space-y-2 overflow-hidden"
                        >
                          <NavLink
                            to="/services/web-design"
                            className={({ isActive }) =>
                              `block py-2 ${isActive ? 'text-primary-600' : 'text-gray-700'} hover:text-primary-600`
                            }
                          >
                            Website Development
                          </NavLink>
                          <NavLink
                            to="/services/ecommerce"
                            className={({ isActive }) =>
                              `block py-2 ${isActive ? 'text-primary-600' : 'text-gray-700'} hover:text-primary-600`
                            }
                          >
                            E-commerce Development
                          </NavLink>
                          <NavLink
                            to="/services/digital-marketing"
                            className={({ isActive }) =>
                              `block py-2 ${isActive ? 'text-primary-600' : 'text-gray-700'} hover:text-primary-600`
                            }
                          >
                            Digital Marketing
                          </NavLink>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                      `${isActive ? 'text-primary-600' : 'text-gray-800'} hover:text-primary-600 transition-colors`
                    }
                  >
                    Pricing
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `${isActive ? 'text-primary-600' : 'text-gray-800'} hover:text-primary-600 transition-colors`
                    }
                  >
                    Contact
                  </NavLink>
                </nav>

                <div className="mt-auto">
                  <Link to="/contact" className="btn btn-primary w-full">
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;