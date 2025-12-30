import { Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-[#FAFAF9] to-[#F5F5F3]">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-[#1F1F1F]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Únase al Círculo Exclusivo
          </h2>
          
          <p className="text-[#1F1F1F]/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Reciba invitaciones privadas a degustaciones exclusivas, acceso anticipado a nuevas rutas y ofertas especiales reservadas para miembros selectos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 max-w-lg mx-auto">
            <div className="relative flex-1 w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1F1F1F]/40" />
              <input
                type="email"
                placeholder="Su correo electrónico"
                className="w-full pl-12 pr-4 py-4 bg-white border border-[#E8E6E1] rounded-md text-[#1F1F1F] placeholder:text-[#1F1F1F]/40 focus:outline-none focus:border-[#C4A976] transition-colors duration-300"
              />
            </div>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#3D1A2B] text-white rounded-md hover:bg-[#3D1A2B]/90 transition-all duration-300 shadow-sm whitespace-nowrap">
              Suscribirse
            </button>
          </div>

          <p className="text-xs text-[#1F1F1F]/40 pt-4">
            No compartimos su información. Cancele cuando desee.
          </p>
        </div>
      </div>
    </section>
  );
}
