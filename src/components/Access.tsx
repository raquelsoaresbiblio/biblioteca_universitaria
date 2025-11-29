function Bullet({ text }: { text: string }) {
  return (
    <li className="bullet">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#b91c1c" aria-hidden="true">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-5-5 1.41-1.41L11 13.17l5.59-5.58L18 9z"></path>
      </svg>
      <span>{text}</span>
    </li>
  );
}

export function Access() {
  return (
    <section id="acesso" className="section">
      <div className="container">
        <h2 className="section-title-serif">Acesso e Utilização</h2>
        <div className="two-col">
          <div className="content-card">
            <h3 className="col-title">Como Aceder</h3>
            <ul className="bullets">
              <Bullet text="Acesso livre para consulta online" />
              <Bullet text="Registo necessário para download" />
              <Bullet text="Suporte técnico disponível" />
            </ul>
          </div>
          <div className="content-card">
            <h3 className="col-title">Direitos de Utilização</h3>
            <ul className="bullets">
              <Bullet text="Uso académico e investigação" />
              <Bullet text="Citação obrigatória da fonte" />
              <Bullet text="Uso comercial restrito" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


