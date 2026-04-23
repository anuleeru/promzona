import ZoneADetail from './zones/ZoneADetail'
import ZoneBDetail from './zones/ZoneBDetail'
import ZoneCDetail from './zones/ZoneCDetail'
import ZoneDDetail from './zones/ZoneDDetail'
import ZoneWaitDetail from './zones/ZoneWaitDetail'
import ZoneEDetail from './zones/ZoneEDetail'
import ZoneTopDetail from './zones/ZoneTopDetail'
import { ZONES } from '../data/zones'
import './ZoneDetail.css'

const VIEWS = { A: ZoneADetail, B: ZoneBDetail, C: ZoneCDetail, D: ZoneDDetail, Wait: ZoneWaitDetail, E: ZoneEDetail, Top: ZoneTopDetail }

export default function ZoneDetail({ zoneId, onClose }) {
  const zone = ZONES[zoneId]
  const View = VIEWS[zoneId]
  if (!View) return null

  return (
    <div className="zone-detail">
      <div className="zd-header" style={{ '--c': zone.color }}>
        <div className="zd-badge" style={{ background: zone.color + '22', border: `1px solid ${zone.color}44`, color: zone.color }}>
          {zone.label}
        </div>
        <div className="zd-title">{zone.subtitle}</div>
        <div className="zd-desc">{zone.description}</div>
      </div>
      <View />
    </div>
  )
}
