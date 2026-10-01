import React, { useRef, CSSProperties } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedChar: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative">
      <span className="opacity-20">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = Array.from(text);
  const total = chars.length;

  return (
    <p ref={containerRef} className={className} style={style}>
      {chars.map((char, i) => {
        const start = i / total;
        const end = (i + 1) / total;
        return <AnimatedChar key={i} char={char} progress={scrollYProgress} range={[start, end]} />;
      })}
    </p>
  );
};

export default AnimatedText;
