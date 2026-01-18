function AgniStomachIllustration({ size = 200 }) {
  return (
    <div className="relative inline-block">
      {/* Enhanced golden halo with pulsing effect */}
      <div 
        className="absolute rounded-full blur-3xl animate-pulse" 
        style={{ 
          width: size * 1.8, 
          height: size * 1.8, 
          left: '50%', 
          top: '50%', 
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.25) 0%, rgba(255, 140, 66, 0.15) 40%, rgba(255, 217, 61, 0.08) 70%, transparent 100%)'
        }}
      ></div>
      
      {/* Secondary glow layer */}
      <div 
        className="absolute rounded-full blur-2xl animate-pulse" 
        style={{ 
          width: size * 1.4, 
          height: size * 1.4, 
          left: '50%', 
          top: '50%', 
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255, 217, 61, 0.2) 0%, rgba(255, 183, 77, 0.1) 50%, transparent 80%)',
          animationDelay: '0.5s'
        }}
      ></div>
      
      {/* Main SVG - Enhanced Stomach with Dramatic Fire */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 animate-fade-in drop-shadow-2xl"
      >
        <defs>
          {/* Intense fire gradient - more dramatic */}
          <radialGradient id="agniFireCore" cx="50%" cy="45%" r="35%">
            <stop offset="0%" stopColor="#FFD93D" stopOpacity="1" />
            <stop offset="30%" stopColor="#FFB74D" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#FF8C42" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.6" />
          </radialGradient>
          
          {/* Enhanced stomach outline with fire gradient */}
          <linearGradient id="stomachOutline" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD93D" />
            <stop offset="25%" stopColor="#FFB74D" />
            <stop offset="50%" stopColor="#FF8C42" />
            <stop offset="75%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>
          
          {/* Dramatic inner glow */}
          <radialGradient id="innerGlow" cx="100" cy="90" r="40">
            <stop offset="0%" stopColor="#FFD93D" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#FFB74D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
          </radialGradient>
          
          {/* Flame tip gradient */}
          <linearGradient id="flameTip" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FF8C42" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFD93D" stopOpacity="1" />
          </linearGradient>
          
          {/* Glow filter for dramatic effect */}
          <filter id="dramaticGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Enhanced Stomach Shape - more prominent and detailed */}
        <path
          d="M 50 70 
             Q 40 60, 55 55
             Q 70 50, 90 55
             Q 110 50, 130 55
             Q 145 50, 150 60
             Q 155 70, 152 85
             Q 150 100, 145 115
             Q 140 130, 130 135
             Q 120 140, 105 138
             Q 90 140, 75 138
             Q 60 140, 50 135
             Q 45 130, 48 115
             Q 50 100, 52 85
             Q 50 75, 50 70 Z"
          stroke="url(#stomachOutline)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#dramaticGlow)"
        />

        {/* Stomach fill with subtle fire glow */}
        <path
          d="M 50 70 
             Q 40 60, 55 55
             Q 70 50, 90 55
             Q 110 50, 130 55
             Q 145 50, 150 60
             Q 155 70, 152 85
             Q 150 100, 145 115
             Q 140 130, 130 135
             Q 120 140, 105 138
             Q 90 140, 75 138
             Q 60 140, 50 135
             Q 45 130, 48 115
             Q 50 100, 52 85
             Q 50 75, 50 70 Z"
          fill="url(#agniFireCore)"
          fillOpacity="0.2"
          filter="url(#dramaticGlow)"
        />

        {/* Enhanced stomach entry points */}
        <path
          d="M 90 55 L 95 45"
          stroke="url(#stomachOutline)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.8"
          filter="url(#dramaticGlow)"
        />
        <path
          d="M 105 55 L 110 45"
          stroke="url(#stomachOutline)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.8"
          filter="url(#dramaticGlow)"
        />

        {/* Dramatic Inner Fire Core - Agni */}
        <ellipse
          cx="100"
          cy="95"
          rx="35"
          ry="40"
          fill="url(#agniFireCore)"
          opacity="0.9"
          filter="url(#dramaticGlow)"
        >
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" />
          <animate attributeName="rx" values="35;37;35" dur="2.5s" repeatCount="indefinite" />
        </ellipse>

        {/* Enhanced inner glow with pulsing */}
        <ellipse
          cx="100"
          cy="95"
          rx="28"
          ry="32"
          fill="url(#innerGlow)"
          filter="url(#dramaticGlow)"
        >
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
        </ellipse>

        {/* Multiple flame shapes representing Agni */}
        <g filter="url(#dramaticGlow)">
          {/* Central flame */}
          <path
            d="M 95 120 L 100 75 L 105 120 L 100 125 Z"
            fill="url(#flameTip)"
            opacity="0.9"
          >
            <animate attributeName="opacity" values="0.9;1;0.9" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="d" values="M 95 120 L 100 75 L 105 120 L 100 125 Z;M 95 120 L 100 70 L 105 120 L 100 125 Z;M 95 120 L 100 75 L 105 120 L 100 125 Z" dur="1.5s" repeatCount="indefinite" />
          </path>
          
          {/* Left flame */}
          <path
            d="M 85 115 L 88 85 L 91 115 L 88 118 Z"
            fill="url(#flameTip)"
            opacity="0.7"
          >
            <animate attributeName="opacity" values="0.7;0.9;0.7" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="d" values="M 85 115 L 88 85 L 91 115 L 88 118 Z;M 85 115 L 88 80 L 91 115 L 88 118 Z;M 85 115 L 88 85 L 91 115 L 88 118 Z" dur="1.8s" repeatCount="indefinite" />
          </path>
          
          {/* Right flame */}
          <path
            d="M 109 115 L 112 85 L 115 115 L 112 118 Z"
            fill="url(#flameTip)"
            opacity="0.7"
          >
            <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2.1s" repeatCount="indefinite" />
            <animate attributeName="d" values="M 109 115 L 112 85 L 115 115 L 112 118 Z;M 109 115 L 112 80 L 115 115 L 112 118 Z;M 109 115 L 112 85 L 115 115 L 112 118 Z" dur="2.1s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Enhanced digestive lining with fire theme */}
        <g opacity="0.4">
          <path
            d="M 65 100 Q 100 95, 135 100"
            fill="none"
            stroke="url(#stomachOutline)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#dramaticGlow)"
          />
          <path
            d="M 70 115 Q 100 110, 130 115"
            fill="none"
            stroke="url(#stomachOutline)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#dramaticGlow)"
          />
          <path
            d="M 75 125 Q 100 122, 125 125"
            fill="none"
            stroke="url(#stomachOutline)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#dramaticGlow)"
          />
        </g>

        {/* Floating fire particles */}
        <g filter="url(#dramaticGlow)">
          {[...Array(4)].map((_, i) => (
            <circle
              key={i}
              cx={80 + i * 15}
              cy={90 + Math.sin(i) * 10}
              r="2"
              fill="url(#flameTip)"
              opacity="0.6"
            >
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="cy" values={`${90 + Math.sin(i) * 10};${85 + Math.sin(i) * 10};${90 + Math.sin(i) * 10}`} dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  )
}

export default AgniStomachIllustration
