import { ImageWithFallback } from './figma/ImageWithFallback';
import { Bike, MapPin, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

const routes = [
  {
    id: 1,
    name: 'Ruta de los Siete Lagos',
    startPoint: 'San Martín de los Andes',
    description: 'Travesía escénica por lagos cristalinos y bosques patagónicos ancestrales entre montañas.',
    distance: '110 km',
    elevation: '+1,200m',
    duration: '5-6h',
    difficulty: 'Avanzado',
    rating: 4.9,
    reviews: 127,
    type: 'Carretera',
    image: 'https://images.unsplash.com/photo-1763989237080-9e8b0358b7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwcm9hZCUyMG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NDg2ODc3NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Camino de los Viñedos',
    startPoint: 'Maipú, Mendoza',
    description: 'Recorrido entre bodegas premium por el corazón vinícola de Mendoza con paisajes andinos.',
    distance: '45 km',
    elevation: '+350m',
    duration: '2.5-3h',
    difficulty: 'Intermedio',
    rating: 4.8,
    reviews: 203,
    type: 'Cicloturismo',
    image: 'https://images.unsplash.com/photo-1534320553678-50d748b1cd74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwdmluZXlhcmQlMjBiaWtlfGVufDF8fHx8MTc2NDg2ODc3NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Valle de Calamuchita',
    startPoint: 'Villa General Belgrano',
    description: 'Rutas ondulantes por paisajes serranos con vistas panorámicas de las Sierras de Córdoba.',
    distance: '68 km',
    elevation: '+750m',
    duration: '3.5-4h',
    difficulty: 'Intermedio',
    rating: 4.7,
    reviews: 156,
    type: 'Carretera',
    image: 'https://images.unsplash.com/photo-1763475775120-5ff97172b8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwbW91bnRhaW4lMjBzY2VuaWN8ZW58MXx8fHwxNzY0ODY4Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Circuito Quebrada de las Conchas',
    startPoint: 'Cafayate, Salta',
    description: 'Paisajes desérticos con formaciones rocosas coloridas y caminos escénicos únicos.',
    distance: '52 km',
    elevation: '+420m',
    duration: '3-3.5h',
    difficulty: 'Intermedio',
    rating: 4.9,
    reviews: 98,
    type: 'Carretera',
    image: 'https://images.unsplash.com/photo-1636573385991-bc4745d1814e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwZGVzZXJ0JTIwcm9hZHxlbnwxfHx8fDE3NjQ4Njg3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Ruta del Fin del Mundo',
    startPoint: 'Ushuaia',
    description: 'Pedalea por la ciudad más austral del planeta con vistas al Canal Beagle y montañas nevadas.',
    distance: '38 km',
    elevation: '+280m',
    duration: '2-2.5h',
    difficulty: 'Fácil',
    rating: 5.0,
    reviews: 89,
    type: 'Cicloturismo',
    image: 'https://images.unsplash.com/photo-1663367769838-0241725a7c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwcGF0YWdvbmlhJTIwcm9hZHxlbnwxfHx8fDE3NjQ4Njg3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Traslasierra Gravel',
    startPoint: 'Villa Cura Brochero',
    description: 'Ruta gravel por caminos de ripio entre sierras con arroyos cristalinos y bosques nativos.',
    distance: '75 km',
    elevation: '+980m',
    duration: '4.5-5h',
    difficulty: 'Avanzado',
    rating: 4.8,
    reviews: 72,
    type: 'Gravel',
    image: 'https://images.unsplash.com/photo-1599637840048-00ee815f0c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF2ZWwlMjBjeWNsaW5nJTIwbW91bnRhaW58ZW58MXx8fHwxNzY0ODY4Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 7,
    name: 'Delta del Paraná',
    startPoint: 'Tigre, Buenos Aires',
    description: 'Recorrido por islas, arroyos y puentes con vegetación exuberante cerca de la capital.',
    distance: '32 km',
    elevation: '+50m',
    duration: '2-2.5h',
    difficulty: 'Fácil',
    rating: 4.6,
    reviews: 241,
    type: 'Cicloturismo',
    image: 'https://images.unsplash.com/photo-1642247093742-38768e332b87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwcml2ZXIlMjBuYXR1cmV8ZW58MXx8fHwxNzY0ODY4Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 8,
    name: 'Ascenso al Cerro Champaquí',
    startPoint: 'Villa Alpina',
    description: 'Desafío extremo hacia el pico más alto de las Sierras de Córdoba con pendientes exigentes.',
    distance: '92 km',
    elevation: '+2,100m',
    duration: '6-7h',
    difficulty: 'Experto',
    rating: 4.9,
    reviews: 45,
    type: 'MTB',
    image: 'https://images.unsplash.com/photo-1604677657548-4ced0c4f40c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjB0cmFpbHxlbnwxfHx8fDE3NjQ4NjM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Fácil':
      return 'bg-emerald-500/10 text-emerald-700 border-emerald-200';
    case 'Intermedio':
      return 'bg-amber-500/10 text-amber-700 border-amber-200';
    case 'Avanzado':
      return 'bg-orange-500/10 text-orange-700 border-orange-200';
    case 'Experto':
      return 'bg-red-500/10 text-red-700 border-red-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

export function RutasSection() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Todos');

  const difficulties = ['Todos', 'Fácil', 'Intermedio', 'Avanzado', 'Experto'];

  const filteredRoutes = selectedDifficulty === 'Todos' 
    ? routes 
    : routes.filter(route => route.difficulty === selectedDifficulty);

  return (
    <section id="rutas" className="min-h-screen bg-white pt-20">
      <div className="relative z-10 py-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <h1 className="text-[#5d0012] text-center mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '3.5rem' }}>
            RUTAS DE CICLISMO
          </h1>
          <p className="text-[#1F1F1F]/60 text-center" style={{ fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto' }}>
            Descubre las mejores rutas para ciclismo de ruta en paisajes espectaculares
          </p>
        </div>

        {/* Filtro de Dificultad - Estilo Explorinka */}
        <div className="max-w-7xl mx-auto px-8 mb-12">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedDifficulty === difficulty
                    ? 'bg-[#5d0012] text-white shadow-lg'
                    : 'bg-white text-[#1F1F1F]/70 border border-[#E8E6E1] hover:border-[#5d0012] hover:text-[#5d0012]'
                }`}
                style={{ fontSize: '0.875rem', fontWeight: '500' }}
              >
                {difficulty}
              </button>
            ))}
          </div>
          
          <p className="text-center mt-6 text-[#1F1F1F]/50" style={{ fontSize: '0.875rem' }}>
            {filteredRoutes.length} {filteredRoutes.length === 1 ? 'ruta disponible' : 'rutas disponibles'}
          </p>
        </div>

        {/* Tarjetas de Rutas - Estilo Explorinka */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRoutes.map((route, index) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Imagen */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={route.image}
                    alt={route.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Badge de dificultad */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs border backdrop-blur-sm bg-white/90 ${getDifficultyColor(route.difficulty)}`}
                      style={{ fontWeight: '600' }}>
                      {route.difficulty}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-[#1F1F1F] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.375rem', fontWeight: '600' }}>
                    {route.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-[#5d0012]" />
                    <p className="text-sm text-[#1F1F1F]/60">{route.startPoint}</p>
                  </div>

                  <p className="text-[#1F1F1F]/70 text-sm leading-relaxed mb-6 line-clamp-2">
                    {route.description}
                  </p>

                  {/* Info Grid - Estilo Explorinka */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-[#E8E6E1]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#5d0012]/10 rounded-lg flex items-center justify-center">
                        <Bike className="w-4 h-4 text-[#5d0012]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#1F1F1F]/50">Distancia</p>
                        <p className="text-sm text-[#1F1F1F]" style={{ fontWeight: '600' }}>{route.distance}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#5d0012]/10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-[#5d0012]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#1F1F1F]/50">Desnivel</p>
                        <p className="text-sm text-[#1F1F1F]" style={{ fontWeight: '600' }}>{route.elevation}</p>
                      </div>
                    </div>
                  </div>

                  {/* Botón RESERVAR */}
                  <a 
                    href={`https://wa.me/51920451607?text=${encodeURIComponent("¡Hola, Vinos AR! 🍷🏔️🚴\nEstoy interesad@ en lo que ofrecen y me gustaría recibir más información ☺️")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-6 py-3 bg-[#5d0012] text-white rounded-lg hover:bg-[#5d0012]/90 transition-all duration-300 group-hover:shadow-md"
                    style={{ fontSize: '0.875rem', fontWeight: '600', letterSpacing: '0.025em' }}>
                    RESERVAR
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}