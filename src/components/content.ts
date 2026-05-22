import { Bi } from "./lang";

export type Beverage = {
  key: string;
  name: Bi;
  compound: Bi; // signature compound
  scaffold: string; // for Molecule
  origin: Bi;
  process: Bi; // how it's made
  neuro: Bi; // effect on body / mind
  story: Bi; // civilization story
  // 0–100 influence dimensions
  neuroFx: number;
  scale: number;
  ritual: number;
  preserve: number;
  trade: number;
  addict: number;
  symbol: number;
  accent: string;
};

export const BEVERAGES: Beverage[] = [
  {
    key: "tea",
    name: { en: "Tea", zh: "茶" },
    compound: { en: "Caffeine + L-theanine", zh: "咖啡因 + 茶氨酸" },
    scaffold: "xanthine",
    origin: { en: "SW China · Yunnan", zh: "中国西南 · 云南" },
    process: { en: "Leaf oxidation & drying — no fermentation in the microbial sense", zh: "茶叶的氧化与干燥——并非微生物意义上的发酵" },
    neuro: { en: "Caffeine lifts alertness while theanine smooths it into calm focus — stimulation without the jitter.", zh: "咖啡因提升警觉，茶氨酸将其抚平为平静的专注——有提神，而无躁动。" },
    story: { en: "Tea organised East Asian ritual and aesthetics, financed Chinese dynasties, built the British Empire's tax base, and helped trigger the Opium Wars.", zh: "茶组织了东亚的礼仪与美学，供养了中国王朝，撑起了大英帝国的税基，并间接点燃了鸦片战争。" },
    neuroFx: 70, scale: 92, ritual: 95, preserve: 80, trade: 96, addict: 50, symbol: 94, accent: "#6fae8e",
  },
  {
    key: "coffee",
    name: { en: "Coffee", zh: "咖啡" },
    compound: { en: "Caffeine", zh: "咖啡因" },
    scaffold: "xanthine",
    origin: { en: "Ethiopian highlands → Yemen", zh: "埃塞俄比亚高地 → 也门" },
    process: { en: "Roasting & extraction — heat unlocks hundreds of aroma molecules", zh: "烘焙与萃取——热量释放出数百种芳香分子" },
    neuro: { en: "A pure adenosine blocker: it postpones fatigue and sharpens vigilance, the chemical engine of the modern workday.", zh: "纯粹的腺苷阻断剂：它推迟疲劳、强化警觉，是现代工作日的化学引擎。" },
    story: { en: "From Sufi devotional aid to Ottoman coffeehouse to the Enlightenment's 'penny university' — coffee is the drink of capitalism, science, and the city.", zh: "从苏菲派的修行辅助，到奥斯曼咖啡馆，再到启蒙运动的「便士大学」——咖啡是资本主义、科学与城市的饮品。" },
    neuroFx: 82, scale: 95, ritual: 78, preserve: 70, trade: 94, addict: 60, symbol: 84, accent: "#b8742f",
  },
  {
    key: "beer",
    name: { en: "Beer", zh: "啤酒" },
    compound: { en: "Ethanol", zh: "乙醇" },
    scaffold: "ethanol",
    origin: { en: "Mesopotamia · Sumer", zh: "美索不达米亚 · 苏美尔" },
    process: { en: "Yeast ferments grain sugars into alcohol & CO₂", zh: "酵母将谷物糖分发酵为酒精与二氧化碳" },
    neuro: { en: "Ethanol enhances GABA and dampens the cortex — relaxation, lowered inhibition, social ease, and a real dependence risk.", zh: "乙醇增强 GABA、抑制大脑皮层——带来放松、降低戒备、社交从容，也伴随真实的依赖风险。" },
    story: { en: "Some archaeologists argue the wish to brew beer helped settle humans into farming. The first cities ran partly on a safe, caloric, mildly intoxicating liquid.", zh: "一些考古学家认为，酿造啤酒的渴望，曾推动人类定居务农。最早的城市，部分地运转于一种安全、富含热量、微醺的液体之上。" },
    neuroFx: 72, scale: 88, ritual: 80, preserve: 60, trade: 78, addict: 70, symbol: 76, accent: "#d99a4e",
  },
  {
    key: "wine",
    name: { en: "Wine", zh: "葡萄酒" },
    compound: { en: "Ethanol + polyphenols", zh: "乙醇 + 多酚" },
    scaffold: "ethanol",
    origin: { en: "South Caucasus · Georgia", zh: "南高加索 · 格鲁吉亚" },
    process: { en: "Grape sugars fermented; aged in oak or amphora", zh: "葡萄糖分发酵；于橡木桶或陶罐中陈酿" },
    neuro: { en: "The same ethanol as beer, carried in a denser, slower ritual — savouring, terroir, the long meal.", zh: "与啤酒相同的乙醇，却承载于更浓郁、更缓慢的仪式之中——品味、风土、长席。" },
    story: { en: "Wine became Mediterranean status and sacrament — the blood of a god in the Eucharist, the marker of an aristocratic palate.", zh: "葡萄酒成为地中海的身份与圣礼——圣餐中神之血，亦是贵族味觉的标志。" },
    neuroFx: 70, scale: 70, ritual: 90, preserve: 78, trade: 80, addict: 62, symbol: 92, accent: "#b04059",
  },
  {
    key: "spirits",
    name: { en: "Distilled Spirits", zh: "蒸馏酒" },
    compound: { en: "Concentrated ethanol", zh: "浓缩乙醇" },
    scaffold: "ethanol",
    origin: { en: "Medieval distillation · Arab & European", zh: "中世纪蒸馏 · 阿拉伯与欧洲" },
    process: { en: "Distillation concentrates alcohol far beyond fermentation's ceiling", zh: "蒸馏将酒精浓缩到远超发酵上限的程度" },
    neuro: { en: "High-proof ethanol delivers a fast, steep intoxication curve — and a correspondingly steep risk of harm and dependence.", zh: "高度乙醇带来快速而陡峭的醉酒曲线——以及相应陡峭的危害与依赖风险。" },
    story: { en: "Distillation turned drink into durable, shippable cargo: rum financed the slave triangle; vodka funded states; whiskey built frontiers.", zh: "蒸馏把酒变成耐储、可运的货物：朗姆酒供养了奴隶三角贸易，伏特加充实了国库，威士忌开拓了边疆。" },
    neuroFx: 88, scale: 82, ritual: 65, preserve: 95, trade: 88, addict: 85, symbol: 70, accent: "#cb6177",
  },
  {
    key: "cacao",
    name: { en: "Cacao / Chocolate drink", zh: "可可 / 巧克力饮" },
    compound: { en: "Theobromine + caffeine", zh: "可可碱 + 咖啡因" },
    scaffold: "xanthine",
    origin: { en: "Mesoamerica", zh: "中美洲" },
    process: { en: "Fermented, roasted, ground cacao; historically drunk, not eaten", zh: "经发酵、烘焙、研磨的可可；历史上是饮品而非食物" },
    neuro: { en: "A gentler xanthine than caffeine, plus mood-tinting compounds — stimulating, warming, faintly euphoric.", zh: "一种比咖啡因更温和的黄嘌呤，加上影响情绪的化合物——提神、温暖、略带欣快。" },
    story: { en: "Sacred Aztec currency and ritual drink, bitter and spiced; Europe sweetened it into an aristocratic luxury and then an industry.", zh: "阿兹特克神圣的货币与仪式饮品，苦涩而辛香；欧洲将其加糖，化为贵族奢侈品，继而成为产业。" },
    neuroFx: 55, scale: 80, ritual: 70, preserve: 65, trade: 78, addict: 35, symbol: 80, accent: "#b8742f",
  },
  {
    key: "milk",
    name: { en: "Milk & dairy ferments", zh: "乳与发酵乳" },
    compound: { en: "Lactose + probiotics", zh: "乳糖 + 益生菌" },
    scaffold: "sucrose",
    origin: { en: "Neolithic pastoral steppe", zh: "新石器时代的游牧草原" },
    process: { en: "Bacterial fermentation → yogurt, kefir, koumiss; even mild alcohol", zh: "细菌发酵 → 酸奶、开菲尔、马奶酒；甚至含轻度酒精" },
    neuro: { en: "Nutrition more than stimulation — and a rare case where the drink rewrote our genome: lactase persistence coevolved with herding.", zh: "营养重于刺激——也是饮品改写人类基因组的罕见案例：乳糖酶持续性与放牧协同进化。" },
    story: { en: "Fermenting milk let pastoral nomads store calories on the hoof, fuelling the mounted empires of the steppe.", zh: "发酵乳让游牧民把热量「储存在牲畜身上」，为草原上的马背帝国提供了燃料。" },
    neuroFx: 25, scale: 85, ritual: 55, preserve: 70, trade: 60, addict: 10, symbol: 58, accent: "#8fd4e0",
  },
  {
    key: "soda",
    name: { en: "Soda · Coca-Cola", zh: "汽水 · 可口可乐" },
    compound: { en: "Sugar + caffeine + CO₂", zh: "糖 + 咖啡因 + 二氧化碳" },
    scaffold: "sucrose",
    origin: { en: "19th-century United States", zh: "十九世纪美国" },
    process: { en: "Carbonation + industrial sugar syrup + secret flavour", zh: "碳酸化 + 工业糖浆 + 秘密香精" },
    neuro: { en: "Sweetness and caffeine engineered for maximal craveability — the dopamine of cheap, cold, reliable pleasure.", zh: "为最大化「想喝感」而设计的甜与咖啡因——廉价、冰凉、可靠之愉悦的多巴胺。" },
    story: { en: "Sugar's colonial plantations met industrial bottling and global branding; a single syrup became a planetary symbol of modern America.", zh: "糖的殖民种植园，遇上工业灌装与全球品牌；一种糖浆，成为现代美国的行星级象征。" },
    neuroFx: 60, scale: 99, ritual: 40, preserve: 88, trade: 96, addict: 65, symbol: 90, accent: "#cb6177",
  },
  {
    key: "energy",
    name: { en: "Energy drinks", zh: "能量饮料" },
    compound: { en: "Caffeine + taurine + sugar", zh: "咖啡因 + 牛磺酸 + 糖" },
    scaffold: "xanthine",
    origin: { en: "Late-20th-century East Asia → global", zh: "二十世纪末东亚 → 全球" },
    process: { en: "Formulated stack of stimulants, amino acids and sweetener", zh: "由兴奋剂、氨基酸与甜味剂配制的组合" },
    neuro: { en: "A high-intensity stimulant stack tuned for acute alertness; concentrated dose carries cardiovascular caution.", zh: "为急性提神而调配的高强度兴奋剂组合；高浓度剂量需注意心血管风险。" },
    story: { en: "The drink of the always-on economy — the gym, the night shift, the gaming marathon, the hustle as identity.", zh: "永不下线经济的饮品——健身房、夜班、游戏马拉松，以及作为身份的「奋斗」。" },
    neuroFx: 90, scale: 90, ritual: 30, preserve: 85, trade: 82, addict: 70, symbol: 72, accent: "#d99a4e",
  },
  {
    key: "kombucha",
    name: { en: "Kombucha & functional ferments", zh: "康普茶与功能性发酵饮" },
    compound: { en: "Organic acids + probiotics", zh: "有机酸 + 益生菌" },
    scaffold: "acetic",
    origin: { en: "East Asia (debated) → wellness West", zh: "东亚（说法不一）→ 西方养生圈" },
    process: { en: "A SCOBY ferments sweet tea into a tart, lightly fizzy tonic", zh: "「红茶菌」将甜茶发酵为微酸、轻微气泡的饮品" },
    neuro: { en: "Mild, gut-forward, low-stimulant — the flagship of the functional-beverage era selling health as a feeling.", zh: "温和、以肠道为导向、低刺激——功能性饮品时代的旗舰，把「健康」当作一种感受来售卖。" },
    story: { en: "The 21st-century wellness market revived ancient ferments as branded 'functional' drinks promising microbiome and mood.", zh: "21 世纪的养生市场，将古老的发酵饮复兴为有品牌的「功能性」饮品，许诺微生物组与情绪之益。" },
    neuroFx: 30, scale: 70, ritual: 45, preserve: 60, trade: 55, addict: 12, symbol: 66, accent: "#6fae8e",
  },
];

