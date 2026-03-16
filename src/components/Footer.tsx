const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-ember tracking-widest glow-ember animate-flicker">
              KNIGHT
            </h3>
            <p className="font-body text-sm text-muted-foreground mt-1 tracking-wide">
              Au cœur des ténèbres · 2037
            </p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">
              Basé sur le jeu de rôle
            </p>
            <a
              href="https://knight-jdr.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm text-ember hover:text-knight-gold transition-colors tracking-widest uppercase"
            >
              knight-jdr.fr →
            </a>
            <p className="font-body text-xs text-muted-foreground/50 mt-1">
              par Simon Gabillaud & Coline Pignat
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="font-body text-xs text-muted-foreground/40 tracking-wide">
              Campagne non-officielle
            </p>
            <p className="font-body text-xs text-muted-foreground/40">
              Tous droits réservés à leurs auteurs
            </p>
          </div>
        </div>

        <div className="separator-ember w-full mt-8 opacity-30" />

        <p className="text-center font-body text-xs text-muted-foreground/30 mt-6 tracking-[0.3em] uppercase">
          "Seuls nous combattons, ensemble nous vaincrons"
        </p>
      </div>
    </footer>
  );
};

export default Footer;
