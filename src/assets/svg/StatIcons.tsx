export function StatYearsIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function StatTrophyIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0012 0V2z" />
    </svg>
  );
}

export function StatPodiumIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 21H4a1 1 0 01-1-1v-6a1 1 0 011-1h3" />
      <path d="M17 21h3a1 1 0 001-1v-6a1 1 0 00-1-1h-3" />
      <path d="M8 13V9a1 1 0 011-1h6a1 1 0 011 1v4" />
    </svg>
  );
}

export function StatMedalIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 15a6 6 0 1010 0" />
      <path d="M12 15V3" />
      <path d="M8 3h8" />
      <circle cx="12" cy="15" r="6" />
      <path d="M10 15h4" />
      <path d="M12 13v4" />
    </svg>
  );
}

export function StatGoldMedalIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L7 21l5-3 5 3-2-7.5" />
      <path d="M12 6v6" />
      <path d="M10 8l2 2 2-2" />
    </svg>
  );
}

export function PlayButtonIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.6)" />
      <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <path d="M19 15l14 9-14 9V15z" fill="white" />
    </svg>
  );
}

export function BirdMarkIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M4 14c2-3 5-6 10-6s6 2 8 4c-2 1-4 0-6 0s-4 3-6 4-4 0-6-2z" fill="#C9A962" />
      <path d="M14 8c1-2 3-3 5-2" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function RedSealIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#8B1A1A" opacity="0.85" />
      <text x="12" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="serif">印</text>
    </svg>
  );
}
