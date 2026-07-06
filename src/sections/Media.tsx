import { Play } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import mediaData from '@/data/media.json';

export default function Media() {
  return (
    <section id="media" className="bg-graphite" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)' }}>
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>
        <SectionLabel
          number="04"
          title="MEDIA"
          linkText="VAI ALLA GALLERY COMPLETA"
          linkHref="#media"
        />

        {/* Media grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {mediaData.gallery.map((item, index) => (
            <div
              key={item.id}
              className={`group relative cursor-pointer overflow-hidden rounded ${
                index === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-all duration-300 flex items-center justify-center">
                  {item.type === 'video' && (
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                      <Play size={20} fill="white" className="text-white ml-0.5" />
                    </div>
                  )}
                  {item.type === 'photo' && (
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                        <path d="M4 4h8v8H4z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M6 4V2h4v2" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}
                </div>
                {/* Category badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-body font-medium text-warm-ivory text-[0.6875rem] tracking-wide">
                      {item.category}
                    </span>
                    {item.count && (
                      <span className="font-body text-slate text-[0.625rem]">
                        {item.count}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
