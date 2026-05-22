"use client";

import { ReactNode } from "react";
import { LangProvider, LangToggle, T, useLang } from "./lang";
import { SECTIONS } from "./content";
import LiquidCanvas from "./LiquidCanvas";
import WorldMap from "./WorldMap";
import Timeline from "./Timeline";
import FermentationSim from "./FermentationSim";
import NeuroCompare from "./NeuroCompare";
import BeverageGallery from "./BeverageGallery";
import InfluenceModel from "./InfluenceModel";

const VIS: Record<string, ReactNode> = {
  map: <WorldMap />,
  timeline: <Timeline />,
  fermentation: <FermentationSim />,
  neuro: <NeuroCompare />,
};

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-foam-100/10 bg-roast-950/80 px-5 py-3 backdrop-blur md:px-9">
      <div className="flex items-center gap-3">
        <div className="grid h-8 w-8 place-items-center rounded-md border border-amber-500/30 bg-roast-800">
          <span className="display text-amber-400">L</span>
        </div>
        <div className="leading-tight">
          <div className="display text-base text-foam-50">Liquid Civilization</div>
          <div className="zh text-[0.6rem] text-foam-500">液体文明</div>
        </div>
      </div>
      <nav className="hidden gap-5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-foam-500 lg:flex">
        <a href="#map" className="hover:text-amber-400">Map</a>
        <a href="#fermentation" className="hover:text-amber-400">Ferment</a>
        <a href="#neuro" className="hover:text-amber-400">Body</a>
        <a href="#tea" className="hover:text-amber-400">Tea</a>
        <a href="#alcohol" className="hover:text-amber-400">Alcohol</a>
        <a href="#model" className="hover:text-amber-400">Model</a>
      </nav>
      <div className="flex items-center gap-3">
        <LangToggle />
        <a href="https://psyverse.fun" className="hidden font-mono text-[0.6rem] uppercase tracking-[0.18em] text-glass-400 hover:text-amber-400 sm:block">← Psyverse</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0 opacity-90">
        <LiquidCanvas />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-roast-950/30 via-transparent to-roast-950" />
      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 md:px-12">
        <div className="label-mono">Psyverse · Liquid civilisation atlas</div>
        <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-foam-500">
          EN · 中文 · history × chemistry × culture × biology × economy × psychology
        </div>
        <h1 className="display mt-6 text-6xl leading-[0.95] text-foam-50 md:text-8xl">
          Liquid <span className="warm-text">Civilization</span>
        </h1>
        <h2 className="zh mt-3 text-3xl text-foam-200 md:text-5xl">液体文明</h2>

        <p className="mt-9 max-w-2xl font-serif text-lg leading-relaxed text-foam-100 md:text-xl">
          <T v={{
            en: "Tea, coffee, beer, wine, soda, the energy can in your hand — civilisation can be read through what people drink. Beverages are chemistry, ritual, medicine, economy, and identity, taken daily, at planetary scale.",
            zh: "茶、咖啡、啤酒、葡萄酒、汽水，乃至你手中的能量罐——文明，可以透过人们喝什么来阅读。饮品是化学、是仪式、是医药、是经济、是身份——日复一日，以行星的规模被饮下。",
          }} />
        </p>

        <div className="mt-10 max-w-2xl glass rounded-lg p-6">
          <div className="label-mono">Central thesis · 核心论点</div>
          <p className="mt-3 font-serif text-xl leading-relaxed text-foam-50 md:text-2xl">
            <T v={{
              en: "The history of beverages is the history of chemistry flowing through civilisation itself.",
              zh: "饮品的历史，就是化学流经文明本身的历史。",
            }} />
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foam-500">
          <span>10 systems · 十大系统</span>
          <span>10 beverages · 十种饮品</span>
          <span>fermentation · trade · neurochemistry · identity</span>
        </div>
      </div>
    </section>
  );
}

function SectionBlock({ num, id, title, sub, body, vis }: { num: string; id: string; title: any; sub: any; body: any; vis?: ReactNode; }) {
  return (
    <section id={id} className="relative border-t border-foam-100/8 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline gap-4">
          <span className="display text-5xl text-amber-500/30">{num}</span>
          <div>
            <h2 className="display text-4xl text-foam-50 md:text-5xl"><T v={title} /></h2>
            <h3 className="mt-1 text-lg text-glass-400"><T v={sub} /></h3>
          </div>
        </div>
        <div className="mt-5 h-px rule-warm opacity-50" />
        <p className="mt-8 max-w-3xl font-serif text-lg leading-relaxed text-foam-200"><T v={body} /></p>
        {vis && <div className="mt-12">{vis}</div>}
      </div>
    </section>
  );
}

