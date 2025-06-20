import React from 'react';
import { MapPin, Star } from 'lucide-react';
import EmailSignup from './EmailSignup';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container-max text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500 bg-opacity-10 border border-blue-400 border-opacity-20 text-blue-400 text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            Coming Soon - Join the Waitlist
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Save, organize, and share your{' '}
            <span className="gradient-text">favorite places</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            A beautiful list management tool for places you love and want to visit. 
            Bookmark restaurants, cafes, and hidden gems to share with friends and family.
          </p>
          
          {/* Email Signup Form */}
          <div className="mb-16">
            <EmailSignup 
              placeholder="Enter your email for early access"
              buttonText="Join the Waitlist"
              className="max-w-lg"
            />
          </div>
          
          {/* Secondary CTA */}
          <div className="flex justify-center mb-16">
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
          
          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="glass p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 from-opacity-5 to-purple-500 to-opacity-5"></div>
              
              {/* Floating Icons */}
              <div className="relative z-10 flex items-center justify-center space-x-12 mb-8">
                <div className="flex items-center space-x-3 text-blue-400">
                  <MapPin size={28} />
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3 text-purple-400">
                  <Star size={32} />
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3 text-blue-400">
                  <MapPin size={24} />
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Placeholder Text */}
              <div className="text-gray-500 text-lg">
                🗺️ Beautiful interface coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 