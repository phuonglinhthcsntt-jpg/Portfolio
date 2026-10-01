import React from 'react';
import { motion } from 'motion/react';

interface Floating3DProps {
  className?: string;
  delay?: number;
}

/**
 * 1. 3D Iridescent Glass Saturn / Ringed Sphere (Fits International Business & Global Trade)
 * Dark glossy sphere with cyan/cobalt inner glow and a tilted 3D chrome-magenta-cyan ring.
 */
export const GlassSaturn3D: React.FC<Floating3DProps> = ({
  className = '',
  delay = 0,
}) => (
  <motion.div
    aria-hidden="true"
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 0.9, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    animate={{
      y: [0, -12, 0],
      rotate: [-4, 3, -4],
    }}
    transition={{
      opacity: { duration: 0.8, delay },
      scale: { duration: 0.8, delay },
      y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
      rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
    }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-[0_16px_32px_rgba(0,229,255,0.22)]"
    >
      <defs>
        <radialGradient id="saturnSphere" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
          <stop offset="28%" stopColor="#1D4ED8" stopOpacity="0.92" />
          <stop offset="65%" stopColor="#090718" stopOpacity="0.98" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.85" />
        </radialGradient>

        <linearGradient id="saturnRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="25%" stopColor="#00E5FF" stopOpacity="0.95" />
          <stop offset="65%" stopColor="#A855F7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="ringChrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="30%" stopColor="#E0F2FE" />
          <stop offset="55%" stopColor="#9333EA" />
          <stop offset="80%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>

        <linearGradient id="ringExtrude" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#082F49" />
          <stop offset="50%" stopColor="#3B0764" />
          <stop offset="100%" stopColor="#500724" />
        </linearGradient>
      </defs>

      {/* Back half of 3D ring */}
      <g transform="rotate(-22 120 100)">
        <ellipse
          cx="120"
          cy="104"
          rx="98"
          ry="30"
          stroke="url(#ringExtrude)"
          strokeWidth="15"
        />
        <ellipse
          cx="120"
          cy="100"
          rx="98"
          ry="30"
          stroke="url(#ringChrome)"
          strokeWidth="12"
        />
      </g>

      {/* Main 3D Glass Sphere */}
      <circle
        cx="120"
        cy="100"
        r="54"
        fill="url(#saturnSphere)"
        stroke="url(#saturnRim)"
        strokeWidth="3.5"
      />
      {/* Specular glossy highlight arc on sphere */}
      <path
        d="M 84 74 C 95 58, 118 53, 138 60"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
      <ellipse
        cx="95"
        cy="78"
        rx="12"
        ry="6"
        transform="rotate(-30 95 78)"
        fill="white"
        fillOpacity="0.55"
      />

      {/* Front half of 3D ring wrapping in front of sphere */}
      <g transform="rotate(-22 120 100)">
        <path
          d="M 22 104 A 98 30 0 0 0 218 104"
          stroke="url(#ringExtrude)"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          d="M 22 100 A 98 30 0 0 0 218 100"
          stroke="url(#ringChrome)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M 30 101 A 90 27 0 0 0 210 101"
          stroke="#FFFFFF"
          strokeOpacity="0.7"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  </motion.div>
);

/**
 * 2. 3D Extruded Chrome & Dark Glass 4-Point Star Crystal
 * Matches the thick beveled chrome rim + dark translucent core look of the cursor/moon.
 */
export const ChromeStar3D: React.FC<Floating3DProps> = ({
  className = '',
  delay = 0.1,
}) => (
  <motion.div
    aria-hidden="true"
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 0.9, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    animate={{
      y: [0, 11, 0],
      rotate: [0, 6, 0],
    }}
    transition={{
      opacity: { duration: 0.8, delay },
      scale: { duration: 0.8, delay },
      y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
      rotate: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
    }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg
      viewBox="0 0 210 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-[0_16px_32px_rgba(236,72,153,0.24)]"
    >
      <defs>
        <linearGradient id="starExtrude" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="40%" stopColor="#3B82F6" />
          <stop offset="75%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>

        <linearGradient id="starGlassCore" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#1E1B4B" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#090714" stopOpacity="0.98" />
          <stop offset="100%" stopColor="#4A044E" stopOpacity="0.92" />
        </linearGradient>

        <linearGradient id="starRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#38BDF8" />
          <stop offset="70%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#E879F9" />
        </linearGradient>
      </defs>

      {/* 3D Extruded Back/Side Bevel */}
      <path
        d="M114 18 C122 68 146 92 196 100 C146 108 122 132 114 182 C106 132 82 108 32 100 C82 92 106 68 114 18 Z"
        fill="url(#starExtrude)"
        stroke="url(#starExtrude)"
        strokeWidth="12"
        strokeLinejoin="round"
      />

      {/* Front Dark Glass Face */}
      <path
        d="M102 12 C110 62 134 86 184 94 C134 102 110 126 102 176 C94 126 70 102 20 94 C70 86 94 62 102 12 Z"
        fill="url(#starGlassCore)"
        stroke="url(#starRim)"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Inner Specular Facet Lines */}
      <path
        d="M102 24 C108 64 128 84 168 94"
        stroke="#FFFFFF"
        strokeOpacity="0.8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="94" cy="86" r="16" fill="#00E5FF" fillOpacity="0.22" />
    </svg>
  </motion.div>
);

/**
 * 3. 3D Glossy Torus / Iridescent Metallic Ring
 * Matches the metallic magenta/violet/cyan tubular look of the smiley ring in AboutSection.
 */
export const GlassTorus3D: React.FC<Floating3DProps> = ({
  className = '',
  delay = 0.15,
}) => (
  <motion.div
    aria-hidden="true"
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 0.9, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    animate={{
      y: [0, -14, 0],
      rotate: [8, -4, 8],
    }}
    transition={{
      opacity: { duration: 0.8, delay },
      scale: { duration: 0.8, delay },
      y: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' },
      rotate: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
    }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg
      viewBox="0 0 210 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-[0_18px_36px_rgba(168,85,247,0.26)]"
    >
      <defs>
        <linearGradient id="torusBody" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="28%" stopColor="#1E1B4B" />
          <stop offset="55%" stopColor="#090814" />
          <stop offset="82%" stopColor="#C026D3" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>

        <linearGradient id="torusHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#38BDF8" stopOpacity="0.85" />
          <stop offset="75%" stopColor="#EC4899" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <g transform="rotate(-18 105 105)">
        {/* 3D Extruded Depth Shadow Ring */}
        <ellipse
          cx="111"
          cy="112"
          rx="66"
          ry="52"
          stroke="#3B0764"
          strokeWidth="34"
        />
        {/* Main Glossy Torus Tube */}
        <ellipse
          cx="105"
          cy="105"
          rx="66"
          ry="52"
          stroke="url(#torusBody)"
          strokeWidth="32"
        />
        {/* Outer & Inner Specular Chrome Rim */}
        <ellipse
          cx="105"
          cy="105"
          rx="81"
          ry="67"
          stroke="url(#torusHighlight)"
          strokeWidth="3"
        />
        <ellipse
          cx="105"
          cy="105"
          rx="51"
          ry="37"
          stroke="url(#torusHighlight)"
          strokeWidth="2.5"
        />
        {/* Glossy Tube Specular Streak */}
        <path
          d="M 52 78 A 66 52 0 0 1 152 72"
          stroke="white"
          strokeOpacity="0.8"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  </motion.div>
);

/**
 * 4. 3D Iridescent Glass Lightning Bolt / Prism
 * Extruded cyan-violet-pink chrome bevel with dark glass front face.
 */
export const ChromeLightning3D: React.FC<Floating3DProps> = ({
  className = '',
  delay = 0.1,
}) => (
  <motion.div
    aria-hidden="true"
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 0.9, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    animate={{
      y: [0, -10, 0],
      rotate: [-3, 4, -3],
    }}
    transition={{
      opacity: { duration: 0.8, delay },
      scale: { duration: 0.8, delay },
      y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      rotate: { duration: 8.5, repeat: Infinity, ease: 'easeInOut' },
    }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-[0_16px_32px_rgba(59,130,246,0.25)]"
    >
      <defs>
        <linearGradient id="boltBevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="45%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>

        <linearGradient id="boltGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F172A" stopOpacity="0.96" />
          <stop offset="55%" stopColor="#090714" stopOpacity="0.98" />
          <stop offset="100%" stopColor="#3B0764" stopOpacity="0.94" />
        </linearGradient>

        <linearGradient id="boltRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#00E5FF" />
          <stop offset="75%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
      </defs>

      {/* 3D Side Extrusion */}
      <path
        d="M126 24 L54 118 L104 118 L86 200 L166 98 L114 98 L126 24 Z"
        fill="url(#boltBevel)"
        stroke="url(#boltBevel)"
        strokeWidth="12"
        strokeLinejoin="round"
      />

      {/* Front Dark Glass Face */}
      <path
        d="M114 16 L42 110 L92 110 L74 192 L154 90 L102 90 L114 16 Z"
        fill="url(#boltGlass)"
        stroke="url(#boltRim)"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Specular Edge Highlight */}
      <path
        d="M108 26 L52 102"
        stroke="#FFFFFF"
        strokeOpacity="0.85"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  </motion.div>
);

/**
 * 5. 3D Glossy Translucent Glass Cube / Prism Cluster
 * Inspired by the purple/magenta glass block in the reference image, rotated at a new angle with cyan-pink refraction.
 */
export const GlassPrism3D: React.FC<Floating3DProps> = ({
  className = '',
  delay = 0.15,
}) => (
  <motion.div
    aria-hidden="true"
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 0.9, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    animate={{
      y: [0, 12, 0],
      rotate: [4, -3, 4],
    }}
    transition={{
      opacity: { duration: 0.8, delay },
      scale: { duration: 0.8, delay },
      y: { duration: 7.2, repeat: Infinity, ease: 'easeInOut' },
      rotate: { duration: 9.5, repeat: Infinity, ease: 'easeInOut' },
    }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg
      viewBox="0 0 210 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-[0_18px_36px_rgba(236,72,153,0.24)]"
    >
      <defs>
        <linearGradient id="prismTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.75" />
          <stop offset="50%" stopColor="#1E1B4B" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id="prismLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#090814" stopOpacity="0.98" />
          <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="prismRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#701A75" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#3B0764" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id="prismEdge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#00E5FF" />
          <stop offset="70%" stopColor="#E879F9" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
      </defs>

      {/* Isometric 3D Glass Hexagon Cube */}
      {/* Top Face */}
      <polygon
        points="105,24 178,66 105,108 32,66"
        fill="url(#prismTop)"
        stroke="url(#prismEdge)"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      {/* Left Dark Glass Face */}
      <polygon
        points="32,66 105,108 105,186 32,144"
        fill="url(#prismLeft)"
        stroke="url(#prismEdge)"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      {/* Right Iridescent Magenta/Cyan Glass Face */}
      <polygon
        points="105,108 178,66 178,144 105,186"
        fill="url(#prismRight)"
        stroke="url(#prismEdge)"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      {/* Inner Glass Specular Bevel */}
      <line
        x1="105"
        y1="108"
        x2="105"
        y2="184"
        stroke="#FFFFFF"
        strokeOpacity="0.85"
        strokeWidth="3"
      />
      <line
        x1="36"
        y1="66"
        x2="105"
        y2="106"
        stroke="#00E5FF"
        strokeOpacity="0.8"
        strokeWidth="2.5"
      />
      <line
        x1="105"
        y1="106"
        x2="174"
        y2="66"
        stroke="#F472B6"
        strokeOpacity="0.85"
        strokeWidth="2.5"
      />
    </svg>
  </motion.div>
);
