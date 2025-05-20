import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  ShoppingCart, 
  BarChart2,
  Smartphone, 
  Search, 
  Zap
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card card-hover p-6"
    >
      <div className="h-14 w-14 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Responsive Web Design",
      description: "Crafting beautiful websites that work flawlessly on all devices, from desktop to mobile."
    },
    {
      icon: <ShoppingCart className="h-7 w-7" />,
      title: "E-commerce Solutions",
      description: "Building powerful online stores that drive sales and provide exceptional customer experiences."
    },
    {
      icon: <BarChart2 className="h-7 w-7" />,
      title: "Digital Marketing",
      description: "Creating data-driven marketing campaigns that target the right audience and generate leads."
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Mobile Applications",
      description: "Developing custom mobile apps that extend your digital reach and engage users on-the-go."
    },
    {
      icon: <Search className="h-7 w-7" />,
      title: "SEO Optimization",
      description: "Implementing proven SEO strategies that improve your search rankings and drive organic traffic."
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Performance Optimization",
      description: "Enhancing your website's speed and performance to provide better user experiences."
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="section bg-gray-50  flex flex-col items-center justify-center" id="features">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">Our Digital Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of digital services to help your business thrive in the online world. From website development to digital marketing, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;