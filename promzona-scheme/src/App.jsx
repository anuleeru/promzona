import { useState } from 'react'
import OverviewMap from './components/OverviewMap'
import ZoneDetail from './components/ZoneDetail'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import WorkflowPanel from './components/WorkflowPanel'
import ZoneModal from './components/ZoneModal'
import ZoneA3D from './components/zones/ZoneA3D'
import ZoneC3D from './components/zones/ZoneC3D'
import ZoneD3D from './components/zones/ZoneD3D'
import './App.css'

const ZONE_MODAL_INFO = {
  A: { label: 'ЗОНА А', subtitle: 'Въезд · Весы пустой тары · Камеры ANPR/QR', color: '#4b9eff' },
  C: { label: 'ЗОНА С', subtitle: 'Оператор СБ · LED-экран · Финальный выезд', color: '#4b9eff' },
  D: { label: 'ЗОНА Д', subtitle: '3 весовых · Полная тара · 1С-специалист', color: '#93c5fd' },
}

// Zones that open in 3D modal
const ZONE_3D = { A: ZoneA3D, C: ZoneC3D, D: ZoneD3D }
// Zones that open in sidebar panel (no 3D view)
const SIDEBAR_ZONES = new Set(['B', 'Wait', 'E', 'Top'])

export default function App() {
  const [activeZone, setActiveZone] = useState(null)
  const [modalZone, setModalZone] = useState(null)
  const [showWorkflow, setShowWorkflow] = useState(false)

  const handleSelectZone = (zid) => {
    if (ZONE_3D[zid]) {
      setModalZone(zid)
    } else {
      setActiveZone(zid)
    }
  }

  const handleClose = () => { setActiveZone(null) }

  const Zone3DComponent = modalZone ? ZONE_3D[modalZone] : null

  return (
    <div className="app">
      <Header onWorkflow={() => setShowWorkflow(v => !v)} showWorkflow={showWorkflow} />
      <div className="app-body">
        <div className="map-area">
          <OverviewMap activeZone={activeZone || modalZone} onSelectZone={handleSelectZone} />
        </div>
        {activeZone && (
          <Sidebar onClose={handleClose}>
            <ZoneDetail zoneId={activeZone} onClose={handleClose} />
          </Sidebar>
        )}
      </div>
      {modalZone && Zone3DComponent && (
        <ZoneModal zone={ZONE_MODAL_INFO[modalZone]} onClose={() => setModalZone(null)}>
          <Zone3DComponent />
        </ZoneModal>
      )}
      {showWorkflow && (
        <ZoneModal 
          zone={{ label: 'ЛОГИКА РАБОТЫ', subtitle: 'Полный цикл транспорта от въезда до выезда', color: '#60a5fa' }} 
          onClose={() => setShowWorkflow(false)}
        >
          <WorkflowPanel />
        </ZoneModal>
      )}
    </div>
  )
}