/* ---------- The ten systems ---------- */
export type Section = { num: string; id: string; title: Bi; sub: Bi; body: Bi };

export const SECTIONS: Section[] = [
  {
    num: "01", id: "map",
    title: { en: "The Global Beverage Map", zh: "全球饮品地图" },
    sub: { en: "Where each drink was born, and how it conquered the world", zh: "每一种饮品诞生于何处，又如何征服世界" },
    body: { en: "Every great beverage has a homeland and a wake — a trade route that carried it outward, reorganising agriculture, labour and empire as it spread. Map them together and the planet reads as a single liquid economy.", zh: "每一种伟大的饮品都有一片故土与一道航迹——一条将它向外输送的贸易路线，沿途重组着农业、劳动与帝国。把它们绘于一图，整个星球便读作一套液体经济。" },
  },
  {
    num: "02", id: "timeline",
    title: { en: "The Drink Evolution Timeline", zh: "饮品演化时间线" },
    sub: { en: "From safe water to AI-designed beverages", zh: "从安全的水，到 AI 设计的饮品" },
    body: { en: "Ten thousand years of liquid technology: fermentation made water safe and food storable; tea and coffee organised attention; distillation made alcohol shippable; industry made sweetness infinite. Each step rewired daily behaviour.", zh: "一万年的液体技术：发酵使水变安全、食物可储存；茶与咖啡组织了注意力；蒸馏使酒精可运输；工业使甜味变得无限。每一步，都重新接线了日常行为。" },
  },
  {
    num: "03", id: "fermentation",
    title: { en: "The Fermentation Engine", zh: "发酵引擎" },
    sub: { en: "How microbes became civilisation's partners", zh: "微生物如何成为文明的伙伴" },
    body: { en: "Long before we understood them, yeasts and bacteria were our co-workers — converting sugar to alcohol, milk to yogurt, tea to tonic. Fermentation was humanity's first biotechnology, and it is still running in every cup.", zh: "远在我们理解它们之前，酵母与细菌已是我们的同事——把糖变成酒、把奶变成酸奶、把茶变成饮品。发酵是人类第一项生物技术，至今仍在每一杯中运行。" },
  },
  {
    num: "04", id: "neuro",
    title: { en: "Neurochemistry & the Body", zh: "神经化学与身体" },
    sub: { en: "What a drink does once you swallow it", zh: "饮品入口之后，究竟做了什么" },
    body: { en: "Caffeine blocks fatigue; ethanol loosens inhibition; sugar spikes reward; theanine calms; taurine and cocoa modulate. Every beverage is a small dose of behavioural chemistry, taken daily, at civilisation scale.", zh: "咖啡因阻断疲劳；乙醇松解戒备；糖激增奖赏；茶氨酸安神；牛磺酸与可可加以调节。每一种饮品，都是一小剂行为化学——日复一日，以文明的规模服下。" },
  },
  {
    num: "05", id: "tea",
    title: { en: "The Tea Civilisation", zh: "茶的文明" },
    sub: { en: "A leaf that organised East Asia", zh: "一片组织了东亚的叶子" },
    body: { en: "Chinese tea culture, the Japanese way of tea, the British afternoon — tea is where chemistry became philosophy, aesthetics, diplomacy, and a tax base spanning continents.", zh: "中国茶文化、日本茶道、英式下午茶——茶，是化学化为哲学、美学、外交，以及横跨大陆之税基的地方。" },
  },
  {
    num: "06", id: "coffee",
    title: { en: "The Coffeehouse Civilisation", zh: "咖啡馆的文明" },
    sub: { en: "The drink of capitalism and the city", zh: "资本主义与城市的饮品" },
    body: { en: "The Ottoman coffeehouse, the European salon, the startup café — wherever coffee pooled, ideas, money and revolutions tended to follow. Sobriety became a competitive advantage.", zh: "奥斯曼咖啡馆、欧洲沙龙、创业咖啡店——凡咖啡汇聚之处，思想、资本与革命便往往随之而来。清醒，成了一种竞争优势。" },
  },
  {
    num: "07", id: "alcohol",
    title: { en: "Alcohol & Social Systems", zh: "酒精与社会系统" },
    sub: { en: "Why intoxication binds groups together", zh: "为何醉意能将群体捆在一起" },
    body: { en: "Beer democratised, wine ennobled, spirits intensified. Shared, mild intoxication lowers defences and synchronises a group — which is why nearly every culture built rituals, and harms, around it.", zh: "啤酒平民化，葡萄酒贵族化，烈酒强化。共享的、适度的醉意降低戒备、同步群体——这正是几乎每种文化都围绕它建起仪式、也累积伤害的原因。" },
  },
  {
    num: "08", id: "sugar",
    title: { en: "Sugar & Soft-Drink Empires", zh: "糖与汽水帝国" },
    sub: { en: "How sweetness was industrialised", zh: "甜味如何被工业化" },
    body: { en: "Sugar's plantation economy met carbonation, refrigeration and branding to produce the soft drink — a frictionless dose of cheap pleasure that became one of the most distributed objects on Earth.", zh: "糖的种植园经济，遇上碳酸化、冷藏与品牌，制造出软饮——一份毫无阻力的廉价愉悦剂量，成为地球上分布最广的物品之一。" },
  },
  {
    num: "09", id: "future",
    title: { en: "The Future Drink Lab", zh: "未来饮品实验室" },
    sub: { en: "What civilisation will drink next", zh: "文明接下来将喝什么" },
    body: { en: "Nootropic blends, personalised nutrition, precision-fermented proteins, AI-tuned flavour, functional everything. The next beverages may be designed not for taste alone, but for a target mental state.", zh: "益智配方、个性化营养、精准发酵蛋白、AI 调校的风味、万物功能化。下一代饮品，或许不再只为味道而设计，而是为一种目标心理状态。" },
  },
  {
    num: "10", id: "psychology",
    title: { en: "Drink Psychology & Identity", zh: "饮品心理与身份" },
    sub: { en: "You are what you order", zh: "你点的，就是你" },
    body: { en: "Wine elitism, café intellectualism, bubble-tea belonging, the gym's energy can, the cocktail of a night out — a drink in the hand is a sentence about who you are. Beverages became wearable identity.", zh: "葡萄酒的精英感、咖啡馆的知识分子气、奶茶的归属感、健身房的能量罐、夜场的鸡尾酒——手中的一杯，是一句关于「你是谁」的陈述。饮品，成了可佩戴的身份。" },
  },
];

