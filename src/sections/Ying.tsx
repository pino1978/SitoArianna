import SectionLabel from '@/components/SectionLabel';
import profileData from '@/data/profile.json';

export default function Ying() {
  return (
    <section id="ying" className="bg-graphite" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)' }}>
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Left — Text content */}
          <div className="w-full md:w-[45%]">
            <SectionLabel number="02" title="YĪNG · 鹰" />
            <p className="font-body font-medium text-slate text-[0.875rem] tracking-[0.2em] mt-3">
              AQUILA
            </p>
            <p className="font-body text-muted-ivory text-[clamp(0.875rem,1vw,1rem)] leading-[1.8] mt-6 max-w-[440px]">
              {profileData.ying.description}
            </p>
            <a
              href="#ying"
              onClick={(e) => {
                e.preventDefault();
                // Future: open a modal or navigate to a detailed page
              }}
              className="group inline-flex items-center gap-2 mt-6 font-body font-medium text-satin-gold text-[0.8125rem] tracking-[0.08em] hover:underline transition-all"
            >
              SCOPRI IL SIGNIFICATO
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            {/* Values list */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {['Visione', 'Concentrazione', 'Precisione', 'Coraggio', 'Determinazione'].map((value) => (
                <div key={value} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-satin-gold shrink-0" />
                  <span className="font-body text-muted-ivory text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Eagle image */}
          <div className="w-full md:w-[55%]">
            <div
              className="relative rounded overflow-hidden"
              style={{ boxShadow: '0 0 60px rgba(201,169,98,0.08)' }}
            >
              <img
                src="/assets/eagle-flying.jpg"
                alt="Aquila in volo — simbolo di Yīng"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
