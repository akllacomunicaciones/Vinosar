import { useState, useEffect } from 'react';
import { Wine, Mountain, Bike, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingNavProps {
  onNavigate: (section: 'vinos' | 'turismo' | 'rutas' | 'landing') => void;
}

export function FloatingNav({ onNavigate }: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<'vinos' | 'turismo' | 'rutas' | 'hero'>('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar nav flotante después de 100vh
      setIsVisible(window.scrollY > window.innerHeight * 0.3);

      // Detectar sección activa
      const sections = ['vinos', 'turismo', 'rutas'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection as 'vinos' | 'turismo' | 'rutas');
      } else if (window.scrollY < window.innerHeight) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getButtonColor = (section: string) => {
    switch(section) {
      case 'vinos': return '#3D1A2B';
      case 'turismo': return '#2B5C4F';
      case 'rutas': return '#2A2A2A';
      default: return '#C4A976';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-[#E8E6E1] px-6 py-3 flex items-center gap-4">
            {/* Botón Volver Arriba */}
            <button
              onClick={() => onNavigate('landing')}
              className="p-2 rounded-full hover:bg-[#C4A976]/10 transition-colors"
              style={{ color: activeSection === 'hero' ? getButtonColor('hero') : '#1F1F1F' }}
            >
              <ChevronUp className="w-5 h-5" />
            </button>

            <div className="w-px h-6 bg-[#E8E6E1]" />

            {/* Botón Vinos */}
            <button
              onClick={() => onNavigate('vinos')}
              className="p-2 rounded-full hover:bg-[#3D1A2B]/10 transition-colors"
              style={{ color: activeSection === 'vinos' ? getButtonColor('vinos') : '#1F1F1F' }}
            >
              <Wine className="w-5 h-5" />
            </button>

            {/* Botón Turismo */}
            <button
              onClick={() => onNavigate('turismo')}
              className="p-2 rounded-full hover:bg-[#2B5C4F]/10 transition-colors"
              style={{ color: activeSection === 'turismo' ? getButtonColor('turismo') : '#1F1F1F' }}
            >
              <Mountain className="w-5 h-5" />
            </button>

            {/* Botón Rutas */}
            <button
              onClick={() => onNavigate('rutas')}
              className="p-2 rounded-full hover:bg-[#2A2A2A]/10 transition-colors"
              style={{ color: activeSection === 'rutas' ? getButtonColor('rutas') : '#1F1F1F' }}
            >
              <Bike className="w-5 h-5" />
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