/* ---------- Trade-map nodes & routes ---------- */
export type MapNode = { id: string; x: number; y: number; label: Bi; drink: Bi; accent: string };
export const MAP_NODES: MapNode[] = [
  { id: "yunnan", x: 745, y: 250, label: { en: "China · Yunnan", zh: "中国 · 云南" }, drink: { en: "tea origin", zh: "茶之源" }, accent: "#6fae8e" },
  { id: "ethiopia", x: 565, y: 300, label: { en: "Ethiopia", zh: "埃塞俄比亚" }, drink: { en: "coffee origin", zh: "咖啡之源" }, accent: "#b8742f" },
  { id: "arabia", x: 580, y: 255, label: { en: "Yemen · Arabia", zh: "也门 · 阿拉伯" }, drink: { en: "coffee trade", zh: "咖啡贸易" }, accent: "#b8742f" },
  { id: "sumer", x: 590, y: 235, label: { en: "Mesopotamia", zh: "美索不达米亚" }, drink: { en: "beer origin", zh: "啤酒之源" }, accent: "#d99a4e" },
  { id: "georgia", x: 600, y: 215, label: { en: "S. Caucasus", zh: "南高加索" }, drink: { en: "wine origin", zh: "葡萄酒之源" }, accent: "#b04059" },
  { id: "mesoamerica", x: 235, y: 270, label: { en: "Mesoamerica", zh: "中美洲" }, drink: { en: "cacao origin", zh: "可可之源" }, accent: "#b8742f" },
  { id: "caribbean", x: 290, y: 280, label: { en: "Caribbean", zh: "加勒比" }, drink: { en: "sugar · rum", zh: "蔗糖 · 朗姆" }, accent: "#cb6177" },
  { id: "britain", x: 545, y: 185, label: { en: "Britain", zh: "英国" }, drink: { en: "tea empire", zh: "茶之帝国" }, accent: "#6fae8e" },
  { id: "usa", x: 255, y: 220, label: { en: "United States", zh: "美国" }, drink: { en: "soda globalisation", zh: "汽水全球化" }, accent: "#cb6177" },
  { id: "steppe", x: 680, y: 205, label: { en: "Eurasian steppe", zh: "欧亚草原" }, drink: { en: "fermented milk", zh: "发酵乳" }, accent: "#8fd4e0" },
];

