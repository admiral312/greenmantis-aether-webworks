
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, Smartphone, Monitor, Layers, ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gm-darker relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gm-green blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gm-green blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to meet the unique needs of your business. 
            We leverage the latest technologies to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Software Development"
            description="Custom software solutions built to solve complex business challenges and optimize operations."
            icon={Code}
          />
          <ServiceCard
            title="AI Solutions"
            description="Harness the power of artificial intelligence to automate processes and gain valuable insights."
            icon={Brain}
          />
          <ServiceCard
            title="UI/UX Design"
            description="Intuitive, user-centric designs that enhance user experience and drive engagement."
            icon={Layers}
          />
          <ServiceCard
            title="Web Development"
            description="Responsive, high-performance websites and web applications for your digital presence."
            icon={Monitor}
          />
          <ServiceCard
            title="Mobile Development"
            description="Native and cross-platform mobile apps that deliver seamless experiences across devices."
            icon={Smartphone}
          />
          <div className="service-card p-6 md:p-8 rounded-xl backdrop-blur-sm bg-gm-dark/40 border border-gm-green/10 hover:border-gm-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-gm-green/10 flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold mb-4 text-center text-white">Ready to start your project?</h3>
            <Link
              to="/contact"
              className="bg-gm-green hover:bg-gm-green/90 text-white font-medium py-2.5 px-6 rounded-lg transition-all inline-flex items-center hover:shadow-lg hover:shadow-gm-green/20"
            >
              Contact Us
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
