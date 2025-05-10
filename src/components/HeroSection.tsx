
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gm-dark">
      <ParticleBackground />
      <div className="hero-gradient absolute inset-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Ideas Into <br />
              <span className="gradient-text">Digital Realities</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Green Mantis delivers cutting-edge IT solutions with a focus on innovation, 
              quality, and client success. Let's build the future together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-gm-green hover:bg-gm-green/90 text-white font-semibold py-3 px-8 rounded-lg transition-all flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent hover:bg-white/10 border border-gm-green text-gm-green font-semibold py-3 px-8 rounded-lg transition-all"
              >
                Get in Touch
              </Link>
            </div>
            <div className="mt-12 flex items-center space-x-6">
              <div>
                <p className="text-gm-green text-3xl font-bold">150+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <span className="h-12 w-px bg-gray-700"></span>
              <div>
                <p className="text-gm-green text-3xl font-bold">50+</p>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
              <span className="h-12 w-px bg-gray-700"></span>
              <div>
                <p className="text-gm-green text-3xl font-bold">10+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-60 h-60 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-gm-green/20 rounded-full filter blur-3xl animate-pulse-gentle"></div>
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/29c454c4-e49c-4c54-88e5-22dee0bf2575.png" 
                  alt="Green Mantis Logo" 
                  className="w-full animate-rotate-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
