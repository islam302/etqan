import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useUI } from '../context/UIContext.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useUI();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav_home'), href: '#home' },
    { name: t('nav_services'), href: '#services' },
    { name: t('nav_portfolio'), href: '#portfolio' },
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-700/90 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-display font-bold gradient-text">
              ETQAN
            </span>
          </motion.div>

          {/* Desktop Navigation - Floating pill style */}
          <motion.div
            className="hidden md:flex items-center bg-dark-300/80 backdrop-blur-md border border-gray-700/50 rounded-full px-2 py-1 space-x-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full hover:bg-dark-200/50 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </motion.div>

          {/* Right side - CTA only */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="#contact"
              className="btn-primary text-sm px-6 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('cta_get_started')}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-neon-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 bg-dark-400/95 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-neon-400 font-mono text-sm tracking-widest uppercase py-2 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a href="#contact" className="btn-primary w-full text-center mt-4">
                  {t('cta_get_started')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
