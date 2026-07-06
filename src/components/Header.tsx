import { useCallback, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BirdMarkIcon, RedSealIcon } from '@/assets/svg/StatIcons';

const navLinks = [
  { label: 'HOME', href: '#top' },
  { label: 'PROFILO', href: '#profilo' },
  { label: 'RISULTATI', href: '#risultati' },
  { label: 'MEDIA', href: '#media' },
  { label: 'CONTATTI', href: '#contatti' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 220);
      const sections = ['top', 'profilo', 'risultati', 'media', 'contatti'];

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ink/94 border-b border-satin-gold/20 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="site-container flex h-[84px] items-center justify-between">
          <a href="#top" onClick={(e) => handleNavClick(e, '#top')} className="shrink-0 leading-none">
            <span className="block text-[1rem] font-black tracking-[0.34em] text-warm-ivory">ARIANNA</span>
            <span className="block pt-1 text-[0.95rem] font-black tracking-[0.58em] text-satin-gold">MILANO</span>
            <span className="block pt-1 text-[0.68rem] font-bold tracking-[0.22em] text-warm-ivory">SANDA ATHLETE</span>
          </a>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Navigazione principale">
            {navLinks.map((link) => {
              const isActive = link.href === `#${activeSection}` || (link.href === '#top' && activeSection === 'top');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-[0.72rem] font-black tracking-[0.13em] transition-colors ${
                    isActive ? 'text-warm-ivory' : 'text-warm-ivory/78 hover:text-satin-gold'
                  }`}
                >
                  {link.label}
                  {isActive && <span className="absolute -bottom-3 left-0 h-[2px] w-full bg-satin-gold" />}
                </a>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 md:flex" aria-label="Firma personale Ying">
            <span className="font-serif text-[0.95rem] tracking-wide text-satin-gold/90">Ying &middot; 鷹</span>
            <BirdMarkIcon className="h-6 w-8 text-satin-gold" />
            <RedSealIcon className="h-4 w-4" />
            <span className="text-[0.72rem] font-black tracking-[0.12em] text-satin-gold">IT v</span>
          </div>

          <button className="p-2 text-warm-ivory md:hidden" onClick={() => setMobileOpen(true)} aria-label="Apri menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-ink/98 backdrop-blur-xl md:hidden">
          <button className="absolute right-5 top-5 p-2 text-warm-ivory" onClick={() => setMobileOpen(false)} aria-label="Chiudi menu">
            <X size={28} />
          </button>
          <nav className="flex flex-col items-center gap-8" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[1.5rem] font-black tracking-[0.1em] text-warm-ivory transition-colors hover:text-satin-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
