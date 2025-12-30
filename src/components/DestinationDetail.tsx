import { motion } from 'motion/react';
import { X, MapPin, Clock, Calendar, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DestinationDetailProps {
  destination: {
    id: number;
    name: string;
    category: string;
    categoryLabel: string;
    description: string;
    heroImage: string;
    gallery: string[];
  };
  onClose: () => void;
}

export function DestinationDetail({ destination, onClose }: DestinationDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white overflow-y-auto"
    >
      {/* Header con imagen de portada */}
      <div className="relative h-[60vh] min-h-[500px]">
        <ImageWithFallback
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay oscuro - Reducido para visualizar la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full transition-all duration-300 group"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Título sobre la imagen */}
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-white/80 text-sm uppercase tracking-wider mb-3">
                {destination.categoryLabel}
              </p>
              <h1 
                className="text-white mb-4" 
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  fontSize: '3.5rem',
                  lineHeight: '1.1'
                }}
              >
                {destination.name}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        
        {/* Galería de fotos */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {destination.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`${destination.name} - Foto ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Descripción y detalles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Descripción principal */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <h2 
              className="text-[#5d0012] mb-6" 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: '2rem' 
              }}
            >
              {destination.name}
            </h2>
            <p 
              className="text-[#1F1F1F]/80 leading-relaxed mb-8" 
              style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
            >
              {destination.description}
            </p>

            {/* Información adicional */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-[#5d0012]/5 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#5d0012]" />
                </div>
                <div>
                  <p className="text-[#1F1F1F]/50 text-sm mb-1">Ubicación</p>
                  <p className="text-[#1F1F1F] font-medium">Cascas, La Libertad</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-3 bg-[#5d0012]/5 rounded-lg">
                  <Clock className="w-5 h-5 text-[#5d0012]" />
                </div>
                <div>
                  <p className="text-[#1F1F1F]/50 text-sm mb-1">Duración</p>
                  <p className="text-[#1F1F1F] font-medium">Medio día</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-[#5d0012]/5 rounded-lg">
                  <Calendar className="w-5 h-5 text-[#5d0012]" />
                </div>
                <div>
                  <p className="text-[#1F1F1F]/50 text-sm mb-1">Mejor época</p>
                  <p className="text-[#1F1F1F] font-medium">Todo el año</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-[#5d0012]/5 rounded-lg">
                  <Users className="w-5 h-5 text-[#5d0012]" />
                </div>
                <div>
                  <p className="text-[#1F1F1F]/50 text-sm mb-1">Accesibilidad</p>
                  <p className="text-[#1F1F1F] font-medium">Para todos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Panel lateral - Reserva */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 bg-gradient-to-br from-[#5d0012] to-[#8B0020] rounded-2xl p-8 shadow-2xl">
              <h3 
                className="text-white mb-4" 
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  fontSize: '1.5rem' 
                }}
              >
                Reserva tu visita
              </h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Contáctanos para organizar tu visita a este maravilloso destino. Nuestro equipo te ayudará a planificar la experiencia perfecta.
              </p>

              {/* Botón de WhatsApp */}
              <a
                href={`https://wa.me/51920451607?text=${encodeURIComponent("¡Hola, Vinos AR! 🍷🏔️🚴\nEstoy interesad@ en lo que ofrecen y me gustaría recibir más información ☺️")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#5d0012] rounded-full hover:bg-white/95 transition-all duration-300 group shadow-lg"
                style={{ fontSize: '1rem', fontWeight: '600' }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                RESERVAR AHORA
              </a>

              {/* Info adicional */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/60 text-xs text-center">
                  Respuesta en menos de 24 horas
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}