import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, ShoppingBag, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
  link: string;
  features: string[];
  imageSrc: string;
  direction: 'left' | 'right';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  color, 
  title, 
  description, 
  link, 
  features, 
  imageSrc, 
  direction 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const imageOnLeft = direction === 'left';

  return (
    <div 
      ref={ref} 
      className="py-16 border-b border-gray-200 last:border-b-0 "
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${imageOnLeft ? '' : 'lg:flex-row-reverse'}`}>
        <motion.div
          initial={{ opacity: 0, x: imageOnLeft ? -30 : 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: imageOnLeft ? -30 : 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${imageOnLeft ? 'lg:order-first' : 'lg:order-last'}`}
        >
          <div className="relative">
            <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-xl ${color} opacity-60`}></div>
            <img 
              src={imageSrc} 
              alt={title} 
              className="rounded-xl shadow-xl w-full relative z-10"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={`${imageOnLeft ? 'lg:order-last' : 'lg:order-first'}`}
        >
          <div className={`h-16 w-16 rounded-2xl ${color} flex items-center justify-center mb-6`}>
            {icon}
          </div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <ul className="mb-8 space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link to={link} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const ServiceHighlights: React.FC = () => {
  return (
    <section className="section bg-white  flex flex-col items-center justify-center " id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            We specialize in creating exceptional digital experiences that help businesses grow online. Explore our core services to see how we can help you.
          </p>
        </div>

        <ServiceCard
          icon={<Monitor className="h-8 w-8 text-white" />}
          color="bg-primary-600"
          title="Website Development"
          description="Create a stunning website that represents your brand perfectly and converts visitors into customers."
          link="/services/web-design"
          features={[
            "Custom design tailored to your brand",
            "Responsive layouts for all devices",
            "SEO optimization built-in",
            "Fast loading speeds",
            "User-friendly content management"
          ]}
          imageSrc="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          direction="left"
        />

        <ServiceCard
          icon={<ShoppingBag className="h-8 w-8 text-white" />}
          color="bg-accent-500"
          title="E-commerce Development"
          description="Build a powerful online store that provides a seamless shopping experience and drives sales."
          link="/services/ecommerce"
          features={[
            "Intuitive shopping experience",
            "Secure payment processing",
            "Inventory management",
            "Mobile-optimized checkout",
            "Marketing integration"
          ]}
          imageSrc="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          direction="right"
        />

        <ServiceCard
          icon={<BarChart className="h-8 w-8 text-white" />}
          color="bg-secondary-600"
          title="Digital Marketing"
          description="Get more traffic, leads, and sales with our data-driven digital marketing strategies."
          link="/services/digital-marketing"
          features={[
            "Search engine optimization (SEO)",
            "Pay-per-click advertising (PPC)",
            "Social media marketing",
            "Content marketing",
            "Analytics and reporting"
          ]}
          imageSrc="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          direction="left"
        />
      </div>
    </section>
  );
};

export default ServiceHighlights;