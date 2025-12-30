import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import imgImageWithFallback from 'figma:asset/a5687fbd27ff5bd35e740adae0dac48878a75fbd.png';
import imgContainer from 'figma:asset/309b15f66aab1c86385943737b1a3253aa3b52e8.png';
import imgContainer1 from 'figma:asset/2cb27528d19dfeefbc9e01dd3131620a45d9e131.png';
import imgContainer2 from 'figma:asset/27ee4049fe06ec0691d3f3758f92e9afbd1d0baf.png';
import imgContainer3 from 'figma:asset/10935173d6141629f8ccaf020e3ccea4611df815.png';
import imgContainer4 from 'figma:asset/3a298a9dce4dbbf526ebbf059b82bd26b4d9d7f5.png';
import imgContainer5 from 'figma:asset/98b7f67895d0d70b125fd5ebf4eee2744b3ec946.png';
import imgContainer6 from 'figma:asset/8a26b2280cb970f024a9326d35b408a1728cc2ea.png';
import imgContainer7 from 'figma:asset/4097180192c50628d388e3d7d0975b1954736b47.png';
import imgContainer8 from 'figma:asset/57ce65031900c52744d96aa918d22ad560889242.png';
import imgContainer9 from 'figma:asset/00695573226f79711b234f5781ea523d05c7fc1a.png';
import imgContainer10 from 'figma:asset/91413e7af37b633ae6088da4ea3e3df140398f42.png';
import imgContainer11 from 'figma:asset/de2ae7c2601f68ed21c9a4232db5b2fa0a249873.png';
import imgContainer12 from 'figma:asset/9dcf192da4e63ed72e16b176dc18c5d69c639c43.png';
import imgContainer13 from 'figma:asset/a48888d467ee30e8fc84eb09f7874ac71ee2128b.png';
import imgContainer14 from 'figma:asset/cff470cbb027812989a73dd313094f4cf7975286.png';
import imgContainer15 from 'figma:asset/60dcbdee73fed8df7451ac7a49ed7d36baade423.png';

