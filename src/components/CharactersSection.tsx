const characterClasses = [
  {
    name: "Le Briseur",
    role: "Assaut",
    description: "Force brute et armure lourde. Le Briseur ouvre la voie en première ligne, absorbant les coups que les autres ne pourraient survivre.",
    color: "ember",
  },
  {
    name: "L'Éclaireur",
    role: "Infiltration",
    description: "Agile, furtif, mortel. L'Éclaireur opère dans les zones les plus sombres, rassemblant renseignements avant que l'ennemi ne sache qu'il est là.",
    color: "anatheme-glow",
  },
  {
    name: "Le Médiateur",
    role: "Soutien",
    description: "Maître des technologies de soin et de communication. Le Médiateur maintient l'équipe en vie et coordonne les opérations depuis l'ombre.",
    color: "knight-gold",
  },
  {
    name: "Le Démiurge",
    role: "Technologie",
    description: "Ingénieur de génie, il maîtrise l'arsenal technologique de l'équipe. Drones, explosifs, systèmes de piratage — rien ne lui est inaccessible.",
    color: "knight-red",
  },
];

const colorMap: Record<string, string> = {
  ember: "hsl(var(--ember))",
  "anatheme-glow": "hsl(var(--anatheme-glow))",
  "knight-gold": "hsl(var(--knight-gold))",
  "knight-red": "hsl(var(--knight-red))",
};

const CharactersSection = () => {
  return (
    <section id="personnages" className="py-24 bg-secondary/10">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-ember tracking-[0.4em] text-xs uppercase mb-4">
            ━━  Personnages  ━━
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Les Archétypes
          </h2>
          <div className="separator-ember w-48 mx-auto mb-6" />
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Choisissez votre rôle dans l'équipe. Chaque Knight apporte une expertise unique — ensemble vous êtes invincibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {characterClasses.map((char, i) => (
            <div
              key={i}
              className="group relative p-6 bg-card/60 border border-border hover:border-opacity-100 transition-all duration-500 overflow-hidden"
              style={{
                borderColor: `${colorMap[char.color]}30`,
              }}
            >
              {/* Hover top line */}
              <div
                className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-500"
                style={{ background: colorMap[char.color] }}
              />

              {/* Role badge */}
              <div
                className="inline-block font-body text-xs tracking-widest uppercase px-3 py-1 mb-4 font-semibold"
                style={{
                  color: colorMap[char.color],
                  backgroundColor: `${colorMap[char.color]}15`,
                  border: `1px solid ${colorMap[char.color]}30`,
                }}
              >
                {char.role}
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {char.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {char.description}
              </p>

              {/* Number */}
              <div
                className="absolute bottom-4 right-4 font-display text-5xl font-black opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ color: colorMap[char.color] }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
