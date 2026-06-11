import React from 'react'

const DiamondDivider = ({ light = false }) => {
  // Line color
  const lineColor = light ? 'rgba(255, 255, 255, 0.25)' : 'rgba(230, 81, 0, 0.2)'
  // Gold color
  const goldColor = light ? 'rgba(212, 175, 55, 0.85)' : '#D4AF37'
  // Saffron color
  const saffronColor = light ? 'rgba(255, 255, 255, 0.95)' : '#E65100'
  // Peacock Teal color for decorative highlights
  const tealColor = light ? 'rgba(255, 255, 255, 0.65)' : '#0F4C5C'

  return (
    <div className="flex items-center gap-4 my-8 w-full max-w-lg mx-auto">
      <div className="flex-1 h-px" style={{ background: lineColor }} />
      
      <svg width="68" height="22" viewBox="0 0 68 22" fill="none" className="flex-shrink-0">
        {/* Center outer gold diamond */}
        <path d="M34 3L39 11L34 19L29 11Z" fill={goldColor} />
        {/* Center inner saffron diamond */}
        <path d="M34 7.5L37 11L34 14.5L31 11Z" fill={saffronColor} />
        
        {/* Flanking Peacock Teal diamonds */}
        <path d="M18 11L22 7L26 11L22 15Z" fill={tealColor} opacity="0.65" />
        <path d="M50 11L46 7L42 11L46 15Z" fill={tealColor} opacity="0.65" />
        
        {/* Outer gold circular dots */}
        <circle cx="6" cy="11" r="2.5" fill={goldColor} opacity="0.55" />
        <circle cx="62" cy="11" r="2.5" fill={goldColor} opacity="0.55" />
        
        {/* Thin connecting lines */}
        <line x1="9" y1="11" x2="16" y2="11" stroke={goldColor} strokeWidth="0.8" opacity="0.5" />
        <line x1="52" y1="11" x2="59" y2="11" stroke={goldColor} strokeWidth="0.8" opacity="0.5" />
      </svg>
      
      <div className="flex-1 h-px" style={{ background: lineColor }} />
    </div>
  )
}

export default DiamondDivider
