import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/caed7960c8f74dd9cbb8b594e6fa6167b12abcbc.png';

interface HeaderProps {
  onNavigate: (section: 'home' | 'vinos' | 'turismo' | 'rutas') => void;
  activeSection?: string;
}

export function Header({ onNavigate, activeSection = 'home' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const menuItems = [
    { id: 'vinos', label: 'PRODUCTOS' },
    { id: 'turismo', label: 'TURISMO' },
    { id: 'rutas', label: 'CICLISMO' },
  ] as const;

  const handleNavigation = (section: 'home' | 'vinos' | 'turismo' | 'rutas') => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-[#E8E6E1]/50'
          : 'bg-white/40 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <ImageWithFallback
                src={logoImage}
                alt="Vinos AR Logo"
                className="h-16 w-16 rounded-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              {/* Decorative gold ring on hover */}
              <div className="absolute inset-0 rounded-full border-2 border-[#C4A976] opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />
            </div>
          </motion.button>

          {/* Navigation - Solo visible en páginas internas y desktop */}
          {activeSection !== 'home' && (
            <nav className="hidden md:flex items-center gap-3">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleNavigation(item.id)}
                  className={`
                    group relative px-6 py-2.5 rounded-full overflow-hidden
                    transition-all duration-300
                    ${
                      activeSection === item.id
                        ? 'bg-[#5d0012] text-white shadow-lg'
                        : 'bg-transparent text-[#5d0012] hover:shadow-md'
                    }
                  `}
                >
                  {/* Hover background effect */}
                  <div
                    className={`
                      absolute inset-0 bg-[#5d0012] transform origin-left transition-transform duration-300
                      ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `}
                  />

                  {/* Text */}
                  <span
                    className={`
                      relative z-10 tracking-wider text-sm font-medium transition-colors duration-300
                      ${
                        activeSection === item.id
                          ? 'text-white'
                          : 'text-[#5d0012] group-hover:text-white'
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  {/* Gold underline on active */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#C4A976]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>
          )}

          {/* Mobile Menu Button - Solo visible en páginas internas */}
          {activeSection !== 'home' && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#5d0012] hover:bg-[#5d0012]/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Subtle bottom border with gold accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A976]/20 to-transparent" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && activeSection !== 'home' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl shadow-lg border-b border-[#E8E6E1]"
          >
            <div className="max-w-7xl mx-auto px-8 py-6">
              <nav className="flex flex-col items-stretch gap-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => handleNavigation(item.id)}
                    className={`
                      w-full text-center px-6 py-4 rounded-lg
                      transition-all duration-300
                      ${
                        activeSection === item.id
                          ? 'bg-[#5d0012] text-white shadow-md'
                          : 'bg-white/50 text-[#5d0012] hover:bg-[#5d0012]/10 border border-[#E8E6E1]'
                      }
                    `}
                  >
                    <span className="tracking-wider text-base font-medium">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}