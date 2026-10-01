import React from 'react';
import FadeIn from './FadeIn';
import { ChromeStar3D, GlassSaturn3D } from './Floating3DElements';

const CAREER_INTERESTS = [
  {
    index: '01',
    title: 'Logistics & Supply Chain',
    summary:
      'Interested in how products, information, and resources move efficiently through global supply chains, with a goal to deepen understanding of logistics operations and supply chain management.',
    keywords: 'Global Supply Chains · Resource Flow · Logistics Operations',
  },
  {
    index: '02',
    title: 'Import–Export',
    summary:
      'Current career direction focused on international trade processes, trade documentation, customs procedures, and the operational coordination required in cross-border transactions.',
    keywords: 'Trade Documentation · Customs Procedures · Cross-Border Coordination',
  },
  {
    index: '03',
    title: 'International Business',
    summary:
      'Motivated to understand how companies operate across diverse markets and how business activities are interconnected within a global economic environment.',
    keywords: 'Global Markets · Cross-Border Strategy · Market Connectivity',
  },
];

export const EducationAndInterestsSection: React.FC = () => {
  return (
    <>
      {/* SECTION 02: EDUCATION */}
      <section
        id="education"
        className="relative overflow-hidden text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 border-t border-[#D7E2EA]/10"
      >
        {/* Subtle 3D Chrome Star accent in outer top-right margin */}
        <ChromeStar3D className="hidden sm:block absolute top-6 right-[3%] lg:right-[6%] w-[95px] md:w-[130px] lg:w-[155px]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(2.75rem, 10vw, 130px)' }}
            >
              Education
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} y={30}>
            <div className="rounded-[40px] border-2 border-[#D7E2EA]/80 bg-[#0A0A14]/80 backdrop-blur-xl p-6 sm:p-10 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-[#D7E2EA]/15">
                <div>
                  <p className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/65 mb-1">
                    Foreign Trade University, Vietnam
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#D7E2EA] leading-tight">
                    High-Quality Program in International Business
                  </h3>
                </div>

                <div className="flex flex-col md:items-end shrink-0 text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/80">
                  <span className="font-semibold text-[#D7E2EA]">Class: Anh 01 – K63</span>
                  <span className="font-light text-[#D7E2EA]/65">Third-Year Student</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 pt-6 sm:pt-8">
                <div>
                  <h4 className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60 mb-2.5">
                    Academic Foundation
                  </h4>
                  <p className="text-sm sm:text-base font-light text-[#D7E2EA]/90 leading-relaxed">
                    My studies at Foreign Trade University have provided me with a solid foundation
                    in international business, economics, marketing, investment, and international
                    trade.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60 mb-2.5">
                    Coursework &amp; Practical Focus
                  </h4>
                  <p className="text-sm sm:text-base font-light text-[#D7E2EA]/90 leading-relaxed">
                    Through academic projects, presentations, and group assignments, I am actively
                    exploring how my university coursework applies to practical areas including
                    logistics, supply chain management, and import–export operations.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 03: CAREER INTERESTS */}
      <section
        id="career-interests"
        className="relative overflow-hidden text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 border-t border-[#D7E2EA]/10"
      >
        {/* Subtle 3D Glass Saturn accent in outer top-left margin */}
        <GlassSaturn3D className="hidden sm:block absolute top-6 left-[2%] lg:left-[5%] w-[115px] md:w-[155px] lg:w-[180px]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
            >
              Career Interests
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {CAREER_INTERESTS.map((item, i) => (
              <FadeIn key={item.index} delay={i * 0.1} y={30}>
                <div className="h-full rounded-[36px] border border-[#D7E2EA]/30 bg-[#0A0A14]/80 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  <div>
                    <span className="font-black text-4xl sm:text-5xl text-[#D7E2EA] tabular-nums block mb-4">
                      {item.index}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#D7E2EA] mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base font-light text-[#D7E2EA]/85 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <p className="text-xs font-light uppercase tracking-wider text-[#D7E2EA]/55 pt-4 border-t border-[#D7E2EA]/15">
                    {item.keywords}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationAndInterestsSection;
