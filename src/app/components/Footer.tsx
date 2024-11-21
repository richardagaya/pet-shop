// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-5 md:px-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Pet Shop. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
