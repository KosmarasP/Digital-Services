import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Papadopoulos",
    position: "CEO",
    company: "TechStart",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Digital Services completely transformed our online presence. Our website not only looks amazing but also delivers real business results. The team was professional, creative, and responsive throughout the entire process.",
    rating: 5
  },
  {
    id: 2,
    name: "Giorgos Antoniou",
    position: "Marketing Director",
    company: "FreshMarket",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "The e-commerce platform they built for us has significantly increased our online sales. Their attention to detail and focus on user experience made all the difference. I highly recommend their services.",
    rating: 5
  },
  {
    id: 3,
    name: "Eleni Georgiou",
    position: "Owner",
    company: "Boutique Eleganza",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "The digital marketing campaign they created for my boutique doubled our traffic and increased sales by 45%. They truly understand how to connect with customers and drive results.",
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section bg-primary-900 text-white overflow-hidden flex flex-col items-center justify-center" id="testimonials">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle text-primary-200">
            Don't just take our word for it. Hear from some of our satisfied clients who have seen real results from our digital services.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ 
                opacity: 0, 
                x: direction === 'right' ? 100 : -100 
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ 
                opacity: 0, 
                x: direction === 'right' ? -100 : 100 
              }}
              transition={{ duration: 0.5 }}
              className="bg-primary-800 rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    className="w-full h-full object-cover rounded-full border-4 border-primary-700"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-5 w-5 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-primary-100 italic mb-6 leading-relaxed">
                    "{currentTestimonial.content}"
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold">{currentTestimonial.name}</h4>
                    <p className="text-primary-300">
                      {currentTestimonial.position}, {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-primary-700'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;