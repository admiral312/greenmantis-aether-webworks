
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, Smartphone, Monitor, Layers, ArrowRight } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Green Mantis - Innovative IT Solutions";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Green Mantis is a professional IT company specializing in software development, AI, UI/UX, web development, and mobile app development.');
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gm-dark text-white">
      <Navbar />
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-gm-darker" id="services">
        <div className="container mx-auto px-4">
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
            <div className="service-card p-6 md:p-8 rounded-xl card-shadow flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold mb-4 text-center text-white">Ready to start your project?</h3>
              <Link
                to="/contact"
                className="bg-gm-green hover:bg-gm-green/90 text-white font-medium py-2.5 px-6 rounded-lg transition-colors inline-flex items-center"
              >
                Contact Us
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-gm-dark">
        <div className="container mx-auto px-4">
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
                className="inline-flex items-center text-gm-green hover:underline font-medium"
              >
                Learn more about us
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gm-green/20 rounded-xl blur-xl"></div>
                <div className="animated-border bg-gm-darker p-6 rounded-xl relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-gm-dark/50 rounded-lg flex flex-col items-center text-center">
                      <h3 className="text-5xl font-bold text-gm-green mb-2">10+</h3>
                      <p className="text-gray-400">Years of Experience</p>
                    </div>
                    <div className="p-6 bg-gm-dark/50 rounded-lg flex flex-col items-center text-center">
                      <h3 className="text-5xl font-bold text-gm-green mb-2">50+</h3>
                      <p className="text-gray-400">Expert Developers</p>
                    </div>
                    <div className="p-6 bg-gm-dark/50 rounded-lg flex flex-col items-center text-center">
                      <h3 className="text-5xl font-bold text-gm-green mb-2">200+</h3>
                      <p className="text-gray-400">Projects Completed</p>
                    </div>
                    <div className="p-6 bg-gm-dark/50 rounded-lg flex flex-col items-center text-center">
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

      {/* CTA Section */}
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
                className="bg-gm-green hover:bg-gm-green/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="bg-transparent hover:bg-white/10 border border-gm-green text-gm-green font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
