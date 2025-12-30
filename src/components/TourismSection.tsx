import { Mountain, MapPin, TrendingUp } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Valle de la Luna',
    description: 'Formaciones rocosas únicas en el corazón de San Juan, paisaje marciano.',
    location: 'San Juan',
    difficulty: 'Moderado',
    duration: '2 días',
  },
  {
    id: 2,
    name: 'Glaciar Perito Moreno',
    description: 'Majestuoso glaciar en constante movimiento, espectáculo natural único.',
    location: 'Santa Cruz',
    difficulty: 'Fácil',
    duration: '3 días',
  },
  {
    id: 3,
    name: 'Quebrada de Humahuaca',
    description: 'Patrimonio de la humanidad con paisajes multicolores impresionantes.',
    location: 'Jujuy',
    difficulty: 'Moderado',
    duration: '4 días',
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Fácil':
      return 'text-[#2B5C4F]';
    case 'Moderado':
      return 'text-[#C4A976]';
    case 'Difícil':
      return 'text-[#3D1A2B]';
    default:
      return 'text-[#1F1F1F]';
  }
};

export function TourismSection() {
  return (
    <section id="turismo" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#2B5C4F]" />
            <Mountain className="w-6 h-6 text-[#2B5C4F]" />
            <div className="h-px flex-1 bg-[#2B5C4F]" />
          </div>
          <h2 className="text-center text-[#1F1F1F] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Destinos Excepcionales
          </h2>
          <p className="text-center text-[#1F1F1F]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Experiencias turísticas curadas en los rincones más privilegiados de Argentina
          </p>
        </div>

        {/* Tourism Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {destinations.map((destination) => (
            <div key={destination.id} className="group">
              {/* Image Placeholder */}
              <div className="relative mb-8 overflow-hidden rounded-sm">
                <div 
                  className="h-[300px] w-full bg-gradient-to-br from-[#2B5C4F] via-[#3D7A6B] to-[#1A4037] flex items-center justify-center"
                >
                  <Mountain className="w-20 h-20 text-white/20" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#1F1F1F] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {destination.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[#2B5C4F]" />
                    <span className="text-sm text-[#1F1F1F]/50 tracking-wide">{destination.location}</span>
                  </div>
                </div>

                <p className="text-[#1F1F1F]/60 text-sm leading-relaxed">
                  {destination.description}
                </p>

                <div className="pt-4 border-t border-[#E8E6E1]">
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#1F1F1F]/40" />
                      <span className={`${getDifficultyColor(destination.difficulty)}`}>
                        {destination.difficulty}
                      </span>
                    </div>
                    <span className="text-[#1F1F1F]/50">{destination.duration}</span>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2.5 bg-white text-[#1F1F1F] border border-[#E8E6E1] rounded-md hover:border-[#2B5C4F] hover:text-[#2B5C4F] transition-all duration-300 text-sm">
                      Ver Galería
                    </button>
                    <button className="flex-1 px-4 py-2.5 bg-[#2B5C4F] text-white rounded-md hover:bg-[#2B5C4F]/90 transition-all duration-300 text-sm shadow-sm">
                      Reservar
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
            className="inline-flex items-center gap-2 text-[#2B5C4F] hover:text-[#C4A976] transition-colors duration-300 group"
          >
            <span className="text-sm tracking-wide">Explorar Todos los Destinos</span>
            <div className="w-16 h-px bg-[#2B5C4F] group-hover:bg-[#C4A976] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
