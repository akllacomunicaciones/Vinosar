import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { VinosPage } from './pages/VinosPage';
import { TurismoPage } from './pages/TurismoPage';
import { RutasPage } from './pages/RutasPage';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'vinos' | 'turismo' | 'rutas'>('home');
  const [selectedDestinationId, setSelectedDestinationId] = useState<number | null>(null);

  // Establecer el título de la página
  useEffect(() => {
    document.title = 'Vinos AR Cascas';
  }, []);

  const navigate = (page: 'home' | 'vinos' | 'turismo' | 'rutas') => {
    setCurrentPage(page);
    setSelectedDestinationId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToDestination = (destinationId: number) => {
    setSelectedDestinationId(destinationId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {currentPage === 'home' && <HomePage onNavigate={navigate} />}
      {currentPage === 'vinos' && <VinosPage onNavigate={navigate} />}
      {currentPage === 'turismo' && (
        <TurismoPage 
          onNavigate={navigate} 
          onSelectDestination={navigateToDestination}
          selectedDestinationId={selectedDestinationId}
        />
      )}
      {currentPage === 'rutas' && <RutasPage onNavigate={navigate} />}
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </>
  );
}