import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { ProjectData } from './ProjectsSection';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#060610]/70 backdrop-blur-md p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-[40px] border-2 border-[#D7E2EA]/40 bg-[#0B0B16]/95 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.75)] p-5 sm:p-8 text-[#D7E2EA] max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4 pb-5">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-black text-4xl sm:text-6xl leading-none text-[#D7E2EA] tabular-nums">
                  {project.number}
                </span>
                <div>
                  <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/65">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-bold uppercase tracking-wide text-[#D7E2EA]">
                    {project.name}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close experience viewer"
                className="rounded-full border border-[#D7E2EA]/30 p-2.5 text-[#D7E2EA] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Single Full-Frame Picture */}
            <div className="w-full aspect-[1200/780] rounded-[28px] overflow-hidden bg-[#FFFFFF] border border-[#D7E2EA]/20 mb-6">
              <img
                src={project.image}
                alt={project.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover block"
              />
            </div>

            <div className="flex flex-col gap-4 pt-4 border-t border-[#D7E2EA]/15">
              <p className="text-sm sm:text-base font-light text-[#D7E2EA]/85 leading-relaxed">
                {project.summary}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/65">
                  Skills Developed: {project.skillsDeveloped.join(' · ')}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onContactClick();
                  }}
                  className="rounded-full border-2 border-[#D7E2EA] bg-white text-[#0A0A14] font-medium uppercase tracking-widest px-6 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-[#D7E2EA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Connect with Linh</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
