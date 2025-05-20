import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, ShoppingBag, BarChart, ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
  color: string;
  index: number;
}

const Service: React.FC<ServiceProps> = ({ icon, title, description, features, link, color, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card card-hover"
    >
      <div className={`${color} h-2 w-full rounded-t-xl`}></div>
      <div className="p-8">
        <div className={`h-16 w-16 rounded-2xl ${color} bg-opacity-10 flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="mb-8 space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to={link}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    document.title = 'Our Services - Digital Services Co';
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Monitor className="h-8 w-8 text-primary-600" />,
      title: "Website Development",
      description: "We create stunning, responsive websites that engage visitors and drive conversions. Our web development services are designed to help you establish a strong online presence.",
      features: [
        "Custom design and development",
        "Responsive for all devices",
        "SEO optimization",
        "Fast loading speeds",
        "User-friendly CMS"
      ],
      link: "/services/web-design",
      color: "bg-primary-600"
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-accent-500" />,
      title: "E-commerce Development",
      description: "Transform your business with a powerful online store that delivers exceptional shopping experiences and drives sales growth.",
      features: [
        "Custom e-commerce solutions",
        "Secure payment integration",
        "Inventory management",
        "Mobile-optimized checkout",
        "Marketing automation"
      ],
      link: "/services/ecommerce",
      color: "bg-accent-500"
    },
    {
      icon: <BarChart className="h-8 w-8 text-secondary-600" />,
      title: "Digital Marketing",
      description: "Reach your target audience and achieve your business goals with our comprehensive digital marketing services.",
      features: [
        "Search engine optimization (SEO)",
        "Pay-per-click advertising (PPC)",
        "Social media marketing",
        "Content marketing",
        "Analytics and reporting"
      ],
      link: "/services/digital-marketing",
      color: "bg-secondary-600"
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-32">
        <div className="container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Digital Services</h1>
            <p className="text-xl text-primary-100 mb-8">
              We offer a comprehensive range of digital services to help your business thrive in the online world. From website development to digital marketing, we've got you covered.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Service 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                link={service.link}
                color={service.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Our Approach</h2>
            <p className="section-subtitle">
              We follow a structured process to ensure the successful delivery of every project. Our approach is focused on understanding your business needs and delivering solutions that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-600">
                We start by understanding your business, goals, and target audience to lay the foundation for a successful project.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy</h3>
              <p className="text-gray-600">
                We develop a detailed strategy that outlines how we'll achieve your goals and overcome any challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-gray-600">
                Our team of experts executes the strategy with precision, keeping you informed at every step of the process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor, analyze, and optimize your digital assets to ensure they deliver the best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss your project and see how we can help you achieve your digital goals.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link to="/contact" className="btn btn-accent">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;