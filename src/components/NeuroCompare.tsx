"use client";

import { useLang } from "./lang";

/** Compare what each active compound does across body/mind axes. Heat-grid. */
type Row = {
  c: { en: string; zh: string };
  vals: number[]; // alertness, calm, mood, sleep-disrupt, dependence  (-2..+2 or 0..3)
  color: string;
};

const AXES = [
  { en: "Alertness", zh: "警觉" },
  { en: "Calm focus", zh: "平静专注" },
  { en: "Mood lift", zh: "情绪提升" },
  { en: "Sleep disruption", zh: "睡眠干扰" },
  { en: "Dependence risk", zh: "依赖风险" },
];

const ROWS: Row[] = [
  { c: { en: "Caffeine", zh: "咖啡因" }, vals: [3, 1, 1, 3, 2], color: "#b8742f" },
  { c: { en: "L-theanine", zh: "茶氨酸" }, vals: [1, 3, 1, 0, 0], color: "#6fae8e" },
  { c: { en: "Ethanol", zh: "乙醇" }, vals: [0, 2, 2, 3, 3], color: "#b04059" },
  { c: { en: "Sugar", zh: "糖" }, vals: [2, 0, 2, 1, 2], color: "#cb6177" },
  { c: { en: "Taurine", zh: "牛磺酸" }, vals: [1, 1, 0, 1, 1], color: "#d99a4e" },
  { c: { en: "Cocoa (theobromine)", zh: "可可（可可碱）" }, vals: [1, 1, 2, 1, 1], color: "#b8742f" },
];

export default function NeuroCompare() {
  const { lang } = useLang();
  const shade = (v: number) => Math.min(1, v / 3);

  return (
    <div className="overflow-x-auto rounded-xl border border-foam-100/10 bg-roast-900/60 p-5 md:p-7">
      <table className="w-full min-w-[560px] border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-left label-mono">{lang === "zh" ? "化合物" : "Compound"}</th>
            {AXES.map((a, i) => (
              <th key={i} className="p-2 text-center">
                <span key={lang} className={`label-mono lang-fade ${lang === "zh" ? "zh" : ""}`}>{a[lang]}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r, ri) => (
            <tr key={ri} className="border-t border-foam-100/8">
              <td className="p-2">
                <span key={lang} className={`font-serif text-foam-50 lang-fade ${lang === "zh" ? "zh" : ""}`} style={{ color: r.color }}>
                  {r.c[lang]}
                </span>
              </td>
              {r.vals.map((v, vi) => (
                <td key={vi} className="p-2 text-center">
                  <div
                    className="mx-auto flex h-9 w-9 items-center justify-center rounded-md font-mono text-xs"
                    style={{
                      background: `${r.color}${Math.round(shade(v) * 200 + 12).toString(16).padStart(2, "0")}`,
                      color: v > 1.5 ? "#0c0a08" : "#f2ead9",
                    }}
                  >
                    {v === 0 ? "·" : "▮".repeat(v)}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p key={lang} className={`lang-fade mt-4 text-xs text-foam-500 ${lang === "zh" ? "zh" : ""}`}>
        {lang === "zh"
          ? "相对强度示意（▮ 越多越强），非临床数据。茶之所以「温和」，正因咖啡因与茶氨酸在同一杯中彼此平衡。"
          : "Relative intensity (more ▮ = stronger), illustrative not clinical. Tea reads as 'gentle' precisely because caffeine and theanine balance each other in the same cup."}
      </p>
    </div>
  );
}
