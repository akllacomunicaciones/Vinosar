import { Header } from '../components/Header';
import { RutasSection } from '../components/RutasSection';
import { SharedFooter } from '../components/SharedFooter';

interface RutasPageProps {
  onNavigate: (page: 'home' | 'vinos' | 'turismo' | 'rutas') => void;
}

export function RutasPage({ onNavigate }: RutasPageProps) {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Header fijo glassmorphism */}
      <Header onNavigate={onNavigate} activeSection="rutas" />
      
      {/* Sección de Rutas/Ciclismo */}
      <div className="pt-20">
        <RutasSection />
      </div>
      
      {/* Footer */}
      <SharedFooter currentPage="rutas" onNavigate={onNavigate} />
    </div>
  );
}
