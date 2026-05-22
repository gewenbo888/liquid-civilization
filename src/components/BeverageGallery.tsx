"use client";

import { useState } from "react";
import { BEVERAGES } from "./content";
import { useLang } from "./lang";
import Molecule from "./Molecule";

export default function BeverageGallery() {
  const { lang } = useLang();
  const [open, setOpen] = useState<string | null>(BEVERAGES[0].key);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {BEVERAGES.map((b) => {
        const isOpen = open === b.key;
        return (
          <article
            key={b.key}
            className="glass overflow-hidden rounded-xl transition-all"
            style={{ borderColor: isOpen ? `${b.accent}55` : undefined }}
          >
            <button onClick={() => setOpen(isOpen ? null : b.key)} className="flex w-full items-center gap-4 p-5 text-left">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg" style={{ background: "radial-gradient(circle, rgba(29,23,16,0.9), rgba(12,10,8,1))" }}>
                <Molecule scaffold={b.scaffold} size={74} accent={b.accent} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="display text-2xl" style={{ color: b.accent }}>
                    <span key={lang} className={lang === "zh" ? "zh" : ""}>{b.name[lang]}</span>
                  </h3>
                </div>
                <div key={`c-${lang}`} className={`mt-0.5 text-sm text-foam-300 ${lang === "zh" ? "zh" : ""}`}>{b.compound[lang]}</div>
                <div key={`o-${lang}`} className={`mt-0.5 text-xs text-foam-500 ${lang === "zh" ? "zh" : ""}`}>{b.origin[lang]}</div>
              </div>
              <span className="font-mono text-lg text-foam-500">{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && (
              <div key={lang} className="lang-fade space-y-4 border-t border-foam-100/8 px-5 pb-6 pt-4">
                <div>
                  <div className="label-mono" style={{ color: b.accent }}>{lang === "zh" ? "工艺" : "Process"}</div>
                  <p className={`mt-1 text-sm leading-relaxed text-foam-200 ${lang === "zh" ? "zh" : ""}`}>{b.process[lang]}</p>
                </div>
                <div>
                  <div className="label-mono" style={{ color: b.accent }}>{lang === "zh" ? "对身心的作用" : "On body & mind"}</div>
                  <p className={`mt-1 text-sm leading-relaxed text-foam-300 ${lang === "zh" ? "zh" : ""}`}>{b.neuro[lang]}</p>
                </div>
                <div>
                  <div className="label-mono" style={{ color: b.accent }}>{lang === "zh" ? "文明印记" : "Civilisation"}</div>
                  <p className={`mt-1 text-sm leading-relaxed text-foam-300 ${lang === "zh" ? "zh" : ""}`}>{b.story[lang]}</p>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