const wines = [
  {
    id: 1,
    name: 'Vino Tinto',
    description: 'Nacido en Cascas, Destino de los Dioses, este vino tinto es el reflejo de nuestra tierra generosa. Elaborado con la uva Alfonso Lavallée, una variedad abundante en la región, nos regala un vino fresco y elegante, con el alma del valle en cada copa. Su color rojo granate con reflejos morados despierta los sentidos, mientras su aroma afrutado recuerda a las cerezas y otros frutos rojos. En boca, se siente suave, expresivo y lleno de vida, ideal para compartir momentos que se quedan en la memoria.',
    price: 'S/. 0.00',
    image: imgContainer,
  },
  {
    id: 2,
    name: 'Vino Blanco',
    description: 'Desde los viñedos dorados de Cascas, Destino de los Dioses, nace este vino blanco elaborado con uvas Moscatel de Alejandría, una joya ancestral que encuentra en nuestra tierra su mejor expresión. De color amarillo dorado y aroma intenso y afrutado, con delicadas notas cítricas, este vino despierta emociones con su sabor fresco, varietal y de acidez equilibrada. Ideal para acompañar carnes blancas, quesos suaves, pescados y mariscos, es el complemento perfecto para una mesa llena de momentos especiales.',
    price: 'S/. 0.00',
    image: imgContainer1,
  },
  {
    id: 3,
    name: 'Vino Borgoña',
    description: 'Entre las tierras fértiles de Cascas, destino de los Dioses, florece la uva Isabella, protagonista de este vino Borgoña lleno de carácter y pasión. Con su color rojo cereza y reflejos morados, este vino cautivo a primera vista. En nariz, despliega aromas intensos a frutos rojos, y en boca revela un cuerpo medio que envuelve el paladar con una textura única, fruto de la armonía entre color, aroma y sabor.',
    price: 'S/. 0.00',
    image: imgContainer2,
  },
  {
    id: 4,
    name: 'Vino Rose',
    description: 'Desde el corazón de Cascas, destino de los Dioses, nace este encantador Vino Rosé, una expresión de frescura, suavidad y alegría. De atractivo color rosado, seduce con su aroma afrutado y un sabor ligero que, junto a su acidez equilibrada, lo convierten en un vino refrescante y versátil. Perfecto como aperitivo y el acompañante ideal para una gran variedad de platos: comida criolla, chifa, pescados, mariscos, carnes blancas y postres.',
    price: 'S/. 0.00',
    image: imgContainer3,
  },
  {
    id: 5,
    name: 'Vino Borgoña Blanco',
    description: 'El alma fresca de Cascas, destino de los Dioses, se revela en cada copa de nuestro Vino Borgoña Blanco. Elaborado con uvas Borgoña Blanca seleccionadas, una variedad tipo Chardonnay o Isabella Blanca que ha sido introducida en el valle desde hace más de siete años, adaptándose con nobleza a nuestra tierra. De color amarillo verdoso y brillo natural, este vino enamora por su sabor ligero, fresco y afrutado, ideal para quienes buscan una experiencia suave pero llena de carácter. En nariz, ofrece una intensa mezcla de aromas que evocan a la manzana, sutiles cítricos y delicadas notas de miel que lo hacen inconfundible.',
    price: 'S/. 0.00',
    image: imgContainer4,
  },
  {
    id: 6,
    name: 'Vino Perfecto Amor',
    description: 'Desde las uvas doradas que crecen bajo el sol de Cascas, destino de los dioses, nace Perfecto Amor, un licor aperitivo de uva que conquista por su dulzura y elegancia. Elaborado exclusivamente con uvas seleccionadas de Moscatel de Alejandría, este vino de color amarillo dorado deslumbra con su aroma a fruta madura y un sabor inconfundible que lo convierte en una verdadera joya para los sentidos. Ideal como aperitivo o para acompañar postres, es una invitación a brindar por los momentos más especiales de la vida.',
    price: 'S/. 0.00',
    image: imgContainer5,
  },
  {
    id: 7,
    name: 'Puro de Uva',
    description: 'Desde el corazón de Cascas, Destino de los Dioses, nace nuestro Puro de Uva, un destilado de excelencia que representa la esencia de esta tierra mágica y fértil. Elaborado con la uva Moscatel de Alejandría, aromática y fragante, cultivada en los viñedos del Valle del Gran Chimú, este destilado es símbolo de tradición, carácter y autenticidad. De sabor exquisito y complejos aromas a frutas maduras, especialmente cítricos, ofrece un cuerpo lleno de personalidad, con una suavidad y tersura extraordinarias que lo distinguen entre los mejores. En la región La Libertad, "puro de uva" es la denominación tradicional del pisco, y el de Cascas ha sido reconocido oficialmente como Producto Bandera Regional, según acuerdo del Consejo Regional del 4 de junio de 2013. Ese mismo reconocimiento declara a Cascas como la Capital del Puro de Uva, y a la provincia de Gran Chimú como pionera en su elaboración.',
    price: 'S/. 0.00',
    image: imgContainer6,
  },
  {
    id: 8,
    name: 'Vino Gran Tinto',
    description: 'Desde las alturas de Cascas, destino de los Dioses, nace nuestro Gran Tinto, un vino varietal Tempranillo que expresa con fuerza y elegancia el carácter del valle. De color rojo rubí profundo, cautiva con su aroma a bayas, ciruelo y sutiles notas de especias. Su intensidad aromática es media, compleja y refinada, ideal para quienes aprecian los vinos con personalidad definida. En boca, ofrece un cuerpo medio, con taninos suaves, acidez equilibrada y un sabor sabroso y agradable, perfecto para acompañar momentos especiales o una buena mesa.',
    price: 'S/. 0.00',
    image: imgContainer7,
  },
  {
    id: 9,
    name: 'Vino Generoso',
    description: 'Desde la bodega de VINOS AR, en Cascas, destino de los dioses, nace Vino Generoso, un vino licoroso que conquista por su intensidad, profundidad y dulzura. De color rojo rubí, despliega aromas envolventes a frutos rojos y delicadas notas de frutos secos como el higo, que anuncian un sabor exquisito, ideal para cerrar con elegancia una comida o acompañar momentos íntimos. Perfecto como aperitivo o junto a postres, es una bebida para disfrutar con calma y deleite.',
    price: 'S/. 0.00',
    image: imgContainer8,
  },
  {
    id: 10,
    name: 'Vino Pasión',
    description: 'Desde las tierras fértiles y el clima inigualable del Valle de Cascas, destino de los dioses, nace Vino Pasión, una bebida vibrante elaborada a base de maracuyá, cuidadosamente seleccionado por su frescura y carácter. Con un intenso aroma afrutado y un sabor exquisito, este vino despierta los sentidos y deja una huella inolvidable en el paladar. Su equilibrio entre acidez y dulzura lo convierte en una opción ideal para quienes buscan experiencias únicas y refrescantes.',
    price: 'S/. 0.00',
    image: imgContainer9,
  },
  {
    id: 11,
    name: 'Vino Tullu Corazón',
    description: 'Elaborado con duraznos provenientes del norte del Perú y transformado con pasión en la bodega de "Vinos AR" en Cascas, Destino de los Dioses. El Tullu Corazón es una bebida que celebra la frescura, la dulzura y el corazón de nuestra tierra. De intenso aroma afrutado y sabor exquisito, este vino es perfecto para acompañar postres, compartir momentos especiales o simplemente dejarse llevar por su calidez.',
    price: 'S/. 0.00',
    image: imgContainer10,
  },
  {
    id: 12,
    name: 'Vino La Reina',
    description: 'Desde las alturas de la sierra liberteña y las cálidas tierras del norte del Perú, seleccionamos las piñas más jugosas y aromáticas para dar vida a La Reina, una bebida afrutada que celebra la frescura tropical con el sello de calidad de la bodega VINOS AR, en Cascas, destino de los dioses. De intenso aroma afrutado y exquisito sabor, este vino semidulce es una verdadera delicia que equilibra dulzura, frescura y una ligera acidez que lo hace irresistible al paladar. Ideal para acompañar postres, compartir en reuniones especiales o disfrutar bien frío en una tarde soleada. Cada sorbo de La Reina es un homenaje a los frutos de nuestra tierra y al arte de transformarlos en experiencias memorables.',
    price: 'S/. 0.00',
    image: imgContainer11,
  },
  {
    id: 13,
    name: 'Vino Dulzura de Amor',
    description: 'Desde los fértiles campos del norte del Perú y con el arte de nuestra bodega VINOS AR en Cascas, destino de los dioses, nace Dulzura de Amor, una bebida elaborada a base de fresas maduras, que expresa dulzura, frescura y emoción en cada copa. De intenso aroma afrutado y exquisito sabor, este vino es una invitación a disfrutar la vida con romanticismo y placer. Su textura suave y delicada lo hace perfecto para los paladares que buscan algo diferente, natural y encantador. Ideal para acompañar postres, sorprender en una cita especial o brindar en momentos que nacen del corazón.',
    price: 'S/. 0.00',
    image: imgContainer12,
  },
  {
    id: 14,
    name: 'Vino Estrella Casquina',
    description: 'Desde las tierras fértiles y el clima inigualable del Valle de Cascas, destino de los dioses, nace Estrella Casquina, una bebida elaborada a base de carambola, fruta exótica de forma estrellada que simboliza la magia natural de nuestra tierra. Con un intenso aroma afrutado y un sabor exquisito y refrescante, este vino semidulce cautiva por su equilibrio entre dulzura y acidez ligera, ideal para paladares que buscan nuevas experiencias. Perfecto para acompañar postres, tardes soleadas o brindar en momentos especiales, Estrella Casquina es una expresión auténtica del espíritu innovador de VINOS AR y de la riqueza frutal de Cascas.',
    price: 'S/. 0.00',
    image: imgContainer13,
  },
  {
    id: 15,
    name: 'Vino Paraíso Casquino',
    description: 'Desde la bodega VINOS AR en Cascas, destino de los dioses, nace Paraíso Casquino, un vino que une lo mejor del Perú en una sola copa. Elaborado con naranja y mandarina del norte peruano, combinadas con limón dulce de la selva, esta bebida es un verdadero homenaje a la diversidad frutal y la riqueza de nuestra tierra. De intenso aroma cítrico-afrutado y sabor exótico y refrescante, este vino seduce con su equilibrio perfecto entre dulzura y notas vibrantes. Es ideal para quienes buscan una experiencia diferente, tropical y memorable. Perfecto para acompañar postres, brindar en momentos especiales o disfrutar bien frío en un día soleado, Paraíso Casquino es una muestra del arte y la creatividad que caracteriza a nuestra bodega.',
    price: 'S/. 0.00',
    image: imgContainer14,
  },
  {
    id: 16,
    name: 'Vino Arándano',
    description: 'Las costas del departamento de La Libertad nos regalan los mejores arándanos, pequeños frutos de color intenso y alto valor nutritivo. En Cascas, destino de los dioses, estos frutos son transformados con dedicación en nuestra bodega VINOS AR, dando vida a un vino afrutado de sabor auténtico y elegante. De intenso aroma frutal y un perfil ligeramente ácido, este vino ofrece un equilibrio perfecto entre frescura y dulzura. Su color vibrante, su suavidad en boca y su carácter natural lo convierten en el acompañante ideal para postres, chocolates o frutas fresca.',
    price: 'S/. 0.00',
    image: imgContainer15,
  },
];

