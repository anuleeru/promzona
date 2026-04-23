import { useState } from 'react'
import '../ZoneDetail.css'

const COLOR = '#60a5fa'
const VIEWS = ['Описание', 'Логика работы']

const CAMS = [
  { id: 'W-CAM-1', label: 'Камера обзорная 1', desc: 'Вид на въезд в зону — фиксирует хвост очереди и количество ожидающих машин' },
  { id: 'W-CAM-2', label: 'Камера обзорная 2', desc: 'Общий обзор зоны ожидания — видны все машины, стоящие в очереди (до 10 в кадре)' },
]

export default function ZoneWaitDetail() {
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

      {/* ОПИСАНИЕ */}
      {view === 0 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: COLOR }}>
             Зона Ожидания «Кой-Коро»
          </div>
          <div className="detail-section-body">

            {/* Waiting area visual */}
            <div className="schema-view">
              <div style={{ fontSize: '0.68rem', color: '#485f7a', marginBottom: 8 }}>↓ из Зоны С</div>

              <div style={{
                display: 'flex', flexDirection: 'column', gap: 4, padding: '10px 14px',
                background: '#111828', border: `1px solid ${COLOR}33`,
                borderRadius: 8,
              }}>
                <div style={{ fontSize: '0.65rem', color: COLOR, fontWeight: 700, marginBottom: 4 }}>Зона ожидания</div>
                {[...Array(6)].map((_, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: '#0e1422', border: `1px solid ${COLOR}22`,
                    borderRadius: 4, padding: '3px 8px',
                  }}>
                    <span style={{ fontSize: '0.75rem' }}></span>
                    <div style={{ flex: 1, height: 2, background: `${COLOR}33`, borderRadius: 1 }} />
                    <span style={{ fontSize: '0.58rem', color: '#485f7a' }}>ожидание</span>
                  </div>
                ))}
                <div style={{ fontSize: '0.6rem', color: '#485f7a', textAlign: 'center', marginTop: 2 }}>до ~100 машин</div>
              </div>

              {/* 2 observation cameras */}
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                {CAMS.map(cam => (
                  <div key={cam.id} style={{
                    background: '#0e1422', border: `1px solid ${COLOR}33`,
                    borderRadius: 6, padding: '6px 10px', flex: 1, textAlign: 'center',
                    minWidth: 0,
                  }}>
                    <div style={{ fontSize: '1.1rem', marginBottom: 2 }}></div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#f0f4ff', wordBreak: 'keep-all', whiteSpace: 'nowrap' }}>{cam.id}</div>
                    <div style={{ fontSize: '0.58rem', color: '#485f7a', wordBreak: 'break-word', whiteSpace: 'normal' }}>{cam.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '0.68rem', color: '#485f7a', marginTop: 8, textAlign: 'right' }}>→ в Зону Д</div>
            </div>

            <div className="info-card">
              <div className="info-card-title">Назначение зоны Кой-Коро</div>
              <div className="info-card-list">
                <div className="info-item">Накопление транспорта после прохождения Зоны С</div>

                <div className="info-item">2 обзорные камеры — в любой момент видно, сколько машин стоит</div>
              </div>
            </div>

            {/* Camera cards */}
            {CAMS.map(cam => (
              <div key={cam.id} className="cam-card">
                <div className="cam-icon" style={{ background: `${COLOR}22`, border: `1px solid ${COLOR}44`, color: COLOR }}></div>
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
