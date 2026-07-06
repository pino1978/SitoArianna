import LetteringLiberta from '@/assets/svg/LetteringLiberta';
import IdeogramYing from '@/assets/svg/IdeogramYing';
import BrushCircle from '@/assets/svg/BrushCircle';
import OutlineButton from '@/components/OutlineButton';
import StatBlock from '@/components/StatBlock';
import { BirdMarkIcon, RedSealIcon } from '@/assets/svg/StatIcons';

export default function Hero() {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#profilo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="top" className="relative min-h-[820px] overflow-hidden border-b border-satin-gold/45 bg-ink md:min-h-[680px] lg:h-[740px]">
      <img
        src="/assets/hero.png"
        alt="Arianna Milano in posizione di combattimento Sanda"
        className="absolute inset-0 h-full w-full object-cover object-[58%_50%] md:object-center"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_28%,rgba(240,237,230,0.18),transparent_16%),linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.62)_24%,rgba(0,0,0,0.10)_55%,rgba(0,0,0,0.72)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink via-ink/55 to-transparent" />

      <div className="site-container relative z-10 flex min-h-[820px] items-center pt-[84px] md:min-h-[680px] lg:min-h-[740px]">
        <div className="w-full max-w-[340px] md:max-w-[420px]">
          <h1 className="text-[3.4rem] font-black uppercase leading-[0.95] text-warm-ivory drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] md:text-[4.35rem]">
            DISCIPLINA.
            <br />
            FOCUS.
          </h1>

          <LetteringLiberta className="my-2 h-auto w-[310px] md:w-[360px]" aria-label="Liberta" />

          <h1 className="text-[3.4rem] font-black uppercase leading-[0.95] text-warm-ivory drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] md:text-[4.35rem]">
            DOMANI.
          </h1>

          <div className="mt-5">
            <p className="text-[0.98rem] font-medium leading-relaxed text-muted-ivory">Ogni giorno, un passo avanti.</p>
            <p className="mt-1 text-[0.86rem] font-black tracking-[0.18em] text-red-500">SANDA IS MY WAY.</p>
          </div>

          <div className="mt-6">
            <OutlineButton href="#profilo" onClick={handleCtaClick}>
              SCOPRI IL MIO PERCORSO
            </OutlineButton>
          </div>
        </div>
      </div>

      <aside className="absolute right-[5vw] top-[132px] z-10 hidden w-[210px] text-center xl:block">
        <BrushCircle className="absolute -left-7 -top-8 h-[250px] w-[250px] opacity-45" />
        <IdeogramYing className="relative mx-auto h-auto w-[168px] text-satin-gold" />
        <BirdMarkIcon className="relative mx-auto mt-8 h-16 w-24 text-satin-gold" />
        <RedSealIcon className="absolute bottom-1 right-0 h-8 w-8" />
      </aside>

      <div className="absolute inset-x-0 bottom-8 z-10">
        <div className="site-container grid grid-cols-2 gap-x-2 gap-y-5 border-t border-warm-ivory/10 pt-6 md:flex md:items-center md:gap-16">
          <StatBlock icon="years" value={3} label="ANNI DI PRATICA" />
          <StatBlock icon="trophy" value={28} label="GARE DISPUTATE" />
          <StatBlock icon="podium" value={26} label="PODI" />
          <StatBlock icon="medal" value={26} label="MEDAGLIE D'ORO" />
        </div>
      </div>
    </section>
  );
}
