import { useState } from 'react'
import './OverviewMap.css'

/*
  Real top-down view.
  Layout (left → right): Entry Road → Zone A → Road → Zone B (BIG) → Road → Zone C → Road → Zone D
  Lane 7 exits from Zone C going as oncoming traffic OUTSIDE Zones A & B (top of the map).
*/

function ZoneBlock({ id, label, sublabel, color, glow, children, isActive, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`ov-zone ov-zone--${id.toLowerCase()} ${isActive ? 'ov-zone--active' : ''}`}
      style={{ '--zc': color, '--zg': glow }}
      onClick={() => onClick(id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="ov-zone-header">
        <span className="ov-zone-label">{label}</span>
        <span className="ov-zone-sub">{sublabel}</span>
      </div>
      <div className="ov-zone-body">{children}</div>
      <div className={`ov-zone-hint ${hovered ? 'vis' : ''}`}>Нажмите для деталей →</div>
    </div>
  )
}

function RoadSeg({ label, vertical }) {
  return (
    <div className={`ov-road ${vertical ? 'ov-road--v' : ''}`}>
      <div className="ov-road-dashes">
        {[...Array(6)].map((_, i) => <div key={i} className="ov-rd" />)}
      </div>
      {label && <span className="ov-road-lbl">{label}</span>}
    </div>
  )
}

/* ---- Mini Zone A (top-down) ---- */
function MiniA() {
  return (
    <div className="m-a">
      <div className="m-a-barrier">🚧 Шлагбаум</div>
      <div className="m-a-cams">📷 ANPR · 📱 QR</div>
      <div className="m-a-main">
        <div className="m-a-cont m-a-left">
          <div>🖥️ Офис</div>
          <div>🗄️ Склад</div>
        </div>
        <div className="m-a-scale">⚖️ ВЕСЫ</div>
        <div className="m-a-cont m-a-right">
          <div>💻 1С</div>
          <div>📷 Камеры</div>
        </div>
      </div>
      <div className="m-a-barrier">🚧 Шлагбаум</div>
    </div>
  )
}

/* ---- Mini Zone B (top-down, BIG — 5 long lanes) ---- */
function MiniB() {
  const lanes = [
    { id: 1, label: '1 ТОП‑базы', c: '#4b9eff' },
    { id: 2, label: '2 ТОП‑базы', c: '#4b9eff' },
    { id: 3, label: '3 ТОП‑базы', c: '#4b9eff' },
    { id: 4, label: '4 ТЭЦ',      c: '#4b9eff' },
    { id: 5, label: '5 Соц/МСУ/Служ',  c: '#4b9eff' },
  ]
  return (
    <div className="m-b">
      {lanes.map(l => (
        <div key={l.id} className="m-b-lane" style={{ '--lc': l.c }}>
          <span className="m-b-barrier">🚧</span>
          <span className="m-b-label">{l.label}</span>
          <div className="m-b-dots">{[...Array(8)].map((_, i) => <span key={i} className="m-b-dot" />)}</div>
          <span className="m-b-truck">🚛</span>
          <span className="m-b-barrier">🚧</span>
        </div>
      ))}
    </div>
  )
}

/* ---- Mini Zone C (top-down: upper/lower containers, LED strip) ---- */
function MiniC() {
  return (
    <div className="m-c">
      <div className="m-c-cont upper">📺 LED · Верхний конт.</div>
      <div className="m-c-road-between">дорога</div>
      <div className="m-c-cont lower">🛡️ Охрана · Нижний конт.</div>
      <div className="m-c-barrier">🚧 Шлагбаум →</div>
    </div>
  )
}

/* ---- Mini Zone D (top-down: scale-cont-cont-scale-cont-scale) ---- */
function MiniD() {
  const items = [
    { t: 's', l: '⚖️ Весы 1' },
    { t: 'c', l: '💻 Конт. 1' },
    { t: 'c', l: '💻 Конт. 2' },
    { t: 's', l: '⚖️ Весы 2' },
    { t: 'c', l: '💻 Конт. 3' },
    { t: 's', l: '⚖️ Весы 3' },
  ]
  return (
    <div className="m-d">
      {items.map((it, i) => (
        <div key={i} className={`m-d-item ${it.t === 's' ? 'm-d-scale' : 'm-d-cont'}`}>{it.l}</div>
      ))}
    </div>
  )
}

/* ---- Mini Zone Wait (top-down: holding area) ---- */
function MiniWait() {
  return (
    <div className="m-wait">
      <div className="m-wait-body">
        <div className="m-wait-anpr">📷 камера наблюдения</div>
        <div className="m-wait-slots">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="m-wait-slot">
              <span className="m-wait-truck">🚛</span>
              <span className="m-wait-label">ожидание</span>
            </div>
          ))}
        </div>
        <div className="m-wait-anpr">📷 камера наблюдения</div>
      </div>
    </div>
  )
}

