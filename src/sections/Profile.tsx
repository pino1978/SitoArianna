import SectionLabel from '@/components/SectionLabel';
import profileData from '@/data/profile.json';

export default function Profile() {
  return (
    <section id="profilo" className="relative">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Left column — Image */}
        <div className="relative w-full md:w-[42%] min-h-[350px] md:min-h-0">
          <img
            src="/assets/profile-left.jpg"
            alt="Arianna Milano in tenuta Kasoria Kombat & Fly"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Dark gradient overlay on right edge for text readability */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background: 'linear-gradient(to right, transparent 60%, rgba(10,10,12,0.7) 100%)',
            }}
          />
          {/* Bottom gradient */}
          <div
            className="absolute inset-0 block md:hidden"
            style={{
              background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,12,0.8) 100%)',
            }}
          />
          {/* Team name overlay */}
          <div className="absolute bottom-6 left-6 z-10">
            <span className="block font-body font-bold text-satin-gold text-[1.25rem] tracking-[0.15em]">
              KASORIA
            </span>
            <span className="block font-body font-medium text-warm-ivory text-[0.75rem] tracking-[0.1em]">
              KOMBAT & FLY
            </span>
          </div>
        </div>

        {/* Right column — Content */}
        <div
          className="w-full md:w-[58%] bg-ink flex flex-col justify-center"
          style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)' }}
        >
          <SectionLabel number="01" title="CHI È ARIANNA" />

          <div className="mt-10 max-w-[480px]">
            <p className="font-body text-muted-ivory text-[clamp(0.875rem,1vw,1rem)] leading-[1.8]">
              {profileData.bio}
            </p>

            {/* Signature */}
            <div className="mt-8">
              <span className="font-display italic text-satin-gold text-[1.25rem]">
                Arianna
              </span>
            </div>

            {/* CTA */}
            <a
              href="#profilo"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#profilo')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 mt-6 font-body font-medium text-satin-gold text-[0.8125rem] tracking-[0.08em] hover:underline transition-all"
            >
              SCOPRI IL MIO PROFILO
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-12 pt-6 border-t border-charcoal/50 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <span className="block font-display text-satin-gold text-[1.5rem]">{profileData.stats.years}</span>
              <span className="block font-body font-medium text-slate text-[0.6875rem] tracking-[0.08em] mt-1">ANNI</span>
            </div>
            <div>
              <span className="block font-display text-satin-gold text-[1.5rem]">{profileData.stats.competitions}</span>
              <span className="block font-body font-medium text-slate text-[0.6875rem] tracking-[0.08em] mt-1">GARE</span>
            </div>
            <div>
              <span className="block font-display text-satin-gold text-[1.5rem]">{profileData.stats.podiums}</span>
              <span className="block font-body font-medium text-slate text-[0.6875rem] tracking-[0.08em] mt-1">PODI</span>
            </div>
            <div>
              <span className="block font-display text-satin-gold text-[1.5rem]">{profileData.stats.goldMedals}</span>
              <span className="block font-body font-medium text-slate text-[0.6875rem] tracking-[0.08em] mt-1">ORO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
