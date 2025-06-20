import React from 'react';
import { Plus, FolderPlus, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Plus,
    title: 'Add places you love',
    description: 'Easily save restaurants, cafes, attractions, and any place that catches your interest.'
  },
  {
    number: '02',
    icon: FolderPlus,
    title: 'Organize into lists',
    description: 'Create lists for different trips, food types, date nights, or any way you want to organize.'
  },
  {
    number: '03',
    icon: Users,
    title: 'Share or keep private',
    description: 'Share your curated lists with friends and family, or keep your secret spots to yourself.'
  }
];

export default function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Three simple steps to start organizing and sharing your favorite places.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  {step.number}
                </div>
              </div>
              
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-900 rounded-2xl border border-gray-700">
                  <step.icon size={32} className="text-blue-400" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg max-w-sm mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-20">
          <button className="btn-primary text-xl px-12 py-4">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
} 