import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Layers, 
  Smartphone, 
  Search, 
  Zap, 
  Shield, 
  Code, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const WebDesignPage: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    document.title = 'Website Development - Digital Services Co';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-32 flex flex-col items-center justify-center">
        <div className="container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Website Development</h1>
              <p className="text-xl text-primary-100 mb-8">
                Create a stunning website that represents your brand perfectly and converts visitors into customers.
              </p>
              <Link to="/contact" className="btn btn-accent">
                Get Started
              </Link>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-6 -left-6 bg-primary-400 w-12 h-12 rounded-lg opacity-60"></div>
                <div className="absolute -bottom-6 -right-6 bg-primary-400 w-12 h-12 rounded-lg opacity-60"></div>
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Website Development"
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
            <h2 className="section-title">Our Website Development Services</h2>
            <p className="section-subtitle">
              We create beautiful, responsive websites that help businesses establish a strong online presence and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card card-hover p-8">
              <Layers className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Custom Web Design</h3>
              <p className="text-gray-600">
                Unique, professional designs tailored to your brand identity that make a lasting impression on your visitors.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <Smartphone className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Responsive Development</h3>
              <p className="text-gray-600">
                Websites that work flawlessly across all devices, providing an optimal viewing experience for all users.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <Search className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">SEO Optimization</h3>
              <p className="text-gray-600">
                Built-in SEO best practices to improve your search rankings and drive more organic traffic to your website.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <Zap className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Performance Optimization</h3>
              <p className="text-gray-600">
                Fast-loading websites that provide excellent user experiences and improve conversion rates.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <Shield className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Security Implementation</h3>
              <p className="text-gray-600">
                Robust security measures to protect your website and your visitors' data from threats.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <Code className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Content Management</h3>
              <p className="text-gray-600">
                User-friendly content management systems that make it easy to update and maintain your website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 flex flex-col items-center justify-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Development Process</h2>
              <p className="text-gray-600 mb-8">
                We follow a structured, collaborative approach to ensure your website meets your business objectives and exceeds your expectations.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                    <p className="text-gray-600">
                      We start by understanding your business, goals, target audience, and competitors to lay the foundation for a successful website.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Planning & Design</h3>
                    <p className="text-gray-600">
                      We create wireframes and design mockups for your approval, ensuring the visual direction aligns with your brand and objectives.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Development</h3>
                    <p className="text-gray-600">
                      Our developers bring the designs to life, building a fully functional website with all the features and functionality you need.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Testing & Launch</h3>
                    <p className="text-gray-600">
                      We thoroughly test your website across all devices and browsers before launching it to ensure everything works perfectly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Development Process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white flex flex-col items-center justify-center">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-subtitle">
              Here's why businesses trust us with their website development needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Experienced Team</h3>
                <p className="text-gray-600">
                  Our team of designers and developers have years of experience creating successful websites for various industries.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
                <p className="text-gray-600">
                  We don't use templates. Every website we create is custom-designed to meet your specific needs and goals.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Results-Driven Approach</h3>
                <p className="text-gray-600">
                  We focus on creating websites that not only look great but also drive real business results.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  We provide ongoing support and maintenance to ensure your website continues to perform at its best.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Clear Communication</h3>
                <p className="text-gray-600">
                  We keep you informed throughout the entire process and are always available to answer your questions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  We offer competitive pricing without compromising on quality, providing excellent value for your investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-900 text-white flex flex-col items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Dream Website?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact us today to discuss your project and get a free consultation.
            </p>
            <Link to="/contact" className="btn btn-accent">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDesignPage;