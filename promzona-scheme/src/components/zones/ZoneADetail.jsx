import { useState } from 'react'
import { CAMERAS } from '../../data/zones'
import '../ZoneDetail.css'

const VIEWS = ['Схема сверху', 'Вид спереди', 'Вид сбоку', 'Камеры и системы']

export default function ZoneADetail() {
  const [view, setView] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      {/* View selector */}
      <div className="view-tabs">
        {VIEWS.map((v, i) => (
          <button
            key={i}
            className={`view-tab ${view === i ? 'active' : ''}`}
            style={{ '--tab-color': '#3B82F6' }}
            onClick={() => setView(i)}
          >{v}</button>
        ))}
      </div>

      {/* TOP VIEW */}
      {view === 0 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#3B82F6' }}>
            🔭 Схема сверху — Зона А
          </div>
          <div className="detail-section-body">
            <div className="schema-view">
              <div className="schema-row">
                <div className="schema-block cam">📷 ANPR камера</div>
                <div className="schema-block cam">📱 QR-сканер (столб)</div>
              </div>
              <div className="schema-arrow">↓</div>
              <div className="schema-row">
                <div className="schema-block barrier">🚧 Въездной шлагбаум</div>
              </div>
              <div className="schema-arrow">↓</div>
              <div className="schema-row">
                <div className="schema-block cam">📷 Боковая камера<br/>(контейнер 1, 1 эт.)</div>
                <div className="schema-block scale" style={{ minWidth: 90 }}>⚖️ ВЕСЫ<br/>пустой тары</div>
                <div className="schema-block office">💻 1С-специалист<br/>(контейнер П, 1 эт.)</div>
              </div>
              <div className="schema-row" style={{ marginTop: 2 }}>
                <div className="schema-block cam">� Верхняя камера<br/>(контейнер 1, 2 эт.)</div>
                <div style={{ width: 90 }} />
                <div className="schema-block office">🖥️ Офис пропусков<br/>(контейнер П, 2 эт.)</div>
              </div>
              <div className="schema-arrow">↓</div>
              <div className="schema-row">
                <div className="schema-block barrier">� Выездной шлагбаум → Зона Б</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Площадь зоны</div>
              <div className="info-card-list">
                <div className="info-item">4 контейнера по 40 тонн (морских 40-футовых)</div>
                <div className="info-item">2 этажа с левой стороны + 2 этажа с правой стороны</div>
                <div className="info-item">Между блоками — площадка для весов и транспорта</div>
                <div className="info-item">Вмещает 1 грузовой тонар с прицепом (до 40 м длины)</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FRONT VIEW */}
      {view === 1 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#3B82F6' }}>
            🏗️ Вид спереди — въездная сторона
          </div>
          <div className="detail-section-body">
            <div className="schema-view">
              {/* Left block */}
              <div className="schema-row" style={{ gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                  <div className="schema-block cam" style={{ width: 110 }}>2 эт. — Серверная / Офис пропусков</div>
                  <div className="schema-block cam" style={{ width: 110 }}>1 эт. — Камеры ANPR + Фото</div>
                  <div style={{ fontSize: '0.6rem', color: '#666d99' }}>ЛЕВЫЙ БЛОК</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ fontSize: '0.65rem', color: '#10B981', marginBottom: 4 }}>Площадка</div>
                  <div className="schema-block scale" style={{ width: 80 }}>⚖️ ВЕСЫ</div>
                  <div style={{ fontSize: '0.6rem', color: '#666d99', textAlign: 'center', width: 80 }}>🚛🚛 тонар</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                  <div className="schema-block office" style={{ width: 110 }}>2 эт. — Склад / Серверная</div>
                  <div className="schema-block office" style={{ width: 110 }}>1 эт. — 1С-специалист</div>
                  <div style={{ fontSize: '0.6rem', color: '#666d99' }}>ПРАВЫЙ БЛОК</div>
                </div>
              </div>

              <div style={{ width: '100%', height: 1, background: '#2e3450', margin: '8px 0' }} />

              <div className="schema-row">
                <div className="schema-block barrier">🚧 Въездной шлагбаум</div>
                <div style={{ fontSize: '0.6rem', color: '#666d99' }}>← 1 полоса ←</div>
              </div>
            </div>

            <div className="floor-diagram">
              <div className="floor-label">Левый контейнер — 2 уровня</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div className="floor-rooms">
                  <div className="floor-room highlight">2 эт.<br/>Серверная (мал. часть)<br/>Офис специалиста пропусков</div>
                </div>
                <div className="floor-rooms">
                  <div className="floor-room highlight">1 эт.<br/>Камеры фотофиксации (бок. + верх)<br/>Техническое оборудование</div>
                </div>
              </div>
            </div>

            <div className="floor-diagram">
              <div className="floor-label">Правый контейнер — 2 уровня</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div className="floor-rooms">
                  <div className="floor-room" style={{ borderColor: '#F59E0B', color: '#fcd34d', background: '#251d0e' }}>2 эт.<br/>Склад (осн. часть)<br/>Серверная (мал. часть)</div>
                </div>
                <div className="floor-rooms">
                  <div className="floor-room" style={{ borderColor: '#F59E0B', color: '#fcd34d', background: '#251d0e' }}>1 эт.<br/>1С-специалист · Весовщик<br/>Выдача талонов и накладных</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SIDE VIEW */}
      {view === 2 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#3B82F6' }}>
            📐 Вид сбоку — расположение оборудования
          </div>
          <div className="detail-section-body">
            <div className="schema-view">
              <div style={{ fontSize: '0.7rem', color: '#666d99', marginBottom: 8 }}>Движение транспорта →</div>
              <div className="schema-row">
                <div className="schema-block barrier">🚧 Въезд</div>
                <div className="schema-arrow">→</div>
                <div className="schema-block cam">📷 ANPR<br/>+QR</div>
                <div className="schema-arrow">→</div>
                <div className="schema-block scale">⚖️ Весы</div>
                <div className="schema-arrow">→</div>
                <div className="schema-block office">🖨️ Талон<br/>+Накладная</div>
                <div className="schema-arrow">→</div>
                <div className="schema-block barrier">🚧 Выезд</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Позиции сканирующего оборудования</div>
              <div className="info-card-list">
                <div className="info-item">QR-сканер: столб у шлагбаума, высота ~1.2м (уровень окна кабины)</div>
                <div className="info-item">ANPR-камера: на въездном портале, угол 20–30° к дороге</div>
                <div className="info-item">Боковая камера (A-CAM-3): 1-й этаж левого контейнера, H=2.5м</div>
                <div className="info-item">Верхняя камера (A-CAM-4): 2-й этаж левого контейнера, вид сверху 90°</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CAMERAS */}
      {view === 3 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#3B82F6' }}>
            📷 Камеры и системы Зоны А
          </div>
          <div className="detail-section-body">
            {CAMERAS.zoneA.map(cam => (
              <div key={cam.id} className="cam-card">
                <div className={`cam-icon ${cam.type}`}>
                  {cam.type === 'anpr' ? '📷' : cam.type === 'qr' ? '📱' : cam.type === 'overhead' ? '🔭' : '📸'}
                </div>
                <div>
                  <div className="cam-id">{cam.id}</div>
                  <div className="cam-name">{cam.label}</div>
                  <div className="cam-desc">{cam.desc}</div>
                </div>
              </div>
            ))}

            {/* Barriers */}
            <div className="barrier-card">
              <div className="barrier-icon">🚧</div>
              <div>
                <div className="barrier-name">Въездной шлагбаум — А-ШЛ-1</div>
                <div className="barrier-desc">
                  Открывается автоматически после успешной верификации: ANPR‑считывание номера + QR‑проверка водителя. Управляется системой ЦУК&Л. Закрывается после полного въезда машины (датчик петли).
                </div>
              </div>
            </div>
            <div className="barrier-card">
              <div className="barrier-icon">🚧</div>
              <div>
                <div className="barrier-name">Выездной шлагбаум — А-ШЛ-2</div>
                <div className="barrier-desc">
                  Открывается после подтверждения специалистом пропусков (кнопка «Соответствует») и нажатия 1С-специалиста «Выдать талон». Система фиксирует время выдачи и назначает полосу в Зоне Б.
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Автоматическая фотофиксация</div>
              <div className="info-card-list">
                <div className="info-item">При въезде в Зону А система автоматически делает 2 снимка: бок + сверху</div>
                <div className="info-item">Фото привязываются к накладной и QR-паспорту водителя</div>
                <div className="info-item">Хранение в базе ЦУК&Л Кыргызкомур</div>
                <div className="info-item">Метаданные: время, номер ТС, ID驾驶员, ID рейса</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Процесс выдачи талона и накладной</div>
              <div className="info-card-list">
                <div className="info-item">1. Специалист пропусков сверяет номер + фото с пропуском → нажимает «Соответствует»</div>
                <div className="info-item">2. 1С-специалист видит подтверждение → нажимает «Выдать талон»</div>
                <div className="info-item">3. Система выбирает свободную полосу в Зоне Б по назначению</div>
                <div className="info-item">4. Талон: буква зоны + номер очереди (пример: Б-А1, Б-А2...)</div>
                <div className="info-item">5. Накладная: вес пустой тары, № ТС, назначение, полоса</div>
                <div className="info-item">6. Открывается шлагбаум А-ШЛ-2 → машина выезжает</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
