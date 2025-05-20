import React from 'react';
import { X } from 'lucide-react';

interface CookieBannerProps {
  onAccept: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6 animate-slide-up">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex flex-shrink-0 gap-3">
          <button 
            className="text-sm px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            onClick={() => window.open('/privacy-policy', '_blank')}
          >
            Learn More
          </button>
          <button 
            className="text-sm px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            onClick={onAccept}
          >
            Accept All
          </button>
        </div>
        <button 
          className="absolute top-2 right-2 md:static"
          onClick={onAccept}
          aria-label="Close cookie banner"
        >
          <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;