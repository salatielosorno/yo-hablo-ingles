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
      aria-modal="true"
      aria-label="Mensaje próximamente"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center justify-center 
                   bg-gradient-to-br from-pink-400 to-indigo-500 
                   text-white rounded-3xl shadow-2xl
                   p-5 sm:p-6
                   w-[85vw] max-w-[340px] aspect-square
                   animate-pop"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 overflow-hidden rounded-full bg-white/30 flex items-center justify-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Decorativo próximamente"
              className="w-full h-full object-contain object-center"
            />
          ) : (
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white drop-shadow-md"
            >
              <path
                d="M12 2.5l1.79 3.63 4.01.58-2.9 2.82.68 3.96L12 13.77l-3.58 1.82.68-3.96-2.9-2.82 4.01-.58L12 2.5z"
                fill="currentColor"
              />
            </svg>
          )}
        </div>

        <h2 style={{color: "#242424"}}className="text-2xl sm:text-3xl font-extrabold text-center leading-tight">
          ¡Próximamente!
        </h2>

        <style>{`
          @keyframes pop {
            0% { transform: scale(0.8); opacity: 0; }
            60% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); }
          }
          .animate-pop {
            animation: pop 0.5s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
}
