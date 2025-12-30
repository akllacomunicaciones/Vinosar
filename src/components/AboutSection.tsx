import { motion } from 'motion/react';
import { Wine, Mountain, Bike } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Wine,
      title: 'Vinos Exclusivos',
      description: 'Selección premium de vinos cuidadosamente elegidos de las mejores bodegas de la región, con denominación de origen garantizada.',
      color: '#5d0012',
    },
    {
      icon: Mountain,
      title: 'Experiencias Únicas',
      description: 'Descubre destinos naturales privilegiados en Cascas, Perú. Rutas de turismo diseñadas para conectar con la naturaleza.',
      color: '#5d0012',
    },
    {
      icon: Bike,
      title: 'Rutas en Bicicleta',
      description: 'Aventuras en ciclismo de ruta por paisajes únicos. Recorridos diseñados para todos los niveles de experiencia.',
      color: '#5d0012',
    },
  ];

  return (
    <section id="nosotros" className="relative py-32 bg-gradient-to-b from-white via-[#FAFAF9] to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C4A976] to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 rounded-full border-2 border-[#C4A976] bg-white/80 backdrop-blur-sm">
              <span className="text-[#5d0012] tracking-widest text-sm">BIENVENIDOS</span>
            </div>
          </motion.div>

          <h1 
            className="text-[#1F1F1F] mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Vinos AR
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-[#1F1F1F]/80 text-lg leading-relaxed">
              Somos una marca que une tres pasiones: <strong className="text-[#5d0012]">vinos de calidad excepcional</strong>, 
              experiencias de <strong className="text-[#5d0012]">turismo natural</strong> en las hermosas cascadas de Perú, 
              y aventuras de <strong className="text-[#5d0012]">ciclismo de ruta</strong> por paisajes únicos.
            </p>
            <p className="text-[#1F1F1F]/70 leading-relaxed">
              Ubicados en Cascas, Perú, ofrecemos una experiencia integral que combina el placer del buen vino 
              con la aventura y la conexión con la naturaleza. Cada producto y experiencia está diseñada 
              para transmitir calidad, exclusividad y privilegio.
            </p>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 border border-[#E8E6E1] hover:border-[#C4A976] transition-all duration-500 hover:shadow-2xl"
              >
                {/* Gold accent line */}
                <div 
                  className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#C4A976] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ transform: 'translateY(-1px)' }}
                />

                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500"
                  style={{ 
                    backgroundColor: `${feature.color}10`,
                    border: `2px solid ${feature.color}20`
                  }}
                >
                  <Icon 
                    className="transition-transform duration-500 group-hover:scale-110" 
                    style={{ color: feature.color }}
                    size={28}
                  />
                </div>

                <h3 
                  className="text-[#1F1F1F] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.5rem'
                  }}
                >
                  {feature.title}
                </h3>

                <p className="text-[#1F1F1F]/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#5d0012]/5 via-[#C4A976]/5 to-[#5d0012]/5 rounded-2xl p-6 md:p-12 border border-[#C4A976]/30">
            <h3 
              className="text-[#5d0012] mb-4"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.5rem, 5vw, 2rem)'
              }}
            >
              Una experiencia completa
            </h3>
            <p className="text-[#1F1F1F]/80 max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8">
              Desde la primera copa de vino hasta la última cumbre alcanzada en bicicleta, 
              cada momento con Vinos AR está diseñado para ser memorable y excepcional.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <div className="px-4 py-2 md:px-6 bg-[#5d0012]/10 rounded-full border border-[#5d0012]/20">
                <span className="text-[#5d0012] text-sm tracking-wider">CALIDAD</span>
              </div>
              <div className="px-4 py-2 md:px-6 bg-[#5d0012]/10 rounded-full border border-[#5d0012]/20">
                <span className="text-[#5d0012] text-sm tracking-wider">EXPERIENCIA</span>
              </div>
              <div className="px-4 py-2 md:px-6 bg-[#5d0012]/10 rounded-full border border-[#5d0012]/20">
                <span className="text-[#5d0012] text-sm tracking-wider">PRIVILEGIO</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C4A976] to-transparent opacity-30" />
    </section>
  );
}