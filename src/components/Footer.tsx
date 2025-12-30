import { Wine, Mountain, Bike, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Sobre Nosotros */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[#C4A976] mb-6 tracking-wide text-sm">Sobre Nosotros</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Experiencias premium de vinos, turismo y ciclismo para los más exigentes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C4A976] hover:text-[#C4A976] transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C4A976] hover:text-[#C4A976] transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C4A976] hover:text-[#C4A976] transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Vinos */}
          <div>
            <h4 className="text-[#C4A976] mb-6 tracking-wide text-sm flex items-center gap-2">
              <Wine className="w-4 h-4" />
              Vinos
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/60 hover:text-[#C4A976] transition-colors duration-300">
                  Colección Premium
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#C4A976] transition-colors duration-300">
                  Reservas Especiales
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#C4A976] transition-colors duration-300">
                  Degustaciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#C4A976] transition-colors duration-300">
                  Bodegas Asociadas
                </a>
              </li>
            </ul>
          </div>

          {/* Turismo */}
          <div>
            <h4 className="text-[#C4A976] mb-6 tracking-wide text-sm flex items-center gap-2">
              <Mountain className="w-4 h-4" />
              Turismo
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/60 hover:text-[#C4A976] transition-colors duration-300">
                  Destinos Destacados
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#C4A976] transition-colors duration-300">
                  Tours Privados
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#C4A976] transition-colors duration-300">
                  Itinerarios a Medida
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#C4A976] transition-colors duration-300">
                  Galería de Destinos
                </a>
              </li>
            </ul>
          </div>

          {/* Ciclismo */}
          <div>
            <h4 className="text-[#C4A976] mb-6 tracking-wide text-sm flex items-center gap-2">
              <Bike className="w-4 h-4" />
              Ciclismo
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/60 hover:text-[#C4A976] transition-colors duration-300">
                  Rutas Premium
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#C4A976] transition-colors duration-300">
                  Tours Guiados
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#C4A976] transition-colors duration-300">
                  Equipamiento
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#C4A976] transition-colors duration-300">
                  Calendario de Rutas
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div id="contacto">
            <h4 className="text-[#C4A976] mb-6 tracking-wide text-sm">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C4A976]" />
                <span>Av. Libertador 1234<br />Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4 text-[#C4A976]" />
                <span>+54 11 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4 text-[#C4A976]" />
                <span>info@vinosar.com.ar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-white mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.25rem' }}>
                VINOS AR
              </div>
              <p className="text-white/40 text-xs">
                © 2025 VINOS AR. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex gap-8 text-xs">
              <a href="#" className="text-white/40 hover:text-[#C4A976] transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="text-white/40 hover:text-[#C4A976] transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/40 hover:text-[#C4A976] transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
