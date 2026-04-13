import { useState } from 'react'
import { CAMERAS } from '../../data/zones'
import '../ZoneDetail.css'

const VIEWS = ['Схема сверху', 'Вид спереди', 'LED-экран', 'Камеры и шлагбаумы']

export default function ZoneCDetail() {
  const [view, setView] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="view-tabs">
        {VIEWS.map((v, i) => (
          <button key={i}
            className={`view-tab ${view === i ? 'active' : ''}`}
            style={{ '--tab-color': '#10B981' }}
            onClick={() => setView(i)}
          >{v}</button>
        ))}
      </div>

      {/* TOP VIEW */}
      {view === 0 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#10B981' }}>
            🔭 Схема сверху — Зона С
          </div>
          <div className="detail-section-body">
            <div className="schema-view">
              <div style={{ fontSize: '0.68rem', color: '#666d99', marginBottom: 8 }}>← Машины выезжают из Зоны Б по вызову</div>
              <div className="schema-row">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                  <div className="schema-block led" style={{ fontSize: '0.62rem', width: 130 }}>📺 LED-ЭКРАН<br/>½ верхнего контейнера</div>
                  <div className="schema-block" style={{ fontSize: '0.62rem', width: 130, borderColor: '#10B981', color: '#6ee7b7', background: '#0a2018' }}>2 эт. — ЗОНА ОТДЫХА СБ</div>
                  <div className="schema-block office" style={{ fontSize: '0.62rem', width: 130 }}>1 эт. — ОПЕРАТОР СБ<br/>Кнопка вызова</div>
                  <div style={{ fontSize: '0.6rem', color: '#666d99' }}>ЛЕВЫЙ КОНТЕЙНЕР</div>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{ fontSize: '0.65rem', color: '#10B981' }}>Зона движения</div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <div style={{
                      width: 24, height: 32, background: '#1a2235',
                      border: '1px solid #10B98144', borderRadius: 3,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem',
                    }}>🚛</div>
                    <div style={{
                      width: 24, height: 32, background: '#1a2235',
                      border: '1px solid #10B98144', borderRadius: 3,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', opacity: 0.4,
                    }}>🚛</div>
                  </div>
                  <div className="schema-row">
                    <div className="schema-block cam" style={{ fontSize: '0.6rem' }}>📷 ANPR</div>
                    <div className="schema-block cam" style={{ fontSize: '0.6rem' }}>📱 QR</div>
                  </div>
                  <div className="schema-block barrier" style={{ fontSize: '0.62rem' }}>🚧 Выездной шлагбаум</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                  <div className="schema-block" style={{ fontSize: '0.62rem', width: 110, borderColor: '#F59E0B', color: '#fcd34d', background: '#251d0e' }}>
                    🛡️ ОХРАННИК СБ<br/>Охранная | Правый кон.
                  </div>
                  <div style={{ fontSize: '0.6rem', color: '#666d99' }}>ПРАВЫЙ КОНТЕЙНЕР</div>
                </div>
              </div>
              <div style={{ fontSize: '0.68rem', color: '#666d99', marginTop: 8 }}>→ После верификации — выезд на Зону Д</div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Состав Зоны С</div>
              <div className="info-card-list">
                <div className="info-item">2 контейнера 40-футовых</div>
                <div className="info-item">LED-экран на верхней части левого контейнера (покрывает ~½ площади)</div>
                <div className="info-item">Верхний уровень лев. контейнера — Зона отдыха СБ (охрана)</div>
                <div className="info-item">Нижний уровень лев. контейнера — АРМ оператора СБ</div>
                <div className="info-item">Правый контейнер — пост охраны (Охранник СБ-2), финальная проверка</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FRONT VIEW */}
      {view === 1 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#10B981' }}>
            🏗️ Вид спереди — Зона С
          </div>
          <div className="detail-section-body">
            <div className="floor-diagram">
              <div className="floor-label">Левый контейнер — LED + 2 уровня</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div className="floor-rooms">
                  <div className="floor-room" style={{ borderColor: '#10B981', color: '#6ee7b7', background: '#071a10' }}>
                    🌟 LED‑ЭКРАН<br/><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>(на внешней стене, ½ длины контейнера)</span>
                  </div>
                </div>
                <div className="floor-rooms">
                  <div className="floor-room" style={{ borderColor: '#10B981', color: '#6ee7b7', background: '#071a10' }}>
                    2 этаж — Зона отдыха СБ<br/><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>Кухня | Отдых | Мониторы</span>
                  </div>
                </div>
                <div className="floor-rooms">
                  <div className="floor-room" style={{ borderColor: '#10B981', color: '#6ee7b7', background: '#071a10' }}>
                    1 этаж — АРМ оператора<br/><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>ПК | Кнопка вызова | Экран очереди</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="floor-diagram" style={{ marginTop: 0 }}>
              <div className="floor-label">Правый контейнер — пост охраны</div>
              <div className="floor-rooms">
                <div className="floor-room" style={{ borderColor: '#F59E0B', color: '#fcd34d', background: '#251d0e' }}>
                  Охранник СБ-2<br/>
                  <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>Окно для проверки документов | АРМ | Кнопка шлагбаума</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LED SCREEN */}
      {view === 2 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#10B981' }}>
            📺 LED‑экран — логика отображения
          </div>
          <div className="detail-section-body">
            {/* Mock LED screen */}
            <div style={{
              background: '#000',
              border: '3px solid #10B981',
              borderRadius: 10,
              padding: 20,
              textAlign: 'center',
              boxShadow: '0 0 30px rgba(16,185,129,0.5)',
            }}>
              <div style={{ fontSize: '0.65rem', color: '#10B981', opacity: 0.6, marginBottom: 8, letterSpacing: '0.15em' }}>
                СИСТЕМА ЭЛЕКТРОННОЙ ОЧЕРЕДИ · Кара-Кече
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#10B981', fontFamily: 'monospace', letterSpacing: '0.08em' }}>
                🚛 А 745 ВКР
              </div>
              <div style={{ fontSize: '0.85rem', color: '#fff', marginTop: 8, opacity: 0.9 }}>
                ТАЛОН: Б-1-007 · Полоса 1 · ТОП-база
              </div>
              <div style={{ fontSize: '0.7rem', color: '#10B981', marginTop: 10, opacity: 0.6 }}>
                СЛЕДУЮЩИЙ · ОТКРОЙТЕ ШЛАГБАУМ
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Процесс вызова машины оператором СБ</div>
              <div className="info-card-list">
                <div className="info-item">Оператор видит очередь на экране АРМ в Зоне С</div>
                <div className="info-item">Нажимает кнопку «Вызвать следующую» (FIFO — первым пришёл, первым обслужен)</div>
                <div className="info-item">На LED-экране отображается: номер ТС + талон + полоса + команда «ПОДЪЕХАТЬ»</div>
                <div className="info-item">Шлагбаум нужной полосы в Зоне Б открывается автоматически</div>
                <div className="info-item">Машина выезжает из полосы → движется к финальному шлагбауму Зоны С</div>
                <div className="info-item">Шлагбаум полосы в Зоне Б закрывается после выезда (датчик петли)</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Что отображается на LED-экране</div>
              <div className="info-card-list">
                <div className="info-item">Регистрационный номер вызываемого транспорта</div>
                <div className="info-item">Номер талона и полосы</div>
                <div className="info-item">Назначение груза (ТОП-база / ТЭЦ / Соц / Служебный)</div>
                <div className="info-item">Команда: «ПОДЪЕХАТЬ» / «ОЖИДАЙТЕ» / «ПРОВЕРЬТЕ ДОКУМЕНТЫ»</div>
                <div className="info-item">Очередь следующих 3-х машин</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CAMERAS */}
      {view === 3 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: '#10B981' }}>
            📷 Камеры и системы Зоны С
          </div>
          <div className="detail-section-body">
            {CAMERAS.zoneC.map(cam => (
              <div key={cam.id} className="cam-card">
                <div className={`cam-icon ${cam.type}`}>
                  {cam.type === 'anpr' ? '📷' : '📱'}
                </div>
                <div>
                  <div className="cam-id">{cam.id}</div>
                  <div className="cam-name">{cam.label}</div>
                  <div className="cam-desc">{cam.desc}</div>
                </div>
              </div>
            ))}

            <div className="barrier-card">
              <div className="barrier-icon">🚧</div>
              <div>
                <div className="barrier-name">Финальный выездной шлагбаум — С-ШЛ-1</div>
                <div className="barrier-desc">
                  Открывается только после двойной верификации: ANPR совпало + QR-код подтверждён. Охранник СБ-2 имеет кнопку ручного открытия/закрытия в экстренных случаях. После выезда — шлагбаум закрывается, система формирует финальную запись рейса.
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Финальная запись рейса (формируется в Зоне С)</div>
              <div className="info-card-list">
                <div className="info-item">Время и фото въезда в Зону А</div>
                <div className="info-item">Вес пустой тары</div>
                <div className="info-item">Фотофиксация транспорта (бок + сверху)</div>
                <div className="info-item">Время постановки и выезда из полосы Зоны Б</div>
                <div className="info-item">Вес полной тары и нетто (из Зоны Д)</div>
                <div className="info-item">Время финального выезда из Зоны С</div>
                <div className="info-item">Статус: РЕЙС ЗАВЕРШЁН → синхронизация с ЦУК&Л</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
