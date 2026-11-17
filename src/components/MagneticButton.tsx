import React from 'react';

interface MagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'amber' | 'velvet' | 'ghost';
  children: React.ReactNode;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  variant = 'velvet',
  className = '',
  children,
  ...props
}) => {
  const variantClasses =
    variant === 'amber'
      ? 'surface-champagne-luxury text-white font-semibold shadow-amber-glow'
      : variant === 'velvet'
      ? 'surface-velvet-glass text-white shadow-cinema-rest hover:shadow-cinema-hover hover:text-[#FF2E55]'
      : 'bg-transparent text-white/70 hover:text-white hover:bg-[#0F0F13]/85';

  return (
    <button
      type="button"
      data-cursor="magnetic"
      className={`relative inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-sans-ui tracking-wide whitespace-nowrap shrink-0 transition-all duration-150 active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-[#E11D48] cursor-pointer ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
