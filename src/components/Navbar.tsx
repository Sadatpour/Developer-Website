
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-dev-dark/90 dark:backdrop-blur-md dark:shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-xl text-dev-blue">
            <a href="#home">DevName</a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-dev-blue transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-dev-blue focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-dev-dark/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-dev-blue hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
