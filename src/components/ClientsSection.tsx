
import React from 'react';
import { Building, Building2, Globe, Network, Users } from 'lucide-react';

const ClientsSection = () => {
  const clients = [
    { name: "TechCorp", icon: Building, description: "Enterprise Solutions" },
    { name: "Innovate Inc", icon: Building2, description: "Digital Transformation" },
    { name: "Global Systems", icon: Globe, description: "International IT Services" },
    { name: "Nexus Group", icon: Network, description: "Software Integration" },
    { name: "DataFlow", icon: Users, description: "Data Analytics Solutions" },
    { name: "CloudWave", icon: Building, description: "Cloud Infrastructure" },
  ];

  const testimonial = {
    quote: "Green Mantis transformed our business with their innovative software solutions. Their team's expertise and dedication to quality exceeded our expectations.",
    author: "John Smith",
    position: "CEO, TechCorp"
  };

  return (
    <section className="py-20 bg-gm-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gm-green blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gm-green blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Clients</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We've had the privilege of working with innovative companies across various industries. 
            Here are some of the organizations that trust Green Mantis.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div 
                key={index} 
                className="bg-gm-dark/40 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center border border-gm-green/10 hover:border-gm-green/30 transition-all duration-300 group"
              >
                <div className="bg-gm-green/10 p-4 rounded-full mb-4 group-hover:bg-gm-green/20 transition-colors">
                  <Icon size={28} className="text-gm-green" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-1">{client.name}</h3>
                <p className="text-sm text-gray-400">{client.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gm-dark/40 backdrop-blur-sm rounded-xl p-8 border border-gm-green/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-gm-green/10 p-4 rounded-full">
                <Users size={32} className="text-gm-green" />
              </div>
              <div>
                <p className="text-gray-300 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
