
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "NIXP", path: "/nixp" },
    { name: "Cybersecurity", path: "/cybersecurity" },
    { name: "Events", path: "/events" },
    { name: "Membership", path: "/membership" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];
  
  const resources = [
    { name: "Network Security Guide", path: "/resources?category=Security" },
    { name: "IPv6 Migration Checklist", path: "/resources?category=Technical" },
    { name: "ICT Policy Briefs", path: "/resources?category=Policy" },
    { name: "Technical Documentation", path: "/resources?category=Technical" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/29243d56-10e8-4d2b-bf92-86dcf95ebaae.png" 
                alt="NESPAK Logo" 
                className="h-10 mr-2"
              />
              <span className="text-xl font-semibold text-white">NESPAK</span>
            </div>
            <p className="text-gray-400 mb-4">
              The Network Service Providers Association of Kenya (NESPAK) unites and represents Kenya's ISPs and network organizations to shape the digital future.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.path} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="outline" size="sm" className="mt-4 border-gray-600 text-gray-300 hover:text-white" asChild>
              <Link to="/resources">
                View All Resources
              </Link>
            </Button>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Westlands Business Park, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+254 700 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@nespak.or.ke</span>
              </li>
            </ul>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {year} Network Service Providers Association of Kenya (NESPAK). All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-400">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-blue-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