/* ---- Mini Zone E (quarry & loading) ---- */
function MiniE() {
  return (
    <div className="m-e">
      <div className="m-e-body">
        <div className="m-e-excavator">🏗️ Экскаватор 1</div>
        <div className="m-e-excavator">🏗️ Экскаватор 2</div>
        <div className="m-e-trucks">
          <span className="m-e-truck">🚛</span>
          <span className="m-e-truck">🚛</span>
        </div>
        <div className="m-e-label">⛏️ Карьер / Погрузка</div>
      </div>
    </div>
  )
}

/* ---- Mini Zone Top (upper industrial) ---- */
function MiniTop() {
  return (
    <div className="m-top">
      <div className="m-top-row">
        <div className="m-top-block canteen">
          <div className="m-top-icon">🍽️</div>
          <div className="m-top-name">Столовая</div>
          <div className="m-top-detail">🔐 СКУД Hikvision</div>
        </div>
        <div className="m-top-block dorm">
          <div className="m-top-icon">🏠</div>
          <div className="m-top-name">Общежития</div>
          <div className="m-top-detail">🔐 2 корпуса</div>
        </div>
        <div className="m-top-block warehouse">
          <div className="m-top-icon">🏭</div>
          <div className="m-top-name">Склады</div>
          <div className="m-top-detail">📷 Видеонаблюдение</div>
        </div>
      </div>
    </div>
  )
}

