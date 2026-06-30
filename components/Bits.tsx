// Small shared presentational bits.

export function Stars({ value = 5 }: { value?: number }) {
  return (
    <span className="stars" aria-label={`${value} z 5 gwiazdek`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < value ? "on" : ""} aria-hidden="true">★</span>
      ))}
    </span>
  );
}

// Woven serape stripe - a thin band of color used to separate sections.
export function Serape() {
  return <div className="serape" role="presentation" />;
}

export function Tag({ children }: { children: string }) {
  const map: Record<string, string> = { ostre: "tag--hot", wege: "tag--veg", nowość: "tag--new" };
  return <span className={`tag ${map[children] ?? ""}`}>{children}</span>;
}
