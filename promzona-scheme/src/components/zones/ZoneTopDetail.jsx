import { useState } from 'react'
import { CAMERAS } from '../../data/zones'
import '../ZoneDetail.css'

const COLOR = '#7ab8ff'

const VIEWS = ['Схема объектов', 'Столовая и СКУД', 'Оборудование']

export default function ZoneTopDetail() {
  const [view, setView] = useState(0)
  const cameras = CAMERAS.zoneTop || []

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
             Схема — Промзона верхняя
          </div>
          <div className="detail-section-body">
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
            }}>
              {/* Столовая */}
              <div style={{
                background: '#0e1422', border: `1px solid ${COLOR}44`,
                borderRadius: 10, padding: 12, gridColumn: '1 / -1',
              }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: COLOR, marginBottom: 8, display: 'flex', gap: 6, alignItems: 'center' }}>
                   СТОЛОВАЯ
                  <span style={{ fontSize: '0.6rem', color: '#485f7a', fontWeight: 400 }}>— оборудование Hikvision, СКУД</span>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <div style={{
                    flex: 1, minWidth: 100, background: '#111828', border: `1px solid ${COLOR}22`,
                    borderRadius: 6, padding: '8px 10px', textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.3rem', marginBottom: 4 }}></div>
                    <div style={{ fontSize: '0.68rem', color: '#f0f4ff', fontWeight: 600 }}>СКУД — вход</div>
                    <div style={{ fontSize: '0.6rem', color: '#485f7a' }}>T-CAM-1<br/>Hikvision терминал</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, flex: 2, minWidth: 120 }}>
                    <div style={{ background: '#090c16', border: `1px solid #1c2b44`, borderRadius: 6, padding: '6px 10px', fontSize: '0.65rem', color: '#7a98bc' }}>
                       Сотрудник прикладывает карту/биометрию → система списывает питание → отмечает в АИС
                    </div>
                    <div style={{ background: '#090c16', border: `1px solid #1c2b44`, borderRadius: 6, padding: '6px 10px', fontSize: '0.65rem', color: '#7a98bc' }}>
                       Зал столовой — обеденная зона для вахтового персонала
                    </div>
                  </div>
                
                </div>
              </div>

              {/* Общежития */}
            

              {/* Склады */}
              <div style={{ background: '#0e1422', border: `1px solid #1c2b44`, borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: COLOR, marginBottom: 8 }}> СКЛАДЫ</div>
                {[1, 2].map(n => (
                  <div key={n} style={{
                    background: '#111828', border: `1px solid #1c2b44`,
                    borderRadius: 6, padding: '8px 10px', marginBottom: 6,
                    display: 'flex', gap: 8, alignItems: 'center',
                  }}>
                    <div style={{ fontSize: '1.2rem' }}></div>
                    <div>
                      <div style={{ fontSize: '0.68rem', color: '#f0f4ff', fontWeight: 600 }}>Склад №{n}</div>
                      <div style={{ fontSize: '0.6rem', color: '#485f7a' }}> T-CAM-{n + 4} · Видеонаблюдение</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Промзона верхняя — общая информация</div>
              <div className="info-card-list">
                <div className="info-item">Инфраструктурный блок для обеспечения жизнедеятельности вахтового персонала</div>
                <div className="info-item">Все точки доступа оснащены терминалами СКУД Hikvision</div>
                <div className="info-item">Учёт питания в столовой автоматизирован — интеграция с АИС Кыргызкомур</div>
                <div className="info-item">Данные присутствия персонала синхронизируются с кадровой системой</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* СТОЛОВАЯ И СКУД */}
      {view === 1 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: COLOR }}>
             Столовая — Система СКУД и Hikvision
          </div>
          <div className="detail-section-body">
            <div style={{
              background: '#0d1428', border: `1px solid ${COLOR}44`, borderLeft: `3px solid ${COLOR}`,
              borderRadius: 6, padding: 12, marginBottom: 4,
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f0f4ff', marginBottom: 6 }}>
                 Система СКУД Hikvision в столовой
              </div>
              <div style={{ fontSize: '0.7rem', color: '#7a98bc', lineHeight: 1.7 }}>
                На входе и выходе столовой установлены биометрические терминалы Hikvision.
                Каждый сотрудник регистрирует вход по карте или биометрии. Система автоматически:
              </div>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  ' Отмечает сотрудника в журнале посещаемости',
                  ' Списывает стоимость питания с лицевого счёта',
                  ' Фиксирует время входа и выхода',
                  ' Формирует ежедневный отчёт по питанию',
                  ' Передаёт данные в Единую АИС Кыргызкомур',
                ].map((item, i) => (
                  <div key={i} style={{
                    fontSize: '0.68rem', color: '#7a98bc', padding: '4px 8px',
                    background: '#111828', borderRadius: 4,
                  }}>{item}</div>
                ))}
              </div>
            </div>

            {[
              {
                icon: '', title: 'Терминал СКУД — вход (T-CAM-1)',
                items: ['Hikvision биометрический/карточный считыватель', 'Распознавание лица / RFID карта', 'Высота установки: 1.4 м (уровень лица)', 'Интегрирован с системой учёта питания'],
              },
            
            ].map((block, i) => (
              <div key={i} style={{
                background: '#111828', border: `1px solid #1c2b44`,
                borderLeft: `3px solid ${COLOR}`, borderRadius: 8, padding: 12,
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: COLOR, marginBottom: 8 }}>
                  {block.icon} {block.title}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {block.items.map((item, j) => (
                    <div key={j} style={{ fontSize: '0.68rem', color: '#7a98bc', paddingLeft: 10, borderLeft: '1px solid #1c2b44' }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ОБОРУДОВАНИЕ */}
      {view === 2 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: COLOR }}>
             Оборудование Промзоны верхней
          </div>
          <div className="detail-section-body">
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 10,
            }}>
              {[
                { icon: '', label: '4×', sub: 'Терминалов СКУД Hikvision' },
                { icon: '', label: '4×', sub: 'Видеокамеры наблюдения' },
                { icon: '', label: '2×', sub: 'Корпуса общежитий' },
                { icon: '', label: '2×', sub: 'Производственных склада' },
                { icon: '', label: '1×', sub: 'Столовая персонала' },
                { icon: '', label: 'АИС', sub: 'Интеграция Кыргызкомур' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: '#0e1422', border: `1px solid #1c2b44`,
                  borderRadius: 6, padding: '10px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: 4 }}>{item.icon}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: COLOR, fontFamily: 'var(--font-mono)' }}>{item.label}</div>
                  <div style={{ fontSize: '0.62rem', color: '#485f7a', marginTop: 2 }}>{item.sub}</div>
                </div>
              ))}
            </div>

            {cameras.map(cam => (
              <div key={cam.id} className="cam-card">
                <div className="cam-icon" style={{ background: `${COLOR}22`, border: `1px solid ${COLOR}44`, color: COLOR }}>
                  {cam.type === 'skud' ? '' : ''}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f0f4ff', marginBottom: 2 }}>{cam.label}</div>
                  <div style={{ fontSize: '0.65rem', color: COLOR, marginBottom: 4, fontFamily: 'var(--font-mono)' }}>{cam.id}</div>
                  <div style={{ fontSize: '0.7rem', color: '#7a98bc' }}>{cam.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
