import { useState } from 'react'
import { LANES, CAMERAS } from '../../data/zones'
import '../ZoneDetail.css'

const VIEWS = ['Схема сверху', 'Полосы детально', 'Логика распределения', 'Камеры и шлагбаумы']

const LANE_COLORS = {
  1: '#4b9eff', 2: '#4b9eff', 3: '#4b9eff',
  4: '#4b9eff', 5: '#4b9eff',
}

export default function ZoneBDetail() {
  const [view, setView] = useState(0)
  const [selectedLane, setSelectedLane] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      <div className="view-tabs">
        {VIEWS.map((v, i) => (
          <button key={i}
            className={`view-tab ${view === i ? 'active' : ''}`}
            style={{ '--tab-color': '#60a5fa' }}
            onClick={() => setView(i)}
          >{v}</button>
        ))}
      </div>

      {/* TOP VIEW */}
      {view === 0 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#60a5fa' }}>
             Схема сверху — Зона Б (5 полос)
          </div>
          <div className="detail-section-body">
            <div className="schema-view">
              <div style={{ fontSize: '0.68rem', color: '#485f7a', marginBottom: 8 }}>&#8592; Въезд из Зоны А</div>
              {LANES.map(lane => (
                <div key={lane.id} style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  background: '#1a1e2e', border: `1px solid ${LANE_COLORS[lane.id]}44`,
                  borderLeft: `3px solid ${LANE_COLORS[lane.id]}`,
                  borderRadius: 6, padding: '5px 8px', width: '100%',
                  cursor: 'pointer',
                }}
                  onClick={() => setSelectedLane(lane.id)}
                >
                  {/* Номер */}
                  <span style={{ fontSize: '0.65rem', color: LANE_COLORS[lane.id], fontWeight: 700, minWidth: 14 }}>{lane.id}</span>

                  {/* Въездной шлагбаум */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1, minWidth: 30 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
                      <div style={{ width: 4, height: 16, background: '#22c55e99', borderRadius: '2px 2px 0 0', flexShrink: 0 }} />
                      <div style={{ width: 20, height: 4, background: '#22c55e', borderRadius: '0 2px 2px 0', boxShadow: '0 0 5px #22c55e99', marginTop: 2 }} />
                    </div>
                    <div style={{ fontSize: '0.45rem', color: '#22c55e', lineHeight: 1, paddingLeft: 1 }}>въезд</div>
                  </div>

                  {/* Название */}
                  <span style={{ flex: 1, fontSize: '0.65rem', color: '#7a98bc', padding: '0 4px' }}>{lane.purpose}</span>

                  {/* Машины-заглушки */}
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} style={{
                        width: 12, height: 18, background: '#111828',
                        border: `1px solid ${LANE_COLORS[lane.id]}33`,
                        borderRadius: 2,
                      }} />
                    ))}
                  </div>

                  {/* Выездной шлагбаум */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1, minWidth: 30 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
                      <div style={{ width: 4, height: 16, background: '#f59e0b99', borderRadius: '2px 2px 0 0', flexShrink: 0 }} />
                      <div style={{ width: 20, height: 4, background: '#f59e0b', borderRadius: '0 2px 2px 0', boxShadow: '0 0 5px #f59e0b99', marginTop: 2 }} />
                    </div>
                    <div style={{ fontSize: '0.45rem', color: '#f59e0b', lineHeight: 1, paddingLeft: 1 }}>выезд</div>
                  </div>

                  <span style={{ fontSize: '0.55rem', color: '#485f7a', marginLeft: 2 }}>&#8594; C</span>
                </div>
              ))}
              <div style={{ fontSize: '0.68rem', color: '#485f7a', marginTop: 8 }}>→ Выход на Зону С (по вызову)</div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Вместимость Зоны Б</div>
              <div className="info-card-list">
                <div className="info-item">До 35 машин одновременно (с прицепом — от 25 до 35)</div>
                <div className="info-item">5 полос по ~ 7 машин каждая</div>
                <div className="info-item">На каждую полосу — свой въездной и выездной шлагбаум</div>
                <div className="info-item">Нажмите на строку полосы выше для деталей</div>
              </div>
            </div>

            {selectedLane && (
              <div style={{
                background: '#1a1e35', border: `1px solid ${LANE_COLORS[selectedLane]}66`,
                borderRadius: 8, padding: 12, marginTop: 4,
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: LANE_COLORS[selectedLane], marginBottom: 8 }}>
                  Полоса {selectedLane} — {LANES[selectedLane-1].purpose}
                </div>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <div className="schema-block barrier" style={{ fontSize: '0.62rem' }}> Въезд</div>
                  <div className="schema-arrow">→</div>
                  <div className="schema-block cam" style={{ fontSize: '0.62rem' }}> ANPR</div>
                  <div className="schema-arrow">→</div>
                  {[...Array(6)].map((_, i) => (
                    <div key={i} style={{
                      width: 20, height: 28, background: '#111828',
                      border: `1px solid ${LANE_COLORS[selectedLane]}44`,
                      borderRadius: 2, fontSize: '0.55rem', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', color: '#485f7a',
                    }}></div>
                  ))}
                  <div className="schema-arrow">→</div>
                  <div className="schema-block barrier" style={{ fontSize: '0.62rem' }}> Выезд</div>
                </div>
                <button
                  onClick={() => setSelectedLane(null)}
                  style={{ background: 'none', border: 'none', color: '#485f7a', fontSize: '0.7rem', cursor: 'pointer', marginTop: 8 }}
                > Закрыть</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* LANES DETAIL */}
      {view === 1 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#60a5fa' }}>
             Полосы и назначение
          </div>
          <div className="detail-section-body">
            {LANES.map(lane => (
              <div key={lane.id} style={{
                background: '#1e2235',
                border: `1px solid ${LANE_COLORS[lane.id]}44`,
                borderLeft: `3px solid ${LANE_COLORS[lane.id]}`,
                borderRadius: 8, padding: 12,
              }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 1.1 + 'rem' }}>{lane.icon}</span>
                  <span style={{ fontWeight: 700, color: LANE_COLORS[lane.id], fontSize: '0.82rem' }}>
                    Полоса {lane.id} — Очередь {lane.id}А
                  </span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#7a98bc', marginBottom: 6 }}>
                  <strong style={{ color: '#f0f4ff' }}>Назначение:</strong> {lane.purpose}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#7a98bc' }}>
                  <strong style={{ color: '#f0f4ff' }}>Формат талона:</strong>{' '}
                  <span style={{ fontFamily: 'monospace', color: LANE_COLORS[lane.id] }}>
                    Б-{lane.id}-001, Б-{lane.id}-002 ...
                  </span>
                </div>
                <div style={{ marginTop: 8, display: 'flex', gap: 4 }}>
                  <div className="schema-block barrier" style={{ fontSize: '0.6rem' }}> Въезд Б-ШЛ-{lane.id}В</div>
                  <div className="schema-block cam" style={{ fontSize: '0.6rem' }}> Б-CAM-{lane.id}</div>
                  <div className="schema-block barrier" style={{ fontSize: '0.6rem' }}> Выезд Б-ШЛ-{lane.id}Е</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LOGIC */}
      {view === 2 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#60a5fa' }}>
             Логика распределения по полосам
          </div>
          <div className="detail-section-body">
            <div className="schema-view">
              <div className="schema-block" style={{ fontSize: '0.68rem', marginBottom: 4 }}>Система получает накладную с назначением</div>
              <div className="schema-arrow">↓</div>
              <div className="schema-row">
                <div className="schema-block cam" style={{ fontSize: '0.65rem' }}>ТОП-база?</div>
                <div className="schema-block" style={{ background: '#4b9eff22', borderColor: '#4b9eff', color: '#93c5fd', fontSize: '0.65rem' }}>ТЭЦ?</div>
                <div className="schema-block" style={{ background: '#4b9eff22', borderColor: '#4b9eff', color: '#93c5fd', fontSize: '0.65rem' }}>Соц/МСУ/Служ.?</div>
              </div>
              <div className="schema-arrow">↓</div>
              <div className="schema-row">
                <div style={{ fontSize: '0.62rem', color: '#7a98bc', textAlign: 'center', maxWidth: 220, lineHeight: 1.5 }}>
                  Полосы 1→2→3 (ТОП) / Полоса 4 (ТЭЦ) / Полоса 5 (Соц/МСУ/Служ.)
                </div>
              </div>
              <div className="schema-arrow">↓</div>
              <div className="schema-block" style={{ fontSize: '0.65rem' }}>Если приоритетная полоса заполнена → следующая по назначению</div>
              <div className="schema-arrow">↓</div>
              <div className="schema-block" style={{ fontSize: '0.65rem' }}>При освобождении → снова заполнять с первой приоритетной</div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Правила заполнения ТОП-баз (полосы 1–3)</div>
              <div className="info-card-list">
                <div className="info-item">По умолчанию направление — Полоса 1</div>
                <div className="info-item">Если Полоса 1 полна (≥7 машин) → Полоса 2</div>
                <div className="info-item">Если Полоса 2 полна → Полоса 3</div>
                <div className="info-item">Когда в Полосе 1 освобождается место → следующую ТОП-базу направить туда</div>
                <div className="info-item">FIFO: первым прибыл — первым вызван</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Электронная очередь — формат талона</div>
              <div className="info-card-list">
                <div className="info-item">Формат: [Зона]-[Полоса]-[Порядковый № в полосе]</div>
                <div className="info-item">Пример: Б-1-007 — Зона Б, Полоса 1, машина №7</div>
                <div className="info-item">Время постановки в очередь фиксируется ANPR при въезде в полосу</div>
                <div className="info-item">Все данные видны оператору СБ в Зоне С</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CAMERAS */}
      {view === 3 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#60a5fa' }}>
             Камеры и шлагбаумы Зоны Б
          </div>
          <div className="detail-section-body">
            {CAMERAS.zoneB.map(cam => (
              <div key={cam.id} className="cam-card">
                <div className="cam-icon anpr"></div>
                <div>
                  <div className="cam-id">{cam.id}</div>
                  <div className="cam-name">{cam.label}</div>
                  <div className="cam-desc">{cam.desc}</div>
                </div>
              </div>
            ))}

            {LANES.map(lane => (
              <div key={lane.id} className="barrier-card">
                <div className="barrier-icon"></div>
                <div>
                  <div className="barrier-name">Шлагбаумы Полосы {lane.id} — Б-ШЛ-{lane.id}В и Б-ШЛ-{lane.id}Е</div>
                  <div className="barrier-desc">
                    Въездной Б-ШЛ-{lane.id}В открывается по сигналу системы после выдачи талона с направлением в Полосу {lane.id} ({lane.purpose}). ANPR фиксирует время въезда.
                    Выездной Б-ШЛ-{lane.id}Е открывается по команде оператора СБ из Зоны С.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
