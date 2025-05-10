
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
            <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
              <div className="absolute inset-0 bg-gm-green/20 rounded-full filter blur-3xl animate-pulse-gentle"></div>
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                <div className="astronaut-container relative w-full h-full">
                  {/* Animated astronaut floating in space */}
                  <div className="astronaut absolute inset-0 w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Main astronaut animation */}
                      <div className="absolute inset-0 flex items-center justify-center animate-float">
                        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse-gentle">
                          {/* Astronaut helmet */}
                          <circle cx="120" cy="100" r="50" fill="#E0E0E0" />
                          <circle cx="120" cy="100" r="45" fill="#1A1A2E" />
                          <circle cx="120" cy="100" r="40" fill="#0F1621" />
                          <path d="M100 85 Q120 70, 140 85" stroke="#8BC34A" strokeWidth="2" />
                          
                          {/* Astronaut body */}
                          <path d="M90 100 Q120 180, 150 100" fill="#E0E0E0" />
                          
                          {/* Green Mantis logo in visor */}
                          <path d="M110 95 L130 95 L120 110 Z" fill="#8BC34A" className="animate-pulse" />
                          
                          {/* Stars in background */}
                          <circle cx="110" cy="85" r="1" fill="white" className="animate-pulse" />
                          <circle cx="130" cy="85" r="1" fill="white" className="animate-pulse" />
                          <circle cx="120" cy="75" r="1" fill="white" className="animate-pulse" />
                        </svg>
                      </div>
                      
                      {/* Orbiting planets/satellites */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full animate-rotate-slow">
                          <div className="absolute top-10 right-20 w-6 h-6 bg-gm-green rounded-full opacity-70"></div>
                          <div className="absolute bottom-40 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-70"></div>
                        </div>
                      </div>
                      
                      {/* Star field background */}
                      <div className="absolute inset-0">
                        {[...Array(20)].map((_, i) => (
                          <div 
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-pulse-gentle"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
