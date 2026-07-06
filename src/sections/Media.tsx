import { Play } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import mediaData from '@/data/media.json';

export default function Media() {
  return (
    <section id="media" className="paper-panel py-8 md:py-9">
      <div className="site-container">
        <SectionLabel number="04" title="MEDIA" linkText="VAI ALLA GALLERY COMPLETA" linkHref="#media" dark />

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {mediaData.gallery.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-[6px] bg-ink shadow-card">
              <div className="relative aspect-[1.48] overflow-hidden">
                <img src={item.image} alt={item.category} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/18 to-transparent" />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-ink/35 text-white">
                      <Play size={20} fill="currentColor" className="ml-1" />
                    </span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                  <span className="max-w-[95px] text-[0.76rem] font-black uppercase leading-tight tracking-[0.08em] text-warm-ivory">{item.category}</span>
                  {item.count && <span className="text-[0.68rem] font-bold uppercase text-muted-ivory">{item.count}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
