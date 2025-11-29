type Item = {
  id: string;
  title: string;
  author: string;
  year: number;
  category: "Todos" | "Manuscritos" | "Ciência" | "Literatura" | "História";
  excerpt: string;
};

const ITEMS: Item[] = [
  { id: "1", title: "Tratado de Geometria Aplicada", author: "João Silva", year: 1832, category: "Ciência", excerpt: "Obra fundamental sobre geometria aplicada à engenharia civil." },
  { id: "2", title: "Manuscritos sobre Navegação", author: "António Pereira", year: 1756, category: "Manuscritos", excerpt: "Anotações manuscritas sobre técnicas de navegação marítima." },
  { id: "3", title: "Os Lusíadas - Primeira Edição", author: "Luís de Camões", year: 1572, category: "Literatura", excerpt: "Primeira edição da obra épica de Camões." },
  { id: "4", title: "História de Portugal", author: "Fernão Lopes", year: 1644, category: "História", excerpt: "Crónicas históricas sobre os reis de Portugal." },
  { id: "5", title: "Compêndio de Matemática", author: "Manuel Costa", year: 1789, category: "Ciência", excerpt: "Manual de matemática para estudantes de engenharia." },
  { id: "6", title: "Cartas de Amor", author: "Maria Antónia", year: 1698, category: "Manuscritos", excerpt: "Correspondência pessoal do século XVII." }
];

const CATEGORIES: Array<Item["category"]> = ["Todos", "Manuscritos", "Ciência", "Literatura", "História"];

export function Explore() {
  const initialQ = React.useMemo(() => {
    try {
      return new URL(window.location.href).searchParams.get("q") ?? "";
    } catch {
      return "";
    }
  }, []);
  const [query, setQuery] = React.useState(initialQ);
  const [active, setActive] = React.useState<Set<Item["category"]>>(new Set());

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    const hasFilter = active.size > 0;
    return ITEMS.filter((it) => {
      const matchCategory = !hasFilter || active.has(it.category);
      const matchQ = !q || it.title.toLowerCase().includes(q) || it.author.toLowerCase().includes(q);
      return matchCategory && matchQ;
    });
  }, [query, active]);
  const resultsCount = filtered.length;

  return (
    <section id="explorar" className="section alt">
      <div className="container">
        <h2 className="section-title-serif">Explorar a Coleção</h2>

        <form className="search" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Pesquisar por título, autor ou tema..."
            aria-label="Pesquisar na coleção"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        <div className="chips" role="group" aria-label="Filtrar por categoria">
          {CATEGORIES.map((c) => {
            const isActive = c !== "Todos" && active.has(c);
            return (
              <button
                key={c}
                type="button"
                className={`chip ${isActive ? "chip-active" : ""}`}
                onClick={() => {
                  if (c === "Todos") {
                    setActive(new Set());
                    return;
                  }
                  const next = new Set(active);
                  if (next.has(c)) next.delete(c);
                  else next.add(c);
                  setActive(next);
                }}
                aria-pressed={isActive}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="result-count">{resultsCount} resultado{resultsCount !== 1 ? "s" : ""}{active.size ? " filtrados" : ""}</div>

        <div className="items-grid">
          {filtered.map((it) => (
            <article className="item-card" key={it.id}>
              <div className="item-header">
                <h3 className="item-title">{it.title}</h3>
                <span className="badge">{it.category}</span>
              </div>
              <div className="item-meta">
                <div>Por: {it.author}</div>
                <div>Ano: {it.year}</div>
              </div>
              <p className="item-excerpt">{it.excerpt}</p>
              <div className="item-actions">
                <button className="btn">Ver Online</button>
                <button className="btn btn-outline">Download</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Local import without top-level import for brevity
import React from "react";


