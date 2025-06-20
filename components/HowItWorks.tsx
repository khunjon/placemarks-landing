import React from 'react';
import { Plus, FolderPlus, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Plus,
    title: 'Add places you love or want to visit',
    description: 'Easily save restaurants, cafes, attractions, and any place that catches your interest.'
  },
  {
    number: '02',
    icon: FolderPlus,
    title: 'Organize them into custom lists',
    description: 'Create lists for different trips, food types, date nights, or any way you want to organize.'
  },
  {
    number: '03',
    icon: Users,
    title: 'Share with friends or keep them private',
    description: 'Share your curated lists with friends and family, or keep your secret spots to yourself.'
  }
];

export default function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three simple steps to start organizing and sharing your favorite places.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-primary/30">
                    {step.number}
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <step.icon size={24} className="text-primary" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-full top-16 w-24 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="btn-primary text-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
} 