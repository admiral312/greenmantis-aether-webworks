
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-gm-dark/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/29c454c4-e49c-4c54-88e5-22dee0bf2575.png" 
              alt="Green Mantis Logo" 
              className="h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-gm-green ${
                isActive('/') ? 'text-gm-green' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors hover:text-gm-green ${
                isActive('/services') ? 'text-gm-green' : 'text-white'
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-gm-green ${
                isActive('/about') ? 'text-gm-green' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-gm-green ${
                isActive('/contact') ? 'text-gm-green' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gm-green hover:bg-gm-green/90 text-white px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-gm-green/20"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gm-green focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gm-darker border-t border-gm-green/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className={`block py-2 text-base font-medium transition-colors ${
                isActive('/') ? 'text-gm-green' : 'text-white hover:text-gm-green'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`block py-2 text-base font-medium transition-colors ${
                isActive('/services') ? 'text-gm-green' : 'text-white hover:text-gm-green'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`block py-2 text-base font-medium transition-colors ${
                isActive('/about') ? 'text-gm-green' : 'text-white hover:text-gm-green'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block py-2 text-base font-medium transition-colors ${
                isActive('/contact') ? 'text-gm-green' : 'text-white hover:text-gm-green'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                to="/contact"
                className="block w-full bg-gm-green text-white text-center px-6 py-2.5 rounded-md font-medium text-sm hover:bg-gm-green/90 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
