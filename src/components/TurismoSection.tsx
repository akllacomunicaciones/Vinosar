import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mountain, MapPin, Clock, Star, Filter } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DestinationDetail } from './DestinationDetail';
import miradorChungazon from 'figma:asset/32bb22ab18ccab4618070ff7963e8d35fec1784b.png';
import cristoRocas from 'figma:asset/c16466dee1761624110449dde631974abcce5993.png';
import caserioSalmuche from 'figma:asset/46c9a0d8348b03b76b0e7c39ab9f75bd9a642039.png';
import tinajaPancal from 'figma:asset/64ad8f23bf4e1a781724f6f4e2ec2e277476430f.png';
import iglesiaMatrizPortada from 'figma:asset/be8850ec95c0d834eb725cd1cbba60d9d9e210d4.png';
import iglesiaMatrizAngel from 'figma:asset/cf1c3039630b267a0228222cd761cf6074284d8c.png';
import iglesiaMatrizVista from 'figma:asset/1951c5bd8fcf6441eb9562bf3ac21da1a5d20ba7.png';
import iglesiaMatrizNoche from 'figma:asset/454b53d699150cae96236dc55da2b94ea0058d90.png';

const cascasDestinations = [
  {
    id: 1,
    category: 'Dentro del Pueblo',
    categoryLabel: 'Turismo dentro del Pueblo de Cascas',
    name: 'IGLESIA MATRIZ',
    description: 'Situada en la Plaza de Armas, sobre un recinto prehispánico, en este templo se venera a la Virgen del Rosario de Chiquinquirá, cuya imagen fue obsequiada nada menos que por el libertador Simón Bolívar, en agradecimiento al apoyo del pueblo a la causa independentista.',
    heroImage: iglesiaMatrizPortada,
    gallery: [
      iglesiaMatrizAngel,
      iglesiaMatrizVista,
      iglesiaMatrizNoche,
      'https://images.unsplash.com/photo-1760726338840-b75fe4791cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbmlhbCUyMGNodXJjaCUyMHBlcnUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0ODcwMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1760726338840-b75fe4791cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbmlhbCUyMGNodXJjaCUyMHBlcnUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0ODcwMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 2,
    category: 'Norte',
    categoryLabel: 'Turismo al Norte de Cascas',
    name: 'CRISTO DE LAS ROCAS',
    description: 'Partiendo de la plaza de Armas, se encuentra a 3 km al norte de la cuidad de Cascas, en el caserío de El Platanar, es una formación rocosa rodeada con densa vegetación. Donde se aprecia el perfil del rostro de Jesucristo labrado por la naturaleza, ostenta nitidez en su imagen y se puede observar los ojos, boca, nariz y hasta la corona de espinas. Tiene aproximadamente 20 metros de lago y 7 metros de ancho aproximadamente, causando admiración a quienes la visitan.',
    heroImage: cristoRocas,
    gallery: [
      cristoRocas,
      cristoRocas,
      cristoRocas,
      cristoRocas,
      cristoRocas,
    ],
  },
  {
    id: 3,
    category: 'Este',
    categoryLabel: 'Turismo al Este de Cascas',
    name: 'LA TINAJA DEL PANCAL',
    description: 'La Tinaja del Pancal, es un atractivo natural el cual es admirante observar una piedra que tiene la forma de una tinaja.',
    heroImage: tinajaPancal,
    gallery: [
      tinajaPancal,
      tinajaPancal,
      tinajaPancal,
      tinajaPancal,
      tinajaPancal,
    ],
  },
  {
    id: 4,
    category: 'Oeste',
    categoryLabel: 'Turismo al Oeste de Cascas',
    name: 'CASERIO DE SALMUCHE',
    description: 'Salmuche es un caserío del Distrito de Cascas, Provincia de Gran Chimú, del Departamento La Libertad. Cual se encuentra ubicado al Nor-Oeste del Distrito de Cascas, con una altitud de 1585 m.s.n.m. Podrás encontrar varias variedades de uvas viníferas, pisqueras, de mesa y apirenas (uva sin pepa). Tierra de gran fertilidad, acogedora de flora, fauna y sus majestuosas aves rapases que merodean su cerro El Antivo.',
    heroImage: caserioSalmuche,
    gallery: [
      caserioSalmuche,
      caserioSalmuche,
      caserioSalmuche,
      caserioSalmuche,
      caserioSalmuche,
    ],
  },
  {
    id: 5,
    category: 'Sur',
    categoryLabel: 'Turismo al Sur de Cascas',
    name: 'MIRADOR NATURAL CHUNGAZON',
    description: 'Mirador turístico natural, alcanza los 1238 m snm. Se ubica al sureste de Cascas en el Caserío de Pampas de San Isidro, a 10 minutos partiendo desde la plaza de Armas o accediendo por la ruta de ingreso a Cascas a la altura del Sector Casa Blanca. Tiene una superficie de unas 4 hectáreas, desde donde se observa el paisaje natural, los viñedos, el crecimiento de la cuidad y la convivencia de la población con su historia y costumbres. En la antigüedad sirvió como lugar ceremonial encontrándose restos de cerámica, en la actualidad se ha convertido en el escenario perfecto para la escenificación de la crucifixión de Jesucristo de Semana Santa.',
    heroImage: miradorChungazon,
    gallery: [
      miradorChungazon,
      miradorChungazon,
      miradorChungazon,
      miradorChungazon,
      miradorChungazon,
    ],
  },
];

const destinations = [
  {
    id: 1,
    name: 'Machu Picchu',
    region: 'Cusco, Perú',
    description: 'Ciudadela inca en las alturas de los Andes peruanos, maravilla del mundo.',
    type: 'Montaña',
    difficulty: 'Moderada',
    duration: '2-3 días',
    altitude: '2,430 msnm',
    rating: 5.0,
    reviews: 2847,
  },
  {
    id: 2,
    name: 'Glaciar Perito Moreno',
    region: 'Santa Cruz, Argentina',
    description: 'Imponente glaciar en continuo movimiento en el Parque Nacional Los Glaciares.',
    type: 'Glaciar',
    difficulty: 'Fácil',
    duration: '1 día',
    altitude: '200 msnm',
    rating: 4.9,
    reviews: 1523,
  },
  {
    id: 3,
    name: 'Salar de Uyuni',
    region: 'Potosí, Bolivia',
    description: 'El desierto de sal más grande del mundo, paisaje surrealista único.',
    type: 'Desierto',
    difficulty: 'Fácil',
    duration: '3-4 días',
    altitude: '3,656 msnm',
    rating: 4.9,
    reviews: 1892,
  },
  {
    id: 4,
    name: 'Cataratas del Iguazú',
    region: 'Misiones, Argentina',
    description: 'Sistema de cascadas espectaculares rodeadas de selva tropical exuberante.',
    type: 'Cascadas',
    difficulty: 'Fácil',
    duration: '1-2 días',
    altitude: '195 msnm',
    rating: 5.0,
    reviews: 3241,
  },
  {
    id: 5,
    name: 'Torres del Paine',
    region: 'Patagonia, Chile',
    description: 'Parque nacional con montañas escarpadas, glaciares y lagos turquesas.',
    type: 'Montaña',
    difficulty: 'Avanzada',
    duration: '4-7 días',
    altitude: '2,500 msnm',
    rating: 4.9,
    reviews: 987,
  },
  {
    id: 6,
    name: 'Valle de la Luna',
    region: 'San Juan, Argentina',
    description: 'Paisajes lunares con formaciones rocosas únicas del período triásico.',
    type: 'Desierto',
    difficulty: 'Fácil',
    duration: '1 día',
    altitude: '1,200 msnm',
    rating: 4.7,
    reviews: 654,
  },
  {
    id: 7,
    name: 'Laguna Colorada',
    region: 'Potosí, Bolivia',
    description: 'Laguna de aguas rojas poblada de flamencos en altiplano boliviano.',
    type: 'Laguna',
    difficulty: 'Moderada',
    duration: '2-3 días',
    altitude: '4,278 msnm',
    rating: 4.8,
    reviews: 432,
  },
  {
    id: 8,
    name: 'Península Valdés',
    region: 'Chubut, Argentina',
    description: 'Reserva natural con ballenas, pingüinos y lobos marinos en su hábitat.',
    type: 'Costa',
    difficulty: 'Fácil',
    duration: '2-3 días',
    altitude: '0 msnm',
    rating: 4.8,
    reviews: 876,
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Fácil':
      return 'bg-[#2B5C4F]/10 text-[#2B5C4F]';
    case 'Moderada':
      return 'bg-[#C4A976]/10 text-[#C4A976]';
    case 'Avanzada':
      return 'bg-[#3D1A2B]/10 text-[#3D1A2B]';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export function TurismoSection({ onSelectDestination, selectedDestinationId }: { 
  onSelectDestination: (id: number) => void;
  selectedDestinationId: number | null;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Dentro del Pueblo', 'Norte', 'Este', 'Oeste', 'Sur'];

  const filteredDestinations = selectedCategory === 'Todos' 
    ? cascasDestinations 
    : cascasDestinations.filter(dest => dest.category === selectedCategory);

  // Encontrar el destino seleccionado
  const selectedDestination = selectedDestinationId 
    ? cascasDestinations.find(d => d.id === selectedDestinationId) 
    : null;

  return (
    <>
      {/* Vista de detalle del destino */}
      <AnimatePresence>
        {selectedDestination && (
          <DestinationDetail
            destination={selectedDestination}
            onClose={() => onSelectDestination(null as any)}
          />
        )}
      </AnimatePresence>

      {/* Vista principal con grid de tarjetas */}
      {!selectedDestination && (
        <section id="turismo" className="min-h-screen bg-white pt-20">{/* Fondo blanco sólido */}
          
          <div className="relative z-10 py-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-8 mb-16">
              <h1 className="text-[#5d0012] text-center mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '3.5rem' }}>
                CASCAS, DESTINO DE LOS DIOSES
              </h1>
              <p className="text-[#1F1F1F]/60 text-center" style={{ fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto' }}>
                Descubre los tesoros naturales y culturales de un pueblo con historia milenaria
              </p>
            </div>

            {/* Menú de Categorías - Estilo Visit Mexico */}
            <div className="max-w-7xl mx-auto px-8 mb-12">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#5d0012] text-white shadow-lg'
                        : 'bg-white text-[#1F1F1F]/70 border border-[#E8E6E1] hover:border-[#5d0012] hover:text-[#5d0012]'
                    }`}
                    style={{ fontSize: '0.875rem', fontWeight: '500', letterSpacing: '0.025em' }}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Contador de destinos */}
              <p className="text-center mt-6 text-[#1F1F1F]/50" style={{ fontSize: '0.875rem' }}>
                {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destino' : 'destinos'}
              </p>
            </div>

            {/* Tarjetas Estilo Visit Mexico - Grid */}
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {filteredDestinations.map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => onSelectDestination(destination.id)}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  >
                    {/* Imagen con título superpuesto */}
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={destination.heroImage}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay oscuro */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      {/* Título sobre la imagen */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: '600', fontFamily: "'Playfair Display', Georgia, serif" }}>
                          {destination.name}
                        </h3>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-6">
                      <p className="text-[#1F1F1F]/70 text-sm leading-relaxed line-clamp-3 mb-4">
                        {destination.description}
                      </p>
                      
                      {/* Botón Ver más */}
                      <div
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#5d0012] text-white rounded-full hover:bg-[#5d0012]/90 transition-all duration-300 group-hover:gap-3"
                        style={{ fontSize: '0.875rem', fontWeight: '600' }}
                      >
                        VER MÁS
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}