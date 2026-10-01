import React, { ElementType, ReactNode, CSSProperties } from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

const motionComponentCache = new Map<ElementType, React.ComponentType<any>>();

function getMotionComponent(tag: ElementType) {
  if (!motionComponentCache.has(tag)) {
    motionComponentCache.set(tag, motion.create(tag as any));
  }
  return motionComponentCache.get(tag)!;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
  style,
}) => {
  const MotionTag = getMotionComponent(as);

  return (
    <MotionTag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
};

export default FadeIn;
