
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  
  // Toggle menu
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    
    toast({
      title: darkMode ? "Light Mode Activated" : "Dark Mode Activated",
      description: darkMode ? "Switched to light theme" : "Switched to dark theme",
      duration: 2000,
    });
  };

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check system preference for dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation links
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "NIXP", path: "/nixp" },
    { name: "Cybersecurity", path: "/cybersecurity" },
    { name: "Events", path: "/events" },
    { name: "Membership", path: "/membership" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" }
  ];

  // Check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative flex items-center">
              <img 
                src="/lovable-uploads/29243d56-10e8-4d2b-bf92-86dcf95ebaae.png" 
                alt="NESPAK Logo" 
                className="h-10 md:h-12"
              />
              <span className="ml-2 text-lg md:text-xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent">NESPAK</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-2 py-1 text-sm lg:text-base font-medium rounded-md transition-colors ${
                  isActive(link.path) 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Theme toggle and mobile menu button */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="mr-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white/95 dark:bg-gray-900/95 backdrop-blur-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.path)
                  ? 'text-blue-600 bg-gray-100 dark:text-blue-400 dark:bg-gray-800'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-blue-400 dark:hover:bg-gray-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
