import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick, index }) => {
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
      className="border-b border-gray-200 last:border-0"
    >
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <ChevronDown 
          className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="py-3 px-4 pb-5 text-gray-600">
          <p>{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including website development, e-commerce solutions, and digital marketing. Our services are designed to help businesses establish a strong online presence and achieve their digital goals."
    },
    {
      question: "How long does it take to develop a website?",
      answer: "The timeline for website development depends on the complexity and requirements of your project. A basic website can be completed in 2-3 weeks, while more complex websites or e-commerce platforms may take 6-8 weeks or longer. During our initial consultation, we'll provide you with a more accurate timeline based on your specific needs."
    },
    {
      question: "How much does a website cost?",
      answer: "The cost of a website varies based on your requirements, features, and complexity. We offer different packages to suit various budgets and needs. For a detailed quote, please contact us with your project details or visit our pricing page for our standard packages."
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer: "Yes, we offer ongoing website maintenance services to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, backups, and technical support."
    },
    {
      question: "Can you help with improving our existing website?",
      answer: "Absolutely. We offer website redesign and optimization services to enhance the performance, user experience, and conversion rates of your existing website. Our team will analyze your current website and recommend improvements based on best practices and your business goals."
    },
    {
      question: "What platforms do you use for e-commerce development?",
      answer: "We work with various e-commerce platforms including WooCommerce, Shopify, and Magento. We'll recommend the best platform for your business based on your specific requirements, budget, and long-term goals."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-white  flex flex-col items-center justify-center" id="faq">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our services, process, and pricing. If you don't see your question here, feel free to contact us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;