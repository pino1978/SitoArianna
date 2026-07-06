import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import { PlayButtonIcon } from '@/assets/svg/StatIcons';
import mediaData from '@/data/media.json';

export default function Highlights() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 296; // 280 + 16 gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-graphite" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)' }}>
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>
        <SectionLabel
          number="HIGHLIGHTS"
          title="I MOMENTI CHE CONTANO"
          linkText="VAI A TUTTI I VIDEO"
          linkHref="#media"
        />

        {/* Video cards scroll container */}
        <div className="relative mt-10">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-slate text-slate hover:border-satin-gold hover:text-satin-gold items-center justify-center transition-all bg-graphite/80 backdrop-blur-sm"
            aria-label="Scorri a sinistra"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          >
            {mediaData.videos.map((video) => (
              <div
                key={video.id}
                className="group flex-shrink-0 w-[260px] md:w-[280px] cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video rounded overflow-hidden bg-charcoal">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-ink/30 transition-opacity duration-300 group-hover:bg-ink/50" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayButtonIcon className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 bg-ink/80 px-2 py-0.5 rounded-sm">
                    <span className="font-body font-medium text-warm-ivory text-[0.6875rem]">
                      {video.duration}
                    </span>
                  </div>
                </div>
                {/* Title */}
                <h3 className="mt-3 font-body font-medium text-warm-ivory text-[0.875rem] uppercase tracking-wide line-clamp-1">
                  {video.title}
                </h3>
                <p className="mt-1 font-body text-slate text-[0.75rem]">
                  {video.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-slate text-slate hover:border-satin-gold hover:text-satin-gold items-center justify-center transition-all bg-graphite/80 backdrop-blur-sm"
            aria-label="Scorri a destra"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
