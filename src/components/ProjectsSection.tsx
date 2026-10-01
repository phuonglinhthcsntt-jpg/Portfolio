import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { MapPin, Mail, Phone } from 'lucide-react';
import FadeIn from './FadeIn';
import LiveProjectButton, { VIDEO_LINK } from './LiveProjectButton';
import ContactButton from './ContactButton';

export interface ProjectData {
  number: string;
  name: string;
  category: string;
  image: string;
  videoUrl: string;
  summary: string;
  skillsDeveloped: string[];
}

export const PROJECTS: ProjectData[] = [
  {
    number: '01',
    name: 'Đánh Thức Tết',
    category: 'Young Media Club — Foreign Trade University · Organizing Committee Member',
    image: '/ymc-logo.svg',
    videoUrl: VIDEO_LINK,
    summary:
      'I participated in the preparation and organization of the Đánh Thức Tết event, working closely with other club members to coordinate tasks and support the overall program.',
    skillsDeveloped: [
      'Teamwork',
      'Communication',
      'Event Coordination',
      'Time Management',
      'Problem-Solving',
    ],
  },
  {
    number: '02',
    name: 'Sức Trẻ — Student Publication',
    category: 'Young Media Club — Foreign Trade University · Organizing Committee Member',
    image: '/ymc-logo.svg',
    videoUrl: VIDEO_LINK,
    summary:
      "I participated in activities related to the preparation and publication of the club's student magazine. This experience helped me develop my ability to work according to a plan, coordinate with team members, and pay attention to details.",
    skillsDeveloped: [
      'Working According to a Plan',
      'Team Coordination',
      'Attention to Details',
      'Responsibility',
    ],
  },
  {
    number: '03',
    name: 'Talkshows',
    category: 'Young Media Club — Foreign Trade University · Organizing Committee Member',
    image: '/ymc-logo.svg',
    videoUrl: VIDEO_LINK,
    summary:
      'I contributed to the preparation and organization of talkshows held by the club, including supporting event operations, coordinating with other members, and working responsibly under deadlines.',
    skillsDeveloped: [
      'Event Operations Support',
      'Team Coordination',
      'Responsibility',
      'Working Under Deadlines',
    ],
  },
];

const STRENGTHS = [
  {
    index: '01',
    title: 'Willingness to Learn',
    description:
      'I enjoy learning new things and am willing to step outside my comfort zone to develop new knowledge and skills.',
  },
  {
    index: '02',
    title: 'Persistence',
    description:
      'I value consistency and believe that progress comes from continuing to make an effort, even when things do not go as planned.',
  },
  {
    index: '03',
    title: 'Adaptability',
    description:
      'Through academic projects, extracurricular activities, and teamwork, I have learned to adapt to different tasks, people, and working situations.',
  },
  {
    index: '04',
    title: 'Teamwork',
    description:
      'I enjoy working with others and believe that effective communication and cooperation are essential to achieving shared goals.',
  },
];

const HOBBIES = [
  {
    index: '01',
    title: 'Travel',
    description:
      'Exploring new places, experiencing different environments, meeting different people, and broadening my perspective.',
  },
  {
    index: '02',
    title: 'Spending Time with Dogs',
    description:
      'Taking care of and spending time with dogs, which is a meaningful and joyful part of my personal life.',
  },
  {
    index: '03',
    title: 'Walking',
    description:
      'Walking in my free time to relax, clear my mind, and maintain a healthy balance between studying and personal life.',
  },
  {
    index: '04',
    title: 'Exercise',
    description:
      'Staying physically active on a regular basis to support both physical and mental well-being.',
  },
];