export type Route = { from: string; to: string; label: Bi; accent: string };
export const ROUTES: Route[] = [
  { from: "yunnan", to: "britain", label: { en: "tea → West", zh: "茶 → 西方" }, accent: "#6fae8e" },
  { from: "ethiopia", to: "arabia", label: { en: "coffee", zh: "咖啡" }, accent: "#b8742f" },
  { from: "arabia", to: "britain", label: { en: "coffee → Europe", zh: "咖啡 → 欧洲" }, accent: "#b8742f" },
  { from: "mesoamerica", to: "britain", label: { en: "cacao → Europe", zh: "可可 → 欧洲" }, accent: "#b8742f" },
  { from: "caribbean", to: "britain", label: { en: "sugar · rum triangle", zh: "蔗糖 · 朗姆三角" }, accent: "#cb6177" },
  { from: "usa", to: "yunnan", label: { en: "soda → world", zh: "汽水 → 世界" }, accent: "#cb6177" },
  { from: "steppe", to: "sumer", label: { en: "dairy ferments", zh: "乳制发酵" }, accent: "#8fd4e0" },
];

export const INFLUENCE_DIMS: { key: keyof Beverage; label: Bi }[] = [
  { key: "neuroFx", label: { en: "Neurochemical effect", zh: "神经化学效应" } },
  { key: "scale", label: { en: "Scalability", zh: "可扩展性" } },
  { key: "ritual", label: { en: "Social ritual value", zh: "社交仪式价值" } },
  { key: "preserve", label: { en: "Preservation", zh: "可保存性" } },
  { key: "trade", label: { en: "Trade economics", zh: "贸易经济" } },
  { key: "addict", label: { en: "Addictive potential", zh: "成瘾潜力" } },
  { key: "symbol", label: { en: "Cultural symbolism", zh: "文化象征" } },
];

