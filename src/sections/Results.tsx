import SectionLabel from '@/components/SectionLabel';
import StatBlock from '@/components/StatBlock';
import OutlineButton from '@/components/OutlineButton';
import resultsData from '@/data/results.json';

export default function Results() {
  return (
    <section id="risultati" className="bg-ink" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)' }}>
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>
        <SectionLabel
          number="03"
          title="I RISULTATI PRINCIPALI"
          linkText="VEDI TUTTI I RISULTATI"
          linkHref="#risultati"
        />

        {/* Result cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {resultsData.mainResults.map((result) => (
            <div
              key={result.id}
              className="group bg-graphite border border-charcoal rounded overflow-hidden hover:border-satin-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold"
            >
              <div className="flex">
                {/* Content side */}
                <div className="flex-1 p-6">
                  <span className="font-body font-medium text-warm-ivory text-[0.75rem] tracking-wide uppercase">
                    {result.name}
                  </span>
                  <span className="block font-body font-medium text-slate text-[0.6875rem] tracking-wide mt-1">
                    {result.location}
                  </span>

                  {/* Stats */}
                  <div className="flex gap-8 mt-6">
                    <div>
                      <span className="block font-display text-satin-gold text-[2.5rem] md:text-[3rem] leading-none">
                        {result.participations}
                      </span>
                      <span className="block font-body font-medium text-slate text-[0.6875rem] tracking-[0.08em] mt-2 uppercase">
                        PARTECIPAZIONI
                      </span>
                    </div>
                    <div>
                      <span className="block font-display text-satin-gold text-[2.5rem] md:text-[3rem] leading-none">
                        {result.wins}
                      </span>
                      <span className="block font-body font-medium text-slate text-[0.6875rem] tracking-[0.08em] mt-2 uppercase">
                        VITTORIE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image side */}
                <div className="w-[120px] md:w-[140px] shrink-0">
                  <img
                    src={result.image}
                    alt={`${result.name} - ${result.location}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-12 pt-8 border-t border-charcoal">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {resultsData.summaryStats.map((stat, index) => (
              <StatBlock
                key={index}
                icon={stat.icon as 'medal' | 'trophy' | 'podium' | 'gold-medal'}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <OutlineButton href="#risultati">
            SCOPRI TUTTI I RISULTATI
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
