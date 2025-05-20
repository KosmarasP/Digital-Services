import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    document.title = 'Contact Us - Digital Services Co';
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormError(null);

    // Basic validation
    if (!name || !email || !message) {
      setFormError('Please fill out all required fields');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-32 flex flex-col items-center justify-center">
        <div className="container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-primary-100 mb-8">
              Have a question or ready to start your project? Contact us today and let's discuss how we can help you achieve your digital goals.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section bg-white flex flex-col items-center justify-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700 mb-4">
                      Thank you for reaching out to us. We'll get back to you as soon as possible.
                    </p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {formError && (
                      <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6">
                        {formError}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="form-label">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="form-input"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="form-label">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-input"
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="form-input"
                          placeholder="+30 210 123 4567"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="form-label">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="form-input"
                          placeholder="How can we help you?"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="form-input"
                        placeholder="Tell us about your project..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-primary w-full flex items-center justify-center"
                      disabled={loading}
                    >
                      {loading ? (
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
            
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 30 }}
              animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Our Office</h3>
                      <p className="text-gray-600">
                        123 Digital Avenue<br />
                        Athens, 10434<br />
                        Greece
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@digitalservices.com" className="hover:text-primary-600 transition-colors">
                          info@digitalservices.com
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a href="mailto:support@digitalservices.com" className="hover:text-primary-600 transition-colors">
                          support@digitalservices.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        <a href="tel:+302101234567" className="hover:text-primary-600 transition-colors">
                          +30 210 123 4567
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a href="tel:+306951234567" className="hover:text-primary-600 transition-colors">
                          +30 695 123 4567
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 flex flex-col items-center justify-center">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Visit Our Office</h2>
            <p className="section-subtitle">
              We'd love to meet you in person. Drop by our office during business hours.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12578.069684550328!2d23.731536713330093!3d37.979373000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd2ff04d301f%3A0x4f74a526a04c4ea2!2sAcropolis%20of%20Athens!5e0!3m2!1sen!2sus!4v1664376764570!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;