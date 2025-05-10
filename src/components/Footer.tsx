
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gm-darker text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/29c454c4-e49c-4c54-88e5-22dee0bf2575.png" 
                alt="Green Mantis Logo" 
                className="h-12 mb-4"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Innovative IT solutions for forward-thinking businesses. We transform ideas into 
              exceptional digital experiences.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-gm-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gm-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gm-green transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gm-green transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gm-green transition-colors text-sm">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gm-green transition-colors text-sm">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gm-green transition-colors text-sm">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gm-green transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gm-green transition-colors text-sm">
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gm-green transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gm-green transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gm-green transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gm-green transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gm-green transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-gm-green mt-0.5" size={18} />
                <span className="text-gray-400 text-sm">
                  1234 Tech Avenue, Silicon Valley, CA 94043
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-gm-green" size={18} />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-gm-green" size={18} />
                <span className="text-gray-400 text-sm">info@greenmantis.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Green Mantis. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/about" className="text-gray-500 hover:text-gm-green text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-gray-500 hover:text-gm-green text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
