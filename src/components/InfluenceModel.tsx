"use client";

import { useState } from "react";
import { BEVERAGES, INFLUENCE_DIMS } from "./content";
import { useLang } from "./lang";

/** Beverage Civilisation Influence — a 7-axis radar. */
export default function InfluenceModel() {
  const { lang } = useLang();
  const [sel, setSel] = useState(BEVERAGES[0].key);
  const b = BEVERAGES.find((x) => x.key === sel)!;
  const dims = INFLUENCE_DIMS;
  const n = dims.length;
  const cx = 200, cy = 200, R = 150;

  const pt = (i: number, val: number) => {
    const ang = (i / n) * Math.PI * 2 - Math.PI / 2;
    const r = (val / 100) * R;
    return [cx + Math.cos(ang) * r, cy + Math.sin(ang) * r];
  };
  const poly = dims.map((d, i) => pt(i, b[d.key] as number).join(",")).join(" ");
  const score = Math.round(dims.reduce((s, d) => s + (b[d.key] as number), 0) / dims.length);

  return (
    <div className="rounded-xl border border-foam-100/10 bg-roast-900/60 p-5 md:p-7">
      <div className="mb-6 flex flex-wrap gap-2">
        {BEVERAGES.map((bev) => (
          <button
            key={bev.key}
            onClick={() => setSel(bev.key)}
            className={`rounded-full border px-3 py-1 font-mono text-[0.7rem] transition ${
              sel === bev.key ? "border-transparent text-roast-900" : "border-foam-100/20 text-foam-300 hover:text-foam-50"
            }`}
            style={sel === bev.key ? { background: bev.accent } : undefined}
          >
            <span className={lang === "zh" ? "zh" : ""}>{bev.name[lang]}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[400px_1fr]">
        <svg viewBox="0 0 400 400" className="block w-full">
          {[0.25, 0.5, 0.75, 1].map((f, i) => (
            <polygon
              key={i}
              points={dims.map((_, j) => {
                const ang = (j / n) * Math.PI * 2 - Math.PI / 2;
                return [cx + Math.cos(ang) * R * f, cy + Math.sin(ang) * R * f].join(",");
              }).join(" ")}
              fill="none" stroke="#291f15" strokeWidth="0.8"
            />
          ))}
          {dims.map((d, i) => {
            const ang = (i / n) * Math.PI * 2 - Math.PI / 2;
            const ex = cx + Math.cos(ang) * R, ey = cy + Math.sin(ang) * R;
            const lx = cx + Math.cos(ang) * (R + 24), ly = cy + Math.sin(ang) * (R + 24);
            return (
              <g key={i}>
                <line x1={cx} y1={cy} x2={ex} y2={ey} stroke="#1d1710" strokeWidth="0.8" />
                <text x={lx} y={ly} textAnchor={Math.abs(Math.cos(ang)) < 0.3 ? "middle" : Math.cos(ang) > 0 ? "start" : "end"} dominantBaseline="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="#9a8e76">
                  <tspan className={lang === "zh" ? "zh" : ""}>{d.label[lang]}</tspan>
                </text>
              </g>
            );
          })}
          <polygon points={poly} fill={b.accent} fillOpacity="0.18" stroke={b.accent} strokeWidth="2" />
          {dims.map((d, i) => {
            const [px, py] = pt(i, b[d.key] as number);
            return <circle key={i} cx={px} cy={py} r="3.5" fill={b.accent} />;
          })}
        </svg>

        <div>
          <div className="label-mono">{lang === "zh" ? "饮品文明影响力" : "Beverage civilisation influence"}</div>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="display text-6xl" style={{ color: b.accent }}>{score}</span>
            <span className="text-foam-500">/ 100</span>
          </div>
          <p className={`mt-3 max-w-md text-sm leading-relaxed text-foam-300 ${lang === "zh" ? "zh" : ""}`}>
            {lang === "zh"
              ? "影响力 = 神经化学效应 + 可扩展性 + 社交仪式价值 + 可保存性 + 贸易经济 + 成瘾潜力 + 文化象征。茶与咖啡靠仪式与贸易取胜；蒸馏酒靠可保存性与成瘾性；汽水靠可扩展性碾压一切。"
              : "Influence = neurochemical effect + scalability + ritual value + preservation + trade economics + addictive potential + cultural symbolism. Tea and coffee win on ritual and trade; spirits on preservation and dependence; soda overwhelms everything on sheer scalability."}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1.5">
            {dims.map((d) => (
              <div key={String(d.key)} className="flex items-center justify-between gap-2 border-b border-foam-100/8 pb-1">
                <span className={`font-mono text-[0.65rem] text-foam-500 ${lang === "zh" ? "zh" : ""}`}>{d.label[lang]}</span>
                <span className="font-mono text-xs" style={{ color: b.accent }}>{b[d.key] as number}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
