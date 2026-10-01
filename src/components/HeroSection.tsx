import React from 'react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

interface HeroSectionProps {
  onContactClick?: () => void;
}

const HERO_PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-between select-none pt-14 md:pt-8"
      style={{ overflowX: 'clip' }}
    >
      {/* Massive Heading */}
      <div className="w-full">
        <div className="overflow-hidden w-full px-4 sm:px-6 md:px-10">
          <FadeIn delay={0.15} y={40}>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center"
              style={{ fontSize: 'clamp(2.75rem, 12.5vw, 160px)' }}
            >
              Hi, i&apos;m Linh
            </h1>
          </FadeIn>
          <FadeIn delay={0.25} y={20}>
            <p className="text-center text-[#D7E2EA]/85 font-medium uppercase tracking-[0.18em] text-xs sm:text-sm md:text-base mt-2 sm:mt-3">
              Hoàng Phương Linh · Third-Year Student | Foreign Trade University
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Centered Magnetic 3D Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[490px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            wrapperClassName="w-full flex justify-center"
            className="w-full"
          >
            <img
              src={HERO_PORTRAIT_URL}
              alt="Hoàng Phương Linh — Portfolio Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain block pointer-events-none"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-end items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20 mt-auto">
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
