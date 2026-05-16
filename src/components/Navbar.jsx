import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pinkAccent to-pink-300">
          Kritika.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => {
            const isHash = link.path.includes('#');
            const Element = isHash ? 'a' : Link;
            return (
              <Element 
                key={link.name} 
                to={!isHash ? link.path : undefined}
                href={isHash ? link.path : undefined}
                className={`text-sm font-medium transition-colors hover:text-pinkAccent relative ${
                  isActive(link.path) ? 'text-pinkAccent' : 'text-textLight'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute left-0 top-full mt-1 w-full h-[2px] bg-pinkAccent rounded-full"
                  />
                )}
              </Element>
            );
          })}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-textDark focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-pinkLight md:hidden"
          >
            <div className="flex flex-col py-4">
              {links.map((link) => {
                const isHash = link.path.includes('#');
                const Element = isHash ? 'a' : Link;
                return (
                  <Element
                    key={link.name}
                    to={!isHash ? link.path : undefined}
                    href={isHash ? link.path : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`px-6 py-3 text-lg transition-colors ${
                      isActive(link.path) ? 'text-pinkAccent font-semibold bg-pinkLight/30' : 'text-textDark hover:bg-pinkLight/50'
                    }`}
                  >
                    {link.name}
                  </Element>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
