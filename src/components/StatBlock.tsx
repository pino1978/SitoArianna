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
    <div className={`flex items-center gap-3 ${className}`}>
      <IconComponent className="w-6 h-6 text-satin-gold shrink-0" />
      <div className="flex flex-col">
        <span className="font-display text-warm-ivory text-[clamp(1.25rem,2vw,1.75rem)] leading-tight">
          {value}
        </span>
        <span className="font-body font-medium text-slate text-[0.6875rem] tracking-[0.08em] uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
