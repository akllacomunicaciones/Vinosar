import { Header } from '../components/Header';
import { HeroLanding } from '../components/HeroLanding';
import { AboutSection } from '../components/AboutSection';
import { SharedFooter } from '../components/SharedFooter';

interface HomePageProps {
  onNavigate: (page: 'home' | 'vinos' | 'turismo' | 'rutas') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Header fijo glassmorphism */}
      <Header onNavigate={onNavigate} activeSection="home" />
      
      {/* Hero principal con fondo animado - SOLO EN HOME */}
      <HeroLanding onNavigate={onNavigate} />
      
      {/* Sección Nosotros/About */}
      <AboutSection />
      
      {/* Footer */}
      <SharedFooter currentPage="home" onNavigate={onNavigate} />
    </div>
  );
}
