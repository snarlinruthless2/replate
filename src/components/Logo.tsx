import React from 'react';

interface LogoProps {
  variant?: 'header' | 'footer' | 'hero' | 'standalone';
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  className = '',
}) => {
  const isFooter = variant === 'footer';

  return (
    <div
      className={`inline-flex items-center gap-3 select-none group cursor-pointer transition-transform duration-200 active:scale-98 ${className}`}
      aria-label="REPLATE - Reduce. Reuse. Reimagine."
    >
      {/* Precision Vector Emblem (Plate + Fork/Spoon + Rising Trend Arrow) */}
      <div
        className={`${
          isFooter ? 'w-10 h-10 sm:w-11 sm:h-11' : 'w-11 h-11 sm:w-12 sm:h-12'
        } shrink-0 relative`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] group-hover:scale-105 transition-transform duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Smooth Emerald Green to Golden Yellow Gradient */}
            <linearGradient id="replateCircleGrad" x1="15%" y1="85%" x2="85%" y2="15%">
              <stop offset="0%" stopColor="#1a7338" />
              <stop offset="35%" stopColor="#2e9b52" />
              <stop offset="70%" stopColor="#76b852" />
              <stop offset="100%" stopColor="#d8982a" />
            </linearGradient>
            <linearGradient id="arrowGrad" x1="10%" y1="90%" x2="90%" y2="10%">
              <stop offset="0%" stopColor="#1e7e3e" />
              <stop offset="45%" stopColor="#43a65b" />
              <stop offset="85%" stopColor="#e29b28" />
              <stop offset="100%" stopColor="#f3ad38" />
            </linearGradient>
          </defs>

          {/* Outer plate ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="url(#replateCircleGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="190 35"
            strokeDashoffset="18"
          />

          {/* Inner concentric circular plate track */}
          <circle
            cx="50"
            cy="50"
            r="27"
            stroke="url(#replateCircleGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="125 30"
            strokeDashoffset="-15"
          />

          {/* Center Left: Fork inside emblem */}
          <g stroke="url(#replateCircleGrad)" strokeLinecap="round" strokeLinejoin="round">
            {/* 3 Fork prongs */}
            <path d="M40 37v7M43 37v7M46 37v7" strokeWidth="2.2" />
            {/* Fork base & neck */}
            <path d="M40 44c0 2.2 6 2.2 6 0" strokeWidth="2" fill="none" />
            <path d="M43 45.5v11" strokeWidth="2.4" />
          </g>

          {/* Center Right: Spoon inside emblem */}
          <g fill="url(#replateCircleGrad)" stroke="url(#replateCircleGrad)">
            {/* Spoon bowl */}
            <ellipse cx="56" cy="41" rx="3.8" ry="5.5" />
            {/* Spoon handle */}
            <path d="M56 46.5v10" strokeWidth="2.4" strokeLinecap="round" />
          </g>

          {/* Dynamic Upward Growth/Rescue Arrow Path */}
          <path
            d="M24 68 Q 33 66 38 61 T 52 54 T 76 25"
            stroke="url(#arrowGrad)"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bold Arrow Head */}
          <polygon
            points="65,22 81,20 79,36 74,30 67,31"
            fill="url(#arrowGrad)"
            stroke="url(#arrowGrad)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Typography: RE P L A T E + Subtitle */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-tight leading-none">
          {/* R */}
          <span className="font-extrabold text-[21px] sm:text-[24px] text-[#faf6ef] font-sans tracking-wide">
            RE
          </span>

          {/* P */}
          <span className="font-extrabold text-[21px] sm:text-[24px] text-[#faf6ef] font-sans ml-1.5 mr-0.5">
            P
          </span>

          {/* L with Spoon integration */}
          <span className="relative inline-flex items-center justify-center mx-0.5 h-[23px] sm:h-[26px] w-[13px] sm:w-[15px]">
            <svg
              viewBox="0 0 20 32"
              className="h-full w-full fill-none"
            >
              {/* Spoon head on top of L */}
              <ellipse cx="9" cy="6.5" rx="5" ry="6" fill="#faf6ef" />
              {/* L stem & bottom arm */}
              <path
                d="M9 11.5v14a2 2 0 0 0 2 2h7"
                stroke="#faf6ef"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {/* A */}
          <span className="font-extrabold text-[21px] sm:text-[24px] text-[#faf6ef] font-sans mx-0.5">
            A
          </span>

          {/* T with Fork integration */}
          <span className="relative inline-flex items-center justify-center mx-0.5 h-[23px] sm:h-[26px] w-[14px] sm:w-[16px]">
            <svg
              viewBox="0 0 20 32"
              className="h-full w-full fill-none"
            >
              {/* T top bar */}
              <rect x="0.5" y="2" width="19" height="4" rx="1.2" fill="#faf6ef" />
              {/* T stem */}
              <path
                d="M10 6v10"
                stroke="#faf6ef"
                strokeWidth="3.8"
                strokeLinecap="round"
              />
              {/* Fork base & prongs */}
              <path
                d="M5.5 16h9"
                stroke="#faf6ef"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M6 16v10.5M10 16v10.5M14 16v10.5"
                stroke="#faf6ef"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>

          {/* E */}
          <span className="font-extrabold text-[21px] sm:text-[24px] text-[#faf6ef] font-sans">
            E
          </span>
        </div>

        {/* Tagline */}
        <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.24em] text-[#b8d4c0] dark:text-[#a0c5aa] leading-tight mt-0.5 whitespace-nowrap">
          REDUCE. REUSE. REIMAGINE
        </span>
      </div>
    </div>
  );
};
