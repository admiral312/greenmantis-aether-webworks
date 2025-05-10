
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const About = () => {
  useEffect(() => {
    document.title = "About Us | Green Mantis";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Green Mantis, a leading IT company specializing in software development, AI, UI/UX, web and mobile app development services.');
    }

    window.scrollTo(0, 0);
  }, []);

  // Team data
  const team = [
    {
      name: "John Doe",
      position: "Founder & CEO",
      bio: "15+ years of experience in software development and IT leadership.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Jane Smith",
      position: "CTO",
      bio: "Expert in AI and machine learning with a background in research.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "David Chen",
      position: "Head of Design",
      bio: "Award-winning designer with expertise in creating intuitive user experiences.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Sarah Johnson",
      position: "Senior Developer",
      bio: "Full-stack developer with a passion for creating elegant solutions.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="gradient-text">Green Mantis</span></h1>
            <p className="text-gray-300 text-lg mb-10">
              We're a team of passionate IT professionals dedicated to delivering cutting-edge 
              solutions that drive business growth and innovation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gm-darker">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Our <span className="gradient-text">Mission</span></h2>
                <p className="text-gray-300">
                  To empower businesses through innovative technology solutions that drive growth,
                  efficiency, and competitive advantage in the digital landscape.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-4">Our <span className="gradient-text">Vision</span></h2>
                <p className="text-gray-300">
                  To be the leading provider of transformative IT solutions, recognized for our technical
                  excellence, client-focused approach, and positive impact on businesses worldwide.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our <span className="gradient-text">Values</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Innovation", desc: "Constantly exploring new technologies and approaches" },
                  { title: "Excellence", desc: "Delivering the highest quality in everything we do" },
                  { title: "Integrity", desc: "Maintaining ethical standards and transparency" },
                  { title: "Collaboration", desc: "Working together to achieve exceptional results" }
                ].map((value, index) => (
                  <div key={index} className="bg-gm-dark p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="text-gm-green mr-3" size={20} />
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-gm-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Story</span></h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-gm-green/10 p-4 rounded-lg inline-flex">
                    <span className="text-gm-green text-xl font-bold">2013</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                  <p className="text-gray-300">
                    Green Mantis was founded with a vision to create innovative software solutions 
                    that address real business challenges. Starting with a small team of passionate developers,
                    we focused on delivering custom software for local businesses.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-gm-green/10 p-4 rounded-lg inline-flex">
                    <span className="text-gm-green text-xl font-bold">2015</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Expanding Our Services</h3>
                  <p className="text-gray-300">
                    As our reputation for quality grew, so did our team and service offerings. 
                    We expanded into web and mobile development, helping companies establish strong digital presences
                    and reach new customers through innovative applications.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-gm-green/10 p-4 rounded-lg inline-flex">
                    <span className="text-gm-green text-xl font-bold">2018</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">AI Innovation</h3>
                  <p className="text-gray-300">
                    Recognizing the transformative potential of artificial intelligence, 
                    we established a dedicated AI division focused on helping businesses leverage
                    machine learning, natural language processing, and data analytics.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-gm-green/10 p-4 rounded-lg inline-flex">
                    <span className="text-gm-green text-xl font-bold">2023</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Global Expansion</h3>
                  <p className="text-gray-300">
                    Today, Green Mantis serves clients worldwide with a comprehensive suite of IT services.
                    Our team has grown to include over 50 experts across various technology disciplines,
                    all committed to our founding vision of delivering exceptional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gm-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Team</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the talented professionals who make Green Mantis exceptional.
              Our diverse team brings together expertise across various technology domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gm-dark rounded-xl overflow-hidden service-card">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gm-green text-sm mb-4">{member.position}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gm-dark relative overflow-hidden">
        <div className="hero-gradient absolute inset-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-300 mb-10">
              Join the hundreds of businesses that have transformed their operations with Green Mantis. 
              Let's collaborate to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gm-green hover:bg-gm-green/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
              >
                Get in Touch
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/services"
                className="bg-transparent hover:bg-white/10 border border-gm-green text-gm-green font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
