import React from 'react';

export const VIDEO_LINK = 'https://flow.google.com/shared/video/e83a8e6a-67d0-48d0-825c-d96b01fd2573';

interface LiveProjectButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  label = 'View Details',
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#4A89C4] bg-[#F2F8FD] text-[#16324F] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base whitespace-nowrap cursor-pointer transition-colors duration-200 hover:bg-[#DCEBFA] ${className}`}
    >
      {label}
    </button>
  );
};

export default LiveProjectButton;
