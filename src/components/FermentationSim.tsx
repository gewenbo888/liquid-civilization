"use client";

import { useState } from "react";
import { useLang } from "./lang";

type Mode = {
  key: string;
  label: { en: string; zh: string };
  microbe: { en: string; zh: string };
  inputs: { en: string; zh: string };
  outputs: { en: string; zh: string };
  desc: { en: string; zh: string };
  color: string;
};

const MODES: Mode[] = [
  {
    key: "beer",
    label: { en: "Beer / Wine", zh: "啤酒 / 葡萄酒" },
    microbe: { en: "Saccharomyces yeast", zh: "酿酒酵母" },
    inputs: { en: "sugar (C₆H₁₂O₆)", zh: "糖 (C₆H₁₂O₆)" },
    outputs: { en: "ethanol + CO₂", zh: "乙醇 + 二氧化碳" },
    desc: { en: "Yeast eats sugar without oxygen and excretes alcohol and gas. The same reaction leavens bread — the bubbles stay, the alcohol bakes off.", zh: "酵母在无氧下吃糖，排出酒精与气体。同样的反应也使面包发酵——气泡留下，酒精在烘烤中挥发。" },
    color: "#d99a4e",
  },
  {
    key: "yogurt",
    label: { en: "Yogurt / Kefir", zh: "酸奶 / 开菲尔" },
    microbe: { en: "Lactic acid bacteria", zh: "乳酸菌" },
    inputs: { en: "lactose (milk sugar)", zh: "乳糖（乳中之糖）" },
    outputs: { en: "lactic acid", zh: "乳酸" },
    desc: { en: "Bacteria sour and thicken milk, preserving it and pre-digesting lactose — which is how dairy nourished lactose-intolerant adults for millennia.", zh: "细菌使奶变酸、变稠，将其保存并预先分解乳糖——这正是数千年来乳制品得以滋养乳糖不耐成年人的原因。" },
    color: "#8fd4e0",
  },
  {
    key: "kombucha",
    label: { en: "Kombucha / Vinegar", zh: "康普茶 / 醋" },
    microbe: { en: "SCOBY (yeast + acetic bacteria)", zh: "红茶菌（酵母 + 醋酸菌）" },
    inputs: { en: "sweet tea", zh: "甜茶" },
    outputs: { en: "acids + fizz + trace alcohol", zh: "酸 + 气泡 + 微量酒精" },
    desc: { en: "A two-stage symbiosis: yeast makes alcohol, then bacteria turn it to acid. The result is tart, lightly sparkling, and barely intoxicating.", zh: "两阶段的共生：酵母先产酒精，细菌再将其转化为酸。成品微酸、轻微起泡，几乎不致醉。" },
    color: "#6fae8e",
  },
];

export default function FermentationSim() {
  const { lang } = useLang();
  const [mode, setMode] = useState(0);
  const m = MODES[mode];

  return (
    <div className="rounded-xl border border-foam-100/10 bg-roast-900/60 p-5 md:p-7">
      <div className="mb-6 flex flex-wrap gap-2">
        {MODES.map((md, i) => (
          <button
            key={md.key}
            onClick={() => setMode(i)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${
              i === mode ? "border-transparent text-roast-900" : "border-foam-100/20 text-foam-300 hover:text-foam-50"
            }`}
            style={i === mode ? { background: md.color } : undefined}
          >
            {md.label[lang]}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 720 300" className="block w-full">
        <defs>
          <linearGradient id="vessel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={m.color} stopOpacity="0.05" />
            <stop offset="100%" stopColor={m.color} stopOpacity="0.32" />
          </linearGradient>
        </defs>

        {/* input sugars (left) */}
        <text x="90" y="40" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#9a8e76">
          {(lang === "zh" ? "投入：" : "IN: ") + m.inputs[lang]}
        </text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle cx={60 + (i % 2) * 36} cy={90 + Math.floor(i / 2) * 40} r="12" fill="none" stroke="#f2cf96" strokeWidth="1.4" />
            <circle cx={60 + (i % 2) * 36} cy={90 + Math.floor(i / 2) * 40} r="4" fill="#f2cf96" opacity="0.6" />
          </g>
        ))}

        {/* fermentation vessel (center) */}
        <path d="M 250 60 L 470 60 L 450 250 L 270 250 Z" fill="url(#vessel)" stroke={m.color} strokeWidth="1.5" />
        <text x="360" y="48" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill={m.color}>
          {m.microbe[lang]}
        </text>
        {/* microbes */}
        {[
          [320, 160], [360, 200], [400, 150], [340, 110], [390, 215], [300, 200],
        ].map(([x, y], i) => (
          <ellipse key={i} cx={x} cy={y} rx="9" ry="6" fill={m.color} opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
          </ellipse>
        ))}
        {/* rising CO2 bubbles */}
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={290 + i * 35} cy="240" r={3 + (i % 3)} fill="#f2ead9" opacity="0.6">
            <animate attributeName="cy" values="240;70" dur={`${2.2 + i * 0.4}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.7;0" dur={`${2.2 + i * 0.4}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* arrow */}
        <line x1="480" y1="150" x2="560" y2="150" stroke={m.color} strokeWidth="2" strokeDasharray="4 4" className="flow" />
        <polygon points="560,144 574,150 560,156" fill={m.color} />

        {/* outputs (right) */}
        <text x="640" y="40" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#9a8e76">
          {(lang === "zh" ? "产出：" : "OUT: ") + m.outputs[lang]}
        </text>
        <rect x="588" y="70" width="104" height="160" rx="6" fill="url(#vessel)" stroke={m.color} strokeWidth="1.4" />
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={610 + (i % 3) * 30} cy={120 + Math.floor(i / 3) * 50} r="6" fill={m.color} opacity="0.7" />
        ))}
      </svg>

      <div key={lang} className="lang-fade mt-4 border-t border-foam-100/10 pt-4">
        <span className="font-mono text-sm" style={{ color: m.color }}>{m.label[lang]}</span>
        <p className={`mt-1 text-sm leading-relaxed text-foam-300 ${lang === "zh" ? "zh" : ""}`}>{m.desc[lang]}</p>
      </div>
    </div>
  );
}
