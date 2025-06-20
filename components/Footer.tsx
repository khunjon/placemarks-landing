import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold gradient-text mb-3">Placemarks</div>
            <p className="text-gray-500 text-sm">
              © 2024 Placemarks. All rights reserved.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex space-x-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              Contact
            </a>
          </div>
          
          {/* Social Media */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="p-3 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-full transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="p-3 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-full transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="p-3 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-full transition-all duration-200"
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