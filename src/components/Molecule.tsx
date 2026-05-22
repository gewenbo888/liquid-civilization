"use client";

/**
 * Glowing skeletal structure renderer. Each alkaloid maps to a core scaffold
 * (xanthine, pyridine, tropane, quinoline, morphinan, phenethylamine, indole),
 * drawn from geometry-accurate ring systems. Heteroatoms (N, O) are labelled so
 * the diagram reads as real chemistry; the full molecular formula is shown alongside.
 */

type Atom = { x: number; y: number; el?: "N" | "O" }; // undefined = carbon vertex
type Bond = [number, number, number]; // i, j, order
type Scaffold = { atoms: Atom[]; bonds: Bond[]; w: number; h: number };

const S = 0.8660254; // sin60

// pointy-top hexagon vertices, shared right edge = (a30, a330)
function hex(cx: number, cy: number, r: number): Atom[] {
  return [
    { x: cx + S * r, y: cy - 0.5 * r }, // 30  (0) top-right
    { x: cx, y: cy - r }, // 90 (1) top
    { x: cx - S * r, y: cy - 0.5 * r }, // 150 (2) top-left
    { x: cx - S * r, y: cy + 0.5 * r }, // 210 (3) bottom-left
    { x: cx, y: cy + r }, // 270 (4) bottom
    { x: cx + S * r, y: cy + 0.5 * r }, // 330 (5) bottom-right
  ];
}
const ring6: Bond[] = [
  [0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 0, 1],
];

