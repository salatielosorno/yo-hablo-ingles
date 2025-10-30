// Componente React 19 - "Próximamente" (flotante, móvil, orientado a niños 8-14)
// Uso: importar y renderizar <ComingSoonFloating visible={true} onClose={() => {}} />
// Requisitos: Tailwind CSS disponible en el proyecto (se usa para estilos responsivos y utilitarios).

import React from 'react';

/**
 * ComingSoonFloating
 * Props:
 * - visible (boolean) -> show/hide the float
 * - onClose (function) -> callback when user dismisses
 */
export default function ComingSoonFloating({ visible = true, onClose = () => {} }) {
  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Anuncio próximamente" 
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative z-10 max-w-sm w-full mx-auto rounded-2xl shadow-2xl overflow-hidden p-4 sm:p-6 bg-gradient-to-br from-indigo-400 to-pink-400">
        {/* Decorative header with fun SVG */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full border-2 border-white/60 animate-bounce">
            {/* Cute star SVG (inline, royalty-free) */}
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 2.5l1.79 3.63 4.01.58-2.9 2.82.68 3.96L12 13.77l-3.58 1.82.68-3.96-2.9-2.82 4.01-.58L12 2.5z" fill="white" opacity="0.95"/>
            </svg>
          </div>

          <div>
            <h2 className="text-white text-xl sm:text-2xl font-extrabold leading-tight">¡Próximamente!</h2>
            {/* <p className="text-white/90 text-sm sm:text-base">Algo divertido está en camino 🎉</p> */}
          </div>
        </div>

        {/* Message area */}
        {/* <div className="mt-4 bg-white/20 rounded-xl p-3 sm:p-4 border border-white/30">
          <p className="text-white text-sm sm:text-base">Prepárate para juegos, retos y sorpresas pensadas para niños de 8 a 14 años. ¡No te lo pierdas!</p>
        </div> */}

        {/* CTA + close */}
        {/* <div className="mt-4 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl py-2 px-3 font-semibold text-indigo-700 bg-white hover:bg-white/90 transition-shadow shadow-sm"
            aria-label="Entendido, cerrar anuncio"
          >
            Entendido
          </button>

          <a
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 text-white text-sm font-medium border border-white/20"
            aria-label="Más información (placeholder)"
          >
            Más info
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div> */}

        {/* Small footer: playful small balloons (SVG) */}
        {/* <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 pointer-events-none">
          <svg className="w-8 h-8 animate-[float_3s_ease-in-out_infinite]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <ellipse cx="12" cy="8" rx="5" ry="6" fill="#fff" opacity="0.85" />
            <path d="M12 14v4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
          </svg>

          <svg className="w-6 h-6 animate-[float_2.7s_ease-in-out_infinite]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <ellipse cx="12" cy="8" rx="3" ry="4" fill="#fff" opacity="0.9" />
            <path d="M12 12v3" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
        </div> */}

        {/* Inline styles for the small custom animations (keeps file self-contained) */}
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }
          .animate-\[float_3s_ease-in-out_infinite\] { animation: float 3s ease-in-out infinite; }
          .animate-\[float_2\.7s_ease-in-out_infinite\] { animation: float 2.7s ease-in-out infinite; }
        `}</style>
      </div>
    </div>
  );
}
