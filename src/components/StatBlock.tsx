import { StatYearsIcon, StatTrophyIcon, StatPodiumIcon, StatMedalIcon, StatGoldMedalIcon } from '@/assets/svg/StatIcons';

interface StatBlockProps {
  icon: 'years' | 'trophy' | 'podium' | 'medal' | 'gold-medal';
  value: string | number;
  label: string;
  className?: string;
}

const iconMap = {
  years: StatYearsIcon,
  trophy: StatTrophyIcon,
  podium: StatPodiumIcon,
  medal: StatMedalIcon,
  'gold-medal': StatGoldMedalIcon,
};

export default function StatBlock({ icon, value, label, className = '' }: StatBlockProps) {
  const IconComponent = iconMap[icon];

  return (
    <div className={`flex min-w-0 items-center gap-2 md:gap-3 ${className}`}>
      <IconComponent className="h-5 w-5 shrink-0 text-satin-gold md:h-6 md:w-6" />
      <div className="flex min-w-0 flex-col">
        <span className="font-display text-[1.25rem] leading-tight text-warm-ivory md:text-[1.75rem]">
          {value}
        </span>
        <span className="max-w-[8rem] text-[0.62rem] font-bold uppercase leading-tight tracking-[0.06em] text-slate md:text-[0.6875rem]">
          {label}
        </span>
      </div>
    </div>
  );
}
