import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  BarChart2, 
  Share2, 
  MessageSquare, 
  Mail, 
  Target, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const DigitalMarketingPage: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    document.title = 'Digital Marketing - Digital Services Co';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-secondary-700 to-secondary-900 text-white py-32 flex flex-col items-center justify-center">
        <div className="container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Marketing</h1>
              <p className="text-xl text-secondary-100 mb-8">
                Drive more traffic, leads, and sales with our data-driven digital marketing strategies designed for growth.
              </p>
              <Link to="/contact" className="btn bg-white text-secondary-700 hover:bg-gray-100">
                Get Started
              </Link>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-6 -left-6 bg-secondary-400 w-12 h-12 rounded-lg opacity-60"></div>
                <div className="absolute -bottom-6 -right-6 bg-secondary-400 w-12 h-12 rounded-lg opacity-60"></div>
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Digital Marketing"
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
            <h2 className="section-title">Our Digital Marketing Services</h2>
            <p className="section-subtitle">
              We offer a comprehensive range of digital marketing services to help businesses increase their online visibility, drive traffic, and generate leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card card-hover p-8">
              <Search className="h-12 w-12 text-secondary-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Search Engine Optimization</h3>
              <p className="text-gray-600">
                Improve your search engine rankings to increase organic traffic and reach more potential customers.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <BarChart2 className="h-12 w-12 text-secondary-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Pay-Per-Click Advertising</h3>
              <p className="text-gray-600">
                Create targeted ad campaigns on Google and other platforms to drive immediate traffic and conversions.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <Share2 className="h-12 w-12 text-secondary-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Social Media Marketing</h3>
              <p className="text-gray-600">
                Build your brand presence and engage with your audience on social media platforms where they spend their time.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <MessageSquare className="h-12 w-12 text-secondary-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Content Marketing</h3>
              <p className="text-gray-600">
                Create valuable content that attracts, informs, and engages your target audience, establishing you as an industry authority.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <Mail className="h-12 w-12 text-secondary-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Email Marketing</h3>
              <p className="text-gray-600">
                Nurture leads and strengthen customer relationships with targeted email campaigns that drive conversions.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <Target className="h-12 w-12 text-secondary-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Conversion Rate Optimization</h3>
              <p className="text-gray-600">
                Increase the percentage of website visitors who take desired actions, improving your return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 flex flex-col items-center justify-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Digital Marketing Approach</h2>
              <p className="text-gray-600 mb-8">
                We follow a strategic, data-driven approach to digital marketing that focuses on achieving measurable results for your business.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="h-12 w-12 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Research & Analysis</h3>
                    <p className="text-gray-600">
                      We start by understanding your business, audience, competitors, and industry to develop a targeted strategy.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-12 w-12 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                    <p className="text-gray-600">
                      We create a customized digital marketing strategy with specific goals, tactics, and key performance indicators.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-12 w-12 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                    <p className="text-gray-600">
                      Our team executes the strategy across selected channels, creating compelling content and optimizing for performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-12 w-12 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Monitoring & Optimization</h3>
                    <p className="text-gray-600">
                      We continuously track performance, analyze data, and make adjustments to improve results and maximize ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Marketing Approach"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white flex flex-col items-center justify-center">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Why Choose Our Digital Marketing Services</h2>
            <p className="section-subtitle">
              Discover the advantages of partnering with us for your digital marketing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Data-Driven Strategies</h3>
                <p className="text-gray-600">
                  We base our decisions on data and analytics, ensuring that our strategies are effective and deliver measurable results.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Customized Approach</h3>
                <p className="text-gray-600">
                  We develop tailored strategies based on your specific business goals, target audience, and industry.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Experienced Team</h3>
                <p className="text-gray-600">
                  Our team of digital marketing experts has years of experience across various industries and platforms.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Transparent Reporting</h3>
                <p className="text-gray-600">
                  We provide regular, detailed reports on campaign performance, ensuring you always know how your marketing is performing.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold mb-2">ROI-Focused</h3>
                <p className="text-gray-600">
                  We focus on generating a positive return on your marketing investment, not just vanity metrics.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Continuous Optimization</h3>
                <p className="text-gray-600">
                  We continuously monitor and optimize your campaigns to improve performance and adapt to market changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary-900 text-white flex flex-col items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Online Presence?</h2>
            <p className="text-xl text-secondary-100 mb-8">
              Contact us today to discuss your digital marketing needs and discover how we can help you achieve your business goals.
            </p>
            <Link to="/contact" className="btn bg-white text-secondary-700 hover:bg-gray-100">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingPage;