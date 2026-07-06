import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { BirdMarkIcon } from '@/assets/svg/StatIcons';

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
      setScrolled(window.scrollY > window.innerHeight * 0.7);

      const sections = ['top', 'profilo', 'ying', 'risultati', 'media', 'contatti'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-ink/95 backdrop-blur-md border-b border-charcoal/50'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div className="mx-auto h-full flex items-center justify-between" style={{ maxWidth: '1280px', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="flex flex-col gap-0.5 shrink-0"
          >
            <span className="text-warm-ivory font-body font-bold text-[0.6875rem] tracking-[0.25em] leading-tight">
              ARIANNA
            </span>
            <span className="text-warm-ivory font-body font-bold text-[0.6875rem] tracking-[0.25em] leading-tight">
              MILANO
            </span>
            <span className="text-slate font-body font-medium text-[0.5625rem] tracking-[0.15em] leading-tight">
              SANDA ATHLETE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Navigazione principale">
            {navLinks.map((link) => {
              const isActive =
                (link.href === '#top' && activeSection === 'top') ||
                link.href === `#${activeSection}`;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-body font-medium text-[0.8125rem] tracking-[0.08em] transition-colors duration-300 ${
                    isActive ? 'text-satin-gold' : 'text-slate hover:text-satin-gold'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-satin-gold" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right — Signature + Lang */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <div className="flex flex-col items-end gap-0.5">
              <span className="text-warm-ivory font-body font-medium text-[0.8125rem] tracking-wide">
                Ying · 鹰
              </span>
              <BirdMarkIcon className="w-4 h-4 text-satin-gold" />
            </div>
            <div className="flex items-center gap-1 text-slate font-body font-medium text-[0.75rem]">
              <span>IT</span>
              <span className="text-[0.5rem]">▼</span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-warm-ivory p-2"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-label="Apri menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-ink/98 backdrop-blur-xl flex flex-col items-center justify-center md:hidden">
          <button
            className="absolute top-5 right-5 text-warm-ivory p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Chiudi menu"
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col items-center gap-8" role="navigation" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body font-medium text-[1.5rem] tracking-[0.08em] text-slate hover:text-satin-gold transition-colors"
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
