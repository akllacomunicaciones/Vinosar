import { Header } from '../components/Header';
import { VinosSection } from '../components/VinosSection';
import { SharedFooter } from '../components/SharedFooter';

interface VinosPageProps {
  onNavigate: (page: 'home' | 'vinos' | 'turismo' | 'rutas') => void;
}

export function VinosPage({ onNavigate }: VinosPageProps) {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Header fijo glassmorphism */}
      <Header onNavigate={onNavigate} activeSection="vinos" />
      
      {/* Sección de Vinos */}
      <div className="pt-20">
        <VinosSection />
      </div>
      
      {/* Footer */}
      <SharedFooter currentPage="vinos" onNavigate={onNavigate} />
    </div>
  );
}
