import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Import–Export & International Trade');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#16324F]/40 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-[36px] border-2 border-[#9EC5E8] bg-[#FFFFFF] shadow-[0_24px_60px_rgba(22,50,79,0.22)] p-6 sm:p-8 text-[#16324F]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-6 top-6 rounded-full p-2 text-[#4A89C4] hover:bg-[#EBF4FC] hover:text-[#16324F] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="hero-heading font-black uppercase text-2xl sm:text-3xl tracking-tight mb-1">
              Let&apos;s Connect
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#4A89C4] mb-4">
              Hoàng Phương Linh · Foreign Trade University (Anh 01 – K63)
            </p>

            {/* Quick Direct Contact Info */}
            <div className="rounded-2xl border border-[#B8D8F0] bg-[#EEF6FC] p-3.5 mb-5 flex flex-col gap-1.5 text-xs sm:text-sm text-[#16324F]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#5B9BD5] shrink-0" />
                <span>Hanoi, Vietnam</span>
              </div>
              <a
                href="mailto:k63.2412150158@ftu.edu.vn"
                className="flex items-center gap-2.5 hover:underline"
              >
                <Mail className="w-4 h-4 text-[#5B9BD5] shrink-0" />
                <span>k63.2412150158@ftu.edu.vn</span>
              </a>
              <a href="tel:0836694666" className="flex items-center gap-2.5 hover:underline">
                <Phone className="w-4 h-4 text-[#5B9BD5] shrink-0" />
                <span>0836694666</span>
              </a>
            </div>

            {submitted ? (
              <div className="py-10 flex flex-col items-center text-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-[#4A89C4]" />
                <p className="text-xl font-bold uppercase tracking-wide text-[#16324F]">
                  Message Sent
                </p>
                <p className="text-sm text-[#3B6B99] font-light">
                  Thank you for reaching out, {name}! Phương Linh will reply soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#4A89C4] font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name / Organization"
                    className="w-full rounded-2xl border border-[#B8D8F0] bg-[#F6FAFD] px-4 py-2.5 text-sm text-[#16324F] placeholder-[#4A89C4]/50 focus:border-[#4A89C4] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#4A89C4] font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-2xl border border-[#B8D8F0] bg-[#F6FAFD] px-4 py-2.5 text-sm text-[#16324F] placeholder-[#4A89C4]/50 focus:border-[#4A89C4] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#4A89C4] font-medium mb-1">
                    Opportunity / Topic
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full rounded-2xl border border-[#B8D8F0] bg-[#F6FAFD] px-4 py-2.5 text-sm text-[#16324F] focus:border-[#4A89C4] focus:outline-none"
                  >
                    <option value="Import–Export & International Trade">
                      Import–Export &amp; International Trade
                    </option>
                    <option value="Logistics & Supply Chain Internship">
                      Logistics &amp; Supply Chain Internship
                    </option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Networking & Mentorship">Networking &amp; Mentorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#4A89C4] font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Linh, I'd love to connect regarding..."
                    className="w-full rounded-2xl border border-[#B8D8F0] bg-[#F6FAFD] px-4 py-2.5 text-sm text-[#16324F] placeholder-[#4A89C4]/50 focus:border-[#4A89C4] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 rounded-full py-3.5 px-8 text-sm text-white font-medium uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-95"
                  style={{
                    background:
                      'linear-gradient(123deg, #3B76AC 7%, #5B9BD5 42%, #7BB6EA 76%, #4A89C4 100%)',
                    boxShadow:
                      '0px 6px 18px rgba(74, 137, 196, 0.35), 4px 4px 12px rgba(255, 255, 255, 0.35) inset',
                    outline: '2px solid #FFFFFF',
                    outlineOffset: '-3px',
                  }}
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