const LOOKING_FOR_ITEMS = [
  'Gain practical experience in import–export and international trade',
  'Apply my academic knowledge in real-world situations',
  'Work with experienced people and learn from them',
  'Develop new skills through internships and projects',
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onSelectProject?: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  progress,
  range,
  targetScale,
  onSelectProject,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="min-h-[85vh] flex items-start justify-center sticky top-20 md:top-24"
      style={{ paddingBottom: `${index * 28 + 32}px` }}
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="relative w-full max-w-6xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#090913]/92 backdrop-blur-2xl p-4 sm:p-6 md:p-8 origin-top shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6">
          <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
            <span
              className="font-black leading-none text-[#D7E2EA] tabular-nums"
              style={{ fontSize: 'clamp(3rem, 9vw, 130px)' }}
            >
              {project.number}
            </span>

            <div className="flex flex-col gap-0.5 sm:gap-1">
              <span className="text-[#D7E2EA]/60 font-light uppercase tracking-wider text-xs sm:text-sm md:text-base">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase tracking-wide leading-tight"
                style={{ fontSize: 'clamp(1.05rem, 2.2vw, 2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton label="View Details" onClick={() => onSelectProject?.(project)} />
        </div>

        {/* Single Full-Frame Picture Cropped Only Through Container with object-fit: cover */}
        <div className="w-full aspect-[1200/780] overflow-hidden rounded-[28px] sm:rounded-[38px] md:rounded-[46px] bg-[#FFFFFF] border border-[#D7E2EA]/20 group">
          <img
            src={project.image}
            alt={`${project.name} showcase`}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] block"
          />
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onSelectProject?: (project: ProjectData) => void;
  onContactClick?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onContactClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = PROJECTS.length;

  return (
    <div className="relative z-10 border-t border-[#D7E2EA]/10">
      {/* SECTION 06: ACTIVITIES & EXPERIENCE */}
      <section
        id="experience"
        className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24"
      >
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 125px)' }}
          >
            Activities &amp; Experience
          </h2>
          <p className="text-center text-[#D7E2EA]/80 font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-3">
            Young Media Club — Foreign Trade University · Organizing Committee Member
          </p>
          <p className="text-center text-[#D7E2EA]/60 font-light text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-14 sm:mb-20">
            As a member of the organizing committee of a communications club at Foreign Trade
            University, I have participated in planning and organizing student activities,
            publications, and events.
          </p>
        </FadeIn>

        <div ref={containerRef} className="relative pb-12 sm:pb-20">
          {PROJECTS.map((project, index) => {
            const targetScale = 1 - (totalCards - 1 - index) * 0.03;
            const start = index * (1 / totalCards);
            return (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
                totalCards={totalCards}
                progress={scrollYProgress}
                range={[start, 1]}
                targetScale={targetScale}
                onSelectProject={onSelectProject}
              />
            );
          })}
        </div>
      </section>

      {/* SECTION 07: MY STRENGTHS */}
      <section
        id="strengths"
        className="relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 border-t border-[#D7E2EA]/10"
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
            >
              My Strengths
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {STRENGTHS.map((strength, i) => (
              <FadeIn key={strength.index} delay={i * 0.08} y={25}>
                <div className="h-full rounded-[32px] border border-[#D7E2EA]/30 bg-[#0A0A14]/80 backdrop-blur-xl p-6 flex flex-col justify-between gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                  <div>
                    <span className="font-black text-3xl text-[#D7E2EA] tabular-nums block mb-3">
                      {strength.index}
                    </span>
                    <h3 className="text-lg font-bold uppercase text-[#D7E2EA] mb-2 leading-snug">
                      {strength.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/75 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08: MY CAREER GOAL */}
      <section
        id="career-goal"
        className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 border-t border-[#D7E2EA]/10"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
            >
              My Career Goal
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <FadeIn delay={0.1} y={30}>
              <div className="h-full rounded-[36px] border-2 border-[#D7E2EA]/80 bg-[#0A0A14]/80 backdrop-blur-xl p-6 sm:p-10 flex flex-col justify-between gap-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 block mb-2">
                    01 · Immediate Focus
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#D7E2EA] mb-4">
                    Short-Term Goal
                  </h3>
                  <p className="text-sm sm:text-base font-light text-[#D7E2EA]/85 leading-relaxed mb-3">
                    My immediate goal is to gain practical experience and develop a clearer
                    understanding of import–export, logistics, and supply chain operations.
                  </p>
                  <p className="text-sm sm:text-base font-light text-[#D7E2EA]/75 leading-relaxed">
                    I hope to apply the knowledge I have gained at Foreign Trade University to
                    real-world situations, observe how international trade and import–export
                    activities work in practice, and learn from experienced professionals.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={30}>
              <div className="h-full rounded-[36px] border-2 border-[#D7E2EA]/80 bg-[#0A0A14]/80 backdrop-blur-xl p-6 sm:p-10 flex flex-col justify-between gap-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 block mb-2">
                    02 · Career Direction
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#D7E2EA] mb-4">
                    Long-Term Goal
                  </h3>
                  <p className="text-sm sm:text-base font-light text-[#D7E2EA]/85 leading-relaxed mb-3">
                    In the long term, I would like to build a career in international trade,
                    import–export, logistics, or supply chain management.
                  </p>
                  <p className="text-sm sm:text-base font-light text-[#D7E2EA]/75 leading-relaxed">
                    I hope to combine my academic background in International Business with
                    practical experience and gradually develop into a professional who understands
                    both the theoretical and practical aspects of international business operations.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 09: HOBBIES & LIFESTYLE */}
      <section
        id="hobbies"
        className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 border-t border-[#D7E2EA]/10"
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
            >
              Hobbies &amp; Lifestyle
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {HOBBIES.map((hobby, i) => (
              <FadeIn key={hobby.index} delay={i * 0.08} y={25}>
                <div className="h-full rounded-[32px] border border-[#D7E2EA]/30 bg-[#0A0A14]/80 backdrop-blur-xl p-6 flex flex-col justify-between gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                  <div>
                    <span className="font-black text-3xl text-[#D7E2EA] tabular-nums block mb-3">
                      {hobby.index}
                    </span>
                    <h3 className="text-lg font-bold uppercase text-[#D7E2EA] mb-2 leading-snug">
                      {hobby.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/75 leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: WHAT I AM LOOKING FOR */}
      <section
        id="looking-for"
        className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 border-t border-[#D7E2EA]/10"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.25rem, 8vw, 110px)' }}
            >
              What I Am Looking For
            </h2>
            <p className="text-center text-sm sm:text-base font-light text-[#D7E2EA]/75 max-w-2xl mx-auto mb-12 sm:mb-14">
              As I continue my university journey, I am looking for opportunities to:
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {LOOKING_FOR_ITEMS.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.06} y={20}>
                <div className="h-full rounded-[28px] border border-[#D7E2EA]/30 bg-[#0A0A14]/80 backdrop-blur-xl px-6 py-5 flex items-center gap-4 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
                  <span className="font-black text-2xl sm:text-3xl text-[#D7E2EA] tabular-nums shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-sm sm:text-base font-light text-[#D7E2EA]/90 leading-snug">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} y={20}>
            <p className="text-center text-sm sm:text-base font-medium uppercase tracking-wider text-[#D7E2EA]/80 mt-10">
              &ldquo;I believe that every new experience can be an opportunity to learn and
              grow.&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 11: CONTACT */}
      <section
        id="contact"
        className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 border-t border-[#D7E2EA]/15"
      >
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(2.75rem, 10vw, 130px)' }}
            >
              Contact
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} y={30}>
            <div className="rounded-[40px] border-2 border-[#D7E2EA]/80 bg-[#0A0A14]/80 backdrop-blur-xl p-6 sm:p-10 md:p-12 flex flex-col justify-between gap-8 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 block mb-2">
                    Let&apos;s Connect
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#D7E2EA] tracking-wide">
                    Hoàng Phương Linh
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#D7E2EA]/85 mt-1">
                    Foreign Trade University — K63
                  </p>
                  <p className="text-sm sm:text-base font-light text-[#D7E2EA]/70">
                    High-Quality Program in International Business
                  </p>
                </div>

                <div className="flex flex-col gap-3.5 text-sm sm:text-base text-[#D7E2EA]">
                  <div className="flex items-center gap-3.5">
                    <MapPin className="w-5 h-5 text-[#D7E2EA]/70 shrink-0" />
                    <span>Hanoi, Vietnam</span>
                  </div>

                  <a
                    href="mailto:k63.2412150158@ftu.edu.vn"
                    className="flex items-center gap-3.5 hover:opacity-75 transition-opacity"
                  >
                    <Mail className="w-5 h-5 text-[#D7E2EA]/70 shrink-0" />
                    <span>k63.2412150158@ftu.edu.vn</span>
                  </a>

                  <a
                    href="tel:0836694666"
                    className="flex items-center gap-3.5 hover:opacity-75 transition-opacity"
                  >
                    <Phone className="w-5 h-5 text-[#D7E2EA]/70 shrink-0" />
                    <span>0836694666</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#D7E2EA]/15">
                <div className="max-w-md">
                  <p className="text-sm sm:text-base font-light text-[#D7E2EA]/85 leading-relaxed">
                    I am always open to learning opportunities, new experiences, and meaningful
                    connections.
                  </p>
                  <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/60 mt-1">
                    Thank you for visiting my portfolio!
                  </p>
                </div>
                <ContactButton onClick={onContactClick} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
