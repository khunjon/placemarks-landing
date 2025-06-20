import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-gray-700">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-primary mb-2">Placemarks</div>
            <p className="text-gray-400 text-sm">
              © 2024 Placemarks. All rights reserved.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Contact
            </a>
          </div>
          
          {/* Social Media */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="p-2 text-gray-400 hover:text-primary transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 text-gray-400 hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 text-gray-400 hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 