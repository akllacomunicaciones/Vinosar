import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AnimatedBackgroundProps {
  images: string[];
  overlayOpacity?: number;
}

export function AnimatedBackground({ images, overlayOpacity = 0.92 }: AnimatedBackgroundProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Cambiar cada 6 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 z-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          />
          {/* Overlay para legibilidad */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#FAFAF9] via-[#FAFAF9]/95 to-[#FAFAF9]"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
