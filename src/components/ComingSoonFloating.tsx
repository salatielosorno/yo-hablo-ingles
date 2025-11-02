import React from "react";

export default function ComingSoonFloating({ imageSrc }: any) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
      <h1 className="!text-[1.25rem] sm:!text-[1.5rem] m-0 p-0 font-medium text-center text-black opacity-80 animate-fade-in">
        ¡Próximamente!
      </h1>
      {/* Logo grande con fade-in */}
      <div className="w-4/5 sm:w-3/4 max-w-lg aspect-square mb-2 animate-fade-in">
        <img
          src={imageSrc}
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Animación fade-in */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
