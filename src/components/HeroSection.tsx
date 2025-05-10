
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
                <div className="tech-animation relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Advanced tech animation */}
                    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Outer circle */}
                      <circle cx="150" cy="150" r="140" stroke="#8BC34A" strokeWidth="1" strokeDasharray="8 8" className="animate-rotate-slow" />
                      
                      {/* Middle circle */}
                      <circle cx="150" cy="150" r="100" stroke="#8BC34A" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="5 5" className="animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
                      
                      {/* Inner circle */}
                      <circle cx="150" cy="150" r="70" stroke="#8BC34A" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" className="animate-rotate-slow" />
                      
                      {/* Connection points */}
                      <circle cx="150" cy="150" r="40" fill="#121620" stroke="#8BC34A" strokeWidth="1" />
                      <circle cx="230" cy="150" r="15" fill="#121620" stroke="#8BC34A" strokeWidth="1" className="animate-pulse-gentle" />
                      <circle cx="150" cy="70" r="12" fill="#121620" stroke="#8BC34A" strokeWidth="1" className="animate-pulse-gentle" />
                      <circle cx="90" cy="190" r="10" fill="#121620" stroke="#8BC34A" strokeWidth="1" className="animate-pulse-gentle" />
                      <circle cx="180" cy="210" r="8" fill="#121620" stroke="#8BC34A" strokeWidth="1" className="animate-pulse-gentle" />
                      
                      {/* Connection lines */}
                      <path d="M150 110 L150 150" stroke="#8BC34A" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M190 150 L230 150" stroke="#8BC34A" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M118 174 L150 150" stroke="#8BC34A" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M170 174 L150 150" stroke="#8BC34A" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Green Mantis logo or symbol in center */}
                      <path d="M135 150 L165 150 L150 170 Z" fill="#8BC34A" className="animate-pulse" />
                      
                      {/* Data points */}
                      <circle cx="150" cy="110" r="3" fill="#8BC34A" />
                      <circle cx="118" cy="174" r="3" fill="#8BC34A" />
                      <circle cx="190" cy="150" r="3" fill="#8BC34A" />
                      <circle cx="170" cy="174" r="3" fill="#8BC34A" />
                      
                      {/* Animated particles */}
                      {[...Array(10)].map((_, i) => (
                        <circle
                          key={i}
                          cx={150 + Math.cos(i * 36 * Math.PI / 180) * 120}
                          cy={150 + Math.sin(i * 36 * Math.PI / 180) * 120}
                          r="1"
                          fill="#FFFFFF"
                          className="animate-pulse-gentle"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </svg>
                  </div>
                  
                  {/* Additional animated elements */}
                  <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse-gentle"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          opacity: Math.random() * 0.7 + 0.3
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
  );
};

export default HeroSection;
