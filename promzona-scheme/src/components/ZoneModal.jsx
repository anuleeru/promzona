import { useState } from 'react'
import './ZoneModal.css'

export default function ZoneModal({ children, zone, onClose }) {
  return (
    <div className="zone-modal-overlay" onClick={onClose}>
      <div className="zone-modal" onClick={(e) => e.stopPropagation()}>
        <div className="zm-header">
          <div className="zm-badge" style={{ background: zone.color + '22', borderColor: zone.color + '55', color: zone.color }}>
            {zone.label}
          </div>
          <div className="zm-title">{zone.subtitle}</div>
          <button className="zm-close" onClick={onClose}>✕</button>
        </div>
        <div className="zm-body">
          {children}
        </div>
      </div>
    </div>
  )
}