/* ---- Main overview ---- */
export default function OverviewMap({ activeZone, onSelectZone }) {
  return (
    <div className="overview-map">
      {/* Title */}
      <div className="map-title">
        <h1>Промзона Кара-Кече — Вид сверху</h1>
        <p>Нажмите на зону для детального просмотра</p>
      </div>

      {/* Legend */}
      <div className="map-legend">
        <div className="legend-item"><span className="legend-dot" style={{ background: '#4b9eff' }} /> Зона А</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#60a5fa' }} /> Зона Б</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#4b9eff' }} /> Зона С</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#60a5fa' }} /> Зона Ожидания</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#4b9eff' }} /> Зона Е</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#93c5fd' }} /> Зона Д</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#7ab8ff', border: '1px dashed #7ab8ff' }} /> Промзона верхняя</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#4b9eff66', border: '1px dashed #4b9eff' }} /> Полоса 6 (встречка)</div>
      </div>

      {/* ===== Main zones row ===== */}
      <div className="ov-zones-row">
        {/* Entry */}
        <div className="ov-entry">
          <div className="ov-entry-trucks">
            {[...Array(3)].map((_, i) => <span key={i} className="ov-truck-icon" style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>🚛</span>)}
          </div>
          <div className="ov-entry-label">Въезд с<br/>трассы</div>
        </div>

        <RoadSeg label="→" />

        {/* ── A + B + C column with lane-6 strip below ── */}
        <div className="ov-abc-col">
          <div className="ov-abc-zones">
            <ZoneBlock id="A" label="ЗОНА А" sublabel="Въезд · Весы · Проверка" color="#4b9eff" glow="rgba(59,130,246,0.35)" isActive={activeZone === 'A'} onClick={onSelectZone}>
              <MiniA />
            </ZoneBlock>
            <RoadSeg label="→" />
            <ZoneBlock id="B" label="ЗОНА Б" sublabel="5 полос · Электронная очередь" color="#60a5fa" glow="rgba(37,99,235,0.3)" isActive={activeZone === 'B'} onClick={onSelectZone}>
              <MiniB />
            </ZoneBlock>
            <RoadSeg label="→" />
            <ZoneBlock id="C" label="ЗОНА С" sublabel="Вызов · LED · Выпуск" color="#4b9eff" glow="rgba(37,99,235,0.35)" isActive={activeZone === 'C'} onClick={onSelectZone}>
              <MiniC />
            </ZoneBlock>
          </div>

          {/* Lane 6 — exactly under A+B+C */}
          <div className="lane6-strip">
            <div className="lane6-track">
              <span className="lane7-truck-anim">🚛</span>
              <div className="lane7-dashes">
                {[...Array(24)].map((_, i) => <div key={i} className="lane7-dash" />)}
              </div>
              <span className="lane7-exit-dir">← Выход</span>
            </div>
            <div className="lane7-label">ПОЛОСА 6 — встречка · из Зоны С → под Б → под А → выход</div>
          </div>
        </div>

        <RoadSeg label="→" />

        {/* Zone Wait */}
        <ZoneBlock id="Wait" label="ОЖИДАНИЕ" sublabel="Кой-Коро · Буфер" color="#60a5fa" glow="rgba(37,99,235,0.3)" isActive={activeZone === 'Wait'} onClick={onSelectZone}>
          <MiniWait />
        </ZoneBlock>

        <RoadSeg label="→" />

        {/* Zone D */}
        <ZoneBlock id="D" label="ЗОНА Д" sublabel="3 весовых · Полная тара" color="#93c5fd" glow="rgba(74,152,255,0.35)" isActive={activeZone === 'D'} onClick={onSelectZone}>
          <MiniD />
        </ZoneBlock>

        <RoadSeg label="→" />

        {/* Zone E */}
        <ZoneBlock id="E" label="ЗОНА Е" sublabel="Карьер · Погрузка" color="#4b9eff" glow="rgba(37,99,235,0.4)" isActive={activeZone === 'E'} onClick={onSelectZone}>
          <MiniE />
        </ZoneBlock>
      </div>

      {/* ===== Промзона верхняя — отдельный блок ===== */}
      <div className="ov-top-zone-wrapper">
        <div className="ov-top-zone-label">↑ Промзона верхняя — отдельная территория</div>
        <ZoneBlock id="Top" label="ПРОМЗОНА ВЕРХНЯЯ" sublabel="Столовая · Склады · Общежития · СКУД" color="#7ab8ff" glow="rgba(122,184,255,0.25)" isActive={activeZone === 'Top'} onClick={onSelectZone}>
          <MiniTop />
        </ZoneBlock>
      </div>

      {/* System badges */}
      <div className="system-badges">
        <div className="sys-badge">📷 ANPR‑камеры</div>
        <div className="sys-badge">📱 QR‑сканеры</div>
        <div className="sys-badge">🚧 Авто‑шлагбаумы</div>
        <div className="sys-badge">⚖️ Весы 1С</div>
        <div className="sys-badge">📺 LED‑экран</div>
        <div className="sys-badge">🔐 СКУД Hikvision</div>
        <div className="sys-badge">⛏️ Карьер / Погрузка</div>
        <div className="sys-badge">🗄️ ЦУК&amp;Л Кыргызкомур</div>
        <div className="sys-badge">📋 Электронная очередь</div>
      </div>
    </div>
  )
}
