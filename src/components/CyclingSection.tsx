import { Bike, Navigation, TrendingUp } from 'lucide-react';

const routes = [
  {
    id: 1,
    name: 'Ruta de los Siete Lagos',
    description: 'Travesía escénica por lagos cristalinos y bosques patagónicos ancestrales.',
    distance: '110 km',
    elevation: '+1,200m',
    difficulty: 'Avanzado',
  },
  {
    id: 2,
    name: 'Camino de los Viñedos',
    description: 'Recorrido entre bodegas premium por el corazón de Mendoza.',
    distance: '45 km',
    elevation: '+350m',
    difficulty: 'Intermedio',
  },
  {
    id: 3,
    name: 'Valle de Calamuchita',
    description: 'Rutas ondulantes por paisajes serranos con vistas panorámicas.',
    distance: '68 km',
    elevation: '+750m',
    difficulty: 'Intermedio',
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Principiante':
      return 'text-[#2B5C4F]';
    case 'Intermedio':
      return 'text-[#C4A976]';
    case 'Avanzado':
      return 'text-[#3D1A2B]';
    default:
      return 'text-[#1F1F1F]';
  }
};

export function CyclingSection() {
  return (
    <section id="rutas" className="py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#2A2A2A]" />
            <Bike className="w-6 h-6 text-[#2A2A2A]" />
            <div className="h-px flex-1 bg-[#2A2A2A]" />
          </div>
          <h2 className="text-center text-[#1F1F1F] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Rutas de Ciclismo Premium
          </h2>
          <p className="text-center text-[#1F1F1F]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Itinerarios diseñados para ciclistas exigentes en los mejores paisajes de Argentina
          </p>
        </div>

        {/* Cycling Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {routes.map((route) => (
            <div key={route.id} className="group">
              {/* Image Placeholder */}
              <div className="relative mb-8 overflow-hidden rounded-sm">
                <div 
                  className="h-[300px] w-full bg-gradient-to-br from-[#2A2A2A] via-[#3D3D3D] to-[#1A1A1A] flex items-center justify-center"
                >
                  <Navigation className="w-20 h-20 text-white/20" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#1F1F1F] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {route.name}
                  </h3>
                </div>

                <p className="text-[#1F1F1F]/60 text-sm leading-relaxed">
                  {route.description}
                </p>

                <div className="pt-4 border-t border-[#E8E6E1]">
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <div className="text-[#1F1F1F]/40 text-xs tracking-wide mb-1">Distancia</div>
                      <div className="text-[#1F1F1F]">{route.distance}</div>
                    </div>
                    <div>
                      <div className="text-[#1F1F1F]/40 text-xs tracking-wide mb-1">Desnivel</div>
                      <div className="text-[#1F1F1F]">{route.elevation}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-6 text-sm">
                    <TrendingUp className="w-4 h-4 text-[#1F1F1F]/40" />
                    <span className={`${getDifficultyColor(route.difficulty)}`}>
                      {route.difficulty}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2.5 bg-white text-[#1F1F1F] border border-[#E8E6E1] rounded-md hover:border-[#2A2A2A] hover:text-[#2A2A2A] transition-all duration-300 text-sm">
                      Ver Ruta
                    </button>
                    <button className="flex-1 px-4 py-2.5 bg-[#2A2A2A] text-white rounded-md hover:bg-[#2A2A2A]/90 transition-all duration-300 text-sm shadow-sm">
                      Reservar Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-[#2A2A2A] hover:text-[#C4A976] transition-colors duration-300 group"
          >
            <span className="text-sm tracking-wide">Descubrir Más Rutas</span>
            <div className="w-16 h-px bg-[#2A2A2A] group-hover:bg-[#C4A976] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
