import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

interface AboutSectionProps {
  onContactClick?: () => void;
}

const DECORATIVE_IMAGES = {
  topLeft:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  bottomLeft:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  topRight:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  bottomRight:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

const ABOUT_TEXT =
  "Hello! I'm Hoàng Phương Linh, a third-year student at Foreign Trade University majoring in International Business Economics. I am a cheerful, sociable, and responsible person with a strong interest in logistics, supply chain management, and international trade — eager to gain practical experience in import–export and continuously improve myself through new challenges.";

const PERSONALITY_TRAITS = [
  'Cheerful',
  'Sociable',
  'Responsible',
  'Persistent',
  'Willing to Learn',
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-28 overflow-hidden"
    >
      {/* Top-Left: Moon Icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[110px] sm:w-[150px] md:w-[200px] pointer-events-none select-none opacity-85"
      >
        <img
          src={DECORATIVE_IMAGES.topLeft}
          alt="3D Moon Icon"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain block"
        />
      </FadeIn>

      {/* Bottom-Left: 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[95px] sm:w-[135px] md:w-[175px] pointer-events-none select-none opacity-85"
      >
        <img
          src={DECORATIVE_IMAGES.bottomLeft}
          alt="3D Abstract Sculpture"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain block"
        />
      </FadeIn>

      {/* Top-Right: Lego Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[110px] sm:w-[150px] md:w-[200px] pointer-events-none select-none opacity-85"
      >
        <img
          src={DECORATIVE_IMAGES.topRight}
          alt="3D Lego Block Icon"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain block"
        />
      </FadeIn>

      {/* Bottom-Right: 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none opacity-85"
      >
        <img
          src={DECORATIVE_IMAGES.bottomRight}
          alt="3D Geometric Group"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain block"
        />
      </FadeIn>

      {/* Centered Content: Strictly Section 01 — About Me */}
      <div className="relative z-10 flex flex-col items-center gap-12 sm:gap-16 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[640px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <FadeIn delay={0.25} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
