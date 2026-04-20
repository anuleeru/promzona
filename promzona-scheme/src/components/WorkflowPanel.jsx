import { useState } from 'react'
import { WORKFLOW_STEPS, SYSTEM_EQUIPMENT } from '../data/zones'
import './WorkflowPanel.css'

const ZONE_COLORS = { A: '#4b9eff', B: '#60a5fa', C: '#4b9eff', D: '#93c5fd', Wait: '#60a5fa', E: '#4b9eff', Top: '#7ab8ff' }

export default function WorkflowPanel() {
  const [expanded, setExpanded] = useState(null)
  const [expandedSystem, setExpandedSystem] = useState(null)
  const [expandedZone, setExpandedZone] = useState({})

  const toggleZone = (systemKey, zoneKey) => {
    setExpandedZone(prev => ({
      ...prev,
      [`${systemKey}-${zoneKey}`]: !prev[`${systemKey}-${zoneKey}`]
    }))
  }

  return (
    <div className="workflow-panel">
      {/* Flow diagram */}
      <div className="wf-flow">
        {[
          { key: 'A', label: 'Зона А' },
          { key: 'B', label: 'Зона Б' },
          { key: 'C', label: 'Зона С' },
          { key: 'Wait', label: 'Ожидание' },
          { key: 'E', label: 'Зона Е' },
          { key: 'D', label: 'Зона Д' },
          { key: 'C2', label: 'Зона С↩' },
        ].map((item, i, arr) => (
          <div key={i} className="wf-flow-item">
            <div
              className="wf-flow-zone"
              style={{
                background: (ZONE_COLORS[item.key === 'C2' ? 'C' : item.key] || ZONE_COLORS['C']) + '22',
                border: `1px solid ${(ZONE_COLORS[item.key === 'C2' ? 'C' : item.key] || ZONE_COLORS['C'])}66`,
                color: ZONE_COLORS[item.key === 'C2' ? 'C' : item.key] || ZONE_COLORS['C'],
              }}
            >
              {item.label}
            </div>
            {i < arr.length - 1 && <div className="wf-flow-arrow">→</div>}
          </div>
        ))}
      </div>

      {/* Steps */}
      <div className="wf-steps">
        {WORKFLOW_STEPS.map(step => {
          const color = ZONE_COLORS[step.zone]
          const isOpen = expanded === step.id
          return (
            <div
              key={step.id}
              className={`wf-step ${isOpen ? 'wf-step--open' : ''}`}
              style={{ '--c': color }}
            >
              <div className="wf-step-header" onClick={() => setExpanded(isOpen ? null : step.id)}>
                <div className="wf-step-num" style={{ background: color + '22', color }}>{step.id}</div>
                <div className="wf-step-icon">{step.icon}</div>
                <div className="wf-step-title">{step.title}</div>
                <div className="wf-step-zone" style={{ color }}>Зона {step.zone}</div>
                <div className="wf-step-toggle">{isOpen ? '▲' : '▼'}</div>
              </div>
              {isOpen && (
                <div className="wf-step-body">
                  {step.steps.map((s, i) => (
                    <div key={i} className="wf-step-item">
                      <span className="wf-step-bullet" style={{ background: color }}>
                        {i + 1}
                      </span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Systems legend */}
      <div className="wf-systems">
        <div className="wf-systems-title">🔧 Участвующие системы и оборудование</div>
        <div className="wf-systems-summary">
          Общее количество оборудования: <strong>{SYSTEM_EQUIPMENT.summary.totalEquipment} единиц</strong>
        </div>
        {/* Zone coverage pills */}
        <div style={{ marginBottom: 8, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {['Зона А', 'Зона Б', 'Зона С', 'Ожидание', 'Зона Е', 'Зона Д', 'Промзона верхняя'].map((z, i) => (
            <div key={i} style={{
              fontSize: '0.65rem', color: '#7a98bc', background: '#111828',
              border: '1px solid #1c2b44', borderRadius: 4, padding: '3px 8px',
            }}>• {z}</div>
          ))}
        </div>

        {/* Cameras Section */}
        <div className={`wf-sys-section ${expandedSystem === 'cameras' ? 'open' : ''}`}>
          <div className="wf-sys-header" onClick={() => setExpandedSystem(expandedSystem === 'cameras' ? null : 'cameras')}>
            <span className="wf-sys-icon">📷</span>
            <span className="wf-sys-name">Камеры — {SYSTEM_EQUIPMENT.cameras.total} шт.</span>
            <span className="wf-sys-toggle">{expandedSystem === 'cameras' ? '▲' : '▼'}</span>
          </div>
          {expandedSystem === 'cameras' && (
            <div className="wf-sys-body">
              <div className="wf-sys-types">
                {Object.entries(SYSTEM_EQUIPMENT.cameras.types).map(([key, type]) => (
                  <div key={key} className="wf-sys-type">
                    <strong>{type.count} ×</strong> {type.desc}
                  </div>
                ))}
              </div>
              {Object.entries(SYSTEM_EQUIPMENT.cameras.byZone).map(([zone, data]) => (
                <div key={zone} className="wf-sys-zone-block">
                  <div className="wf-sys-zone-header" onClick={() => toggleZone('cameras', zone)}>
                    <span style={{ color: ZONE_COLORS[zone] }}>Зона {zone}</span>
                    <span>({data.count} камер)</span>
                    <span className="wf-sys-toggle-sm">{expandedZone[`cameras-${zone}`] ? '▼' : '▶'}</span>
                  </div>
                  {expandedZone[`cameras-${zone}`] && (
                    <div className="wf-sys-zone-list">
                      {data.list.map(cam => (
                        <div key={cam.id} className="wf-sys-item-detail">
                          <div className="wf-sys-item-id">{cam.id}</div>
                          <div className="wf-sys-item-type">{cam.type}</div>
                          <div className="wf-sys-item-location">📍 {cam.location}</div>
                          <div className="wf-sys-item-purpose">💡 {cam.purpose}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* QR Scanners Section */}
        <div className={`wf-sys-section ${expandedSystem === 'qr' ? 'open' : ''}`}>
          <div className="wf-sys-header" onClick={() => setExpandedSystem(expandedSystem === 'qr' ? null : 'qr')}>
            <span className="wf-sys-icon">📱</span>
            <span className="wf-sys-name">QR-сканеры — {SYSTEM_EQUIPMENT.qrScanners.total} шт.</span>
            <span className="wf-sys-toggle">{expandedSystem === 'qr' ? '▲' : '▼'}</span>
          </div>
          {expandedSystem === 'qr' && (
            <div className="wf-sys-body">
              {SYSTEM_EQUIPMENT.qrScanners.list.map(qr => (
                <div key={qr.id} className="wf-sys-item-detail">
                  <div className="wf-sys-item-id">{qr.id} (Зона {qr.zone})</div>
                  <div className="wf-sys-item-location">📍 {qr.location}</div>
                  <div className="wf-sys-item-type">📏 Высота: {qr.height}</div>
                  <div className="wf-sys-item-purpose">💡 {qr.purpose}</div>
                  <div className="wf-sys-item-integration">🔗 {qr.integrated}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Scales Section */}
        <div className={`wf-sys-section ${expandedSystem === 'scales' ? 'open' : ''}`}>
          <div className="wf-sys-header" onClick={() => setExpandedSystem(expandedSystem === 'scales' ? null : 'scales')}>
            <span className="wf-sys-icon">⚖️</span>
            <span className="wf-sys-name">Весы — {SYSTEM_EQUIPMENT.scales.total} шт.</span>
            <span className="wf-sys-toggle">{expandedSystem === 'scales' ? '▲' : '▼'}</span>
          </div>
          {expandedSystem === 'scales' && (
            <div className="wf-sys-body">
              <div className="wf-sys-types">
                <div className="wf-sys-type">
                  <strong>Зона А:</strong> {SYSTEM_EQUIPMENT.scales.byType.emptyWeight.count} × {SYSTEM_EQUIPMENT.scales.byType.emptyWeight.desc}
                </div>
                <div className="wf-sys-type">
                  <strong>Зона Д:</strong> {SYSTEM_EQUIPMENT.scales.byType.fullWeight.count} × {SYSTEM_EQUIPMENT.scales.byType.fullWeight.desc}
                </div>
              </div>
              {SYSTEM_EQUIPMENT.scales.list.map(scale => (
                <div key={scale.id} className="wf-sys-item-detail">
                  <div className="wf-sys-item-id">{scale.id} — {scale.type}</div>
                  <div className="wf-sys-item-location">📍 {scale.location}</div>
                  <div className="wf-sys-item-type">⚡ Грузоподъёмность: {scale.capacity}</div>
                  <div className="wf-sys-item-purpose">💡 {scale.purpose}</div>
                  <div className="wf-sys-item-integration">👤 Оператор: {scale.operator}</div>
                  <div className="wf-sys-item-integration">🔗 Интеграция: {scale.integration}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* LED Screens Section */}
        <div className={`wf-sys-section ${expandedSystem === 'led' ? 'open' : ''}`}>
          <div className="wf-sys-header" onClick={() => setExpandedSystem(expandedSystem === 'led' ? null : 'led')}>
            <span className="wf-sys-icon">📺</span>
            <span className="wf-sys-name">LED-экраны — {SYSTEM_EQUIPMENT.ledScreens.total} шт.</span>
            <span className="wf-sys-toggle">{expandedSystem === 'led' ? '▲' : '▼'}</span>
          </div>
          {expandedSystem === 'led' && (
            <div className="wf-sys-body">
              {SYSTEM_EQUIPMENT.ledScreens.list.map(led => (
                <div key={led.id} className="wf-sys-item-detail">
                  <div className="wf-sys-item-id">{led.id} — {led.type}</div>
                  <div className="wf-sys-item-location">📍 {led.location}</div>
                  <div className="wf-sys-item-type">📐 Размер: {led.size}</div>
                  <div className="wf-sys-item-purpose">💡 {led.purpose}</div>
                  <div className="wf-sys-item-type">👁️ Видимость: {led.visibility}</div>
                  <div className="wf-sys-item-integration">👤 Управление: {led.operator}</div>
                  <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid #1c2b44' }}>
                    <strong style={{ color: '#7a98bc' }}>Отображает:</strong>
                    {led.display.map((item, i) => (
                      <div key={i} style={{ fontSize: '0.72rem', color: '#485f7a', marginTop: 4 }}>• {item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Barriers Section */}
        <div className={`wf-sys-section ${expandedSystem === 'barriers' ? 'open' : ''}`}>
          <div className="wf-sys-header" onClick={() => setExpandedSystem(expandedSystem === 'barriers' ? null : 'barriers')}>
            <span className="wf-sys-icon">🚧</span>
            <span className="wf-sys-name">Шлагбаумы — {SYSTEM_EQUIPMENT.barriers.total} шт.</span>
            <span className="wf-sys-toggle">{expandedSystem === 'barriers' ? '▲' : '▼'}</span>
          </div>
          {expandedSystem === 'barriers' && (
            <div className="wf-sys-body">
              {Object.entries(SYSTEM_EQUIPMENT.barriers.byZone).map(([zone, data]) => (
                <div key={zone} className="wf-sys-zone-block">
                  <div className="wf-sys-zone-header" onClick={() => toggleZone('barriers', zone)}>
                    <span style={{ color: ZONE_COLORS[zone] }}>Зона {zone}</span>
                    <span>({data.count} шлагбаумов)</span>
                    <span className="wf-sys-toggle-sm">{expandedZone[`barriers-${zone}`] ? '▼' : '▶'}</span>
                  </div>
                  {expandedZone[`barriers-${zone}`] && (
                    <div className="wf-sys-zone-list">
                      {data.list.map(barrier => (
                        <div key={barrier.id} className="wf-sys-item-detail">
                          <div className="wf-sys-item-id">{barrier.id} — {barrier.type}</div>
                          <div className="wf-sys-item-location">📍 {barrier.location}</div>
                          <div className="wf-sys-item-type">🤖 {barrier.auto}</div>
                          <div className="wf-sys-item-type">🎨 Цвет: {barrier.color}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div style={{ fontSize: '0.7rem', color: '#485f7a', fontStyle: 'italic', marginTop: 12, padding: 12, background: '#1a1e2e', borderRadius: 6 }}>
                ℹ️ {SYSTEM_EQUIPMENT.barriers.note}
              </div>
            </div>
          )}
        </div>

        {/* Containers Section */}
        <div className={`wf-sys-section ${expandedSystem === 'containers' ? 'open' : ''}`}>
          <div className="wf-sys-header" onClick={() => setExpandedSystem(expandedSystem === 'containers' ? null : 'containers')}>
            <span className="wf-sys-icon">📦</span>
            <span className="wf-sys-name">Контейнеры — {SYSTEM_EQUIPMENT.containers.total} шт.</span>
            <span className="wf-sys-toggle">{expandedSystem === 'containers' ? '▲' : '▼'}</span>
          </div>
          {expandedSystem === 'containers' && (
            <div className="wf-sys-body">
              <div className="wf-sys-types">
                <div className="wf-sys-type">
                  <strong>Общий персонал:</strong> {SYSTEM_EQUIPMENT.containers.totalPersonnel} человек
                </div>
              </div>
              {Object.entries(SYSTEM_EQUIPMENT.containers.byZone).map(([zone, data]) => (
                <div key={zone} className="wf-sys-zone-block">
                  <div className="wf-sys-zone-header" onClick={() => toggleZone('containers', zone)}>
                    <span style={{ color: ZONE_COLORS[zone] }}>Зона {zone}</span>
                    <span>({data.count} контейнеров)</span>
                    <span className="wf-sys-toggle-sm">{expandedZone[`containers-${zone}`] ? '▼' : '▶'}</span>
                  </div>
                  {expandedZone[`containers-${zone}`] && (
                    <div className="wf-sys-zone-list">
                      {data.list.map(cont => (
                        <div key={cont.id} className="wf-sys-item-detail">
                          <div className="wf-sys-item-id">{cont.id || cont.name}</div>
                          <div className="wf-sys-item-type">🏗️ {cont.name || `Назначение: ${cont.purpose}`}</div>
                          {cont.floors && <div className="wf-sys-item-type">🏢 Этажей: {cont.floors}</div>}
                          <div className="wf-sys-item-purpose">💡 {cont.purpose}</div>
                          {cont.personnel > 0 && <div className="wf-sys-item-type">👥 Персонал: {cont.personnel} чел.</div>}
                          {cont.floor1 && (
                            <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid #1c2b44' }}>
                              <div style={{ color: '#7a98bc', fontSize: '0.72rem', marginBottom: 4 }}>
                                <strong>1-й этаж:</strong> {cont.floor1.rooms.join(' | ')}
                              </div>
                            </div>
                          )}
                          {cont.floor2 && (
                            <div style={{ marginTop: 4 }}>
                              <div style={{ color: '#7a98bc', fontSize: '0.72rem' }}>
                                <strong>2-й этаж:</strong> {cont.floor2.rooms.join(' | ')}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Software Section */}
        <div className={`wf-sys-section ${expandedSystem === 'software' ? 'open' : ''}`}>
          <div className="wf-sys-header" onClick={() => setExpandedSystem(expandedSystem === 'software' ? null : 'software')}>
            <span className="wf-sys-icon">💻</span>
            <span className="wf-sys-name">Программное обеспечение — {SYSTEM_EQUIPMENT.software.systems.length} систем</span>
            <span className="wf-sys-toggle">{expandedSystem === 'software' ? '▲' : '▼'}</span>
          </div>
          {expandedSystem === 'software' && (
            <div className="wf-sys-body">
              {SYSTEM_EQUIPMENT.software.systems.map((soft, i) => (
                <div key={i} className="wf-sys-item-detail">
                  <div className="wf-sys-item-id">{soft.name}</div>
                  <div className="wf-sys-item-purpose">💡 {soft.purpose}</div>
                  <div className="wf-sys-item-type">
                    🏢 Зоны: {soft.zones.map(z => `Зона ${z}`).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
