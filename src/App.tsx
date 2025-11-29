import { useMemo, useState } from "react";
import { Hero } from "./components/Hero";
import { NavTabs } from "./components/NavTabs";
import { Highlights } from "./components/Highlights";
import { Explore } from "./components/Explore";
import { Access } from "./components/Access";
import { Context } from "./components/Context";
import { CentralSearch } from "./components/CentralSearch";
import { Help } from "./components/Help";

function App() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const items = [
      { title: "Introdução à Biblioteconomia", author: "A. Silva", year: 2018 },
      { title: "Gestão de Informação", author: "M. Pereira", year: 2020 },
      { title: "Pesquisa Académica", author: "C. Rocha", year: 2022 }
    ];
    const q = query.trim().toLowerCase();
    return q ? items.filter(i => i.title.toLowerCase().includes(q)) : [];
  }, [query]);

  return (
    <>
      <Hero />
      <NavTabs />
      <CentralSearch />

      <main>
        <section id="introducao" className="section">
          <div className="container">
            <div className="content-card">
              <h2 className="section-title-serif">Sobre a Coleção</h2>
              <p className="section-sub">Uma janela para o passado através de obras digitalizadas com rigor académico</p>
              <div className="prose">
                <p>
                  A Biblioteca do Instituto Superior de Engenharia de Lisboa (ISEL) orgulha-se de apresentar a sua
                  coleção digital de livros antigos, resultado de um meticuloso trabalho de curadoria e digitalização.
                  Esta iniciativa visa preservar e tornar acessível um valioso património bibliográfico, permitindo que
                  investigadores, estudantes e o público em geral explorem obras históricas de grande relevância académica
                  e cultural.
                </p>
                <p>
                  Cada obra foi cuidadosamente digitalizada utilizando tecnologia de alta resolução, garantindo a fidelidade
                  ao documento original e a sua preservação para as gerações futuras. A coleção abrange diversas áreas do
                  conhecimento, desde tratados científicos e técnicos até obras literárias e históricas de valor inestimável.
                </p>
                <p>
                  Saiba mais sobre o ISEL e a sua Biblioteca em{" "}
                  <a href="https://www.isel.pt/biblioteca" target="_blank" rel="noreferrer">biblioteca.isel.pt</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Highlights />
        <Explore />
        <Access />
        <Context />
        <Help />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" opacity="0.95">
              <rect x="5" y="6" width="14" height="2" rx="1"></rect>
              <rect x="5" y="11" width="14" height="2" rx="1"></rect>
              <rect x="5" y="16" width="14" height="2" rx="1"></rect>
            </svg>
          </div>
          <p className="footer-text">© {new Date().getFullYear()} Instituto Superior de Engenharia de Lisboa</p>
          <p className="footer-subtext">Biblioteca ISEL · Preservando o conhecimento para o futuro</p>
        </div>
      </footer>
    </>
  );
}

export default App;


