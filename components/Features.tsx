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
    <section className="section-padding bg-gray-950/50">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Everything you need to organize your{' '}
            <span className="gradient-text">places</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Simple, powerful tools to help you save, organize, and share the places that matter to you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-blue-500 bg-opacity-10">
                    <feature.icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 