function build(): Record<string, Scaffold> {
  const r = 26;
  const out: Record<string, Scaffold> = {};

  // ---- benzene-like single ring (phenethylamine) ----
  {
    const a = hex(70, 90, r);
    // ethylamine tail off vertex 5 (bottom-right)
    const c1 = { x: a[5].x + 24, y: a[5].y + 14 };
    const c2 = { x: c1.x + 24, y: c1.y - 14 };
    const n = { x: c2.x + 22, y: c2.y + 14, el: "N" as const };
    const atoms = [...a, c1, c2, n];
    const bonds: Bond[] = [
      [0, 1, 2], [1, 2, 1], [2, 3, 2], [3, 4, 1], [4, 5, 2], [5, 0, 1],
      [5, 6, 1], [6, 7, 1], [7, 8, 1],
    ];
    out.phenethylamine = { atoms, bonds, w: 200, h: 180 };
  }

  // ---- pyridine ring + pyrrolidine (nicotine) ----
  {
    const a = hex(64, 90, r); // pyridine, N at vertex 2
    a[2].el = "N";
    // 5-membered pyrrolidine attached at vertex 0 (top-right)
    const base = a[0];
    const p1 = { x: base.x + 26, y: base.y - 8 };
    const pN = { x: p1.x + 24, y: p1.y + 12, el: "N" as const };
    const p3 = { x: pN.x - 6, y: pN.y + 28 };
    const p4 = { x: base.x + 30, y: base.y + 26 };
    const atoms = [...a, p1, pN, p3, p4];
    const bonds: Bond[] = [
      [0, 1, 2], [1, 2, 1], [2, 3, 2], [3, 4, 1], [4, 5, 2], [5, 0, 1],
      [0, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [9, 6, 1],
    ];
    out.pyridine = { atoms, bonds, w: 200, h: 180 };
  }

  // ---- xanthine / purine (caffeine): fused 6+5 ----
  {
    const a = hex(64, 90, r); // pyrimidinedione 6-ring
    // N at 1 and 3 positions
    a[1].el = "N";
    a[3].el = "N";
    // carbonyls off vertices 2 and 4
    const o1 = { x: a[2].x - 22, y: a[2].y, el: "O" as const };
    const o2 = { x: a[4].x, y: a[4].y + 22, el: "O" as const };
    // fuse imidazole on right edge (a0,a5)
    const m1 = { x: a[0].x + 24, y: a[0].y - 4, el: "N" as const };
    const m2 = { x: m1.x + 20, y: m1.y + 22 };
    const m3 = { x: a[5].x + 24, y: a[5].y + 4, el: "N" as const };
    const atoms = [...a, o1, o2, m1, m2, m3];
    const bonds: Bond[] = [
      [0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 0, 2],
      [2, 6, 2], [4, 7, 2],
      [0, 8, 1], [8, 9, 2], [9, 10, 1], [10, 5, 1],
    ];
    out.xanthine = { atoms, bonds, w: 210, h: 180 };
  }

  // ---- tropane: 6-ring + 2-atom N bridge ----
  {
    const a = hex(80, 100, r);
    const bridgeL = a[2]; // top-left
    const bridgeR = a[0]; // top-right
    const nb = { x: (bridgeL.x + bridgeR.x) / 2, y: bridgeL.y - 30, el: "N" as const };
    const atoms = [...a, nb];
    const bonds: Bond[] = [...ring6, [2, 6, 1], [0, 6, 1]];
    out.tropane = { atoms, bonds, w: 200, h: 170 };
  }

  // ---- quinoline: two fused hexagons, one N ----
  {
    const a = hex(60, 90, r);
    const b = hex(60 + 2 * S * r, 90, r);
    a[0].el = undefined;
    b[2].el = "N"; // N in second ring
    // dedupe shared vertices: a0==b2 region; we keep both rings, share via bond geometry
    const atoms = [...a, b[0], b[1], b[5], b[4], b[3]]; // add b's non-shared (b2,b? )
    // simpler: treat as two rings sharing edge a0-a5 ≈ b2-b3
    // We'll just draw both hexes fully (slight overlap acceptable visually)
    const atoms2 = [...a, ...b];
    b[2].el = "N";
    const bonds: Bond[] = [
      ...ring6,
      [6, 7, 1], [7, 8, 1], [8, 9, 1], [9, 10, 1], [10, 11, 1], [11, 6, 1],
    ];
    out.quinoline = { atoms: atoms2, bonds, w: 230, h: 170 };
  }

  // ---- morphinan: three fused hexagons + bridge N (approx) ----
  {
    const a = hex(58, 96, r * 0.92);
    const b = hex(58 + 2 * S * r * 0.92, 96, r * 0.92);
    const c = hex(58 + S * r * 0.92, 96 - 1.5 * r * 0.92, r * 0.92);
    const nb = { x: b[0].x + 22, y: b[0].y + 18, el: "N" as const };
    const atoms = [...a, ...b, ...c, nb];
    const bonds: Bond[] = [
      ...ring6, // a 0-5
      [6, 7, 1], [7, 8, 1], [8, 9, 1], [9, 10, 1], [10, 11, 1], [11, 6, 1], // b 6-11
      [12, 13, 1], [13, 14, 1], [14, 15, 1], [15, 16, 1], [16, 17, 1], [17, 12, 1], // c 12-17
      [11, 18, 1], [18, 6, 1],
    ];
    out.morphinan = { atoms, bonds, w: 240, h: 200 };
  }

  // ---- indole: fused hexagon + pentagon, N in 5-ring (tryptamine too) ----
  {
    const a = hex(64, 96, r);
    // pentagon fused on right edge (a0 top-right, a5 bottom-right)
    const p1 = { x: a[0].x + 24, y: a[0].y - 2 };
    const pN = { x: p1.x + 18, y: p1.y + 24, el: "N" as const };
    const p3 = { x: a[5].x + 24, y: a[5].y + 2 };
    const atoms = [...a, p1, pN, p3];
    const bonds: Bond[] = [
      [0, 1, 2], [1, 2, 1], [2, 3, 2], [3, 4, 1], [4, 5, 2], [5, 0, 1],
      [0, 6, 1], [6, 7, 2], [7, 8, 1], [8, 5, 1],
    ];
    out.indole = { atoms, bonds, w: 210, h: 180 };
    out.tryptamine = out.indole;
  }

  // ---- ethanol: C-C-OH (the molecule of every alcohol) ----
  {
    const c1 = { x: 50, y: 110 };
    const c2 = { x: 96, y: 84 };
    const o = { x: 142, y: 110, el: "O" as const };
    const atoms = [c1, c2, o];
    const bonds: Bond[] = [[0, 1, 1], [1, 2, 1]];
    out.ethanol = { atoms, bonds, w: 200, h: 180 };
  }

  // ---- sucrose / sugar: two linked rings (glucose + fructose, simplified) ----
  {
    const a = hex(56, 96, 24);
    a[1].el = "O";
    const b = hex(56 + 2 * S * 24 + 14, 96, 21);
    b[2].el = "O";
    const ob = { x: (a[0].x + b[3].x) / 2, y: a[0].y - 18, el: "O" as const };
    const atoms = [...a, ...b, ob];
    const bonds: Bond[] = [
      ...ring6,
      [6, 7, 1], [7, 8, 1], [8, 9, 1], [9, 10, 1], [10, 11, 1], [11, 6, 1],
      [0, 12, 1], [12, 9, 1],
    ];
    out.sucrose = { atoms, bonds, w: 230, h: 180 };
  }

  // ---- acetic acid: CH3-COOH (the sour of ferments) ----
  {
    const c1 = { x: 52, y: 100 };
    const c2 = { x: 98, y: 100 };
    const o1 = { x: 122, y: 74, el: "O" as const };
    const o2 = { x: 122, y: 126, el: "O" as const };
    const atoms = [c1, c2, o1, o2];
    const bonds: Bond[] = [[0, 1, 1], [1, 2, 2], [1, 3, 1]];
    out.acetic = { atoms, bonds, w: 190, h: 180 };
  }

  return out;
}

const SCAFFOLDS = build();

export default function Molecule({
  scaffold,
  size = 150,
  accent = "#6ee7a8",
}: {
  scaffold: string;
  size?: number;
  accent?: string;
}) {
  const s = SCAFFOLDS[scaffold] ?? SCAFFOLDS.phenethylamine;
  return (
    <svg viewBox={`0 0 ${s.w} ${s.h}`} width={size} height={(size * s.h) / s.w} className="block">
      <defs>
        <filter id={`glow-${scaffold}`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* bonds */}
      <g stroke={accent} strokeWidth="2" filter={`url(#glow-${scaffold})`} strokeLinecap="round">
        {s.bonds.map(([i, j, order], k) => {
          const a = s.atoms[i];
          const b = s.atoms[j];
          if (order === 2) {
            // draw double bond as two parallel lines
            const dx = b.x - a.x, dy = b.y - a.y;
            const len = Math.hypot(dx, dy) || 1;
            const ox = (-dy / len) * 2.6, oy = (dx / len) * 2.6;
            return (
              <g key={k}>
                <line x1={a.x + ox} y1={a.y + oy} x2={b.x + ox} y2={b.y + oy} />
                <line x1={a.x - ox} y1={a.y - oy} x2={b.x - ox} y2={b.y - oy} opacity="0.7" />
              </g>
            );
          }
          return <line key={k} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />;
        })}
      </g>
      {/* heteroatom labels */}
      {s.atoms.map((a, i) =>
        a.el ? (
          <g key={i}>
            <circle cx={a.x} cy={a.y} r="8.5" fill="#050b08" stroke={accent} strokeWidth="1.2" />
            <text
              x={a.x}
              y={a.y + 3.5}
              textAnchor="middle"
              fontFamily="JetBrains Mono"
              fontSize="9"
              fontWeight="700"
              fill={a.el === "O" ? "#fb7faf" : "#9af3c4"}
            >
              {a.el}
            </text>
          </g>
        ) : null
      )}
    </svg>
  );
}
