import archeImage from "@/assets/arche-city.jpg";

const loreItems = [
  {
    icon: "◈",
    title: "L'Anathème",
    description:
      "En 2037, les Ténèbres ont submergé la Terre. L'Anathème — une obscurité vivante — dévore tout sur son passage, peuplée de créatures indicibles et d'horreurs indicibles.",
  },
  {
    icon: "◉",
    title: "Les Arches",
    description:
      "Seuls refuges de l'humanité survivante : d'immenses métropoles sous des dômes de lumière technologique. L'intérieur est civilisé. L'extérieur est la mort.",
  },
  {
    icon: "◈",
    title: "Les 24 Immortels",
    description:
      "Les nouveaux maîtres du monde. Immortels, omnipuissants, ils gouvernent les Arches d'une main de fer — mais leurs motifs restent opaques, même pour les Knights.",
  },
];

const LoreSection = () => {
  return (
    <section id="univers" className="relative py-24 overflow-hidden">
      {/* Background image with strong overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${archeImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="relative z-10 container max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-body text-ember tracking-[0.4em] text-xs uppercase mb-4">
            ━━  L'Univers  ━━
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Le Monde de 2037
          </h2>
          <div className="separator-ember w-48 mx-auto" />
        </div>

        {/* Lore grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {loreItems.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 border border-border hover:border-ember/50 transition-all duration-500 bg-card/50 backdrop-blur-sm"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-6 h-px bg-ember" />
              <div className="absolute top-0 left-0 h-6 w-px bg-ember" />
              <div className="absolute bottom-0 right-0 w-6 h-px bg-ember" />
              <div className="absolute bottom-0 right-0 h-6 w-px bg-ember" />

              <div className="text-ember text-3xl mb-4 font-display">{item.icon}</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Big quote */}
        <div className="text-center border border-ember/20 p-10 bg-card/30 backdrop-blur-sm relative">
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-ember" />
          <blockquote className="font-display text-2xl md:text-3xl text-foreground/80 italic max-w-3xl mx-auto leading-relaxed">
            "Dans l'obscurité, seule la lumière d'un Knight peut faire la différence entre la survie et l'extinction."
          </blockquote>
          <p className="font-body text-ember text-sm tracking-widest uppercase mt-6">
            — Codex Knight, Vol. I
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoreSection;
