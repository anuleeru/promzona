import { useState, useRef } from 'react'
import './Tooltip.css'

export default function Tooltip({ children, text, title, side = 'top' }) {
  const [show, setShow] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  const handleEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({ x: rect.left + rect.width / 2, y: rect.top })
    setShow(true)
  }

  return (
    <div
      className="tooltip-wrap"
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className={`tooltip-popup tooltip-${side}`}>
          {title && <div className="tooltip-title">{title}</div>}
          <div className="tooltip-text">{text}</div>
        </div>
      )}
    </div>
  )
}
