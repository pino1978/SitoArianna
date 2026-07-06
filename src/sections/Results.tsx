import SectionLabel from '@/components/SectionLabel';
import StatBlock from '@/components/StatBlock';
import OutlineButton from '@/components/OutlineButton';
import resultsData from '@/data/results.json';

export default function Results() {
  return (
    <section id="risultati" className="border-b border-satin-gold/20 bg-ink py-9 md:py-10">
      <div className="site-container">
        <SectionLabel number="03" title="I RISULTATI PRINCIPALI" linkText="VEDI TUTTI I RISULTATI" linkHref="#risultati" />

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1px_0.88fr] lg:items-center">
          <div className="grid gap-4 md:grid-cols-2">
            {resultsData.mainResults.map((result) => (
              <article key={result.id} className="group overflow-hidden rounded-[4px] border border-satin-gold/65 bg-graphite">
                <div className="grid min-h-[156px] grid-cols-[1fr_42%]">
                  <div className="p-5">
                    <h3 className="max-w-[150px] text-[1rem] font-black uppercase leading-[1.05] text-warm-ivory">{result.name}</h3>
                    <p className="mt-1 text-[0.74rem] font-bold uppercase tracking-[0.08em] text-muted-ivory">{result.location}</p>
                    <div className="mt-6 flex gap-8">
                      <div>
                        <span className="block text-[2.85rem] font-black leading-none text-satin-gold">{result.participations}</span>
                        <span className="text-[0.58rem] font-black uppercase text-muted-ivory">Partecipazioni</span>
                      </div>
                      <div>
                        <span className="block text-[2.85rem] font-black leading-none text-satin-gold">{result.wins}</span>
                        <span className="text-[0.58rem] font-black uppercase text-muted-ivory">Vittorie</span>
                      </div>
                    </div>
                  </div>
                  <img src={result.image} alt={`${result.name} ${result.location}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
              </article>
            ))}
          </div>

          <div className="hidden h-full bg-satin-gold/45 lg:block" />

          <div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-7 md:grid-cols-4 lg:grid-cols-4">
              {resultsData.summaryStats.map((stat) => (
                <StatBlock key={stat.label} icon={stat.icon as 'medal' | 'trophy' | 'podium' | 'gold-medal'} value={stat.value} label={stat.label} />
              ))}
            </div>
            <div className="mt-8 max-w-[360px]">
              <OutlineButton href="#risultati">SCOPRI TUTTI I RISULTATI</OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
