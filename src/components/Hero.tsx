export function Hero() {
  return (
    <section className="canva-hero">
      <div className="container">
        <div className="icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" opacity="0.95" aria-hidden="true" focusable="false">
            <path d="M3 5a2 2 0 0 1 2-2h6v16H5a2 2 0 0 0-2 2V5z"></path>
            <path d="M21 5v16a2 2 0 0 0-2-2h-6V3h6a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <h1>Coleção Digital de Livros Antigos</h1>
        <p className="subtitle">Curadoria Digital da Biblioteca do ISEL</p>
        <div className="hero-divider" aria-hidden="true"></div>
        <p className="tagline">Preservando o património bibliográfico através da digitalização de obras raras e manuscritos históricos</p>
      </div>
    </section>
  );
}


