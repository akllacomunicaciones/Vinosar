import { Wine, Mountain, Bike, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

type PageType = 'vinos' | 'turismo' | 'rutas' | 'home';

interface SharedFooterProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function SharedFooter({ currentPage, onNavigate }: SharedFooterProps) {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Contacto - Centrado */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h4 className="text-[#C4A976] mb-8 tracking-wide">Contacto</h4>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3 text-white/60">
              <MapPin className="w-5 h-5 text-[#C4A976]" />
              <span>San Martín 700, Cascas 13781</span>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <Phone className="w-5 h-5 text-[#C4A976]" />
              <span>+51 920 451 607</span>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <Mail className="w-5 h-5 text-[#C4A976]" />
              <span>info@vinosar.com.ar</span>
            </div>
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
              <p className="text-white/40 text-xs mt-1">
                Diseñado y desarrollado por <a 
                  href="https://linktr.ee/akllacomunicaciones" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm font-semibold hover:underline transition-all duration-300"
                >
                  Aklla Group
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/celebra.con.vinos.ar?igsh=YnE4NXZkcjFxdDBh" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C4A976] hover:text-[#C4A976] transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/share/183LauAfXE/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C4A976] hover:text-[#C4A976] transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@celebra_con_vinos_ar?si=d46_9fIpzUnSXBmN" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C4A976] hover:text-[#C4A976] transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@celebra_con_vinos_ar?_r=1&_t=ZS-91gd5A3hqin" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C4A976] hover:text-[#C4A976] transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}