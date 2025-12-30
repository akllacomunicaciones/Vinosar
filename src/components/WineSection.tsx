import { Wine, Star } from 'lucide-react';

const wines = [
  {
    id: 1,
    name: 'Malbec Reserva 2019',
    description: 'Vino tinto de cuerpo completo con notas de frutas negras y especias.',
    price: 'S/. 285',
    rating: 4.9,
    region: 'Mendoza',
  },
  {
    id: 2,
    name: 'Cabernet Sauvignon Gran Reserva',
    description: 'Elegante y estructurado, ideal para acompañar carnes rojas.',
    price: 'S/. 320',
    rating: 4.8,
    region: 'Valle de Uco',
  },
  {
    id: 3,
    name: 'Blend Exclusivo',
    description: 'Mezcla única de variedades premium con crianza en roble francés.',
    price: 'S/. 450',
    rating: 5.0,
    region: 'Luján de Cuyo',
  },
];

export function WineSection() {
  return (
    <section id="vinos" className="py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#3D1A2B]" />
            <Wine className="w-6 h-6 text-[#3D1A2B]" />
            <div className="h-px flex-1 bg-[#3D1A2B]" />
          </div>
          <h2 className="text-center text-[#1F1F1F] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Colección de Vinos
          </h2>
          <p className="text-center text-[#1F1F1F]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Selección exclusiva de vinos premium argentinos de las mejores bodegas del país
          </p>
        </div>

        {/* Wine Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {wines.map((wine) => (
            <div key={wine.id} className="group">
              {/* Image Placeholder */}
              <div className="relative mb-8 overflow-hidden rounded-sm">
                <div 
                  className="h-[300px] w-full bg-gradient-to-br from-[#C4A976] via-[#8B7355] to-[#3D1A2B] flex items-center justify-center"
                >
                  <Wine className="w-20 h-20 text-white/20" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-[#1F1F1F] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {wine.name}
                    </h3>
                    <p className="text-sm text-[#1F1F1F]/50 tracking-wide mb-1">{wine.region}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#C4A976] text-[#C4A976]" />
                    <span className="text-sm text-[#1F1F1F]">{wine.rating}</span>
                  </div>
                </div>

                <p className="text-[#1F1F1F]/60 text-sm leading-relaxed">
                  {wine.description}
                </p>

                <div className="pt-4 border-t border-[#E8E6E1]">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[#3D1A2B] text-xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {wine.price}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2.5 bg-white text-[#1F1F1F] border border-[#E8E6E1] rounded-md hover:border-[#3D1A2B] hover:text-[#3D1A2B] transition-all duration-300 text-sm">
                      Ver Detalles
                    </button>
                    <button className="flex-1 px-4 py-2.5 bg-[#C4A976] text-white rounded-md hover:bg-[#C4A976]/90 transition-all duration-300 text-sm shadow-sm">
                      Comprar
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
            className="inline-flex items-center gap-2 text-[#3D1A2B] hover:text-[#C4A976] transition-colors duration-300 group"
          >
            <span className="text-sm tracking-wide">Ver Colección Completa</span>
            <div className="w-16 h-px bg-[#3D1A2B] group-hover:bg-[#C4A976] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
