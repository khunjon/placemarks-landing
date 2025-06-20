import React from 'react';
import { MapPin, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Save, organize, and share your{' '}
              <span className="text-primary">favorite places</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              A list management tool for places you love and want to visit. 
              Bookmark restaurants, cafes, and hidden gems to share with friends and family.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="btn-primary text-lg w-full sm:w-auto">
                Get Early Access
              </button>
              <button className="btn-secondary text-lg w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-dark-lighter rounded-2xl p-8 sm:p-12 border border-gray-700">
              <div className="flex items-center justify-center space-x-8 mb-8">
                <div className="flex items-center space-x-2 text-primary">
                  <MapPin size={32} />
                  <Star size={24} />
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <MapPin size={24} />
                  <Star size={32} />
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <Star size={24} />
                  <MapPin size={28} />
                </div>
              </div>
              <div className="text-gray-400 text-lg">
                🗺️ Interactive map and location visualization coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 