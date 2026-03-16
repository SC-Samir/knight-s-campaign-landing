const campaignDetails = [
  { label: "Système", value: "Combo D6 (pairs = réussites)" },
  { label: "Univers", value: "Futuriste / Horreur épique" },
  { label: "Auteurs", value: "Simon Gabillaud & Coline Pignat" },
  { label: "Époque", value: "2037 — Après l'Anathème" },
  { label: "Joueurs", value: "3 à 5 personnages" },
  { label: "Sessions", value: "Campagne longue durée" },
];

const CampaignSection = () => {
  return (
    <section id="campagne" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — info */}
          <div>
            <p className="font-body text-ember tracking-[0.4em] text-xs uppercase mb-4">
              ━━  La Campagne  ━━
            </p>
            <h2 className="font-display text-5xl font-bold text-foreground mb-6">
              Au cœur<br />
              <span className="text-ember">des ténèbres</span>
            </h2>
            <div className="separator-ember w-40 mb-8" />
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Vous incarnez des Knights — des guerriers d'élite équipés d'armures technologiques avancées. Votre mission : sortir des Arches protégées, plonger dans l'Anathème et ramener de l'espoir à une humanité au bord du gouffre.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Chaque décision compte. Chaque mission peut être la dernière. Mais vous n'êtes pas seuls — et c'est votre seule chance de survie.
            </p>

            <a
              href="https://knight-jdr.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-sm tracking-widest uppercase text-ember border border-ember/50 px-6 py-3 hover:bg-ember/10 hover:border-ember transition-all duration-300"
            >
              Site officiel Knight →
            </a>
          </div>

          {/* Right — details grid */}
          <div className="space-y-0">
            {campaignDetails.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-5 border-b border-border/50 group hover:border-ember/30 transition-colors duration-300"
              >
                <span className="font-body text-sm tracking-widest text-muted-foreground uppercase">
                  {item.label}
                </span>
                <span className="font-body text-base font-semibold text-foreground group-hover:text-ember transition-colors duration-300">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
