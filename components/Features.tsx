import React from 'react';
import { Bookmark, FolderOpen, Share2 } from 'lucide-react';

const features = [
  {
    icon: Bookmark,
    title: 'Save Places',
    description: 'Bookmark restaurants, cafes, and hidden gems you discover or want to visit.'
  },
  {
    icon: FolderOpen,
    title: 'Organize Lists',
    description: 'Create custom lists for different trips, occasions, or types of places.'
  },
  {
    icon: Share2,
    title: 'Share & Discover',
    description: 'Share your favorite spots with friends and family, or keep them private.'
  }
];

export default function Features() {
  return (
    <section className="section-padding bg-dark-lighter">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need to organize your places
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Simple tools to help you save, organize, and share the places that matter to you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-dark border border-gray-700 hover:border-primary/50 transition-colors duration-200"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <feature.icon size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 