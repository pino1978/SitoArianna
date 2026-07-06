export default function BrushCircle({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <title>Cerchio brush decorativo</title>
      <circle
        cx="110"
        cy="110"
        r="100"
        fill="none"
        stroke="#C9A962"
        strokeWidth="1.5"
        strokeDasharray="8 6 12 4 6 8"
        opacity="0.25"
      />
      <circle
        cx="110"
        cy="110"
        r="95"
        fill="none"
        stroke="#C9A962"
        strokeWidth="0.5"
        opacity="0.15"
      />
    </svg>
  );
}