/* ---------- Timeline data ---------- */
export type Era = { year: Bi; title: Bi; note: Bi };
export const TIMELINE: Era[] = [
  { year: { en: "~10,000 BCE", zh: "约前 10000" }, title: { en: "Fermented gruels & beer", zh: "发酵粥与啤酒" }, note: { en: "Grain ferments may precede bread; safe calories in liquid form.", zh: "谷物发酵或早于面包；以液态形式提供安全热量。" } },
  { year: { en: "~6000 BCE", zh: "约前 6000" }, title: { en: "Wine in the Caucasus", zh: "高加索的葡萄酒" }, note: { en: "Earliest known grape wine, in clay vessels.", zh: "已知最早的葡萄酒，盛于陶器之中。" } },
  { year: { en: "~2700 BCE", zh: "约前 2700" }, title: { en: "Tea in China", zh: "中国的茶" }, note: { en: "Legendary origins; later codified into ritual and trade.", zh: "起源带有传说色彩；后被编入礼仪与贸易。" } },
  { year: { en: "~850 CE", zh: "约 850" }, title: { en: "Coffee in Ethiopia", zh: "埃塞俄比亚的咖啡" }, note: { en: "From chewed berry to brewed stimulant.", zh: "从咀嚼浆果，到冲煮的提神饮。" } },
  { year: { en: "~1200 CE", zh: "约 1200" }, title: { en: "Distillation spreads", zh: "蒸馏术扩散" }, note: { en: "Alchemists concentrate alcohol into 'aqua vitae'.", zh: "炼金术士将酒精浓缩为「生命之水」。" } },
  { year: { en: "1500s", zh: "16 世纪" }, title: { en: "Coffeehouses & sugar colonies", zh: "咖啡馆与糖业殖民" }, note: { en: "Cafés organise discourse; plantations industrialise sweetness.", zh: "咖啡馆组织公共讨论；种植园工业化甜味。" } },
  { year: { en: "1886", zh: "1886" }, title: { en: "Coca-Cola", zh: "可口可乐" }, note: { en: "Branded soda begins its march to planetary ubiquity.", zh: "品牌汽水启程，迈向行星级的无处不在。" } },
  { year: { en: "1987", zh: "1987" }, title: { en: "Modern energy drinks", zh: "现代能量饮料" }, note: { en: "The stimulant stack engineered for the always-on era.", zh: "为「永不下线」时代调配的兴奋剂组合。" } },
  { year: { en: "2020s →", zh: "2020 年代 →" }, title: { en: "Functional & AI-designed drinks", zh: "功能性与 AI 设计饮品" }, note: { en: "Beverages formulated for a target mental and metabolic state.", zh: "为目标心理与代谢状态而配制的饮品。" } },
];
