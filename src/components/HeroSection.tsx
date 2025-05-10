
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
                <div className="mantis-tech-animation relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Mantis tech animation */}
                    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Circuit board background pattern */}
                      <path d="M50 50 H250 V250 H50 Z" stroke="#8BC34A" strokeWidth="0.5" strokeOpacity="0.3" />
                      <path d="M70 70 H230 V230 H70 Z" stroke="#8BC34A" strokeWidth="0.5" strokeOpacity="0.3" />
                      <path d="M90 50 V250" stroke="#8BC34A" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />
                      <path d="M130 50 V250" stroke="#8BC34A" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />
                      <path d="M170 50 V250" stroke="#8BC34A" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />
                      <path d="M210 50 V250" stroke="#8BC34A" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />
                      <path d="M50 90 H250" stroke="#8BC34A" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />
                      <path d="M50 130 H250" stroke="#8BC34A" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />
                      <path d="M50 170 H250" stroke="#8BC34A" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />
                      <path d="M50 210 H250" stroke="#8BC34A" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />
                      
                      {/* Mantis outer shape */}
                      <path 
                        d="M150 60 L180 90 L210 80 L200 110 L220 140 L190 130 L180 170 L165 150 L150 190 L135 150 L120 170 L110 130 L80 140 L100 110 L90 80 L120 90 Z" 
                        stroke="#8BC34A" 
                        strokeWidth="2" 
                        fill="none"
                        className="animate-pulse-gentle" 
                      />
                      
                      {/* Mantis inner details */}
                      <path d="M140 90 L160 90" stroke="#8BC34A" strokeWidth="1" />
                      <circle cx="130" cy="85" r="5" fill="#8BC34A" className="animate-pulse-gentle" />
                      <circle cx="170" cy="85" r="5" fill="#8BC34A" className="animate-pulse-gentle" />
                      
                      {/* Front legs */}
                      <path 
                        d="M130 110 Q100 130 90 150 Q80 170 85 190" 
                        stroke="#8BC34A" 
                        strokeWidth="1.5" 
                        fill="none" 
                        className="animate-pulse-gentle"
                      />
                      <path 
                        d="M170 110 Q200 130 210 150 Q220 170 215 190" 
                        stroke="#8BC34A" 
                        strokeWidth="1.5" 
                        fill="none"
                        className="animate-pulse-gentle" 
                      />
                      
                      {/* Data nodes/points */}
                      {[...Array(20)].map((_, i) => (
                        <circle
                          key={i}
                          cx={75 + Math.random() * 150}
                          cy={75 + Math.random() * 150}
                          r="1.5"
                          fill="#FFFFFF"
                          className="animate-pulse-gentle"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                      
                      {/* Digital circuit elements */}
                      <circle cx="150" cy="150" r="50" stroke="#8BC34A" strokeWidth="0.5" strokeDasharray="3 3" className="animate-rotate-slow" />
                      <circle cx="150" cy="150" r="30" stroke="#8BC34A" strokeWidth="0.5" strokeDasharray="2 2" className="animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
                      
                      {/* Green Mantis tech text */}
                      <text x="130" y="240" fill="#8BC34A" fontSize="12" fontFamily="monospace" className="animate-pulse-gentle">GREEN MANTIS</text>
                      <text x="120" y="255" fill="#8BC34A" fontSize="8" fontFamily="monospace" opacity="0.7">TECHNOLOGY SOLUTIONS</text>
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
