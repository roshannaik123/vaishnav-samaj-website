import React from 'react'
import DiamondDivider from './DiamondDivider'

const SectionHeader = ({ title, subtitle, light = false, centered = true }) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl md:text-4xl font-semibold tracking-wide mb-2 ${light ? 'text-white' : 'text-foreground'}`}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-xl ${centered ? 'mx-auto' : ''} mt-2 ${light ? 'text-white/70' : 'text-muted-foreground'}`}
          style={{ fontFamily: "'Lora', serif" }}
        >
          {subtitle}
        </p>
      )}
      <DiamondDivider light={light} />
    </div>
  )
}

export default SectionHeader
