import './Sidebar.css'

export default function Sidebar({ children, onClose, wide }) {
  return (
    <aside className={`sidebar ${wide ? 'sidebar--wide' : ''}`}>
      <button className="sidebar-close" onClick={onClose} aria-label="Закрыть">✕</button>
      <div className="sidebar-content">
        {children}
      </div>
    </aside>
  )
}
