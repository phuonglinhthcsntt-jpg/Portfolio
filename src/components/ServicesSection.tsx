import React from 'react';
import FadeIn from './FadeIn';
import { GlassTorus3D } from './Floating3DElements';

interface SkillItem {
  number: string;
  name: string;
  category: string;
  description: string;
}

const SKILLS: SkillItem[] = [
  {
    number: '01',
    name: 'Microsoft Office (Word, Excel & PowerPoint)',
    category: 'Software & Tools',
    description:
      'Format structured academic reports in Word, organize data and perform calculations in Excel, and create visually clear presentations in PowerPoint to communicate project findings effectively.',
  },
  {
    number: '02',
    name: 'Canva',
    category: 'Visual Design',
    description:
      'Design presentations, visual materials, and communication content by combining text, images, and visual elements to make information easy to understand.',
  },
  {
    number: '03',
    name: 'Research',
    category: 'Academic Skill',
    description:
      'Search for information, identify relevant sources, organize findings, and apply research to support university coursework and group projects.',
  },
  {
    number: '04',
    name: 'Report Writing',
    category: 'Academic Skill',
    description:
      'Prepare academic reports by organizing ideas into a logical structure and supporting key points with relevant research.',
  },
  {
    number: '05',
    name: 'Teamwork & Communication',
    category: 'Collaboration',
    description:
      'Communicate with diverse team members, coordinate tasks across group assignments, and contribute actively to shared goals.',
  },
];

const LANGUAGES = [
  {
    index: '01',
    language: 'English',
    proficiency: 'IELTS 7.5',
    description:
      'I am comfortable using English for academic study, research, presentations, and communication.',
  },
  {
    index: '02',
    language: 'Chinese',
    proficiency: 'Currently Learning',
    description:
      'I am currently learning Chinese as an additional language and hope to gradually develop my Chinese communication skills for future academic and professional contexts.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <div className="text-[#D7E2EA] border-t border-[#D7E2EA]/10">
      {/* SECTION 04: SKILLS */}
      <section
        id="skills"
        className="relative overflow-hidden px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24"
      >
        {/* Subtle 3D Glossy Torus accent in outer top-right margin */}
        <GlassTorus3D className="hidden sm:block absolute top-6 right-[3%] lg:right-[7%] w-[100px] md:w-[135px] lg:w-[160px]" />

        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-14 sm:mb-20"
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto rounded-[40px] border border-[#D7E2EA]/25 bg-[#0A0A14]/75 backdrop-blur-xl px-6 sm:px-10 md:px-14 py-4 sm:py-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
          {SKILLS.map((skill, i) => (
            <FadeIn key={skill.number} delay={i * 0.06} y={25}>
              <div
                className="flex items-start sm:items-center gap-6 sm:gap-10 md:gap-14 py-6 sm:py-8 md:py-10"
                style={{
                  borderBottom:
                    i < SKILLS.length - 1 ? '1px solid rgba(215, 226, 234, 0.15)' : 'none',
                }}
              >
                <span
                  className="font-black leading-none text-[#D7E2EA] shrink-0 tabular-nums"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
                >
                  {skill.number}
                </span>

                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/55 font-medium">
                    {skill.category}
                  </span>
                  <h3
                    className="font-medium uppercase text-[#D7E2EA] leading-tight"
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2rem)' }}
                  >
                    {skill.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#D7E2EA]/80"
                    style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SECTION 05: LANGUAGES */}
      <section
        id="languages"
        className="px-5 sm:px-8 md:px-10 pt-14 sm:pt-20 pb-24 sm:pb-32 border-t border-[#D7E2EA]/10"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(2.75rem, 10vw, 130px)' }}
            >
              Languages
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {LANGUAGES.map((item, i) => (
              <FadeIn key={item.language} delay={i * 0.1} y={30}>
                <div className="h-full rounded-[36px] border-2 border-[#D7E2EA]/80 bg-[#0A0A14]/80 backdrop-blur-xl p-6 sm:p-10 flex flex-col justify-between gap-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  <div>
                    <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-[#D7E2EA]/15">
                      <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#D7E2EA]">
                        {item.language}
                      </h3>
                      <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#D7E2EA]">
                        {item.proficiency}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-light text-[#D7E2EA]/85 leading-relaxed mt-5">
                      {item.description}
                    </p>
                  </div>

                  <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/55">
                    {item.index} · Language Proficiency
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
