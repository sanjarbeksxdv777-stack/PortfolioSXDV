import React, { useEffect, useState } from 'react';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isFinishing, setIsFinishing] = useState(false);

  useEffect(() => {
    // Animatsiya vaqti: 2 soniya chiziladi
    const timer = setTimeout(() => {
      setIsFinishing(true);
      setTimeout(onComplete, 800); // Yo'qolish animatsiyasi uchun vaqt
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-[#020617] z-[100] flex flex-col items-center justify-center transition-all duration-700 ${isFinishing ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
      
      <div className="relative flex items-center justify-center">
        {/* Orqa fon yorug'ligi (Glow) - juda mayin va toza */}
        <div className="absolute w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
        
        {/* SVG Logo Container */}
        <div className="relative z-10 w-28 h-28">
           <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
             <defs>
               <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#06b6d4" />
                 <stop offset="100%" stopColor="#3b82f6" />
               </linearGradient>
             </defs>
             
             {/* 
                Mukammal Geometrik S harfi 
                M 70 25 -> Start (O'ng yuqori)
                L 40 25 -> Chapga to'g'ri chiziq
                Q 30 25 30 35 -> Chap yuqori burchak
                ... va hokazo. Hamma burchaklar bir xil radiusda.
             */}
             <path 
               d="M 70 25 L 40 25 Q 30 25 30 35 L 30 40 Q 30 50 40 50 L 60 50 Q 70 50 70 60 L 70 65 Q 70 75 60 75 L 30 75"
               fill="none" 
               stroke="url(#gradient)" 
               strokeWidth="8" 
               strokeLinecap="round"
               strokeLinejoin="round"
               className="animate-[draw_1.5s_ease-in-out_forwards]"
               strokeDasharray="300"
               strokeDashoffset="300"
             />
           </svg>
        </div>
      </div>

      <style>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;