import { useState } from 'react'
import Tooltip from '../Tooltip'
import './Zone3D.css'
import './ZoneA3D.css'

const VIEWS = [
  { id: 'top',   label: '🔭 Вид сверху' },
  { id: 'front', label: '🏗️ Вид спереди' },
]

export default function ZoneA3D() {
  const [view, setView] = useState('top')
  const [showContainer2, setShowContainer2] = useState(false)

  return (
    <div className="zone3d zone3d-full">
      {/* View Selector */}
      <div className="zm-view-tabs">
        {VIEWS.map(v => (
          <button
            key={v.id}
            className={`zm-view-tab ${view === v.id ? 'active' : ''}`}
            style={{ '--tab-color': '#4b9eff', '--tab-bg': '#1e3050' }}
            onClick={() => setView(v.id)}
          >{v.label}</button>
        ))}
      </div>

      {view === 'top' && (
        <div className="za-top-view">
          {/* Short entry road */}
          <div className="za-road za-road-entry-short">
            <div className="za-road-label-left">← С трассы</div>
            <div className="za-road-dashes">
              {[...Array(8)].map((_, i) => <div key={i} className="za-dash-h" />)}
            </div>
            <div className="za-road-truck">🚛→</div>
          </div>

          {/* Cameras */}
          <div className="za-cams-row">
            <Tooltip title="📷 A-CAM-1 · ANPR" text="Считывает гос. номер. Данные в ЦУК&Л." side="bottom">
              <div className="za-cam">📷 ANPR</div>
            </Tooltip>
            <Tooltip title="📱 A-CAM-2 · QR" text="Сканирует QR-код водителя." side="bottom">
              <div className="za-cam za-cam-qr">📱 QR</div>
            </Tooltip>
          </div>

          {/* Lane to scales (short, with truck) */}
          <div className="za-lane-to-scales">
            <div className="za-lane-dashes">
              {[...Array(5)].map((_, i) => <div key={i} className="za-dash-v" />)}
            </div>
            <div className="za-lane-truck-down">🚛↓</div>
            <span className="za-lane-hint">к весам</span>
          </div>

          {/* Barrier before scales */}
          <Tooltip title="🚧 Шлагбаум к весам А-ШЛ-1В" text="Открывается после первичной проверки. Въезд на весы." side="bottom">
            <div className="za-barrier-h za-barrier-scales">
              <div className="za-barrier-row-h">
                <div className="za-barrier-pole-h" style={{ background: 'linear-gradient(180deg, #4b9eff, #065F46)' }} />
                <div className="za-barrier-arm-h" style={{ background: 'repeating-linear-gradient(90deg, #4b9eff 0px, #4b9eff 12px, #fff 12px, #fff 20px)' }} />
              </div>
              <div className="za-barrier-label-h" style={{ color: '#4b9eff' }}>🚧 К ВЕСАМ А-ШЛ-1В</div>
            </div>
          </Tooltip>

          {/* Main zone — containers + scales */}
          <div className="za-main-area">
            {/* LEFT container */}
            <Tooltip title="📷 Левый контейнер (2 этажа)" text="1 этаж: камера A-CAM-3. 2 этаж: камера A-CAM-4 (90° сверху)." side="right">
              <div className="za-container-top za-container-left" onClick={() => {}}>
                <div className="za-ct-floor">📷 A-CAM-3 бок.</div>
                <div className="za-ct-floor">📷 A-CAM-4 верх.</div>
                <div className="za-ct-label">КОНТЕЙНЕР 1<br/>Камеры (2 этажа)</div>
              </div>
            </Tooltip>

            {/* SCALES in center */}
            <div className="za-road-center">
              <Tooltip title="⚖️ Весы пустой тары" text="1С-специалист записывает вес пустой тары." side="top">
                <div className="za-scale-top">
                  <div className="za-scale-surface">⚖️ ВЕСЫ</div>
                  <div className="za-truck-on">🚛</div>
                </div>
              </Tooltip>
            </div>

            {/* RIGHT container */}
            <Tooltip title="🏢 Правый контейнер (2 этажа)" text="2 эт: Серверная, Склад, Охранник. 1 эт: 1С-спец. Нажмите для детализации." side="left">
              <div className="za-container-top za-container-right" onClick={() => setShowContainer2(true)}>
                <div className="za-ct-floor">🛂 Охранник · 🗄️ Склад</div>
                <div className="za-ct-floor">💻 1С · 🖨️ Талон</div>
                <div className="za-ct-label">КОНТЕЙНЕР 2<br/>Офис (2 этажа)</div>
                <div className="za-ct-click">Нажмите →</div>
              </div>
            </Tooltip>
          </div>

          {/* Barrier after scales */}
          <Tooltip title="🚧 Шлагбаум от весов А-ШЛ-1Е" text="Открывается после взвешивания и выдачи накладной + талона." side="top">
            <div className="za-barrier-h za-barrier-scales">
              <div className="za-barrier-row-h">
                <div className="za-barrier-pole-h" style={{ background: 'linear-gradient(180deg, #4b9eff, #065F46)' }} />
                <div className="za-barrier-arm-h" style={{ background: 'repeating-linear-gradient(90deg, #4b9eff 0px, #4b9eff 12px, #fff 12px, #fff 20px)' }} />
              </div>
              <div className="za-barrier-label-h" style={{ color: '#4b9eff' }}>🚧 ОТ ВЕСОВ А-ШЛ-1Е</div>
            </div>
          </Tooltip>

          {/* Lane from scales (short, with truck) */}
          <div className="za-lane-from-scales">
            <div className="za-lane-truck-down">🚛↓</div>
            <div className="za-lane-dashes">
              {[...Array(5)].map((_, i) => <div key={i} className="za-dash-v" />)}
            </div>
            <span className="za-lane-hint">от весов</span>
          </div>

          {/* Short exit road to Zone B */}
          <div className="za-road za-road-exit-short">
            <div className="za-road-dashes">
              {[...Array(8)].map((_, i) => <div key={i} className="za-dash-h" />)}
            </div>
            <div className="za-road-label-right">→ Выезд на Зону Б</div>
          </div>
        </div>
      )}

      {view === 'front' && (
        <div className="za-front-view">
          {/* Left container stack (2 floors) */}
          <div className="za-front-stack">
            <div className="za-front-container za-fc-2fl za-fc-left">
              <div className="za-fc-label">2 этаж</div>
              <div className="za-fc-rooms">
                <div className="za-fc-room">📷 A-CAM-4<br/>Верхняя камера</div>
                <div className="za-fc-room">� Зона отдыха</div>
              </div>
            </div>
            <div className="za-front-container za-fc-1fl za-fc-left">
              <div className="za-fc-label">1 этаж</div>
              <div className="za-fc-rooms">
                <div className="za-fc-room">📷 A-CAM-3<br/>Боковая камера</div>
                <div className="za-fc-room">🏢 Офис</div>
              </div>
            </div>
          </div>

          {/* Center — scales + barrier underneath + exit */}
          <div className="za-front-center">
            <div className="za-front-road">
              <div className="za-front-scale">⚖️ ВЕСЫ</div>
              <div className="za-front-truck">🚛</div>
            </div>
            {/* Barrier under scales — pole on one side */}
            <div className="za-front-barrier-under">
              <div className="za-fbu-row">
                <div className="za-fbu-pole" />
                <div className="za-fbu-arm" />
              </div>
              <div className="za-fbu-label">🚧 КОНТРОЛЬ ВЕСОВ (А-ШЛ-1В / А-ШЛ-1Е)</div>
            </div>
            {/* Exit label */}
            <div className="za-front-exit-label">
              <div className="za-fel-arrow">↓</div>
              <div className="za-fel-text">Выезд на Зону Б</div>
            </div>
          </div>

          {/* Right container stack (2 floors) */}
          <div className="za-front-stack" onClick={() => setShowContainer2(true)} style={{ cursor: 'pointer' }}>
            <div className="za-front-container za-fc-2fl za-fc-right">
              <div className="za-fc-label">2 этаж</div>
              <div className="za-fc-rooms">
                <div className="za-fc-room">🖥️ Серверная</div>
                <div className="za-fc-room">🗄️ Склад</div>
                <div className="za-fc-room">🛂 Охранник</div>
              </div>
            </div>
            <div className="za-front-container za-fc-1fl za-fc-right">
              <div className="za-fc-label">1 этаж</div>
              <div className="za-fc-rooms">
                <div className="za-fc-room">💻 1С-специалист<br/>🖨️ Накладная + Талон</div>
              </div>
            </div>
            <div className="za-ct-click" style={{ marginTop: 4 }}>Нажмите для детализации →</div>
          </div>
        </div>
      )}

      {/* Container 2 detail overlay */}
      {showContainer2 && (
        <div className="za-overlay" onClick={() => setShowContainer2(false)}>
          <div className="za-detail-panel" onClick={e => e.stopPropagation()}>
            <div className="za-dp-header">
              <span>🏢 Контейнер 2 — Офис (Правый, 2 этажа)</span>
              <button className="za-dp-close" onClick={() => setShowContainer2(false)}>✕</button>
            </div>

            {/* Floor 2 */}
            <div className="za-dp-floor">
              <div className="za-dp-floor-label">ᐱ 2-й этаж</div>
              <div className="za-dp-zones">
                <div className="za-dp-zone za-dp-zone-server">
                  <div className="za-dp-zone-icon">🖥️</div>
                  <div className="za-dp-zone-name">Серверная</div>
                  <div className="za-dp-zone-desc">Серверное оборудование, камеры, связь</div>
                </div>
                <div className="za-dp-zone za-dp-zone-store">
                  <div className="za-dp-zone-icon">🗄️</div>
                  <div className="za-dp-zone-name">Склад</div>
                  <div className="za-dp-zone-desc">Хранение документов, материалов</div>
                </div>
                <div className="za-dp-zone za-dp-zone-guard">
                  <div className="za-dp-zone-icon">🛂</div>
                  <div className="za-dp-zone-name">Охранник СБ</div>
                  <div className="za-dp-zone-desc">Проверяет соответствие ТС и документов на мониторе. Нажимает «Соответствует» ↓</div>
                </div>
              </div>
            </div>

            {/* Arrow down */}
            <div className="za-dp-arrow">
              <div className="za-dp-arrow-icon">↓</div>
              <div className="za-dp-arrow-text">Передаёт подтверждение «Соответствует»</div>
            </div>

            {/* Floor 1 */}
            <div className="za-dp-floor">
              <div className="za-dp-floor-label">ᐯ 1-й этаж</div>
              <div className="za-dp-zones">
                <div className="za-dp-zone za-dp-zone-1c" style={{ flex: 2 }}>
                  <div className="za-dp-zone-icon">💻</div>
                  <div className="za-dp-zone-name">1С-Специалист</div>
                  <div className="za-dp-zone-desc">
                    Получает «Соответствует» сверху → Записывает вес пустой тары → Выдаёт:
                  </div>
                  <div className="za-dp-output">
                    <div className="za-dp-output-item">📋 Накладная (пустая тара)</div>
                    <div className="za-dp-output-item">🎫 Талон на очередь (Б-[полоса]-[номер])</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="za-dp-result">
              <div className="za-dp-result-icon">🚛→</div>
              <div className="za-dp-result-text">Водитель получает талон → шлагбаум открывается → выезд в <strong>Зону Б</strong></div>
            </div>
          </div>
        </div>
      )}

      {/* Info grid */}
      <div className="zone3d-info">
        <div className="z3d-info-grid">
          <div className="z3d-info-card">
            <div className="z3d-ic-icon" style={{ color: '#4b9eff' }}>📷</div>
            <div>
              <div className="z3d-ic-title">4 камеры</div>
              <div className="z3d-ic-text">ANPR въезд · QR-сканер · Вид спереди фото · Верхняя фото</div>
            </div>
          </div>
          <div className="z3d-info-card">
            <div className="z3d-ic-icon" style={{ color: '#4b9eff' }}>🚧</div>
            <div>
              <div className="z3d-ic-title">2 шлагбаума</div>
              <div className="z3d-ic-text">А-ШЛ-1 (ANPR+QR) · А-ШЛ-2 (подтверждение 1С + СБ)</div>
            </div>
          </div>
          <div className="z3d-info-card">
            <div className="z3d-ic-icon" style={{ color: '#4b9eff' }}>⚖️</div>
            <div>
              <div className="z3d-ic-title">Весовая платформа</div>
              <div className="z3d-ic-text">Между контейнерами. Тонар с прицепом. Пустая тара</div>
            </div>
          </div>
          <div className="z3d-info-card">
            <div className="z3d-ic-icon" style={{ color: '#93c5fd' }}>🏢</div>
            <div>
              <div className="z3d-ic-title">Контейнер 2 — кликабельный</div>
              <div className="z3d-ic-text">Серверная + Склад + Охранник СБ → 1С-специалист</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
