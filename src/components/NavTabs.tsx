const tabs = [
  { id: "intro", label: "Introdução", href: "#introducao" },
  { id: "highlights", label: "Destaques", href: "#destaques" },
  { id: "explore", label: "Explorar", href: "#explorar" },
  { id: "access", label: "Acesso", href: "#acesso" },
  { id: "context", label: "Contexto", href: "#contexto" },
  { id: "help", label: "Ajuda/Contacto", href: "#ajuda" }
];

export function NavTabs() {
  return (
    <nav className="nav-tabs" aria-label="Navegação de secções">
      <div className="container">
        {tabs.map(t => (
          <a key={t.id} href={t.href} aria-current={t.id === "intro" ? "page" : undefined}>
            {t.label}
          </a>
        ))}
      </div>
    </nav>
  );
}


