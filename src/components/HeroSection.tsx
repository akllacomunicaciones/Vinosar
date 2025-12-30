import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="pt-[70px] bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Text Content - Left 40% */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-[#1F1F1F]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Experiencias de<br />Lujo Exclusivas
              </h1>
              <p className="text-[#1F1F1F]/70 text-lg leading-relaxed">
                Descubra un mundo de vinos excepcionales, destinos naturales privilegiados y rutas de ciclismo diseñadas para los más exigentes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-[#3D1A2B] text-white rounded-md hover:bg-[#3D1A2B]/90 transition-all duration-300 shadow-sm">
                Explorar Colección
              </button>
              <button className="px-8 py-3 bg-white text-[#1F1F1F] border border-[#E8E6E1] rounded-md hover:border-[#C4A976] hover:text-[#C4A976] transition-all duration-300">
                Ver Experiencias
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#E8E6E1]">
              <div>
                <div className="text-3xl text-[#3D1A2B] mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>50+</div>
                <div className="text-sm text-[#1F1F1F]/60 tracking-wide">Vinos Premium</div>
              </div>
              <div>
                <div className="text-3xl text-[#2B5C4F] mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>30+</div>
                <div className="text-sm text-[#1F1F1F]/60 tracking-wide">Destinos</div>
              </div>
              <div>
                <div className="text-3xl text-[#2A2A2A] mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>25+</div>
                <div className="text-sm text-[#1F1F1F]/60 tracking-wide">Rutas</div>
              </div>
            </div>
          </div>

          {/* Image - Right 60% */}
          <div className="lg:col-span-3">
            <div className="relative p-1 bg-gradient-to-br from-[#C4A976] to-[#C4A976]/60 rounded-lg">
              <div className="relative h-[600px] rounded-md overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669334871958-01b850f9ea08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwdmluZXlhcmQlMjBwZXJ1fGVufDF8fHx8MTc2MzY5NTg2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Premium Wine Experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