function ConceptPanels({ id }: { id: string }) {
  const { lang } = useLang();
  const SETS: Record<string, { t: [string, string]; d: [string, string] }[]> = {
    tea: [
      { t: ["Chinese tea 中国茶", "中国茶"], d: ["From medicine to art: the scholar's brew, the steamed leaf, the gongfu pour.", "从药到艺：文人的茶、蒸青的叶、工夫的冲泡。"] },
      { t: ["Japanese chadō 茶道", "日本茶道"], d: ["Zen distilled into a choreography of bowl, whisk, and silence.", "禅，凝练为茶碗、茶筅与静默的编排。"] },
      { t: ["British empire", "大英帝国"], d: ["Afternoon tea, the East India Company, and a tax that helped spark the Opium Wars.", "下午茶、东印度公司，以及一项间接点燃鸦片战争的税。"] },
      { t: ["Tea aesthetics", "茶之美学"], d: ["Wabi-sabi, terroir, the slow ceremony as a counterculture to speed.", "侘寂、风土，缓慢的仪式，是对快节奏的一种反文化。"] },
    ],
    coffee: [
      { t: ["Ottoman café", "奥斯曼咖啡馆"], d: ["The first public houses of discourse — and the first to be censored for it.", "最早的公共言谈之所——也最早因此遭到审查。"] },
      { t: ["Penny university", "便士大学"], d: ["A coin bought a coffee and a seat in the Enlightenment's open seminar.", "一枚硬币，买来一杯咖啡，和启蒙运动公开研讨会上的一个座位。"] },
      { t: ["Capitalism's fuel", "资本主义的燃料"], d: ["Sober, alert workers replaced the beer-soaked medieval workday.", "清醒、警觉的工人，取代了中世纪泡在啤酒里的工作日。"] },
      { t: ["Startup café", "创业咖啡馆"], d: ["The laptop, the flat white, the third place between home and office.", "笔记本、馥芮白，介于家与办公室之间的「第三空间」。"] },
    ],
    alcohol: [
      { t: ["Beer democracy", "啤酒的平民性"], d: ["Cheap, caloric, communal — the drink of the tavern and the guild.", "廉价、富含热量、共享——酒馆与行会的饮品。"] },
      { t: ["Wine hierarchy", "葡萄酒的等级"], d: ["Vintage, region, and price as a finely graded social signal.", "年份、产区与价格，化为精细分级的社会信号。"] },
      { t: ["Ritual intoxication", "仪式性的醉"], d: ["Toasts, libations, and rites of passage built around shared loss of control.", "祝酒、奠酒与成人礼，皆建于共享的「失控」之上。"] },
      { t: ["Nightlife systems", "夜生活系统"], d: ["The bar and club as engineered spaces for bonding — and for harm.", "酒吧与夜店，是为联结、也为伤害而设计的空间。"] },
    ],
    sugar: [
      { t: ["Plantation economy", "种植园经济"], d: ["Sweetness extracted at the cost of the colonial sugar-and-slavery complex.", "甜味的提取，以殖民「糖与奴隶」复合体为代价。"] },
      { t: ["The bottle", "瓶装"], d: ["Carbonation + refrigeration + branding = a frictionless dose of pleasure.", "碳酸化 + 冷藏 + 品牌 = 一份毫无阻力的愉悦剂量。"] },
      { t: ["Coca-Cola planet", "可口可乐星球"], d: ["One syrup became a symbol of modernity in nearly every country on Earth.", "一种糖浆，几乎在地球上每个国家都成了现代性的象征。"] },
      { t: ["Ultra-processed", "超加工"], d: ["Engineered hyper-palatability and a global metabolic-health reckoning.", "被设计出的超适口性，与一场全球代谢健康的清算。"] },
    ],
    future: [
      { t: ["Nootropic blends", "益智配方"], d: ["Drinks formulated for a target cognitive state, not just a flavour.", "为目标认知状态而非仅为风味配制的饮品。"] },
      { t: ["Precision fermentation", "精准发酵"], d: ["Microbes engineered to brew proteins, fats and flavours to spec.", "被改造的微生物，按规格酿造蛋白、脂肪与风味。"] },
      { t: ["Personalised nutrition", "个性化营养"], d: ["A beverage tuned to your biomarkers, microbiome and circadian clock.", "一杯按你的生物标志、微生物组与生物钟调校的饮品。"] },
      { t: ["The consent question", "知情同意之问"], d: ["When a drink is designed to change your mood, who sets the target?", "当一杯饮品被设计来改变你的情绪，目标由谁来设定？"] },
    ],
    psychology: [
      { t: ["Wine elitism", "葡萄酒精英感"], d: ["Vocabulary as gatekeeping: tannin, terroir, the performance of taste.", "以词汇设限：单宁、风土，一场关于品味的表演。"] },
      { t: ["Café intellectual", "咖啡馆知识分子"], d: ["The order signals the self — the long black of the serious mind.", "你点的，标示着你——严肃心智的一杯黑咖。"] },
      { t: ["Bubble-tea belonging", "奶茶的归属"], d: ["A sweet, customisable badge of a generation and a city.", "一杯甜的、可定制的徽章，标记一代人与一座城。"] },
      { t: ["The energy can", "能量罐"], d: ["Worn like equipment — the aesthetic of effort and the all-nighter.", "像装备一样被佩戴——「努力」与「通宵」的美学。"] },
    ],
  };
  const set = SETS[id];
  if (!set) return null;
  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {set.map((c, i) => (
        <div key={i} className="glass rounded-xl p-5">
          <div key={lang} className={`display text-xl text-amber-300 lang-fade ${lang === "zh" ? "zh" : ""}`}>{c.t[lang === "zh" ? 1 : 0]}</div>
          <p key={`d-${lang}`} className={`mt-2 text-sm leading-relaxed text-foam-300 lang-fade ${lang === "zh" ? "zh" : ""}`}>{c.d[lang === "zh" ? 1 : 0]}</p>
        </div>
      ))}
    </div>
  );
}

