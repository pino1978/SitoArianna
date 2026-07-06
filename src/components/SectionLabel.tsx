import { ArrowRight } from 'lucide-react';

interface SectionLabelProps {
  number: string;
  title: string;
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export default function SectionLabel({ number, title, linkText, linkHref, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 ${className}`}>
      <div className="flex flex-col gap-1">
        <span className="font-body font-medium text-satin-gold text-[0.75rem] tracking-[0.08em]">
          {number}
        </span>
        <h2 className="font-display text-warm-ivory text-[clamp(1.5rem,2.5vw,2.25rem)] leading-tight">
          {title}
        </h2>
      </div>
      {linkText && linkHref && (
        <a
          href={linkHref}
          className="group inline-flex items-center gap-1.5 font-body font-medium text-satin-gold text-[0.75rem] tracking-[0.08em] hover:underline transition-all shrink-0"
        >
          {linkText}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>
      )}
    </div>
  );
}
