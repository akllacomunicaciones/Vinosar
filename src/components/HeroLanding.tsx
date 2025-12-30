import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import imgCascadas1 from 'figma:asset/585c3300561d908ea722a3b8fe42caedfe844309.png';
import imgCascadas2 from 'figma:asset/e6a6495b5762fda5431358479aeee875a25ba77e.png';
import imgCascadas3 from 'figma:asset/df3f316c0dddd7255f29cf8115a0e0e89dc5ace0.png';
import imgCascadas4 from 'figma:asset/2d787ca1cabeb9db83de6c19dffff8c14d435875.png';

const backgroundImages = [
  imgCascadas1,
  imgCascadas2,
  imgCascadas3,
  imgCascadas4,
];

interface HeroLandingProps {
  onNavigate: (section: 'home' | 'vinos' | 'turismo' | 'rutas') => void;
}

export function HeroLanding({ onNavigate }: HeroLandingProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Precarga de imágenes para evitar parpadeos
  useEffect(() => {
    const imagePromises = backgroundImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)); // Continuar incluso si hay errores
  }, []);

  // Rotación automática de imágenes
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1F1F1F]">
      {/* Fondo con animación de crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ 
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" }
            }}
            className="absolute inset-0"
          >
            {/* Imagen para escritorio */}
            <img 
              src={backgroundImages[currentImageIndex]}
              alt={`Cascadas - Destino de los Dioses ${currentImageIndex + 1}`}
              className="hidden md:block w-full h-full object-cover"
              style={{ objectPosition: 'center bottom' }}
              loading="eager"
            />
            {/* Imagen para móvil */}
            <img 
              src={backgroundImages[currentImageIndex]}
              alt={`Cascadas - Destino de los Dioses ${currentImageIndex + 1}`}
              className="block md:hidden w-full h-full object-cover"
              style={{ objectPosition: 'center 65%' }}
              loading="eager"
            />
            {/* Overlay oscuro para mejor legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contenido sobre el fondo */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
        {/* Logo/Título principal */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-white tracking-tight" 
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(4rem, 12vw, 8rem)',
              textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)'
            }}
          >
            VINOS AR
          </h1>
        </motion.div>

        {/* Botones de navegación */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Botón Productos */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => onNavigate('vinos')}
            className="group relative px-10 py-3 overflow-hidden rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:border-[#5d0012] transition-all duration-500 hover:shadow-[0_4px_24px_rgba(93,0,18,0.5)]"
          >
            {/* Fondo de color que aparece en hover */}
            <div className="absolute inset-0 bg-[#5d0012] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            
            <p 
              className="relative z-10 text-white" 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: '1.25rem',
                letterSpacing: '0.08em',
                textShadow: '0 2px 8px rgba(0,0,0,0.6)'
              }}
            >
              PRODUCTOS
            </p>
          </motion.button>

          {/* Botón Turismo */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => onNavigate('turismo')}
            className="group relative px-10 py-3 overflow-hidden rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:border-[#5d0012] transition-all duration-500 hover:shadow-[0_4px_24px_rgba(93,0,18,0.5)]"
          >
            {/* Fondo de color que aparece en hover */}
            <div className="absolute inset-0 bg-[#5d0012] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            
            <p 
              className="relative z-10 text-white" 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: '1.25rem',
                letterSpacing: '0.08em',
                textShadow: '0 2px 8px rgba(0,0,0,0.6)'
              }}
            >
              TURISMO
            </p>
          </motion.button>

          {/* Botón Ciclismo */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => onNavigate('rutas')}
            className="group relative px-10 py-3 overflow-hidden rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:border-[#5d0012] transition-all duration-500 hover:shadow-[0_4px_24px_rgba(93,0,18,0.5)]"
          >
            {/* Fondo de color que aparece en hover */}
            <div className="absolute inset-0 bg-[#5d0012] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            
            <p 
              className="relative z-10 text-white" 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: '1.25rem',
                letterSpacing: '0.08em',
                textShadow: '0 2px 8px rgba(0,0,0,0.6)'
              }}
            >
              CICLISMO
            </p>
          </motion.button>
        </div>

        {/* Indicadores de imágenes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3"
        >
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${ 
                index === currentImageIndex
                  ? 'bg-white w-10 shadow-lg shadow-white/40'
                  : 'bg-white/40 hover:bg-white/70 w-2.5'
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}