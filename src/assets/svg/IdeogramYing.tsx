export default function IdeogramYing({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <title>Ideogramma Ying — Aquila</title>
      <g fill="none" stroke="#C9A962" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* Top radical — 广 (wide/cliff) */}
        <path d="M40 35 Q80 30 120 32 Q140 33 155 35" strokeWidth="3" />
        <path d="M38 32 Q35 50 32 70" strokeWidth="3" />
        <path d="M55 48 Q90 45 130 47" strokeWidth="2.5" />
        
        {/* Main body — stylized eagle form */}
        <path d="M70 55 Q85 52 100 55 Q115 58 125 65" strokeWidth="3" />
        
        {/* Left wing stroke */}
        <path d="M65 70 Q55 90 48 115 Q45 130 50 140" strokeWidth="3.5" />
        
        {/* Right wing stroke */}
        <path d="M115 68 Q125 85 132 110 Q135 125 130 138" strokeWidth="3.5" />
        
        {/* Central body vertical */}
        <path d="M85 75 Q82 100 80 130 Q79 150 85 165" strokeWidth="3" />
        
        {/* Tail feathers */}
        <path d="M70 160 Q85 175 100 170 Q115 165 125 155" strokeWidth="3" />
        <path d="M75 168 Q85 185 95 180" strokeWidth="2.5" />
        <path d="M95 172 Q105 182 115 175" strokeWidth="2.5" />
        
        {/* Head detail */}
        <path d="M95 58 Q100 50 108 52 Q112 55 110 62" strokeWidth="2.5" />
        
        {/* Eye */}
        <path d="M102 56 Q105 54 108 57" strokeWidth="2" />
        
        {/* Beak hint */}
        <path d="M110 58 Q118 55 122 58" strokeWidth="2" />
        
        {/* Wing texture lines */}
        <path d="M58 85 Q70 88 80 85" strokeWidth="1.5" opacity="0.6" />
        <path d="M55 100 Q68 103 78 100" strokeWidth="1.5" opacity="0.6" />
        <path d="M52 115 Q65 118 75 115" strokeWidth="1.5" opacity="0.6" />
        <path d="M122 82 Q115 85 108 82" strokeWidth="1.5" opacity="0.6" />
        <path d="M128 98 Q120 101 112 98" strokeWidth="1.5" opacity="0.6" />
        <path d="M130 115 Q122 118 115 115" strokeWidth="1.5" opacity="0.6" />
        
        {/* Lower body detail */}
        <path d="M88 130 Q95 132 102 128" strokeWidth="2" opacity="0.7" />
        <path d="M90 145 Q98 147 105 143" strokeWidth="2" opacity="0.7" />
        
        {/* Claw/legs */}
        <path d="M82 165 Q78 180 75 195" strokeWidth="2.5" />
        <path d="M98 168 Q100 182 102 195" strokeWidth="2.5" />
        <path d="M72 192 Q68 200 70 205" strokeWidth="2" />
        <path d="M78 194 Q82 202 80 207" strokeWidth="2" />
        <path d="M98 198 Q94 205 96 210" strokeWidth="2" />
        <path d="M104 196 Q108 204 106 208" strokeWidth="2" />
      </g>
    </svg>
  );
}
