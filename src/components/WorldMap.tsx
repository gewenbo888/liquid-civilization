"use client";

import { useState } from "react";
import { MAP_NODES, ROUTES } from "./content";
import { useLang } from "./lang";

/** Beverage trade map: graticule + origin nodes + trade-route arcs. */
export default function WorldMap() {
  const { lang } = useLang();
  const [hover, setHover] = useState<string | null>(null);
  const byId = Object.fromEntries(MAP_NODES.map((n) => [n.id, n]));

  const arc = (ax: number, ay: number, bx: number, by: number) => {
    const mx = (ax + bx) / 2;
    const my = (ay + by) / 2 - Math.hypot(bx - ax, by - ay) * 0.26;
    return `M ${ax} ${ay} Q ${mx} ${my} ${bx} ${by}`;
  };

  return (
    <div className="overflow-hidden rounded-xl border border-foam-100/10 bg-roast-900/60 p-3 md:p-5">
      <svg viewBox="0 0 900 460" className="block w-full">
        <g stroke="#291f15" strokeWidth="0.6" opacity="0.7">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v${i}`} x1={(i + 1) * 82} y1="0" x2={(i + 1) * 82} y2="460" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={(i + 1) * 66} x2="900" y2={(i + 1) * 66} />
          ))}
        </g>
        <line x1="0" y1="300" x2="900" y2="300" stroke="#d99a4e" strokeWidth="0.8" strokeDasharray="2 6" opacity="0.4" />

        {ROUTES.map((r, i) => {
          const a = byId[r.from], b = byId[r.to];
          if (!a || !b) return null;
          const on = hover === r.from || hover === r.to;
          return (
            <path
              key={i}
              d={arc(a.x, a.y, b.x, b.y)}
              fill="none"
              stroke={r.accent}
              strokeWidth={on ? 2.2 : 1.1}
              opacity={on ? 0.95 : 0.42}
              className="flow"
            />
          );
        })}

        {MAP_NODES.map((n) => {
          const on = hover === n.id;
          return (
            <g key={n.id} onMouseEnter={() => setHover(n.id)} onMouseLeave={() => setHover(null)} style={{ cursor: "pointer" }}>
              <circle cx={n.x} cy={n.y} r={on ? 18 : 11} fill={n.accent} opacity="0.16" />
              <circle cx={n.x} cy={n.y} r={on ? 6 : 4} fill={n.accent}>
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" />
              </circle>
              <text x={n.x} y={n.y - 16} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#f2ead9" opacity={on ? 1 : 0.72}>
                {n.label[lang]}
              </text>
              {on && (
                <text x={n.x} y={n.y + 26} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill={n.accent}>
                  {n.drink[lang]}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 px-1 font-mono text-[0.6rem] text-foam-300">
        {ROUTES.map((r, i) => (
          <span key={i} className="inline-flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: r.accent }} />
            {r.label[lang]}
          </span>
        ))}
      </div>
    </div>
  );
}
