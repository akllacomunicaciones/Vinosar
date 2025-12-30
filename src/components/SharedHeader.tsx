import { Search, ShoppingCart, User, Heart, Menu, X, Home } from 'lucide-react';
import { useState } from 'react';

type PageType = 'vinos' | 'turismo' | 'rutas' | 'landing';

interface SharedHeaderProps {
  activePage: PageType;
  onNavigate: (page: PageType) => void;
  logo: string;
  primaryColor: string;
  showCart?: boolean;
  showFavorites?: boolean;
  showMyRoutes?: boolean;
}

export function SharedHeader({ 
  activePage, 
  onNavigate, 
  logo, 
  primaryColor,
  showCart = false,
  showFavorites = false,
  showMyRoutes = false
}: SharedHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getMenuColor = (page: PageType) => {
    if (page === 'vinos') return '#3D1A2B';
    if (page === 'turismo') return '#2B5C4F';
    if (page === 'rutas') return '#2A2A2A';
    return '#1F1F1F';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF9]/95 backdrop-blur-sm border-b border-[#E8E6E1]" style={{ height: '70px' }}>
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('landing')}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <span className="text-[#1F1F1F] tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', fontWeight: 600, color: primaryColor }}>
            {logo}
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          <button 
            onClick={() => onNavigate('landing')}
            className="text-[#1F1F1F] hover:text-[#C4A976] transition-colors duration-300 relative py-2 group"
          >
            <Home className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onNavigate('vinos')}
            className="text-[#1F1F1F] hover:text-[#3D1A2B] transition-colors duration-300 relative py-2 group"
            style={{ color: activePage === 'vinos' ? '#3D1A2B' : '#1F1F1F' }}
          >
            <span className="text-sm tracking-wide">VINOS</span>
            {activePage === 'vinos' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3D1A2B]" />
            )}
          </button>
          <button 
            onClick={() => onNavigate('turismo')}
            className="text-[#1F1F1F] hover:text-[#2B5C4F] transition-colors duration-300 relative py-2 group"
            style={{ color: activePage === 'turismo' ? '#2B5C4F' : '#1F1F1F' }}
          >
            <span className="text-sm tracking-wide">TURISMO</span>
            {activePage === 'turismo' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2B5C4F]" />
            )}
          </button>
          <button 
            onClick={() => onNavigate('rutas')}
            className="text-[#1F1F1F] hover:text-[#2A2A2A] transition-colors duration-300 relative py-2 group"
            style={{ color: activePage === 'rutas' ? '#2A2A2A' : '#1F1F1F' }}
          >
            <span className="text-sm tracking-wide">RUTAS</span>
            {activePage === 'rutas' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2A2A2A]" />
            )}
          </button>
          <button className="text-[#1F1F1F] hover:text-[#C4A976] transition-colors duration-300 relative py-2">
            <span className="text-sm tracking-wide">CONTACTO</span>
          </button>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-64 px-4 py-2 pr-10 bg-white border border-[#E8E6E1] rounded-md text-sm text-[#1F1F1F] placeholder:text-[#717182] focus:outline-none focus:border-[#C4A976] transition-colors duration-300"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182]" />
          </div>
          
          {showCart && (
            <button className="p-2 hover:bg-[#E8E6E1] rounded-md transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-[#1F1F1F]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#3D1A2B] text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          )}
          
          {showFavorites && (
            <button className="p-2 hover:bg-[#E8E6E1] rounded-md transition-colors">
              <Heart className="w-5 h-5 text-[#1F1F1F]" />
            </button>
          )}
          
          {showMyRoutes && (
            <button className="px-4 py-2 text-sm text-[#1F1F1F] hover:text-[#2A2A2A] transition-colors">
              Mis Rutas
            </button>
          )}
          
          <button className="p-2 hover:bg-[#E8E6E1] rounded-md transition-colors">
            <User className="w-5 h-5 text-[#1F1F1F]" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 hover:bg-[#E8E6E1] rounded-md transition-colors"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FAFAF9] border-t border-[#E8E6E1]">
          <div className="px-8 py-6 space-y-6">
            <button onClick={() => { onNavigate('landing'); setIsMenuOpen(false); }} className="block text-[#1F1F1F] hover:text-[#C4A976] transition-colors">
              <Home className="w-5 h-5" />
            </button>
            <button onClick={() => { onNavigate('vinos'); setIsMenuOpen(false); }} className="block text-[#1F1F1F] hover:text-[#3D1A2B] transition-colors">
              VINOS
            </button>
            <button onClick={() => { onNavigate('turismo'); setIsMenuOpen(false); }} className="block text-[#1F1F1F] hover:text-[#2B5C4F] transition-colors">
              TURISMO
            </button>
            <button onClick={() => { onNavigate('rutas'); setIsMenuOpen(false); }} className="block text-[#1F1F1F] hover:text-[#2A2A2A] transition-colors">
              RUTAS
            </button>
            <button className="block text-[#1F1F1F] hover:text-[#C4A976] transition-colors">
              CONTACTO
            </button>
          </div>
        </div>
      )}
    </header>
  );
}