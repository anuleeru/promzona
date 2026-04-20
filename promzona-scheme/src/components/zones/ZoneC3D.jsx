import { useState } from 'react'
import Tooltip from '../Tooltip'
import './Zone3D.css'
import './ZoneC3D.css'

const VIEWS = [
  { id: 'top',   label: '🔭 Вид сверху' },
  { id: 'front', label: '🏗️ Вид спереди' },
]

export default function ZoneC3D() {
  const [view, setView] = useState('top')

  return (
    <div className="zone3d zone3d-full">
      <div className="zm-view-tabs">
        {VIEWS.map(v => (
          <button
            key={v.id}
            className={`zm-view-tab ${view === v.id ? 'active' : ''}`}
            style={{ '--tab-color': '#4b9eff', '--tab-bg': '#0a1020' }}
            onClick={() => setView(v.id)}
          >{v.label}</button>
        ))}
      </div>

      {view === 'top' && (
        <div className="zc-top-view">
          {/* Entry from Zone B (top) */}
          <div className="zc-top-entry">
            <div className="zc-top-road-h">
              <div className="zc-road-dashes-h">
                {[...Array(14)].map((_, i) => <div key={i} className="za-dash-h" />)}
              </div>
              <div className="zc-top-entry-label">↓ Въезд из Зоны Б (по вызову оператора)</div>
              <div className="zc-top-truck-in">🚛↓</div>
            </div>
          </div>

          {/* Single container — 2 floors, vertical */}
          <Tooltip title="🏢 Контейнер (2 этажа)" text="Двухэтажный контейнер. LED-экран на фасаде. 1 этаж: Оператор СБ, Охранник, камеры. 2 этаж: Зона отдыха." side="bottom">
            <div className="zc-top-container zc-top-single">
              <div className="zc-top-led-strip">
                <div className="zc-led-glow" />
                <span className="zc-led-text">📺 LED · А 745 ВКР · ПОДЪЕХАТЬ</span>
              </div>
              <div className="zc-top-fl">
                <div className="zc-top-fl-label">2 этаж</div>
                <div className="zc-top-rooms-row">
                  <div className="zc-top-room">💤 Зона отдыха</div>
                </div>
              </div>
              <div className="zc-top-fl-divider" />
              <div className="zc-top-fl">
                <div className="zc-top-fl-label">1 этаж</div>
                <div className="zc-top-rooms-row">
                  <div className="zc-top-room">🖥️ Оператор СБ<br/><span className="zc-small">Вызов по FIFO</span></div>
                  <div className="zc-top-room">🛡️ Охранник СБ-2<br/><span className="zc-small">Проверка</span></div>
                  <div className="zc-top-room">📷 ANPR + QR<br/><span className="zc-small">Камеры</span></div>
                </div>
              </div>
              <div className="zc-top-ct-label">КОНТЕЙНЕР (2 ЭТАЖА)</div>
            </div>
          </Tooltip>

          {/* Exit barrier */}
          <Tooltip title="🚧 Шлагбаум С-ШЛ-1" text="Двойная верификация ANPR+QR. Ручная кнопка у охранника. После выезда — на Трассу 6 (встречка, вне Зон А и Б)." side="top">
            <div className="za-barrier-h zc-barrier-exit">
              <div className="za-barrier-arm-h" style={{ background: 'repeating-linear-gradient(90deg, #4b9eff 0px, #4b9eff 12px, #fff 12px, #fff 20px)' }} />
              <div className="za-barrier-label-h" style={{ color: '#4b9eff' }}>🚧 ВЫЕЗД С-ШЛ-1</div>
            </div>
          </Tooltip>

          {/* Exit road — Lane 7 */}
          <div className="zc-top-exit">
            <div className="zc-top-road-h zc-lane7">
              <div className="zc-road-dashes-h">
                {[...Array(14)].map((_, i) => <div key={i} className="za-dash-h" style={{ background: '#4b9eff66' }} />)}
              </div>
              <div className="zc-top-exit-label">↓ Трасса 6 (встречка) → вне Зон А и Б · или → в Зону Д</div>
            </div>
          </div>
        </div>
      )}

      {view === 'front' && (
        <div className="zc-front-view">
          {/* Left — entry road from Zone B */}
          <div className="zc-fv-entry">
            <div className="zc-fv-road-v">
              <div className="zc-fv-road-label">← Из Зоны Б</div>
              <div className="zc-fv-truck">🚛→</div>
            </div>
          </div>

          {/* Center — container 2 floors, LED on left side of 2nd floor */}
          <div className="zc-fv-container">
            {/* 2nd floor — LED screen (70% left) + rest zone (30% right) */}
            <div className="zc-fv-floor zc-fv-floor-2">
              <div className="zc-fv-floor-label">2 этаж</div>
              <div className="zc-fv-floor-content">
                <div className="zc-fv-led">
                  <div className="led-scanline" />
                  <div className="zc-fv-led-row1">
                    <span className="zc-fv-led-title">ЭЛЕКТРОННАЯ ОЧЕРЕДЬ</span>
                    <span className="zc-fv-led-num">🚛 А 745 ВКР</span>
                    <span className="zc-fv-led-info">ТАЛОН Б-1-007 · ПОЛОСА 1 · ПОДЪЕХАТЬ</span>
                  </div>
                  <div className="zc-fv-led-queues">
                    <div className="zc-fv-led-q">
                      <div className="zc-fv-led-q-title">ТОП-Базы</div>
                      <div className="zc-fv-led-q-count">42</div>
                      <div className="zc-fv-led-q-sub">в очереди</div>
                    </div>
                    <div className="zc-fv-led-q-div" />
                    <div className="zc-fv-led-q">
                      <div className="zc-fv-led-q-title">ТЭЦ</div>
                      <div className="zc-fv-led-q-count">18</div>
                      <div className="zc-fv-led-q-sub">в очереди</div>
                    </div>
                    <div className="zc-fv-led-q-div" />
                    <div className="zc-fv-led-q">
                      <div className="zc-fv-led-q-title">Соц/МСУ</div>
                      <div className="zc-fv-led-q-count">7</div>
                      <div className="zc-fv-led-q-sub">в очереди</div>
                    </div>
                  </div>
                </div>
                <div className="zc-fv-section zc-fv-rest-section">
                  <div className="zc-fv-section-icon">💤</div>
                  <div>Зона<br/>отдыха</div>
                </div>
              </div>
            </div>
            {/* 1st floor — operator + guard */}
            <div className="zc-fv-floor zc-fv-floor-1">
              <div className="zc-fv-floor-label">1 этаж</div>
              <div className="zc-fv-floor-rooms">
                <div className="zc-fv-section">
                  <div className="zc-fv-section-icon">🖥️</div>
                  <div>Оператор СБ<br/><span className="zc-small">Кнопка вызова</span></div>
                </div>
                <div className="zc-fv-divider" />
                <div className="zc-fv-section">
                  <div className="zc-fv-section-icon">🛡️</div>
                  <div>Охранник СБ-2<br/><span className="zc-small">Финал. проверка</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — exit road with barrier */}
          <div className="zc-fv-exit">
            <div className="zc-fv-barrier">
              <div className="za-fb-pole" style={{ height: 80, background: 'linear-gradient(180deg, #4b9eff, #064e3b)' }} />
              <div className="za-fb-arm" style={{ background: 'repeating-linear-gradient(90deg, #4b9eff 0px, #4b9eff 8px, #fff 8px, #fff 14px)' }} />
              <div className="za-fb-label" style={{ color: '#4b9eff' }}>🚧 ВЫЕЗД</div>
            </div>
            <div className="zc-fv-road-v">
              <div className="zc-fv-road-label" style={{ color: '#4b9eff' }}>→ Трасса 6</div>
            </div>
          </div>
        </div>
      )}

      {/* Info grid */}
      <div className="zone3d-info">
        <div className="z3d-info-grid">
          <div className="z3d-info-card">
            <div className="z3d-ic-icon" style={{ color: '#4b9eff' }}>📺</div>
            <div>
              <div className="z3d-ic-title">LED-экран</div>
              <div className="z3d-ic-text">На фасаде верхнего контейнера. Номер ТС + талон + «ПОДЪЕХАТЬ»</div>
            </div>
          </div>
          <div className="z3d-info-card">
            <div className="z3d-ic-icon" style={{ color: '#4b9eff' }}>🖥️</div>
            <div>
              <div className="z3d-ic-title">Оператор СБ</div>
              <div className="z3d-ic-text">Вызывает по FIFO. Машины из Зоны Б проезжают сверху</div>
            </div>
          </div>
          <div className="z3d-info-card">
            <div className="z3d-ic-icon" style={{ color: '#93c5fd' }}>🛡️</div>
            <div>
              <div className="z3d-ic-title">Охранник СБ-2</div>
              <div className="z3d-ic-text">Финальная проверка. ANPR + QR. Кнопка шлагбаума</div>
            </div>
          </div>
          <div className="z3d-info-card">
            <div className="z3d-ic-icon" style={{ color: '#60a5fa' }}>🛣️</div>
            <div>
              <div className="z3d-ic-title">Трасса 6 (встречка)</div>
              <div className="z3d-ic-text">Выезд из Зоны С. Вне Зон А и Б. Или в Зону Д</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
