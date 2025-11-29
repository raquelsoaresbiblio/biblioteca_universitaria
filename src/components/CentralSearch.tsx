import React from "react";

export function CentralSearch() {
  const [q, setQ] = React.useState("");

  function goSearch() {
    const url = new URL(window.location.href);
    url.hash = "#explorar";
    if (q.trim()) {
      url.searchParams.set("q", q.trim());
    } else {
      url.searchParams.delete("q");
    }
    history.pushState({}, "", url);
    // move focus to results area after navigate
    const el = document.getElementById("explorar");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="pesquisa" className="section">
      <div className="container">
        <div className="central-box" role="search" aria-label="Pesquisa principal">
          <input
            className="central-input"
            type="search"
            placeholder="Pesquisar por título, autor ou tema…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && goSearch()}
            aria-label="Barra de pesquisa principal"
          />
          <button className="button" type="button" onClick={goSearch}>Pesquisar</button>
        </div>
      </div>
    </section>
  );
}


