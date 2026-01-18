function Logo({ size = 'default', showText = true }) {
  const sizes = {
    small: { width: 32, height: 32, textSize: 'text-lg' },
    default: { width: 48, height: 48, textSize: 'text-2xl' },
    large: { width: 64, height: 64, textSize: 'text-3xl' },
  }

  const { width, height, textSize } = sizes[size]

  return (
    <div className="flex items-center gap-3">
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 drop-shadow-lg"
      >
        <defs>
          {/* Enhanced fire gradient with more intensity */}
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFD93D" />
            <stop offset="30%" stopColor="#FF8C42" />
            <stop offset="70%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>
          
          {/* Flame gradient for inner fire */}
          <radialGradient id="flameCore" cx="50%" cy="50%" r="30%">
            <stop offset="0%" stopColor="#FFD93D" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FF8C42" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.4" />
          </radialGradient>
          
          {/* Glow filter */}
          <filter id="fireGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background glow effect */}
        <circle cx="50" cy="50" r="35" fill="url(#flameCore)" opacity="0.2" filter="url(#fireGlow)">
          <animate attributeName="r" values="35;38;35" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.3;0.2" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Flame elements integrated with stomach */}
        <path
          d="M45 25 Q50 15, 55 25 Q52 20, 50 22 Q48 20, 45 25"
          fill="url(#logoGradient)"
          opacity="0.8"
          filter="url(#fireGlow)"
        >
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </path>

        {/* Enhanced stomach with flame integration */}
        <path
          d="M50 30 Q35 35, 30 50 Q30 65, 40 70 Q50 73, 60 70 Q70 65, 70 50 Q65 35, 50 30"
          fill="url(#flameCore)"
          fillOpacity="0.3"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          filter="url(#fireGlow)"
        />

        {/* Stomach outline - more prominent */}
        <path
          d="M50 30 Q35 35, 30 50 Q30 65, 40 70 Q50 73, 60 70 Q70 65, 70 50 Q65 35, 50 30"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner flame representing Agni */}
        <ellipse
          cx="50"
          cy="50"
          rx="12"
          ry="15"
          fill="url(#logoGradient)"
          opacity="0.7"
          filter="url(#fireGlow)"
        >
          <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2.5s" repeatCount="indefinite" />
        </ellipse>

        {/* Flame tip */}
        <path
          d="M48 55 L50 40 L52 55 L50 58 Z"
          fill="url(#logoGradient)"
          opacity="0.8"
          filter="url(#fireGlow)"
        >
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" />
        </path>

        {/* Small intestine with flame accent */}
        <path
          d="M70 50 Q75 53, 78 50 Q82 47, 85 53 Q88 59, 85 65 Q82 71, 78 68 Q75 65, 70 63"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#fireGlow)"
        />

        {/* Large intestine with flame accent */}
        <path
          d="M30 50 Q25 45, 20 50 Q15 55, 20 60 Q25 65, 30 63"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#fireGlow)"
        />

        {/* Esophagus with flame integration */}
        <path
          d="M45 10 L45 30 Q45 35, 50 35"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#fireGlow)"
        />
      </svg>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold bg-gradient-to-r from-agni-saffron to-agni-flame bg-clip-text text-transparent ${textSize} leading-tight drop-shadow-sm`}>
            Agni AI
          </span>
          <span className="text-xs bg-gradient-to-r from-agni-flame to-agni-gold bg-clip-text text-transparent font-medium leading-tight">
            Index
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo
