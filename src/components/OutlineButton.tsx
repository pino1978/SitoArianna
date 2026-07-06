import { ArrowRight } from 'lucide-react';

interface OutlineButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export default function OutlineButton({ children, href, onClick, className = '' }: OutlineButtonProps) {
  const baseClasses = `group inline-flex items-center gap-2 border border-satin-gold bg-transparent text-satin-gold font-body font-medium text-[0.8125rem] tracking-[0.08em] uppercase px-6 py-3 rounded-sm transition-all duration-300 hover:bg-satin-gold hover:text-ink focus:outline-none focus:ring-2 focus:ring-satin-gold focus:ring-offset-2 focus:ring-offset-ink ${className}`;

  const arrow = <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={baseClasses}>
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
      {arrow}
    </button>
  );
}
