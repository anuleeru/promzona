import { useState } from 'react'
import { CAMERAS } from '../../data/zones'
import '../ZoneDetail.css'

const VIEWS = ['Схема сверху', 'Процесс взвешивания', 'Камеры и системы']

export default function ZoneDDetail() {
  const [view, setView] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="view-tabs">
        {VIEWS.map((v, i) => (
          <button key={i}
            className={`view-tab ${view === i ? 'active' : ''}`}
            style={{ '--tab-color': '#F59E0B' }}
            onClick={() => setView(i)}
          >{v}</button>
        ))}
      </div>

      {/* TOP VIEW */}
      {view === 0 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#F59E0B' }}>
            🔭 Схема сверху — Зона Д (3 весовых пункта)
          </div>
          <div className="detail-section-body">
            <div className="schema-view">
              <div style={{ fontSize: '0.68rem', color: '#666d99', marginBottom: 8 }}>
                ← Машины прибывают из Зоны С (загруженные углём)
              </div>

              {[1, 2, 3].map(n => (
                <div key={n} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: '#1a1e2e', border: '1px dashed #F59E0B55',
                  borderLeft: '3px solid #F59E0B',
                  borderRadius: 6, padding: '8px 12px', width: '100%',
                }}>
                  <span style={{ fontSize: '1rem' }}>⚖️</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F59E0B' }}>
                      Весы №{n} — Д-ВЕС-{n}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: '#9ba3c7', marginTop: 2 }}>
                      1С-специалист · Фиксация полной тары · Расчёт нетто
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <div className="schema-block cam" style={{ fontSize: '0.6rem' }}>📷 Д-CAM-{n}</div>
                    <div className="schema-block barrier" style={{ fontSize: '0.6rem' }}>🚧 Шлагбаум</div>
                  </div>
                </div>
              ))}

              <div style={{ fontSize: '0.68rem', color: '#666d99', marginTop: 8, textAlign: 'center' }}>
                ↓ После взвешивания → возврат в Зону С → финальный выезд
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Расположение Зоны Д</div>
              <div className="info-card-list">
                <div className="info-item">3 контейнера и 3 весовых площадки</div>
                <div className="info-item">В 40–50 метрах за Зоной С</div>
                <div className="info-item">Машины въезжают задним ходом на весы для удобства загрузки</div>
                <div className="info-item">Каждый весовой пункт — независимый</div>
                <div className="info-item">Рядом — 3 выноса / разгрузочные порталы</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WEIGHING PROCESS */}
      {view === 1 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#F59E0B' }}>
            ⚖️ Процесс взвешивания полной тары
          </div>
          <div className="detail-section-body">
            <div className="schema-view">
              <div className="schema-row">
                <div className="schema-block" style={{ fontSize: '0.65rem' }}>🚛 Машина загружена углём</div>
              </div>
              <div className="schema-arrow">↓</div>
              <div className="schema-row">
                <div className="schema-block" style={{ fontSize: '0.65rem' }}>Въезжает задним ходом на весы в Зоне Д</div>
              </div>
              <div className="schema-arrow">↓</div>
              <div className="schema-row">
                <div className="schema-block cam" style={{ fontSize: '0.65rem' }}>📷 ANPR фиксирует номер ТС</div>
              </div>
              <div className="schema-arrow">↓</div>
              <div className="schema-row">
                <div className="schema-block scale" style={{ fontSize: '0.65rem' }}>⚖️ Фиксируется ПОЛНЫЙ ВЕС</div>
              </div>
              <div className="schema-arrow">↓</div>
              <div className="schema-row">
                <div className="schema-block office" style={{ fontSize: '0.65rem' }}>
                  💻 1С-специалист вносит в накладную:<br/>
                  Полная тара / Нетто = Полн. − Пуст.
                </div>
              </div>
              <div className="schema-arrow">↓</div>
              <div className="schema-row">
                <div className="schema-block" style={{ fontSize: '0.65rem', borderColor: '#10B981', color: '#6ee7b7', background: '#071a10' }}>
                  ✅ Данные → ЦУК&Л Кыргызкомур
                </div>
              </div>
              <div className="schema-arrow">↓</div>
              <div className="schema-row">
                <div className="schema-block" style={{ fontSize: '0.65rem' }}>🚛 Машина выезжает → Зона С → Финальный шлагбаум</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Формула расчёта нетто-веса</div>
              <div style={{ padding: '10px', background: '#0e1220', border: '1px solid #F59E0B44', borderRadius: 6, marginTop: 4 }}>
                <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#F59E0B', textAlign: 'center' }}>
                  Нетто = Полная тара − Пустая тара
                </div>
                <div style={{ fontSize: '0.65rem', color: '#9ba3c7', textAlign: 'center', marginTop: 6 }}>
                  Пустая тара — из накладной Зоны А<br/>
                  Полная тара — с весов Зоны Д
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Что записывается в финальную накладную</div>
              <div className="info-card-list">
                <div className="info-item">Регистрационный номер ТС</div>
                <div className="info-item">QR-ID водителя</div>
                <div className="info-item">Вес пустой тары (из Зоны А)</div>
                <div className="info-item">Вес полной тары (из Зоны Д)</div>
                <div className="info-item">Нетто-вес угля</div>
                <div className="info-item">Назначение (ТОП-база / ТЭЦ / Соц / Служебный)</div>
                <div className="info-item">Талон очереди и номер полосы</div>
                <div className="info-item">Время начала и конца рейса</div>
                <div className="info-item">Фотографии транспорта (2 ракурса)</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CAMERAS */}
      {view === 2 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#F59E0B' }}>
            📷 Камеры и системы Зоны Д
          </div>
          <div className="detail-section-body">
            {CAMERAS.zoneD.map(cam => (
              <div key={cam.id} className="cam-card">
                <div className="cam-icon weight">⚖️</div>
                <div>
                  <div className="cam-id">{cam.id}</div>
                  <div className="cam-name">{cam.label}</div>
                  <div className="cam-desc">{cam.desc}</div>
                </div>
              </div>
            ))}

            {[1, 2, 3].map(n => (
              <div key={n} className="barrier-card">
                <div className="barrier-icon">🚧</div>
                <div>
                  <div className="barrier-name">Шлагбаум весового пункта №{n} — Д-ШЛ-{n}</div>
                  <div className="barrier-desc">
                    Открывается при подъезде к весам. Закрывается после взвешивания и записи данных 1С-специалистом. Система блокирует повторное взвешивание того же талона.
                  </div>
                </div>
              </div>
            ))}

            <div className="info-card">
              <div className="info-card-title">Интеграция с системой Кыргызкомур</div>
              <div className="info-card-list">
                <div className="info-item">После нажатия 1С «Сохранить» — данные уходят в ЦУК&Л</div>
                <div className="info-item">Система отмечает рейс как «Взвешен. Ожидает выезда»</div>
                <div className="info-item">После выезда через Зону С → статус: «РЕЙС ЗАВЕРШЁН»</div>
                <div className="info-item">Конечная база данных получает полную запись о рейсе</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
