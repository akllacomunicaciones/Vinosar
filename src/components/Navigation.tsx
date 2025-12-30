import { Wine, Mountain, Bike, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white">VA</span>
              </div>
              <span className="text-gray-900">VINOS AR</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#vinos" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
              <Wine className="w-5 h-5" />
              <span>Vinos</span>
            </a>
            <a href="#turismo" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
              <Mountain className="w-5 h-5" />
              <span>Turismo</span>
            </a>
            <a href="#ciclismo" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
              <Bike className="w-5 h-5" />
              <span>Ciclismo</span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Reservar
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <a href="#vinos" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 py-2">
              <Wine className="w-5 h-5" />
              <span>Vinos</span>
            </a>
            <a href="#turismo" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 py-2">
              <Mountain className="w-5 h-5" />
              <span>Turismo</span>
            </a>
            <a href="#ciclismo" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 py-2">
              <Bike className="w-5 h-5" />
              <span>Ciclismo</span>
            </a>
            <button className="w-full px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Reservar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}