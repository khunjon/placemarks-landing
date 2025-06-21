import React from 'react';
import { MapPin, Star } from 'lucide-react';
import EmailSignup from './EmailSignup';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900">
      <div className="container-max text-center px-6">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-500 bg-opacity-10 border border-yellow-400 border-opacity-30 text-yellow-400 text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            Coming Soon - Join the Waitlist
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Save, organize, and share your{' '}
            <span className="text-yellow-400">favorite places</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto">
            A beautiful list management tool for places you love and want to visit. 
            Bookmark restaurants, cafes, and hidden gems to share with friends and family.
          </p>
          
          {/* Email Signup Form */}
          <div className="mb-20">
            <EmailSignup 
              placeholder="Enter your email for early access"
              buttonText="Join the Waitlist"
              className="max-w-lg"
            />
          </div>
          
          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="glass p-12 relative overflow-hidden border-yellow-400 border-opacity-20">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 from-opacity-5 to-yellow-400 to-opacity-5"></div>
              
              {/* Floating Icons */}
              <div className="relative z-10 flex items-center justify-center space-x-12 mb-8">
                <div className="flex items-center space-x-3 text-yellow-400">
                  <MapPin size={28} />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3 text-yellow-300">
                  <Star size={32} />
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3 text-yellow-400">
                  <MapPin size={24} />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Placeholder Text */}
              <div className="text-gray-400 text-lg">
                🗺️ Beautiful interface coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 