function Body() {
  const { lang } = useLang();
  return (
    <main className="relative bg-roast-950 text-foam-100">
      <Header />
      <Hero />

      <div className="border-y border-foam-100/10 bg-roast-900/60 py-2.5 overflow-hidden">
        <div className="whitespace-nowrap font-mono text-[0.65rem] uppercase tracking-[0.3em] text-glass-400/80">
          {(lang === "zh"
            ? "茶 · 咖啡 · 啤酒 · 葡萄酒 · 蒸馏酒 · 可可 · 发酵乳 · 汽水 · 能量饮料 · 康普茶 · 文明，部分地，是液体的 · "
            : "TEA · COFFEE · BEER · WINE · SPIRITS · CACAO · DAIRY FERMENTS · SODA · ENERGY · KOMBUCHA · CIVILISATION IS PARTLY LIQUID · ").repeat(2)}
        </div>
      </div>

      {/* Section 1 — map */}
      <SectionBlock {...sectionProps("map")} vis={VIS.map} />

      {/* The beverages gallery */}
      <section id="beverages" className="relative border-t border-foam-100/8 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">The drinks · 饮品</div>
          <h2 className="display mt-3 text-4xl text-foam-50 md:text-5xl">
            <T v={{ en: "Ten liquids that built the world", zh: "构筑世界的十种液体" }} />
          </h2>
          <p className="mt-6 max-w-3xl font-serif text-lg leading-relaxed text-foam-200">
            <T v={{
              en: "Each carries a signature molecule, a homeland, a method, and a wake of consequences. Open one to see the chemistry meet the history.",
              zh: "每一种都携带着一个标志性分子、一片故土、一套工艺，以及一道后果的航迹。展开任意一种，看化学如何与历史相遇。",
            }} />
          </p>
          <div className="mt-12"><BeverageGallery /></div>
        </div>
      </section>

      {/* Sections 2–10 */}
      {SECTIONS.filter((s) => s.id !== "map").map((s) => (
        <SectionBlock key={s.id} {...sectionProps(s.id)} vis={VIS[s.id] ?? <ConceptPanels id={s.id} />} />
      ))}

      {/* Meta-model */}
      <section id="model" className="relative border-t border-foam-100/8 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">Meta-model · 元模型</div>
          <h2 className="display mt-3 text-4xl text-foam-50 md:text-5xl">
            <T v={{ en: "The Beverage Civilisation Influence model", zh: "饮品文明影响力模型" }} />
          </h2>
          <p className="mt-6 max-w-3xl font-serif text-lg leading-relaxed text-foam-200">
            <T v={{
              en: "Why did tea and coffee organise whole civilisations while kombucha stayed a niche? Score each drink across seven dimensions and the winners' shapes leap out.",
              zh: "为何茶与咖啡能组织起整个文明，而康普茶始终小众？把每种饮品在七个维度上打分，赢家的形状便跃然而出。",
            }} />
          </p>
          <div className="mt-12"><InfluenceModel /></div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative border-t border-foam-100/8 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="display text-4xl leading-snug text-foam-50 md:text-6xl">
            <T v={{ en: "Human civilisation is partly liquid civilisation.", zh: "人类文明，部分地，是液体文明。" }} />
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg leading-relaxed text-foam-300">
            <T v={{
              en: "Drinks shaped trade routes and labour systems, religion and nightlife, productivity and empire, social bonding and the texture of an ordinary afternoon. To understand what a people drank is to understand much of how they lived.",
              zh: "饮品塑造了贸易路线与劳动制度、宗教与夜生活、生产力与帝国、社交联结，乃至一个寻常下午的质地。理解一个民族喝什么，便理解了他们如何生活的大半。",
            }} />
          </p>
          <div className="mx-auto mt-10 max-w-xl rounded-lg border border-wine-500/25 bg-roast-900/60 p-5">
            <p className="text-xs leading-relaxed text-foam-500">
              <T v={{
                en: "Cultural, historical and scientific resource. Not nutritional or medical advice. Alcohol carries real health and dependence risks; this site neither encourages nor instructs consumption.",
                zh: "文化、历史与科学资料，非营养或医疗建议。酒精伴随真实的健康与依赖风险；本站既不鼓励、也不指导饮用。",
              }} />
            </p>
          </div>
          <div className="mx-auto mt-12 h-px w-40 rule-warm" />
          <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-glass-400/70">
            Liquid Civilization · 液体文明 · Psyverse · 2026
          </p>
        </div>
      </section>

      <footer className="border-t border-foam-100/10 bg-roast-950 px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="display text-xl text-foam-50">Liquid Civilization</div>
            <div className="zh mt-1 text-sm text-foam-300">液体文明</div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foam-500">
              <T v={{ en: "The global history, chemistry, culture, biology, economy and psychology of beverages.", zh: "饮品的全球历史、化学、文化、生物学、经济与心理。" }} />
            </p>
          </div>
          <div>
            <div className="label-mono">Systems · 系统</div>
            <ul className="mt-4 space-y-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-foam-500">
              {SECTIONS.slice(0, 6).map((s) => (
                <li key={s.id}><a href={`#${s.id}`} className="hover:text-amber-400">{s.num} · <T v={s.title} /></a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="label-mono">Companion archives</div>
            <ul className="mt-4 space-y-1.5 text-sm text-foam-300">
              <li><a href="https://alkaloid-atlas.psyverse.fun" className="hover:text-amber-300">Alkaloid Atlas · 生物碱图志</a></li>
              <li><a href="https://sauce-civilization.psyverse.fun" className="hover:text-amber-300">Sauce Civilization · 酱文明</a></li>
              <li><a href="https://staples.psyverse.fun" className="hover:text-amber-300">Staple Foods Atlas · 主食图谱</a></li>
              <li className="pt-3"><a href="https://psyverse.fun" className="text-glass-400 hover:text-amber-300">↩ All Psyverse archives</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 h-px max-w-7xl rule-warm" />
        <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between text-[0.58rem] uppercase tracking-[0.3em] text-foam-500">
          <div>© 2026 Gewenbo · Psyverse</div>
          <div>EN · 中文 · educational</div>
        </div>
      </footer>
    </main>
  );
}

function sectionProps(id: string) {
  const s = SECTIONS.find((x) => x.id === id)!;
  return { num: s.num, id: s.id, title: s.title, sub: s.sub, body: s.body };
}

export default function Liquid() {
  return (
    <LangProvider>
      <Body />
    </LangProvider>
  );
}
