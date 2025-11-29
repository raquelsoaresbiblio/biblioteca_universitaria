document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");
  const results = document.getElementById("results");

  function renderMockResults(query) {
    if (!results) return;
    results.innerHTML = "";
    if (!query) return;

    const items = [
      { title: "Introdução à Biblioteconomia", author: "A. Silva", year: 2018 },
      { title: "Gestão de Informação", author: "M. Pereira", year: 2020 },
      { title: "Pesquisa Académica", author: "C. Rocha", year: 2022 }
    ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

    if (items.length === 0) {
      const none = document.createElement("div");
      none.className = "result-item";
      none.textContent = "Sem resultados para \"" + query + "\".";
      results.appendChild(none);
      return;
    }

    for (const item of items) {
      const el = document.createElement("div");
      el.className = "result-item";
      el.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.author} · ${item.year}</p>
      `;
      results.appendChild(el);
    }
  }

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", () => {
      renderMockResults(searchInput.value.trim());
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        renderMockResults(searchInput.value.trim());
      }
    });
  }
});


