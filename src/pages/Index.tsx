
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, Smartphone, Monitor, Layers, ArrowRight, Users } from 'lucide-react';
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

      {/* About Us Section */}
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

      {/* Clients Section */}
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-gm-dark/40 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center border border-gm-green/10 hover:border-gm-green/30 transition-all duration-300">
                <div className="flex items-center justify-center h-16">
                  <Users size={32} className="text-gm-green opacity-70" />
                  <p className="ml-2 font-medium text-white">Client {i+1}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gm-dark/40 backdrop-blur-sm rounded-xl p-8 border border-gm-green/10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-gm-green/10 p-4 rounded-full">
                  <Users size={32} className="text-gm-green" />
                </div>
                <div>
                  <p className="text-gray-300 italic mb-4">
                    "Green Mantis transformed our business with their innovative software solutions. Their team's expertise and dedication to quality exceeded our expectations."
                  </p>
                  <p className="font-semibold text-white">John Smith</p>
                  <p className="text-sm text-gray-400">CEO, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 bg-gm-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-0 top-0 w-full h-full">
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
              <defs>
                <radialGradient id="Gradient2" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
                  <animate attributeName="fx" dur="25s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                  <stop offset="0%" stopColor="rgba(139, 195, 74, 0.3)"></stop>
                  <stop offset="100%" stopColor="rgba(139, 195, 74, 0)"></stop>
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
              </rect>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in <span className="gradient-text">Touch</span></h2>
                <p className="text-gray-300 mb-8">
                  Ready to discuss your project? Our team is here to answer your questions and help you achieve your business goals.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gm-green/10 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gm-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gm-green/10 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gm-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-400">info@greenmantis.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gm-green/10 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gm-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-400">123 Tech Street, Innovation City</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gm-darker rounded-xl p-8 border border-gm-green/10 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-gm-dark/50 border border-gm-green/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gm-green/30"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-gm-dark/50 border border-gm-green/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gm-green/30"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full bg-gm-dark/50 border border-gm-green/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gm-green/30"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="w-full bg-gm-green hover:bg-gm-green/90 text-white font-medium py-2.5 px-6 rounded-lg transition-all hover:shadow-lg hover:shadow-gm-green/20"
                    >
                      Send Message
                    </button>
                  </form>
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

      <Footer />
    </div>
  );
};

export default Index;
