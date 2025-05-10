
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, Smartphone, Monitor, Layers, Database, Server, Cloud, Settings, Shield, Globe, Cpu } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Services = () => {
  useEffect(() => {
    document.title = "Our Services | Green Mantis";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Green Mantis IT services including Software Development, AI solutions, UI/UX Design, Web and Mobile Development.');
    }

    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions designed to address specific business needs and challenges. Our development team creates scalable, secure, and efficient software using the latest technologies and best practices.",
      features: ["Custom Software Solutions", "Enterprise Applications", "API Development", "Software Maintenance", "Legacy System Modernization"]
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Advanced artificial intelligence and machine learning solutions that provide valuable insights, automate processes, and enhance decision-making capabilities across your organization.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision Systems", "Predictive Analytics", "AI Process Automation"]
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience, increase engagement, and improve conversion rates. We create intuitive interfaces that delight users and meet business objectives.",
      features: ["User Research", "Interface Design", "Usability Testing", "Wireframing & Prototyping", "Design Systems"]
    },
    {
      icon: Monitor,
      title: "Web Development",
      description: "End-to-end web development services ranging from simple websites to complex web applications. We build responsive, high-performance web solutions optimized for all devices.",
      features: ["Responsive Web Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development", "Web Application Development"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that provide seamless experiences across all devices. Our mobile solutions are built for performance, security, and user engagement.",
      features: ["iOS App Development", "Android App Development", "Cross-platform Solutions", "Mobile UI/UX Design", "App Maintenance & Updates"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Comprehensive cloud solutions to modernize your infrastructure, improve scalability, and enhance security. We help businesses leverage cloud technologies for optimal performance.",
      features: ["Cloud Migration", "Cloud Architecture", "Serverless Solutions", "Multi-cloud Strategy", "Cloud Security"]
    }
  ];

  return (
    <div className="min-h-screen bg-gm-dark text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="gradient-text">Services</span></h1>
            <p className="text-gray-300 text-lg mb-10">
              We provide comprehensive IT solutions tailored to meet your business needs.
              From software development to AI solutions, our expertise covers all aspects of technology.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gm-darker">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card p-8 rounded-xl">
                  <div className="flex items-start mb-6">
                    <div className="bg-gm-green/10 p-3 rounded-lg mr-4">
                      <Icon className="text-gm-green" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gm-green">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <svg className="h-4 w-4 mr-2 text-gm-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.75 12.75L10 15.25L16.25 8.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-gm-green hover:underline font-medium"
                  >
                    Discuss your project
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gm-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies <span className="gradient-text">We Use</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We leverage the latest technologies to deliver cutting-edge solutions
              that empower your business for future growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: <Monitor size={32} /> },
              { name: "Node.js", icon: <Server size={32} /> },
              { name: "Python", icon: <Code size={32} /> },
              { name: "TensorFlow", icon: <Brain size={32} /> },
              { name: "AWS", icon: <Cloud size={32} /> },
              { name: "MongoDB", icon: <Database size={32} /> },
              { name: "Docker", icon: <Settings size={32} /> },
              { name: "Kubernetes", icon: <Globe size={32} /> },
              { name: "Angular", icon: <Layers size={32} /> },
              { name: "Vue.js", icon: <Monitor size={32} /> },
              { name: "Figma", icon: <Layers size={32} /> },
              { name: "Next.js", icon: <Cpu size={32} /> },
            ].map((tech, index) => (
              <div key={index} className="bg-gm-darker p-6 rounded-xl text-center hover:bg-gm-darker/70 transition-colors">
                <div className="text-gm-green mb-3 flex justify-center">
                  {tech.icon}
                </div>
                <h3 className="text-white font-medium">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gm-darker relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-gm-green/10 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-10">
              Contact us today to discuss your project requirements and discover how Green Mantis 
              can help you achieve your business goals through innovative technology solutions.
            </p>
            <Link
              to="/contact"
              className="bg-gm-green hover:bg-gm-green/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
