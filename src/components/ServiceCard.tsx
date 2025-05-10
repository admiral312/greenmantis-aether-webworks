
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path?: string;
}

const ServiceCard = ({ title, description, icon: Icon, path = "/services" }: ServiceCardProps) => {
  return (
    <div className="service-card p-6 md:p-8 rounded-xl backdrop-blur-sm bg-gm-dark/40 border border-gm-green/10 hover:border-gm-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-gm-green/10 group">
      <div className="bg-gm-green/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-gm-green/20 transition-colors">
        <Icon className="text-gm-green" size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
      <div className="mt-6">
        <Link
          to={path}
          className="text-sm font-medium text-gm-green hover:text-gm-green/80 transition-colors inline-flex items-center gap-1 group-hover:underline"
        >
          Learn more
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 transition-transform group-hover:translate-x-1"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
