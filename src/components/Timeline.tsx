"use client";

import { TIMELINE } from "./content";
import { useLang } from "./lang";

export default function Timeline() {
  const { lang } = useLang();
  return (
    <div className="relative">
      <div className="absolute left-[96px] top-1 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-amber-500 via-teaj-500 to-wine-500 opacity-50 md:left-[120px]" />
      <div className="space-y-7">
        {TIMELINE.map((e, i) => (
          <div key={i} className="grid grid-cols-[88px_24px_1fr] items-start gap-3 md:grid-cols-[112px_24px_1fr] md:gap-4">
            <div className="text-right font-mono text-xs text-amber-400">
              <span key={lang} className={`lang-fade ${lang === "zh" ? "zh" : ""}`}>{e.year[lang]}</span>
            </div>
            <div className="relative mt-1.5 h-3 w-3">
              <div className="absolute inset-0 rounded-full bg-amber-500 pulse" />
              <div className="absolute inset-[3px] rounded-full bg-foam-100" />
            </div>
            <div key={lang} className="lang-fade">
              <div className={`display text-lg text-foam-50 ${lang === "zh" ? "zh" : ""}`}>{e.title[lang]}</div>
              <div className={`mt-0.5 text-sm leading-relaxed text-foam-300 ${lang === "zh" ? "zh" : ""}`}>{e.note[lang]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
