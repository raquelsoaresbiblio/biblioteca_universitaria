function Card(props: { tintClass: string; title: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div className={`highlight-card ${props.tintClass}`}>
      <div className="highlight-icon" aria-hidden="true">{props.icon}</div>
      <h3 className="highlight-title">{props.title}</h3>
      <p className="highlight-text">{props.children}</p>
    </div>
  );
}

export function Highlights() {
  return (
    <section id="destaques" className="section">
      <div className="container">
        <h2 className="section-title-serif">Destaques da Coleção</h2>
        <div className="highlights-grid">
          <Card
            tintClass="tint-amber"
            title="Manuscritos Raros"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#b45309">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            }
          >
            Documentos únicos escritos à mão, incluindo correspondências históricas e anotações de grandes pensadores dos séculos passados.
          </Card>
          <Card
            tintClass="tint-green"
            title="Tratados Científicos"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0f766e">
                <path d="M10 17l5-5-5-5v10z"></path>
              </svg>
            }
          >
            Obras fundamentais da ciência e engenharia, incluindo primeiras edições de tratados que moldaram o conhecimento moderno.
          </Card>
          <Card
            tintClass="tint-indigo"
            title="Literatura Clássica"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#3b82f6">
                <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm-1 15l-5-5 1.41-1.41L11 13.17l5.59-5.58L18 9z"></path>
              </svg>
            }
          >
            Primeiras edições de obras literárias portuguesas e estrangeiras, preservando a riqueza cultural e linguística de épocas passadas.
          </Card>
        </div>
      </div>
    </section>
  );
}


