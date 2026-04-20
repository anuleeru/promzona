import { useState } from 'react'
import '../ZoneDetail.css'

const COLOR = '#4b9eff'
const VIEWS = ['Схема зоны', 'Логика работы']

export default function ZoneEDetail() {
  const [view, setView] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      <div className="view-tabs">
        {VIEWS.map((v, i) => (
          <button key={i}
            className={`view-tab ${view === i ? 'active' : ''}`}
            style={{ '--tab-color': COLOR }}
            onClick={() => setView(i)}
          >{v}</button>
        ))}
      </div>

      {/* СХЕМА */}
      {view === 0 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: COLOR }}>
            ⛏️ Схема — Зона Е «Карьер и погрузка»
          </div>
          <div className="detail-section-body">
            <div className="schema-view">
              <div style={{ fontSize: '0.68rem', color: '#485f7a', marginBottom: 8 }}>← Въезд из Зоны Ожидания</div>

              <div style={{
                background: '#090c16', border: `1px solid ${COLOR}33`,
                borderRadius: 10, padding: 14, display: 'flex', gap: 12, flexWrap: 'wrap',
              }}>
                <div style={{ flex: 1, minWidth: 120 }}>
                  <div style={{ fontSize: '0.65rem', color: COLOR, fontWeight: 700, marginBottom: 8 }}>⛏️ КАРЬЕР</div>
                  {[
                    { label: 'Экскаватор №1', icon: '🏗️' },
                    { label: 'Экскаватор №2', icon: '🏗️' },
                  ].map((ex, i) => (
                    <div key={i} style={{
                      background: '#111828', border: `1px solid ${COLOR}22`,
                      borderRadius: 6, padding: '6px 10px', marginBottom: 6,
                      fontSize: '0.68rem', color: '#7a98bc', display: 'flex', gap: 6, alignItems: 'center',
                    }}>
                      <span style={{ fontSize: '1.1rem' }}>{ex.icon}</span>
                      <div>
                        <div style={{ color: '#f0f4ff', fontWeight: 600 }}>{ex.label}</div>
                        <div style={{ fontSize: '0.6rem', color: '#485f7a' }}>Добыча угля</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ flex: 1, minWidth: 120 }}>
                  <div style={{ fontSize: '0.65rem', color: COLOR, fontWeight: 700, marginBottom: 8 }}>🚛 ЗОНА ПОГРУЗКИ</div>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} style={{
                      background: '#0e1422', border: `1px solid ${COLOR}22`,
                      borderRadius: 4, padding: '4px 8px', marginBottom: 4,
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                      <span style={{ fontSize: '0.85rem' }}>🚛</span>
                      <div style={{ flex: 1, height: 8, background: '#1c2b44', borderRadius: 2, position: 'relative' }}>
                        <div style={{ width: `${40 + i * 20}%`, height: '100%', background: `${COLOR}66`, borderRadius: 2 }} />
                      </div>
                      <span style={{ fontSize: '0.58rem', color: '#485f7a' }}>погрузка</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ fontSize: '0.68rem', color: '#485f7a', marginTop: 8, textAlign: 'right' }}>→ в Зону Д (взвешивание)</div>
            </div>

            <div className="info-card">
              <div className="info-card-title">О Зоне Е</div>
              <div className="info-card-list">
                <div className="info-item">Основная производственная зона — добыча и погрузка угля</div>
                <div className="info-item">2 экскаваторных комплекса с одновременной погрузкой нескольких машин</div>
                <div className="info-item">Камеры видеонаблюдения фиксируют весь процесс погрузки</div>
                <div className="info-item">После погрузки транспорт направляется в Зону Д для взвешивания</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ЛОГИКА */}
      {view === 1 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: COLOR }}>
            ⚙️ Логика работы
          </div>
          <div className="detail-section-body">
            {[
              { n: 1, icon: '🚛', title: 'Въезд в карьерную зону', desc: 'Транспортное средство прибывает из Зоны Ожидания (Кой-Коро) в карьерную зону.' },
              { n: 2, icon: '🏗️', title: 'Направление к экскаватору', desc: 'Машина направляется к назначенному экскаватору согласно талону.' },
              { n: 3, icon: '⛏️', title: 'Погрузка угля', desc: 'Экскаватор производит погрузку угля в кузов. Камеры видеофиксации записывают весь процесс.' },
              { n: 4, icon: '📊', title: 'Фиксация данных погрузки', desc: 'Объём и состав погрузки фиксируются в системе и привязываются к накладной в АИС Кыргызкомур.' },
              { n: 5, icon: '⚖️', title: 'Маршрут в Зону Д', desc: 'Загруженный транспорт направляется в Зону Д для взвешивания полной тары и финального оформления рейса.' },
            ].map(step => (
              <div key={step.n} style={{
                background: '#111828', border: `1px solid ${COLOR}22`,
                borderLeft: `3px solid ${COLOR}`, borderRadius: 6, padding: '10px 12px',
                display: 'flex', gap: 10, alignItems: 'flex-start',
              }}>
                <div style={{
                  minWidth: 24, height: 24, borderRadius: '50%',
                  background: `${COLOR}22`, border: `1px solid ${COLOR}66`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.65rem', color: COLOR, fontWeight: 700, fontFamily: 'var(--font-mono)',
                }}>{step.n}</div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f0f4ff', marginBottom: 3 }}>
                    {step.icon} {step.title}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#7a98bc', lineHeight: 1.5 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}