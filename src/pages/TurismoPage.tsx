import { Header } from '../components/Header';
import { TurismoSection } from '../components/TurismoSection';
import { SharedFooter } from '../components/SharedFooter';

interface TurismoPageProps {
  onNavigate: (page: 'home' | 'vinos' | 'turismo' | 'rutas') => void;
  onSelectDestination: (destinationId: number) => void;
  selectedDestinationId: number | null;
}

export function TurismoPage({ onNavigate, onSelectDestination, selectedDestinationId }: TurismoPageProps) {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Header fijo glassmorphism */}
      <Header onNavigate={onNavigate} activeSection="turismo" />
      
      {/* Sección de Turismo */}
      <div className="pt-20">
        <TurismoSection 
          onSelectDestination={onSelectDestination}
          selectedDestinationId={selectedDestinationId}
        />
      </div>
      
      {/* Footer */}
      <SharedFooter currentPage="turismo" onNavigate={onNavigate} />
    </div>
  );
}