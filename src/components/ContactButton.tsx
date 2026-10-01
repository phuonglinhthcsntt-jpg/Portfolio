import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full py-3.5 px-9 sm:py-4 sm:px-11 text-base sm:text-xl text-white font-medium uppercase tracking-widest flex items-center justify-center whitespace-nowrap cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #3B76AC 7%, #5B9BD5 42%, #7BB6EA 76%, #4A89C4 100%)',
        boxShadow:
          '0px 6px 18px rgba(74, 137, 196, 0.35), 4px 4px 12px rgba(255, 255, 255, 0.35) inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </button>
  );
};

export default ContactButton;
