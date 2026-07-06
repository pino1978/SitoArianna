import { useEffect, useRef, useState } from 'react';
import LetteringLiberta from '@/assets/svg/LetteringLiberta';
import IdeogramYing from '@/assets/svg/IdeogramYing';
import BrushCircle from '@/assets/svg/BrushCircle';
import OutlineButton from '@/components/OutlineButton';
import StatBlock from '@/components/StatBlock';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#profilo');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] overflow-hidden"
    >
      {/* Background image — ONLY hero.png */}
      <img
        src="/assets/hero.png"
        alt="Arianna Milano in posizione di combattimento Sanda"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: 1 }}
      />

      {/* Dark gradient overlay — left to right */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to right, rgba(10,10,12,0.88) 0%, rgba(10,10,12,0.55) 40%, rgba(10,10,12,0.15) 65%, rgba(10,10,12,0.35) 100%)',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 3,
          background: 'linear-gradient(to bottom, transparent 60%, rgba(10,10,12,0.92) 100%)',
        }}
      />

      {/* Main content area */}
      <div
        className="relative flex flex-col justify-end min-h-[100dvh]"
        style={{ zIndex: 10, padding: '0 clamp(1.5rem, 5vw, 4rem)', paddingBottom: 'clamp(7rem, 12vh, 10rem)' }}
      >
        {/* Headline block */}
        <div className="max-w-[600px]">
          {/* Line 1: DISCIPLINA. */}
          <div
            className={`transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <h1 className="font-display text-warm-ivory uppercase leading-[1.1]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              DISCIPLINA.
            </h1>
          </div>

          {/* Line 2: FOCUS. */}
          <div
            className={`transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
            }`}
            style={{ transitionDelay: '0.45s' }}
          >
            <h1 className="font-display text-warm-ivory uppercase leading-[1.1]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              FOCUS.
            </h1>
          </div>

          {/* Line 3: LIBERTÀ — brush lettering SVG */}
          <div
            className={`transition-all duration-800 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '0.7s', margin: '0.25rem 0' }}
          >
            <LetteringLiberta
              className="w-[clamp(200px,30vw,360px)] h-auto"
            />
          </div>

          {/* Line 4: DOMANI. */}
          <div
            className={`transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <h1 className="font-display text-warm-ivory uppercase leading-[1.1]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              DOMANI.
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`mt-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
            }`}
            style={{ transitionDelay: '0.85s' }}
          >
            <p className="font-body text-muted-ivory text-[clamp(0.875rem,1vw,1rem)]">
              Ogni giorno, un passo avanti.
            </p>
            <p className="font-body font-medium text-satin-gold text-[clamp(0.75rem,0.9vw,0.875rem)] tracking-[0.1em] mt-2">
              SANDA IS MY WAY.
            </p>
          </div>

          {/* CTA */}
          <div
            className={`mt-8 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            <OutlineButton href="#profilo" onClick={handleCtaClick}>
              SCOPRI IL MIO PERCORSO
            </OutlineButton>
          </div>
        </div>
      </div>

      {/* Yīng ideogram — right side */}
      <div
        className={`absolute right-[3vw] md:right-[5vw] top-[12vh] md:top-[15vh] transition-opacity duration-1000 ${
          loaded ? 'opacity-90' : 'opacity-0'
        }`}
        style={{ zIndex: 5, transitionDelay: '0.8s' }}
      >
        <div className="relative">
          <BrushCircle className="absolute -top-4 -left-4 w-[clamp(140px,18vw,200px)] h-[clamp(140px,18vw,200px)] opacity-40" />
          <IdeogramYing className="w-[clamp(80px,12vw,150px)] h-auto relative" />
        </div>
      </div>

      {/* Statistics strip */}
      <div
        className={`absolute bottom-0 left-0 right-0 transition-all duration-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
        }`}
        style={{
          zIndex: 10,
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          paddingBottom: 'clamp(1.5rem, 3vh, 2.5rem)',
          transitionDelay: '1.2s',
        }}
      >
        <div className="border-t border-warm-ivory/15 pt-4 md:pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 md:gap-x-16">
            <StatBlock icon="years" value={3} label="ANNI DI PRATICA" />
            <StatBlock icon="trophy" value={28} label="GARE DISPUTATE" />
            <StatBlock icon="podium" value={26} label="PODI" />
            <StatBlock icon="medal" value={26} label="MEDAGLIE D'ORO" />
          </div>
        </div>
      </div>
    </section>
  );
}
