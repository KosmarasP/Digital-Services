import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  Search, 
  BarChart, 
  Lock, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const EcommercePage: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    document.title = 'E-commerce Development - Digital Services Co';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-accent-700 to-accent-900 text-white py-32 flex flex-col items-center justify-center">
        <div className="container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">E-commerce Development</h1>
              <p className="text-xl text-accent-100 mb-8">
                Build a powerful online store that provides a seamless shopping experience and drives sales growth.
              </p>
              <Link to="/contact" className="btn bg-white text-accent-700 hover:bg-gray-100">
                Get Started
              </Link>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-6 -left-6 bg-accent-400 w-12 h-12 rounded-lg opacity-60"></div>
                <div className="absolute -bottom-6 -right-6 bg-accent-400 w-12 h-12 rounded-lg opacity-60"></div>
                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="E-commerce Development"
                  className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="section bg-white flex flex-col items-center justify-center">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Our E-commerce Solutions</h2>
            <p className="section-subtitle">
              We create custom online stores that deliver exceptional shopping experiences and drive sales growth for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card card-hover p-8">
              <ShoppingCart className="h-12 w-12 text-accent-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Custom Online Stores</h3>
              <p className="text-gray-600">
                Tailored e-commerce solutions designed to showcase your products and provide an intuitive shopping experience.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <CreditCard className="h-12 w-12 text-accent-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Secure Payment Integration</h3>
              <p className="text-gray-600">
                Integration with popular payment gateways to provide secure and convenient payment options for your customers.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <Truck className="h-12 w-12 text-accent-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Inventory & Shipping</h3>
              <p className="text-gray-600">
                Efficient inventory management and shipping integration to streamline your order fulfillment process.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <Search className="h-12 w-12 text-accent-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">SEO for E-commerce</h3>
              <p className="text-gray-600">
                Specialized SEO strategies to improve your product visibility in search results and drive more traffic to your store.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <BarChart className="h-12 w-12 text-accent-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600">
                Comprehensive analytics to track your store performance and make data-driven decisions to improve sales.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <Lock className="h-12 w-12 text-accent-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Security & Compliance</h3>
              <p className="text-gray-600">
                Robust security measures and compliance with e-commerce regulations to protect your business and customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 flex flex-col items-center justify-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 hidden lg:block">
              <img
                src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="E-commerce Platforms"
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">E-commerce Platforms We Work With</h2>
              <p className="text-gray-600 mb-8">
                We are experienced in developing online stores on various platforms, selecting the best fit for your specific business requirements.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">WooCommerce</h3>
                    <p className="text-gray-600">
                      A flexible WordPress-based solution, perfect for businesses that want complete control over their online store.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Shopify</h3>
                    <p className="text-gray-600">
                      An all-in-one platform that offers simplicity and scalability, ideal for businesses of all sizes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Magento</h3>
                    <p className="text-gray-600">
                      A powerful solution for large businesses with complex needs and high-volume sales.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
                    <p className="text-gray-600">
                      Bespoke e-commerce platforms built from the ground up to meet unique business requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white flex flex-col items-center justify-center">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Key Features of Our E-commerce Solutions</h2>
            <p className="section-subtitle">
              We build online stores with features that enhance the shopping experience and boost your sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">User-Friendly Design</h3>
              <p className="text-gray-600">
                Intuitive navigation and product organization to help customers find what they're looking for quickly.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Mobile Optimization</h3>
              <p className="text-gray-600">
                Fully responsive designs that provide a seamless shopping experience on all devices.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Multiple Payment Options</h3>
              <p className="text-gray-600">
                Integration with various payment methods to cater to different customer preferences.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Product Management</h3>
              <p className="text-gray-600">
                Easy-to-use product management systems to add, edit, and organize your product catalog.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Discount & Coupon System</h3>
              <p className="text-gray-600">
                Tools to create and manage promotional offers to boost sales and customer loyalty.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Secure Checkout</h3>
              <p className="text-gray-600">
                SSL-secured checkout process to protect customer data and build trust in your store.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent-900 text-white py-20 flex flex-col items-center justify-center">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Selling Online?</h2>
              <p className="text-xl text-accent-100 mb-6">
                Get in touch with us today to discuss your e-commerce project and learn how we can help you succeed online.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link to="/contact" className="btn bg-white text-accent-700 hover:bg-gray-100">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcommercePage;