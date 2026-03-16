import heroImage from "@/assets/hero-knight.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      {/* Top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <div className="w-full h-0.5 bg-foreground animate-scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Pre-title */}
        <p
          className="font-body text-ember tracking-[0.4em] text-sm uppercase mb-6 opacity-0 animate-rise"
          style={{ letterSpacing: "0.4em" }}
        >
          Campagne de Jeu de Rôle · 2037
        </p>

        {/* Main Title */}
        <h1
          className="font-display text-8xl md:text-[11rem] font-black uppercase tracking-widest mb-2 opacity-0 animate-rise glow-ember"
          style={{ color: "hsl(var(--foreground))", animationDelay: "0.2s" }}
        >
          KNIGHT
        </h1>

        {/* Subtitle */}
        <div className="separator-ember w-64 mx-auto mb-6" />
        <h2
          className="font-display text-xl md:text-2xl text-knight-gold tracking-[0.2em] uppercase mb-8 opacity-0"
          style={{ animationName: "rise", animationDuration: "0.8s", animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Au cœur des ténèbres
        </h2>

        {/* Quote */}
        <p
          className="font-body text-lg md:text-xl text-foreground/70 italic max-w-xl mx-auto mb-12 opacity-0"
          style={{ animationName: "rise", animationDuration: "0.8s", animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          "Seuls nous combattons, ensemble nous vaincrons."
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
          style={{ animationName: "rise", animationDuration: "0.8s", animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <a
            href="#campagne"
            className="group relative px-8 py-4 font-display font-semibold tracking-widest text-sm uppercase overflow-hidden bg-ember text-primary-foreground transition-all duration-300 hover:scale-105 animate-pulse-ember"
          >
            <span className="relative z-10">Rejoindre la Campagne</span>
          </a>
          <a
            href="#univers"
            className="px-8 py-4 font-display font-semibold tracking-widest text-sm uppercase border border-ember/50 text-foreground hover:border-ember hover:bg-ember/10 transition-all duration-300"
          >
            Découvrir l'Univers
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-body text-xs tracking-widest text-muted-foreground uppercase">Défiler</span>
        <div className="w-px h-12 bg-gradient-to-b from-ember to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
