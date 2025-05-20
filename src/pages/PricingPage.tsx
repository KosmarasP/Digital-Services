import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { CheckCircle, X } from 'lucide-react';

interface PricingPlan {
  title: string;
  price: number;
  description: string;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  cta: string;
  popular?: boolean;
  serviceType: string;
}

const PricingPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("website");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    document.title = 'Pricing - Digital Services Co';
    window.scrollTo(0, 0);
  }, []);

  const websitePlans: PricingPlan[] = [
    {
      title: "Starter",
      price: 799,
      description: "Perfect for small businesses just getting started online.",
      features: [
        { text: "5 Page Website", included: true },
        { text: "Responsive Design", included: true },
        { text: "Contact Form", included: true },
        { text: "Basic SEO Setup", included: true },
        { text: "Content Management System", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Google Analytics", included: true },
        { text: "Custom Design", included: false },
        { text: "E-commerce Functionality", included: false },
        { text: "Advanced SEO Strategy", included: false },
      ],
      cta: "Choose Starter",
      serviceType: "website"
    },
    {
      title: "Business",
      price: 1499,
      description: "Ideal for growing businesses with more specific needs.",
      features: [
        { text: "10 Page Website", included: true },
        { text: "Responsive Design", included: true },
        { text: "Contact Form", included: true },
        { text: "Basic SEO Setup", included: true },
        { text: "Content Management System", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Google Analytics", included: true },
        { text: "Custom Design", included: true },
        { text: "Basic E-commerce (up to 20 products)", included: true },
        { text: "Advanced SEO Strategy", included: false },
      ],
      cta: "Choose Business",
      popular: true,
      serviceType: "website"
    },
    {
      title: "Premium",
      price: 2499,
      description: "For businesses requiring advanced features and customization.",
      features: [
        { text: "Unlimited Pages", included: true },
        { text: "Responsive Design", included: true },
        { text: "Advanced Contact Forms", included: true },
        { text: "Basic SEO Setup", included: true },
        { text: "Content Management System", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Google Analytics", included: true },
        { text: "Custom Design", included: true },
        { text: "Full E-commerce Functionality", included: true },
        { text: "Advanced SEO Strategy", included: true },
      ],
      cta: "Choose Premium",
      serviceType: "website"
    }
  ];

  const ecommercePlans: PricingPlan[] = [
    {
      title: "Basic Store",
      price: 1999,
      description: "Start selling online with a professional e-commerce store.",
      features: [
        { text: "Up to 50 Products", included: true },
        { text: "Responsive Design", included: true },
        { text: "Product Categories", included: true },
        { text: "Secure Payment Processing", included: true },
        { text: "Order Management", included: true },
        { text: "Customer Accounts", included: true },
        { text: "Basic SEO Setup", included: true },
        { text: "Product Variants", included: false },
        { text: "Discount Codes", included: false },
        { text: "Abandoned Cart Recovery", included: false },
      ],
      cta: "Choose Basic Store",
      serviceType: "ecommerce"
    },
    {
      title: "Professional Store",
      price: 3499,
      description: "A comprehensive solution for established online sellers.",
      features: [
        { text: "Up to 500 Products", included: true },
        { text: "Responsive Design", included: true },
        { text: "Product Categories", included: true },
        { text: "Secure Payment Processing", included: true },
        { text: "Order Management", included: true },
        { text: "Customer Accounts", included: true },
        { text: "Basic SEO Setup", included: true },
        { text: "Product Variants", included: true },
        { text: "Discount Codes", included: true },
        { text: "Abandoned Cart Recovery", included: false },
      ],
      cta: "Choose Professional",
      popular: true,
      serviceType: "ecommerce"
    },
    {
      title: "Enterprise Store",
      price: 5999,
      description: "Full-featured solution for high-volume online businesses.",
      features: [
        { text: "Unlimited Products", included: true },
        { text: "Responsive Design", included: true },
        { text: "Product Categories", included: true },
        { text: "Secure Payment Processing", included: true },
        { text: "Order Management", included: true },
        { text: "Customer Accounts", included: true },
        { text: "Advanced SEO Strategy", included: true },
        { text: "Product Variants", included: true },
        { text: "Discount Codes", included: true },
        { text: "Abandoned Cart Recovery", included: true },
      ],
      cta: "Choose Enterprise",
      serviceType: "ecommerce"
    }
  ];

  const marketingPlans: PricingPlan[] = [
    {
      title: "Basic",
      price: 799,
      description: "Essential digital marketing for small businesses.",
      features: [
        { text: "Social Media Setup", included: true },
        { text: "Basic SEO Audit", included: true },
        { text: "Google My Business Setup", included: true },
        { text: "Monthly Performance Report", included: true },
        { text: "Content Calendar", included: true },
        { text: "Keyword Research", included: false },
        { text: "PPC Campaign Management", included: false },
        { text: "Conversion Rate Optimization", included: false },
        { text: "Competitor Analysis", included: false },
        { text: "Monthly Strategy Calls", included: false },
      ],
      cta: "Choose Basic",
      serviceType: "marketing"
    },
    {
      title: "Growth",
      price: 1499,
      description: "Comprehensive marketing to drive traffic and leads.",
      features: [
        { text: "Social Media Setup", included: true },
        { text: "Basic SEO Audit", included: true },
        { text: "Google My Business Setup", included: true },
        { text: "Monthly Performance Report", included: true },
        { text: "Content Calendar", included: true },
        { text: "Keyword Research", included: true },
        { text: "PPC Campaign Management", included: true },
        { text: "Conversion Rate Optimization", included: false },
        { text: "Competitor Analysis", included: true },
        { text: "Monthly Strategy Calls", included: false },
      ],
      cta: "Choose Growth",
      popular: true,
      serviceType: "marketing"
    },
    {
      title: "Advanced",
      price: 2999,
      description: "Strategic marketing to dominate your market.",
      features: [
        { text: "Social Media Setup", included: true },
        { text: "Advanced SEO Audit", included: true },
        { text: "Google My Business Setup", included: true },
        { text: "Weekly Performance Report", included: true },
        { text: "Content Calendar", included: true },
        { text: "Keyword Research", included: true },
        { text: "PPC Campaign Management", included: true },
        { text: "Conversion Rate Optimization", included: true },
        { text: "Competitor Analysis", included: true },
        { text: "Monthly Strategy Calls", included: true },
      ],
      cta: "Choose Advanced",
      serviceType: "marketing"
    }
  ];

  const allPlans = {
    website: websitePlans,
    ecommerce: ecommercePlans,
    marketing: marketingPlans
  };

  const currentPlans = allPlans[selectedService as keyof typeof allPlans];

  return (
    <>
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-32 flex flex-col items-center justify-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-primary-100 mb-8">
              Choose the perfect plan for your business needs. All plans include dedicated support and our satisfaction guarantee.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section bg-white flex flex-col items-center justify-center">
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-gray-100 p-1 rounded-lg">
                <button
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedService === 'website'
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setSelectedService('website')}
                >
                  Website Development
                </button>
                <button
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedService === 'ecommerce'
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setSelectedService('ecommerce')}
                >
                  E-commerce
                </button>
                <button
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedService === 'marketing'
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setSelectedService('marketing')}
                >
                  Digital Marketing
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden ${
                    plan.popular
                      ? 'border-2 border-primary-500 shadow-xl relative'
                      : 'border border-gray-200 shadow-md'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-primary-500 text-white text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-4xl font-bold">€{plan.price}</span>
                      <span className="text-gray-600 ml-1">one-time</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          {feature.included ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? 'text-gray-800' : 'text-gray-500'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                        plan.popular
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-gray-800 hover:bg-gray-900 text-white'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="bg-gray-100 rounded-xl p-8 mt-16">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-700 mb-6">
              Our packages are designed to meet the needs of most businesses, but we understand that every business is unique. If you need a custom solution, we'd be happy to create a tailored package for you.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us for Custom Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 flex flex-col items-center justify-center">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Do you offer payment plans?</h3>
              <p className="text-gray-600">
                Yes, we offer flexible payment plans for all our services. You can choose to pay in installments, making it easier to manage your budget. Please contact us for more details.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Are there any hidden costs?</h3>
              <p className="text-gray-600">
                No, we believe in complete transparency. The price you see is the price you pay. There are no hidden costs or surprise fees. Any additional services or features will be clearly discussed and agreed upon before implementation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">What's included in the website maintenance?</h3>
              <p className="text-gray-600">
                Our website maintenance services include regular updates, security monitoring, backups, technical support, and content updates. We offer different maintenance packages to suit your specific needs and budget.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">How long does it take to complete a project?</h3>
              <p className="text-gray-600">
                Project timelines vary based on the complexity and scope of work. A basic website typically takes 2-3 weeks, while more complex e-commerce platforms may take 6-8 weeks or longer. We'll provide you with a detailed timeline during our initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-900 text-white py-20 flex flex-col items-center justify-center">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-xl text-primary-100 mb-6">
                Contact us today to discuss your project and get a custom quote.
              </p>
              <p className="text-primary-200">
                Our team of experts is ready to help you achieve your digital goals.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link to="/contact" className="btn btn-accent">
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;