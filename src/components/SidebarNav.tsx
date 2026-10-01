import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export interface NavSectionItem {
  id: string;
  label: string;
}

export const NAV_SECTIONS: NavSectionItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'education', label: 'Education' },
  { id: 'career-interests', label: 'Career Interests' },
  { id: 'skills', label: 'Skills' },
  { id: 'languages', label: 'Languages' },
  { id: 'experience', label: 'Experience' },
  { id: 'strengths', label: 'Strengths' },
  { id: 'career-goal', label: 'Career Goal' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'looking-for', label: 'Looking For' },
  { id: 'contact', label: 'Contact' },
];

export const SidebarNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('home');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.32;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveId('contact');
        return;
      }

      let currentSection = 'home';
      for (const section of NAV_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPosition >= top) {
            currentSection = section.id;
          }
        }
      }
      setActiveId(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveId(id);

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <div className="fixed top-5 left-5 sm:top-6 sm:left-6 z-50 select-none">
      {/* Minimal Elegant Menu Toggle Button (☰) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="group relative flex items-center justify-center w-11 h-11 rounded-2xl border border-[#D7E2EA]/20 bg-[#080814]/65 backdrop-blur-xl text-[#D7E2EA] shadow-[0_8px_32px_rgba(59,130,246,0.18),0_0_20px_rgba(168,85,247,0.14)] hover:border-[#00E5FF]/50 hover:shadow-[0_8px_32px_rgba(0,229,255,0.28),0_0_24px_rgba(168,85,247,0.25)] transition-all duration-300 cursor-pointer"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-[#D7E2EA] group-hover:text-[#00E5FF] transition-colors" />
        ) : (
          <Menu className="w-5 h-5 text-[#D7E2EA] group-hover:text-[#00E5FF] transition-colors" />
        )}
      </button>

      {/* Smooth Slide-Out Glassmorphism Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Transparent click-outside overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/25 backdrop-blur-[2px] -z-10"
            />

            {/* Compact Floating Vertical Glass Drawer */}
            <motion.aside
              initial={{ opacity: 0, x: -24, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -24, scale: 0.96 }}
              transition={{
                type: 'spring',
                stiffness: 360,
                damping: 30,
              }}
              aria-label="Portfolio sections navigation"
              className="mt-3 w-56 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl border border-[#D7E2EA]/20 bg-[#080814]/80 backdrop-blur-2xl p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_35px_rgba(59,130,246,0.16),0_0_50px_rgba(168,85,247,0.14)]"
            >
              <nav className="flex flex-col gap-0.5">
                {NAV_SECTIONS.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      aria-current={isActive ? 'location' : undefined}
                      className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs uppercase tracking-wider transition-all duration-200 ${
                        isActive
                          ? 'text-[#D7E2EA] font-medium bg-gradient-to-r from-[#3B82F6]/25 via-[#A855F7]/20 to-transparent shadow-[inset_0_0_0_1px_rgba(215,226,234,0.2)]'
                          : 'text-[#D7E2EA]/65 font-light hover:text-[#D7E2EA] hover:bg-white/[0.05]'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0 ${
                          isActive
                            ? 'bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] scale-125'
                            : 'bg-[#D7E2EA]/25 group-hover:bg-[#D7E2EA]/60'
                        }`}
                      />
                      <span className="truncate">{item.label}</span>
                    </a>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarNav;
