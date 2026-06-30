// Decorative papel picado banner - the cut-paper bunting strung across Mexican fiestas.
// Pure SVG, repeated as a tiling background-image so it stretches any width. ponytail: no images.

const COLORS = ["#DC2626", "#A16207", "#0F766E", "#EC4899", "#2563EB", "#F59E0B"];

function Flag({ color, i }: { color: string; i: number }) {
  return (
    <svg viewBox="0 0 100 120" className="papel-flag" aria-hidden="true" style={{ "--delay": `${(i % 6) * 0.18}s` } as React.CSSProperties}>
      <path d="M0 0 H100 V70 L50 110 L0 70 Z" fill={color} />
      <circle cx="50" cy="34" r="14" fill="rgba(0,0,0,0.18)" />
      <circle cx="28" cy="30" r="6" fill="rgba(0,0,0,0.18)" />
      <circle cx="72" cy="30" r="6" fill="rgba(0,0,0,0.18)" />
      <circle cx="50" cy="68" r="6" fill="rgba(0,0,0,0.18)" />
      <path d="M50 50 l8 12 -8 10 -8 -10 Z" fill="rgba(255,255,255,0.35)" />
    </svg>
  );
}

export default function PapelPicado({ count = 14 }: { count?: number }) {
  return (
    <div className="papel" role="presentation">
      {Array.from({ length: count }, (_, i) => (
        <Flag key={i} color={COLORS[i % COLORS.length]} i={i} />
      ))}
    </div>
  );
}
