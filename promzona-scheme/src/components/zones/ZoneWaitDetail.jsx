import { useState } from 'react'
import '../ZoneDetail.css'

const COLOR = '#60a5fa'
const VIEWS = ['РћРїРёСЃР°РЅРёРµ', 'Р›РѕРіРёРєР° СЂР°Р±РѕС‚С‹']

const CAMS = [
  { id: 'W-CAM-1', label: 'РљР°РјРµСЂР° РѕР±Р·РѕСЂРЅР°СЏ 1', desc: 'Р’РёРґ РЅР° РІСЉРµР·Рґ РІ Р·РѕРЅСѓ вЂ” С„РёРєСЃРёСЂСѓРµС‚ С…РІРѕСЃС‚ РѕС‡РµСЂРµРґРё Рё РєРѕР»РёС‡РµСЃС‚РІРѕ РѕР¶РёРґР°СЋС‰РёС… РјР°С€РёРЅ' },
  { id: 'W-CAM-2', label: 'РљР°РјРµСЂР° РѕР±Р·РѕСЂРЅР°СЏ 2', desc: 'РћР±С‰РёР№ РѕР±Р·РѕСЂ Р·РѕРЅС‹ РѕР¶РёРґР°РЅРёСЏ вЂ” РІРёРґРЅС‹ РІСЃРµ РјР°С€РёРЅС‹, СЃС‚РѕСЏС‰РёРµ РІ РѕС‡РµСЂРµРґРё (РґРѕ 10 РІ РєР°РґСЂРµ)' },
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

      {/* РћРџРРЎРђРќРР• */}
      {view === 0 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: COLOR }}>
            рџ”­ Р—РѕРЅР° РћР¶РёРґР°РЅРёСЏ В«РљРѕР№-РљРѕСЂРѕВ»
          </div>
          <div className="detail-section-body">

            {/* Waiting area visual */}
            <div className="schema-view">
              <div style={{ fontSize: '0.68rem', color: '#485f7a', marginBottom: 8 }}>в†ђ РёР· Р—РѕРЅС‹ РЎ</div>

              <div style={{
                display: 'flex', flexDirection: 'column', gap: 4, padding: '10px 14px',
                background: '#111828', border: `1px solid ${COLOR}33`,
                borderRadius: 8,
              }}>
                <div style={{ fontSize: '0.65rem', color: COLOR, fontWeight: 700, marginBottom: 4 }}>Р—РѕРЅР° РѕР¶РёРґР°РЅРёСЏ</div>
                {[...Array(6)].map((_, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: '#0e1422', border: `1px solid ${COLOR}22`,
                    borderRadius: 4, padding: '3px 8px',
                  }}>
                    <span style={{ fontSize: '0.75rem' }}>рџљ›</span>
                    <div style={{ flex: 1, height: 2, background: `${COLOR}33`, borderRadius: 1 }} />
                    <span style={{ fontSize: '0.58rem', color: '#485f7a' }}>РѕР¶РёРґР°РЅРёРµ</span>
                  </div>
                ))}
                <div style={{ fontSize: '0.6rem', color: '#485f7a', textAlign: 'center', marginTop: 2 }}>РґРѕ ~10 РјР°С€РёРЅ</div>
              </div>

              {/* 2 observation cameras */}
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                {CAMS.map(cam => (
                  <div key={cam.id} style={{
                    background: '#0e1422', border: `1px solid ${COLOR}33`,
                    borderRadius: 6, padding: '6px 10px', flex: 1, textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.1rem', marginBottom: 2 }}>рџ“·</div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#f0f4ff' }}>{cam.id}</div>
                    <div style={{ fontSize: '0.58rem', color: '#485f7a' }}>{cam.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '0.68rem', color: '#485f7a', marginTop: 8, textAlign: 'right' }}>в†’ РІ Р—РѕРЅСѓ Р”</div>
            </div>

            <div className="info-card">
              <div className="info-card-title">РќР°Р·РЅР°С‡РµРЅРёРµ Р·РѕРЅС‹ РљРѕР№-РљРѕСЂРѕ</div>
              <div className="info-card-list">
                <div className="info-item">РќР°РєРѕРїР»РµРЅРёРµ С‚СЂР°РЅСЃРїРѕСЂС‚Р° РїРѕСЃР»Рµ РїСЂРѕС…РѕР¶РґРµРЅРёСЏ Р—РѕРЅС‹ РЎ</div>
                <div className="info-item">Р‘СѓС„РµСЂ РјРµР¶РґСѓ Р—РѕРЅРѕР№ РЎ (РІС‹Р·РѕРІ) Рё Р—РѕРЅРѕР№ Р” (РІР·РІРµС€РёРІР°РЅРёРµ)</div>
                <div className="info-item">РџСЂРµРґРѕС‚РІСЂР°С‰Р°РµС‚ РѕР±СЂР°Р·РѕРІР°РЅРёРµ Р·Р°С‚РѕСЂРѕРІ РЅР° РІРµСЃРѕРІРѕРј СѓС‡Р°СЃС‚РєРµ</div>
                <div className="info-item">2 РѕР±Р·РѕСЂРЅС‹Рµ РєР°РјРµСЂС‹ вЂ” РІ Р»СЋР±РѕР№ РјРѕРјРµРЅС‚ РІРёРґРЅРѕ, СЃРєРѕР»СЊРєРѕ РјР°С€РёРЅ СЃС‚РѕРёС‚ РІ РѕС‡РµСЂРµРґРё</div>
              </div>
            </div>

            {/* Camera cards */}
            {CAMS.map(cam => (
              <div key={cam.id} className="cam-card">
                <div className="cam-icon" style={{ background: `${COLOR}22`, border: `1px solid ${COLOR}44`, color: COLOR }}>рџ“·</div>
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

      {/* Р›РћР“РРљРђ */}
      {view === 1 && (
        <div className="detail-section">
          <div className="detail-section-title" style={{ color: COLOR }}>
            вљ™пёЏ Р›РѕРіРёРєР° СЂР°Р±РѕС‚С‹
          </div>
          <div className="detail-section-body">
            {[
              { n: 1, icon: 'рџ“є', title: 'Р’С‹Р·РѕРІ РёР· Р—РѕРЅС‹ РЎ', desc: 'РћРїРµСЂР°С‚РѕСЂ РЎР‘ РІ Р—РѕРЅРµ РЎ РЅР°Р¶РёРјР°РµС‚ В«Р’С‹Р·РІР°С‚СЊВ» вЂ” LED-СЌРєСЂР°РЅ РѕС‚РѕР±СЂР°Р¶Р°РµС‚ РЅРѕРјРµСЂ РјР°С€РёРЅС‹. РњР°С€РёРЅР° РґРІРёР¶РµС‚СЃСЏ С‡РµСЂРµР· Р—РѕРЅСѓ РЎ.' },
              { n: 2, icon: 'рџљ›', title: 'Р’СЉРµР·Рґ РІ Р·РѕРЅСѓ РѕР¶РёРґР°РЅРёСЏ', desc: 'РњР°С€РёРЅР° РІСЉРµР·Р¶Р°РµС‚ РІ Р·РѕРЅСѓ РљРѕР№-РљРѕСЂРѕ Рё Р·Р°РЅРёРјР°РµС‚ СЃРІРѕР±РѕРґРЅРѕРµ РјРµСЃС‚Рѕ РІ РѕС‡РµСЂРµРґРё.' },
              { n: 3, icon: 'рџ“·', title: 'Р’РёРґРµРѕРЅР°Р±Р»СЋРґРµРЅРёРµ', desc: '2 РѕР±Р·РѕСЂРЅС‹Рµ РєР°РјРµСЂС‹ С„РёРєСЃРёСЂСѓСЋС‚ РєРѕР»РёС‡РµСЃС‚РІРѕ Рё РїРѕР»РѕР¶РµРЅРёРµ С‚СЂР°РЅСЃРїРѕСЂС‚Р°. РћРїРµСЂР°С‚РѕСЂ РІ СЂРµР°Р»СЊРЅРѕРј РІСЂРµРјРµРЅРё РІРёРґРёС‚ РІСЃСЋ РѕС‡РµСЂРµРґСЊ.' },
              { n: 4, icon: 'вЏі', title: 'РћР¶РёРґР°РЅРёРµ', desc: 'РњР°С€РёРЅР° Р¶РґС‘С‚ РѕСЃРІРѕР±РѕР¶РґРµРЅРёСЏ РІРµСЃРѕРІРѕР№ РїРѕР·РёС†РёРё РІ Р—РѕРЅРµ Р”. Р’ РѕС‡РµСЂРµРґРё РѕРґРЅРѕРІСЂРµРјРµРЅРЅРѕ РјРѕР¶РµС‚ СЃС‚РѕСЏС‚СЊ РґРѕ 10 РјР°С€РёРЅ.' },
              { n: 5, icon: 'вњ…', title: 'Р’С‹РµР·Рґ РІ Р—РѕРЅСѓ Р”', desc: 'РџСЂРё РѕСЃРІРѕР±РѕР¶РґРµРЅРёРё РІРµСЃРѕРІ РјР°С€РёРЅР° РІС‹РґРІРёРіР°РµС‚СЃСЏ РЅР° РІР·РІРµС€РёРІР°РЅРёРµ РІ Р—РѕРЅСѓ Р”.' },
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
