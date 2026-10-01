import React from 'react';
import { motion } from 'motion/react';

export const LiquidGlassBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#05050A]"
    >
      {/* Slowly drifting ambient radial color depths */}
      <motion.div
        className="absolute -inset-[15%]"
        animate={{
          x: ['-2%', '2.5%', '-1.5%', '-2%'],
          y: ['-1.5%', '2%', '-2%', '-1.5%'],
          scale: [1, 1.05, 1.02, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(circle at 18% 18%, rgba(168, 85, 247, 0.18) 0%, transparent 45%), radial-gradient(circle at 82% 52%, rgba(6, 182, 212, 0.17) 0%, transparent 48%), radial-gradient(circle at 25% 82%, rgba(236, 72, 153, 0.15) 0%, transparent 45%), radial-gradient(circle at 68% 22%, rgba(37, 99, 235, 0.16) 0%, transparent 42%)',
        }}
      />

      {/* High-definition Animated SVG Flowing Liquid-Metal / Glossy Glass Shapes */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-85"
        viewBox="0 0 1440 1024"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow & Blur Filters for Glossy Liquid Refraction */}
          <filter id="softGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="24" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="ambientBlur" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="48" />
          </filter>

          <filter id="rimBlur" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="6" />
          </filter>

          {/* Iridescent Rim Gradients */}
          <linearGradient id="cyanPinkRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#3B82F6" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#A855F7" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="magentaVioletRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F472B6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#C026D3" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="electricCyanBlue" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.15" />
            <stop offset="45%" stopColor="#06B6D4" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#38BDF8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#E879F9" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="darkGlassFill1" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#141026" stopOpacity="0.92" />
            <stop offset="45%" stopColor="#090814" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#040409" stopOpacity="0.98" />
          </linearGradient>

          <linearGradient id="darkGlassFill2" x1="0%" y1="20%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#070A1E" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#120924" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#05050B" stopOpacity="0.95" />
          </linearGradient>

          <radialGradient id="cyanSpotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#0284C7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="cobaltSpotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#6366F1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="pinkTopGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.7" />
            <stop offset="45%" stopColor="#9333EA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3B0764" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* LAYER 1: Top-left Magenta & Cyan Liquid Fold */}
        <motion.g
          animate={{
            x: [0, 28, -18, 0],
            y: [0, 16, -12, 0],
            rotate: [0, 1.5, -1, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ellipse
            cx="360"
            cy="85"
            rx="280"
            ry="130"
            fill="url(#pinkTopGlow)"
            filter="url(#ambientBlur)"
          />
          <path
            d="M-120 120 C 120 155, 340 90, 520 -40 L -120 -40 Z"
            fill="url(#darkGlassFill1)"
          />
          <path
            d="M-100 118 C 130 152, 345 86, 515 -35"
            stroke="url(#cyanPinkRim)"
            strokeWidth="6"
            filter="url(#rimBlur)"
          />
          <path
            d="M-100 118 C 130 152, 345 86, 515 -35"
            stroke="url(#cyanPinkRim)"
            strokeWidth="2"
          />
        </motion.g>

        {/* LAYER 2: Luminous Cyan Orb Highlight (smooth floating pulse) */}
        <motion.circle
          cx="245"
          cy="195"
          r="78"
          fill="url(#cyanSpotGlow)"
          filter="url(#softGlow)"
          animate={{
            cx: [245, 285, 225, 245],
            cy: [195, 165, 220, 195],
            scale: [1, 1.18, 0.92, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* LAYER 3: Left Sweeping Glossy Dark Dome with Cyan-to-Magenta Specular Rim */}
        <motion.g
          animate={{
            x: [0, 24, -14, 0],
            y: [0, -22, 14, 0],
            scale: [1, 1.03, 0.985, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '200px 650px' }}
        >
          <path
            d="M-80 285 C 190 250, 465 310, 535 555 C 585 730, 530 920, 480 1060 L -80 1060 Z"
            fill="url(#darkGlassFill1)"
          />
          <path
            d="M-60 285 C 200 252, 468 312, 535 555 C 575 700, 540 870, 490 1040"
            stroke="url(#cyanPinkRim)"
            strokeWidth="7"
            filter="url(#rimBlur)"
          />
          <path
            d="M-60 285 C 200 252, 468 312, 535 555 C 575 700, 540 870, 490 1040"
            stroke="url(#cyanPinkRim)"
            strokeWidth="2.2"
          />
        </motion.g>

        {/* LAYER 4: Right Flowing Liquid-Metal Ribbons (Cyan, Cobalt Blue, Purple & Pink) */}
        <motion.g
          animate={{
            x: [0, -30, 18, 0],
            y: [0, 24, -18, 0],
            scale: [1, 1.04, 0.98, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '1150px 650px' }}
        >
          <path
            d="M 880 1060 C 910 790, 1020 420, 1390 280 C 1450 258, 1500 260, 1540 275 L 1540 1060 Z"
            fill="url(#darkGlassFill2)"
          />
          {/* Outer purple-magenta ribbon glow */}
          <path
            d="M 830 1050 C 865 740, 960 460, 1115 245"
            stroke="url(#magentaVioletRim)"
            strokeWidth="12"
            filter="url(#ambientBlur)"
          />
          <path
            d="M 845 1050 C 880 755, 965 470, 1095 265"
            stroke="url(#electricCyanBlue)"
            strokeWidth="5"
            filter="url(#rimBlur)"
          />
          <path
            d="M 845 1050 C 880 755, 965 470, 1095 265"
            stroke="url(#electricCyanBlue)"
            strokeWidth="1.8"
          />

          {/* Primary Right Sweeping Cyan-Pink Specular Arch */}
          <path
            d="M 945 1060 C 985 770, 1095 415, 1455 285"
            stroke="url(#electricCyanBlue)"
            strokeWidth="10"
            filter="url(#rimBlur)"
          />
          <path
            d="M 945 1060 C 985 770, 1095 415, 1455 285"
            stroke="url(#cyanPinkRim)"
            strokeWidth="3"
          />

          {/* Secondary Inner Cobalt-Purple Liquid Wave on Right */}
          <path
            d="M 1050 1060 C 1095 820, 1190 560, 1480 440"
            stroke="url(#magentaVioletRim)"
            strokeWidth="6"
            filter="url(#rimBlur)"
          />
        </motion.g>

        {/* LAYER 5: Right Cobalt Glow Orb */}
        <motion.circle
          cx="1355"
          cy="435"
          r="95"
          fill="url(#cobaltSpotGlow)"
          filter="url(#softGlow)"
          animate={{
            cx: [1355, 1310, 1380, 1355],
            cy: [435, 485, 395, 435],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* LAYER 6: Bottom-Left Sweeping Iridescent Pink/Purple Liquid Fold */}
        <motion.g
          animate={{
            x: [0, 32, -16, 0],
            y: [0, -18, 22, 0],
            rotate: [0, -1.2, 1, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '300px 900px' }}
        >
          <path
            d="M -60 640 C 180 740, 450 885, 675 1060 L -60 1060 Z"
            fill="url(#darkGlassFill2)"
          />
          <path
            d="M -50 645 C 185 745, 455 888, 675 1055"
            stroke="url(#magentaVioletRim)"
            strokeWidth="9"
            filter="url(#rimBlur)"
          />
          <path
            d="M -50 645 C 185 745, 455 888, 675 1055"
            stroke="#F472B6"
            strokeOpacity="0.85"
            strokeWidth="2.2"
          />
          <path
            d="M -60 765 C 145 855, 340 950, 525 1060"
            stroke="url(#cyanPinkRim)"
            strokeWidth="5"
            filter="url(#rimBlur)"
          />
        </motion.g>
      </svg>

      {/* Low-contrast readability scrim so text, cards, and buttons always pop clearly */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 48%, rgba(5, 5, 12, 0.52) 0%, rgba(5, 5, 12, 0.28) 65%, rgba(5, 5, 12, 0.45) 100%)',
        }}
      />
    </div>
  );
};

export default LiquidGlassBackground;
