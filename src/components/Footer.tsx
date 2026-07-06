import { Instagram, Youtube, Facebook } from 'lucide-react';

const footerLinks = [
  { label: 'HOME', href: '#top' },
  { label: 'PROFILO', href: '#profilo' },
  { label: 'RISULTATI', href: '#risultati' },
  { label: 'MEDIA', href: '#media' },
  { label: 'CONTATTI', href: '#contatti' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contatti" className="bg-ink border-t border-charcoal">
      {/* Main content */}
      <div
        className="mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
        style={{ maxWidth: '1280px', padding: '3rem clamp(1.5rem, 5vw, 4rem)' }}
      >
        {/* Left — Signature */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="text-satin-gold font-body font-medium text-lg tracking-wide">Ying · 鹰</span>
          </div>
          <span className="text-slate font-body font-medium text-[0.6875rem] tracking-[0.2em]">AQUILA</span>
          <div className="mt-3 flex flex-col">
            <span className="text-warm-ivory font-body font-bold text-[0.6875rem] tracking-[0.25em]">ARIANNA MILANO</span>
            <span className="text-slate font-body font-medium text-[0.5625rem] tracking-[0.15em]">SANDA ATHLETE</span>
          </div>
        </div>

        {/* Center — Navigation */}
        <nav className="flex flex-wrap justify-center gap-6" role="navigation" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-body font-medium text-[0.75rem] tracking-[0.08em] text-slate hover:text-satin-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right — Contact */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-muted-ivory font-body text-sm text-center md:text-right">
            Per richieste di collaborazione<br />e partnership:
          </p>
          <a
            href="mailto:info@ariannamilano.it"
            className="text-satin-gold font-body font-medium text-sm hover:underline transition-all"
          >
            info@ariannamilano.it
          </a>
          <div className="flex items-center gap-4 mt-1">
            <a href="#" className="text-slate hover:text-satin-gold transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-slate hover:text-satin-gold transition-colors" aria-label="YouTube">
              <Youtube size={18} />
            </a>
            <a href="#" className="text-slate hover:text-satin-gold transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-charcoal text-center py-6">
        <p className="text-slate font-body text-[0.75rem]">
          © 2024 Arianna Milano — Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
