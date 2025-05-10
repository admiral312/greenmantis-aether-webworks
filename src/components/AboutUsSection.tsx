
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-gm-dark relative">
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-gm-green/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-gm-green/10 rounded-full filter blur-[100px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We <span className="gradient-text">Are</span></h2>
            <p className="text-gray-300 mb-6">
              Green Mantis is a forward-thinking IT company dedicated to helping businesses thrive in the digital era. 
              With a team of skilled professionals and a passion for innovation, we deliver solutions that drive growth 
              and efficiency.
            </p>
            <p className="text-gray-300 mb-8">
              Our approach combines technical expertise with creative problem-solving to address your unique business 
              challenges. We're committed to quality, transparency, and building lasting partnerships with our clients.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-gm-green hover:underline font-medium group"
            >
              Learn more about us
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gm-green/20 rounded-xl blur-xl"></div>
              <div className="bg-gm-darker p-6 rounded-xl relative border border-gm-green/10 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-gm-dark/50 rounded-lg flex flex-col items-center text-center hover:bg-gm-dark/70 transition-colors">
                    <h3 className="text-5xl font-bold text-gm-green mb-2">10+</h3>
                    <p className="text-gray-400">Years of Experience</p>
                  </div>
                  <div className="p-6 bg-gm-dark/50 rounded-lg flex flex-col items-center text-center hover:bg-gm-dark/70 transition-colors">
                    <h3 className="text-5xl font-bold text-gm-green mb-2">50+</h3>
                    <p className="text-gray-400">Expert Developers</p>
                  </div>
                  <div className="p-6 bg-gm-dark/50 rounded-lg flex flex-col items-center text-center hover:bg-gm-dark/70 transition-colors">
                    <h3 className="text-5xl font-bold text-gm-green mb-2">200+</h3>
                    <p className="text-gray-400">Projects Completed</p>
                  </div>
                  <div className="p-6 bg-gm-dark/50 rounded-lg flex flex-col items-center text-center hover:bg-gm-dark/70 transition-colors">
                    <h3 className="text-5xl font-bold text-gm-green mb-2">98%</h3>
                    <p className="text-gray-400">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
