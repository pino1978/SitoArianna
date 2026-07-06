import { ArrowRight } from 'lucide-react';

interface SectionLabelProps {
  number: string;
  title: string;
  linkText?: string;
  linkHref?: string;
  dark?: boolean;
  underline?: boolean;
  className?: string;
}

export default function SectionLabel({
  number,
  title,
  linkText,
  linkHref,
  dark = false,
  underline = false,
  className = '',
}: SectionLabelProps) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between ${className}`}>
      <div>
        <span className="block text-[0.78rem] font-black tracking-[0.13em] text-satin-gold">{number}</span>
        <h2 className={`mt-1 max-w-full break-words text-[1.55rem] font-black uppercase leading-[1] sm:text-[1.85rem] md:text-[2.05rem] ${dark ? 'text-ink' : 'text-warm-ivory'}`}>
          {title}
        </h2>
        {underline && <span className="mt-4 block h-[2px] w-10 bg-lacquer-red" />}
      </div>

      {linkText && linkHref && (
        <a
          href={linkHref}
          className={`group inline-flex items-center gap-3 text-[0.72rem] font-black uppercase tracking-[0.13em] transition-colors ${
            dark ? 'text-ink hover:text-lacquer-red' : 'text-warm-ivory hover:text-satin-gold'
          }`}
        >
          {linkText}
          <ArrowRight size={18} className="text-satin-gold transition-transform group-hover:translate-x-1" />
        </a>
      )}
    </div>
  );
}