interface VinosSectionProps {
  onNavigate?: (section: 'vinos' | 'turismo' | 'rutas') => void;
}

export function VinosSection({ onNavigate }: VinosSectionProps) {
  const [selectedWine, setSelectedWine] = useState<typeof wines[0] | null>(null);
  const [selectedPresentation, setSelectedPresentation] = useState<string>('botella');

  const handleWhatsAppClick = (wineName: string, wineType: string) => {
    const phoneNumber = '920451607';
    const message = `Hola, estoy interesado en comprar ${wineName}${wineType ? ` (${wineType})` : ''}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (section: 'vinos' | 'turismo' | 'rutas') => {
    if (onNavigate) {
      onNavigate(section);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="vinos" className="min-h-screen relative bg-[#FAFAF9]">
      {/* Contenido principal */}
      <div className="relative z-10 py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-8 mb-16"
        >
          <h1 className="text-[#5d0012] text-center mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '3.5rem' }}>
            Colección de Vinos Exclusivos
          </h1>
          <p className="text-[#1F1F1F]/70 text-center text-lg max-w-2xl mx-auto">
            Descubre nuestra selección premium de vinos cuidadosamente elegidos
          </p>
        </motion.div>

        {/* Wine Cards Grid */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {wines.map((wine, index) => (
              <motion.div
                key={wine.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden border border-[#E8E6E1] hover:border-[#C4A976] transition-all duration-300 hover:shadow-xl cursor-pointer hover:scale-105"
                onClick={() => setSelectedWine(wine)}
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[3/4] bg-[#FAFAF9]">
                    <img
                      src={wine.image}
                      alt={wine.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-[#1F1F1F]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.125rem' }}>
                    {wine.name}
                  </h3>
                  
                  <p className="text-[#1F1F1F]/60 text-sm leading-relaxed line-clamp-4">
                    {wine.description}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const defaultMessage = "¡Hola, Vinos AR! 🍷🏔️🚴\nEstoy interesad@ en lo que ofrecen y me gustaría recibir más información ☺️";
                      window.open(`https://wa.me/51920451607?text=${encodeURIComponent(defaultMessage)}`, '_blank');
                    }}
                    className="w-full px-4 py-2 bg-[#5d0012] text-white rounded-md hover:bg-[#5d0012]/90 transition-all duration-300 text-sm"
                  >
                    COMPRAR
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedWine && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-24 overflow-y-auto"
            onClick={() => setSelectedWine(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg max-w-4xl w-full my-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón X para cerrar */}
              <button
                onClick={() => setSelectedWine(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white border border-[#E8E6E1] hover:border-[#5d0012] transition-all duration-300 group"
              >
                <X className="w-5 h-5 text-[#1F1F1F]/60 group-hover:text-[#5d0012]" />
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <div className="relative aspect-[3/4] bg-[#FAFAF9] rounded-lg overflow-hidden">
                  <img
                    src={selectedWine.image}
                    alt={selectedWine.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-[#1F1F1F] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {selectedWine.name}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={() => {
                        const defaultMessage = "¡Hola, Vinos AR! 🍷🏔️🚴\nEstoy interesad@ en lo que ofrecen y me gustaría recibir más información ☺️";
                        window.open(`https://wa.me/51920451607?text=${encodeURIComponent(defaultMessage)}`, '_blank');
                        setSelectedWine(null);
                      }}
                      className="w-full px-6 py-3 bg-[#5d0012] text-white rounded-md hover:bg-[#5d0012]/90 transition-all duration-300"
                    >
                      COMPRAR
                    </button>
                  </div>

                  <div>
                    <p className="text-[#1F1F1F]/70 leading-relaxed">
                      {selectedWine.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}