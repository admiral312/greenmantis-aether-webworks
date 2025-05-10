
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutUsSection from '@/components/AboutUsSection';
import ClientsSection from '@/components/ClientsSection';
import CTASection from '@/components/CTASection';
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
      <ServicesSection />
      <AboutUsSection />
      <ClientsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
