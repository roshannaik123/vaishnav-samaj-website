import React from "react";

const PatternBorder = ({ uid }) => {
  const patternId = `dp-${uid}`;

  return (
    <div style={{ height: "14px", overflow: "hidden" }} className="w-full">
      <svg width="100%" height="14" preserveAspectRatio="none">
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="40"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            {/* Background */}
            <rect width="40" height="14" fill="#8B1538" />

            {/* Connecting line */}
            <line
              x1="0"
              y1="7"
              x2="40"
              y2="7"
              stroke="#D4AF37"
              strokeWidth="1"
            />

            {/* Decorative motif */}
            <circle cx="10" cy="7" r="3" fill="#D4AF37" />
            <circle cx="30" cy="7" r="3" fill="#D4AF37" />

            {/* Small diamonds */}
            <polygon points="20,2 24,7 20,12 16,7" fill="#F4C430" />

            {/* Accent dots */}
            <circle cx="20" cy="7" r="1.5" fill="#FFF8DC" />
          </pattern>
        </defs>

        <rect width="100%" height="14" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

export default PatternBorder;
