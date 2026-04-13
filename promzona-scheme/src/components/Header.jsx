import './Header.css'

export default function Header({ onWorkflow, showWorkflow }) {
  return (
    <header className="header">
      <div className="header-brand">
        <img src="/new.png" alt="Кыргызкомур" className="header-logo" />
        <div>
          <div className="header-title">Промзона Кара-Кече</div>
          <div className="header-sub">Угольная база · Схема автоматизации · Кыргызкомур</div>
        </div>
      </div>
      <div className="header-actions">
        <button
          className={`header-btn ${showWorkflow ? 'active' : ''}`}
          onClick={onWorkflow}
          title="Логика работы"
        >
          <span>⚙️</span> Логика работы
        </button>
        <a
          className="header-btn"
          href="https://kyrgyzkomur.kg"
          target="_blank"
          rel="noreferrer"
          title="Кыргызкомур ЦУК&Л"
        >
          <span>🔗</span> ЦУК&amp;Л
        </a>
      </div>
    </header>
  )
}
