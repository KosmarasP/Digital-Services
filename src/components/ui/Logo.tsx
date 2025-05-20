import React from 'react';
import { Globe } from 'lucide-react';

interface LogoProps {
  isLight?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isLight = false }) => {
  return (
    <div className="flex items-center">
      <Globe className={`h-8 w-8 ${isLight ? 'text-white' : 'text-primary-600'}`} />
      <span className={`ml-2 text-xl font-bold ${isLight ? 'text-white' : 'text-gray-900'}`}>
        Digital<span className={`${isLight ? 'text-primary-300' : 'text-primary-600'}`}>Services</span>
      </span>
    </div>
  );
};

export default Logo;