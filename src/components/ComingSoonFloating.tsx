// Componente React 19 + TypeScript - "Próximamente" (flotante, móvil, orientado a niños 8-14)
// Uso: <ComingSoonFloating visible={true} onClose={() => {}} imageSrc="/ruta/tu-imagen.png" />
// Requisitos: Tailwind CSS disponible en el proyecto.

import React from "react";

type ComingSoonFloatingProps = {
  visible?: boolean;
  onClose?: () => void;
  imageSrc?: string;
};

export default function ComingSoonFloating({
  visible = true,
  onClose = () => {},
  imageSrc,
}: ComingSoonFloatingProps) {
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
        {/* Decorative header with optional custom image */}
        <div className="flex items-center gap-3">
          <div className="w-16 aspect-square flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full border-2 border-white/60 animate-bounce overflow-hidden">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Decorativo Próximamente"
                className="w-full h-full object-contain object-center drop-shadow-md"
              />
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M12 2.5l1.79 3.63 4.01.58-2.9 2.82.68 3.96L12 13.77l-3.58 1.82.68-3.96-2.9-2.82 4.01-.58L12 2.5z"
                  fill="white"
                  opacity="0.95"
                />
              </svg>
            )}
          </div>

          <div>
            <h2 style={{color: "#242424"}} className="text-white text-xl sm:text-2xl font-extrabold leading-tight">
              ¡Próximamente!
            </h2>
          </div>
        </div>

        {/* Inline styles for the small custom animations */}
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }
          .animate-[float_3s_ease-in-out_infinite] { animation: float 3s ease-in-out infinite; }
        `}</style>
      </div>
    </div>
  );
}
