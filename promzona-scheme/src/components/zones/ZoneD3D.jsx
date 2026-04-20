import { useState } from 'react'
import Tooltip from '../Tooltip'
import './Zone3D.css'
import './ZoneD3D.css'

const VIEWS = [
  { id: 'top',   label: '🔭 Вид сверху' },
  { id: 'front', label: '🏗️ Вид спереди' },
]

/*
  Layout per user spec (vertical, top to bottom):
  1. Весы №1
  2. Контейнер №1
  3. Контейнер №2
  4. Весы №2
  5. Контейнер №3
  6. Весы №3
*/
const LAYOUT = [
  { type: 'scale',     id: 1, label: 'ВЕСЫ №1',        cam: 'Д-CAM-1' },
  { type: 'container', id: 1, label: 'Контейнер №1',   person: '1С-Спец. №1' },
  { type: 'container', id: 2, label: 'Контейнер №2',   person: '1С-Спец. №2' },
  { type: 'scale',     id: 2, label: 'ВЕСЫ №2',        cam: 'Д-CAM-2' },
  { type: 'container', id: 3, label: 'Контейнер №3',   person: '1С-Спец. №3' },
  { type: 'scale',     id: 3, label: 'ВЕСЫ №3',        cam: 'Д-CAM-3' },
]

export default function ZoneD3D() {
  const [view, setView] = useState('top')

  return (
    <div className="zone3d zone3d-full">
      <div className="zm-view-tabs">
        {VIEWS.map(v => (
          <button
            key={v.id}
            className={`zm-view-tab ${view === v.id ? 'active' : ''}`}
            style={{ '--tab-color': '#93c5fd', '--tab-bg': '#2a1e0a' }}
            onClick={() => setView(v.id)}
          >{v.label}</button>
        ))}
      </div>

      {view === 'top' && (
        <div className="zd-top-view">
          {/* Entry road from Zone C */}
          <div className="zd-top-road-entry">
            <div className="zd-road-h">
              <div className="zd-road-dashes-h">
                {[...Array(14)].map((_, i) => <div key={i} className="za-dash-h" />)}
              </div>
              <div className="zd-entry-label">← Дорога из Зоны С (40-50м)</div>
            </div>
          </div>

          {/* Alternating layout */}
          <div className="zd-alternating">
            {LAYOUT.map((item, i) => (
              <div key={i}>
                {item.type === 'scale' ? (
                  <Tooltip title={`⚖️ ${item.label}`} text={`Весы полной тары. Камера ${item.cam}. 1С-специалист записывает полный вес. Нетто = Полная − Пустая.`} side="right">
                    <div className="zd-top-scale">
                      <div className="zd-ts-cam">📷 {item.cam}</div>
                      <div className="zd-ts-platform">
                        <span className="zd-ts-icon">⚖️</span>
                        <span className="zd-ts-label">{item.label}</span>
                        <span className="zd-ts-truck">🚛↙</span>
                      </div>
                    </div>
                  </Tooltip>
                ) : (
                  <Tooltip title={`🏢 ${item.label}`} text={`${item.person} — записывает полный вес в накладную. Нетто = Полная − Пустая тара. Данные → ЦУК&Л.`} side="right">
                    <div className="zd-top-container">
                      <span className="zd-tc-icon">💻</span>
                      <span className="zd-tc-label">{item.label}</span>
                      <span className="zd-tc-person">{item.person}</span>
                    </div>
                  </Tooltip>
                )}
              </div>
            ))}
          </div>

          {/* Exit */}
          <div className="zd-top-exit-info">
            <div className="zd-road-h" style={{ background: '#1a2d28', borderColor: '#4b9eff44' }}>
              <div className="zd-road-dashes-h">
                {[...Array(14)].map((_, i) => <div key={i} className="za-dash-h" style={{ background: '#4b9eff66' }} />)}
              </div>
              <div className="zd-exit-label-bottom">→ Обратно в Зону С → Шлагбаум → ВЫЕЗД</div>
            </div>
          </div>
        </div>
      )}

      {view === 'front' && (
        <div className="zd-front-view">
          {/* Road + alternating scale/container blocks */}
          <div className="zd-fv-row">
            {LAYOUT.map((item, i) => (
              <div key={i} className={`zd-fv-block ${item.type === 'scale' ? 'zd-fv-scale' : 'zd-fv-cont'}`}>
                {item.type === 'scale' ? (
                  <>
                    <div className="zd-fv-platform">
                      <span>⚖️</span>
                    </div>
                    <div className="zd-fv-lbl">{item.label}</div>
                    <div className="zd-fv-cam">📷 {item.cam}</div>
                  </>
                ) : (
                  <>
                    <div className="zd-fv-box">
                      <span>💻</span>
                    </div>
                    <div className="zd-fv-lbl">{item.label}</div>
                    <div className="zd-fv-person">{item.person}</div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="zd-fv-road-bottom">
            <div className="za-dash-h" /><div className="za-dash-h" /><div className="za-dash-h" />
            <span style={{ fontSize: '0.68rem', color: '#485f7a' }}>← ДОРОГА →</span>
            <div className="za-dash-h" /><div className="za-dash-h" /><div className="za-dash-h" />
          </div>
        </div>
      )}

      {/* Info */}
      <div className="zone3d-info">
        <div className="z3d-info-grid">
          <div className="z3d-info-card">
            <div className="z3d-ic-icon" style={{ color: '#93c5fd' }}>⚖️</div>
            <div>
              <div className="z3d-ic-title">3 весовых</div>
              <div className="z3d-ic-text">Полная тара. Нетто = Полная − Пустая</div>
            </div>
          </div>
          <div className="z3d-info-card">
            <div className="z3d-ic-icon" style={{ color: '#93c5fd' }}>💻</div>
            <div>
              <div className="z3d-ic-title">3 контейнера</div>
              <div className="z3d-ic-text">1С-специалисты. Данные → ЦУК&amp;Л Кыргызкомур</div>
            </div>
          </div>
          <div className="z3d-info-card">
            <div className="z3d-ic-icon" style={{ color: '#4b9eff' }}>📷</div>
            <div>
              <div className="z3d-ic-title">3 камеры</div>
              <div className="z3d-ic-text">По 1 на каждые весы. Фиксация номера ТС</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
