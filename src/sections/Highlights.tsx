import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import { PlayButtonIcon } from '@/assets/svg/StatIcons';
import mediaData from '@/data/media.json';

export default function Highlights() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section className="border-b border-satin-gold/20 bg-graphite py-7 md:py-8">
      <div className="site-container">
        <SectionLabel number="HIGHLIGHTS" title="I MOMENTI CHE CONTANO" linkText="VAI A TUTTI I VIDEO" linkHref="#media" />

        <div className="relative mt-6">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-10 top-[42%] z-10 hidden text-satin-gold transition-transform hover:-translate-x-1 md:block"
            aria-label="Scorri a sinistra"
          >
            <ChevronLeft size={34} strokeWidth={1.5} />
          </button>

          <div ref={scrollRef} className="grid auto-cols-[minmax(230px,1fr)] grid-flow-col gap-3 overflow-x-auto scrollbar-hide lg:grid-flow-row lg:grid-cols-5">
            {mediaData.videos.map((video) => (
              <article key={video.id} className="group min-w-[230px]">
                <div className="relative aspect-video overflow-hidden rounded-[4px] border border-satin-gold/70 bg-charcoal">
                  <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayButtonIcon className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="absolute bottom-2 right-2 text-[0.72rem] font-bold text-warm-ivory">{video.duration}</span>
                </div>
                <h3 className="mt-3 truncate text-[0.88rem] font-black uppercase text-warm-ivory">{video.title}</h3>
                <p className="mt-1 text-[0.75rem] text-muted-ivory">{video.subtitle}</p>
              </article>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-10 top-[42%] z-10 hidden text-satin-gold transition-transform hover:translate-x-1 md:block"
            aria-label="Scorri a destra"
          >
            <ChevronRight size={34} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
