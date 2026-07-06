import { Facebook, Instagram, Youtube } from 'lucide-react';
import { BirdMarkIcon, RedSealIcon } from '@/assets/svg/StatIcons';

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
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer id="contatti" className="border-t border-satin-gold/25 bg-ink">
      <div className="site-container grid gap-8 py-7 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="flex items-center gap-3">
          <span className="font-serif text-[1.18rem] text-satin-gold">Ying &middot; 鷹</span>
          <BirdMarkIcon className="h-7 w-10 text-satin-gold" />
          <RedSealIcon className="h-4 w-4" />
        </div>

        <div className="text-center">
          <nav className="flex flex-wrap justify-center gap-7" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-warm-ivory/78 transition-colors hover:text-satin-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="mt-6 text-[0.72rem] text-muted-ivory">© 2026 Arianna Milano - Tutti i diritti riservati.</p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <p className="text-[0.8rem] leading-5 text-muted-ivory md:text-right">
            Per richieste di collaborazione
            <br />e partnership:
            <br />
            <a href="mailto:info@ariannamilano.it" className="text-satin-gold hover:underline">info@ariannamilano.it</a>
          </p>
          <div className="flex items-center gap-4 text-satin-gold">
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-warm-ivory"><Instagram size={20} /></a>
            <a href="#" aria-label="YouTube" className="transition-colors hover:text-warm-ivory"><Youtube size={20} /></a>
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-warm-ivory"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
