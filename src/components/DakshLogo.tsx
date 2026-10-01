// import React from 'react';

// interface DakshLogoProps {
//   className?: string;
//   size?: 'sm' | 'md' | 'lg' | 'xl';
//   showTagline?: boolean;
//   light?: boolean;
//   layout?: 'horizontal' | 'vertical';
// }

// export const DakshLogo: React.FC<DakshLogoProps> = ({
//   className = '',
//   size = 'md',
//   showTagline = true,
//   light = false,
//   layout = 'horizontal',
// }) => {
//   const iconDimensions = {
//     sm: 'w-7 h-9',
//     md: 'w-9 h-11',
//     lg: 'w-12 h-15',
//     xl: 'w-16 h-20',
//   }[size];

//   const titleSize = {
//     sm: 'text-sm tracking-wider',
//     md: 'text-lg tracking-widest',
//     lg: 'text-2xl tracking-widest',
//     xl: 'text-3xl tracking-widest',
//   }[size];

//   const taglineSize = {
//     sm: 'text-[9px] tracking-[0.2em]',
//     md: 'text-[10px] tracking-[0.25em]',
//     lg: 'text-xs tracking-[0.28em]',
//     xl: 'text-sm tracking-[0.3em]',
//   }[size];

//   // The authentic multi-color oval fingerprint emblem
//   const fingerprintEmblem = (
//     <div className={`relative ${iconDimensions} shrink-0 drop-shadow-xs`}>
//       <svg viewBox="0 0 140 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <radialGradient id="dakshOrange" cx="55%" cy="20%" r="50%">
//             <stop offset="0%" stopColor="#FF7A30" />
//             <stop offset="70%" stopColor="#FF5528" />
//             <stop offset="100%" stopColor="#FF3838" stopOpacity="0" />
//           </radialGradient>
//           <radialGradient id="dakshYellow" cx="25%" cy="45%" r="45%">
//             <stop offset="0%" stopColor="#FFDF2B" />
//             <stop offset="70%" stopColor="#FFB300" />
//             <stop offset="100%" stopColor="#FF9800" stopOpacity="0" />
//           </radialGradient>
//           <radialGradient id="dakshPink" cx="30%" cy="75%" r="40%">
//             <stop offset="0%" stopColor="#FF3377" />
//             <stop offset="70%" stopColor="#E91E63" />
//             <stop offset="100%" stopColor="#C2185B" stopOpacity="0" />
//           </radialGradient>
//           <radialGradient id="dakshCyan" cx="70%" cy="50%" r="50%">
//             <stop offset="0%" stopColor="#00E5FF" />
//             <stop offset="55%" stopColor="#00B0FF" />
//             <stop offset="100%" stopColor="#0091EA" stopOpacity="0" />
//           </radialGradient>
//           <radialGradient id="dakshPurple" cx="65%" cy="85%" r="40%">
//             <stop offset="0%" stopColor="#7C4DFF" />
//             <stop offset="65%" stopColor="#651FFF" />
//             <stop offset="100%" stopColor="#4A148C" stopOpacity="0" />
//           </radialGradient>

//           <clipPath id="dakshFingerprintClip">
//             <ellipse cx="70" cy="90" rx="58" ry="78" />
//           </clipPath>
//         </defs>

//         {/* Color Sectors Clipped to Fingerprint Silhouette */}
//         <g clipPath="url(#dakshFingerprintClip)">
//           <rect x="0" y="0" width="140" height="180" fill="#FFA000" />
//           <rect x="0" y="0" width="140" height="180" fill="url(#dakshOrange)" />
//           <rect x="0" y="0" width="140" height="180" fill="url(#dakshYellow)" />
//           <rect x="0" y="0" width="140" height="180" fill="url(#dakshPink)" />
//           <rect x="0" y="0" width="140" height="180" fill="url(#dakshCyan)" />
//           <rect x="0" y="0" width="140" height="180" fill="url(#dakshPurple)" />

//           {/* Friction Ridges / Whorl Loops */}
//           <g stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.32" fill="none">
//             <path d="M 70 24 C 46 24 26 44 26 72 C 26 104 35 134 42 162" />
//             <path d="M 70 31 C 50 31 33 50 33 75 C 33 104 41 131 47 157" />
//             <path d="M 70 38 C 55 38 40 55 40 79 C 40 106 47 128 52 152" />
//             <path d="M 70 45 C 58 45 47 60 47 82 C 47 106 52 126 57 147" />
//             <path d="M 70 52 C 62 52 54 65 54 85 C 54 106 58 125 62 142" />
            
//             <path d="M 70 24 C 94 24 114 44 114 72 C 114 104 105 134 98 162" />
//             <path d="M 70 31 C 90 31 107 50 107 75 C 107 104 99 131 93 157" />
//             <path d="M 70 38 C 85 38 100 55 100 79 C 100 106 93 128 88 152" />
//             <path d="M 70 45 C 82 45 93 60 93 82 C 93 106 88 126 83 147" />
//             <path d="M 70 52 C 78 52 86 65 86 85 C 86 106 82 125 78 142" />

//             {/* Central Whorl & Curving Arcs */}
//             <path d="M 70 60 C 65 60 62 70 62 86 C 62 101 66 114 70 128" />
//             <path d="M 70 60 C 75 60 78 70 78 86 C 78 101 74 114 70 128" />
//             <path d="M 70 68 C 68 68 67 76 67 87 C 67 96 69 106 70 118" />

//             <path d="M 21 85 Q 70 75 119 85" />
//             <path d="M 18 97 Q 70 87 122 97" />
//             <path d="M 16 110 Q 70 100 124 110" />
//             <path d="M 18 122 Q 70 112 122 122" />
//             <path d="M 23 134 Q 70 124 117 134" />
//             <path d="M 31 146 Q 70 136 109 146" />
//           </g>

//           {/* Ridge Light Highlights */}
//           <g stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.4" fill="none">
//             <path d="M 25 75 C 32 55 49 41 70 41 C 91 41 108 55 115 75" />
//             <path d="M 30 87 Q 70 79 110 87" />
//             <path d="M 35 100 Q 70 91 105 100" />
//             <path d="M 38 112 Q 70 103 102 112" />
//           </g>
//         </g>
//       </svg>
//     </div>
//   );

//   if (layout === 'vertical') {
//     return (
//       <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
//         {fingerprintEmblem}
//         <div className="flex flex-col items-center leading-none">
//           <span className={`font-black font-display ${titleSize} ${light ? 'text-white' : 'text-[#0F172A]'}`}>
//             DAKSH
//           </span>
//           {showTagline && (
//             <span className={`font-bold mt-1 uppercase ${taglineSize} ${light ? 'text-slate-300' : 'text-slate-500'}`}>
//               Trust Your Touch
//             </span>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={`flex items-center gap-3 ${className}`}>
//       {fingerprintEmblem}
//       <div className="flex flex-col justify-center leading-none">
//         <span className={`font-black font-display ${titleSize} ${light ? 'text-white' : 'text-[#0F172A]'}`}>
//           DAKSH
//         </span>
//         {showTagline && (
//           <span className={`font-bold mt-1 uppercase ${taglineSize} ${light ? 'text-slate-300' : 'text-slate-500'}`}>
//             Trust Your Touch
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };
