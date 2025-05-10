
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gm-darker relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <defs>
              <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
                <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                <stop offset="0%" stopColor="rgba(139, 195, 74, 0.5)"></stop>
                <stop offset="100%" stopColor="rgba(139, 195, 74, 0)"></stop>
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
            </rect>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how Green Mantis can help you achieve your business goals with our innovative IT solutions.
            Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gm-green hover:bg-gm-green/90 text-white font-semibold py-3 px-8 rounded-lg transition-all hover:shadow-lg hover:shadow-gm-green/20"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="bg-transparent hover:bg-white/10 border border-gm-green text-gm-green font-semibold py-3 px-8 rounded-lg transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
