import React from "react";

export function ScrollToFilters() {
  const [visible, setVisible] = React.useState(false);
  const thresholdRef = React.useRef<number>(0);

  React.useEffect(() => {
    function computeThreshold() {
      // Mostrar a seta assim que passar a secção "Sobre a Coleção" (id: introducao)
      const introducao = document.getElementById("introducao");
      if (introducao) {
        const rect = introducao.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        thresholdRef.current = scrollTop + rect.bottom; // bottom of highlights
      } else {
        thresholdRef.current = 500; // fallback
      }
    }
    computeThreshold();
    const handle = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setVisible(y > thresholdRef.current - 100);
    };
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", computeThreshold);
    // initial check
    handle();
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", computeThreshold);
    };
  }, []);

  function goToTop() {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      // fallback anchor
      const el = document.body;
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <button
      type="button"
      aria-label="Voltar aos filtros"
      className={`scroll-fab ${visible ? "show" : ""}`}
      onClick={goToTop}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M12 8l6 6H6l6-6z"></path>
      </svg>
    </button>
  );
}


