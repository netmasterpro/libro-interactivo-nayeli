import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Corazón dentro del libro
const Corazon = ({ className, mensaje }) => (
  <motion.div
    className="relative inline-block"
    whileHover={{ scale: 1.2, rotateY: 10, rotateX: -10 }}
    whileTap={{ scale: 1.1, rotateY: 0, rotateX: 0 }}
  >
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
    {mensaje && (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1, y: -30 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 text-sm text-white bg-pink-500 rounded-full px-2 py-1 shadow-lg"
      >
        {mensaje}
      </motion.div>
    )}
  </motion.div>
);

// Corazón flotante de fondo
const CorazonFondo = ({ size, x, y, delay }) => (
  <motion.div
    className="absolute"
    style={{ top: y, left: x, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.2, 1],
      rotate: [0, 15, -15, 0],
    }}
    transition={{ repeat: Infinity, duration: 4 + delay, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 24 24" fill="pink" className="w-full h-full">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  </motion.div>
);

// Estrellas brillantes de fondo
const Estrella = ({ size, x, y, delay }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{ top: y, left: x, width: size, height: size }}
    animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
    transition={{ repeat: Infinity, duration: 3 + delay, ease: "easeInOut" }}
  />
);

// Componentes de páginas
const Pagina1 = () => (
  <motion.div className="flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 w-full h-full rounded-xl shadow-xl p-6 perspective">
    <p className="text-gray-800 text-lg text-center mb-6">
      Estaba jugando tranquilamente, cuando alguien invitó a una chica bella a la escuadra. 
      Su hermano tuvo que salir de la partida, y entonces quedé jugando solo con ella. 
      Cada palabra, cada gesto y la forma en que me trataba despertaron algo en mí. 
      Su forma de ser, su risa y su manera de compartir conmigo me hicieron enamorarme desde el primer instante.
    </p>
    <div className="flex gap-4">
      <Corazon className="w-16 h-16 animate-pulse" mensaje="💖 Primer instante"/>
      <Corazon className="w-16 h-16 animate-pulse" mensaje="✨ Magia"/>
    </div>
  </motion.div>
);

const Pagina2 = () => (
  <motion.div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-teal-200 w-full h-full rounded-xl shadow-xl p-6 perspective">
    <p className="text-gray-800 text-lg text-center mb-6">
      Nos apoyábamos mutuamente en la partida: le daba mis botiquines y ella respondía con emotes llenos de ternura. 
      Cada gesto, aunque pequeño, hacía que cada momento juntos se sintiera mágico.
    </p>
    <div className="flex gap-4">
      {[...Array(3)].map((_, i) => (
        <Corazon key={i} className="w-14 h-14 animate-pulse" mensaje="❤️ Magia en el juego"/>
      ))}
    </div>
  </motion.div>
);

const Pagina3 = () => (
  <motion.div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 w-full h-full rounded-xl shadow-xl p-6 perspective">
    <p className="text-gray-800 text-lg text-center mb-6">
      Con el tiempo, empezamos a hablar fuera del juego. Primero fue un mensaje, luego otro, y pronto nuestras conversaciones se volvieron constantes. Cada palabra suya, cada emoji, cada risa compartida me llenaba de alegría. Descubrí su forma de ser, su cariño y su ternura, y me di cuenta de que estaba construyendo algo muy especial con ella.
    </p>
    <div className="flex gap-4">
      {[...Array(3)].map((_, i) => (
        <Corazon key={i} className="w-16 h-16 animate-pulse" mensaje="💖 Momentos especiales"/>
      ))}
    </div>
  </motion.div>
);

const Pagina4 = () => (
  <motion.div className="flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-red-200 w-full h-full rounded-xl shadow-xl p-6 perspective">
    <p className="text-gray-800 text-lg text-center mb-6">
      Hoy, mirar todo lo que hemos compartido me llena de felicidad. Me encanta ver sus fotos, escuchar su voz, compartir tiempo con ella y ayudarla en todo lo que pueda. Sobre todo, adoro jugar juntos y recordar cada risa y gesto que nos hizo conectar de manera especial.
    </p>
    <div className="flex gap-4">
      {[...Array(3)].map((_, i) => (
        <Corazon key={i} className="w-16 h-16 animate-pulse" mensaje="💖 Contigo todo es especial"/>
      ))}
    </div>
  </motion.div>
);

const Pagina5 = () => (
  <motion.div className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-300 w-full h-full rounded-xl shadow-xl p-6 perspective relative">
    <motion.p className="text-gray-900 text-lg text-center p-4 bg-white rounded-xl shadow-2xl relative">
      Mi ojitos de uva, <br/>
      hoy, 4 de noviembre del 2025, quiero decirte que estos 4 meses contigo han sido maravillosos. <br/>
      Prometo seguir disfrutando cada momento a tu lado, amarte más cada día y seguir creando recuerdos juntos. <br/>
      Te quiero para toda la vida, mes a mes, creciendo juntos siempre. <br/>
      Te amo, mi vida, mi niña hermosa. 💖
    </motion.p>
  </motion.div>
);

export default function LibroInteractivoMagico() {
  const [paginaActual, setPaginaActual] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const paginas = [<Pagina1 />, <Pagina2 />, <Pagina3 />, <Pagina4 />, <Pagina5 />];

  // Detectar tamaño de pantalla para posicionar corazones de fondo
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const pasarPagina = () => {
    if (paginaActual < paginas.length - 1) setPaginaActual(paginaActual + 1);
  };
  const retrocederPagina = () => {
    if (paginaActual > 0) setPaginaActual(paginaActual - 1);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-900 via-pink-700 to-yellow-200 overflow-hidden">
      
      {/* Estrellas de fondo */}
      {[...Array(50)].map((_, i) => (
        <Estrella
          key={i}
          size={`${Math.random() * 3 + 1}px`}
          x={`${Math.random() * 100}%`}
          y={`${Math.random() * 100}%`}
          delay={Math.random() * 2}
        />
      ))}

      {/* Corazones flotando de fondo */}
      {[...Array(25)].map((_, i) => (
        <CorazonFondo
          key={i}
          size={`${Math.random() * 40 + 20}px`}
          x={`${Math.random() * windowSize.width}px`}
          y={`${Math.random() * windowSize.height}px`}
          delay={Math.random() * 3}
        />
      ))}

      <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg z-10">💖 Te amo Nayeli 💖</h1>


      <div className="relative z-10 w-[350px] sm:w-[450px] h-[550px] perspective">
        <AnimatePresence mode="wait">
          <motion.div
            key={paginaActual}
            className="absolute inset-0 w-full h-full"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {paginas[paginaActual]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-6 mt-8 z-10">
        <button
          onClick={retrocederPagina}
          disabled={paginaActual === 0}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            paginaActual === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600 text-white shadow-md"
          }`}
        >
          ◀ Atrás
        </button>

        <button
          onClick={pasarPagina}
          disabled={paginaActual === paginas.length - 1}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            paginaActual === paginas.length - 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600 text-white shadow-md"
          }`}
        >
          Siguiente ▶
        </button>
      </div>

      <div className="mt-4 text-white z-10">
        Página {paginaActual + 1} de {paginas.length}
      </div>
    </div>
  );
}
