import React from "react";

const HeroBanner = ({ title, subtitle, image }) => {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "320px" }}
    >
      {/* Background Image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* Saffron to Deep Teal spiritual gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15, 76, 92, 0.93) 0%, rgba(230, 81, 0, 0.88) 100%)",
        }}
      />

      {/* Diamond grid SVG background overlay */}
      {/* <div className="absolute inset-0 opacity-[0.055]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="hero-geo"
              x="0"
              y="0"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path d="M24,4 L44,24 L24,44 L4,24 Z" stroke="white" strokeWidth="0.8" fill="none" />
              <path d="M24,12 L36,24 L24,36 L12,24 Z" stroke="white" strokeWidth="0.5" fill="none" />
              <rect x="22" y="22" width="4" height="4" fill="white" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-geo)" />
        </svg>
      </div> */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="heritage-pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              {/* Outer diamond */}
              <path
                d="M50,10 L90,50 L50,90 L10,50 Z"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />

              {/* Connecting diamonds */}
              <path d="M50,0 L50,10" stroke="white" strokeWidth="0.5" />
              <path d="M100,50 L90,50" stroke="white" strokeWidth="0.5" />
              <path d="M50,100 L50,90" stroke="white" strokeWidth="0.5" />
              <path d="M0,50 L10,50" stroke="white" strokeWidth="0.5" />

              {/* Decorative center */}
              <circle cx="50" cy="50" r="4" fill="white" />
              <circle
                cx="50"
                cy="50"
                r="10"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#heritage-pattern)" />
        </svg>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-[0.18em] uppercase mb-4"
          style={{
            fontFamily: "'Cinzel', 'Times New Roman', serif",
            textShadow: "0 2px 24px rgba(0,0,0,0.35)",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mt-2 font-light italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
