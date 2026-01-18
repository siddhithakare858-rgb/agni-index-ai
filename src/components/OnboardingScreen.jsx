import { useEffect, useState } from 'react'
import { useAppContext } from '../App'
import Logo from './Logo'
import agniLogo from '../assets/agni-logo.jpeg'

function OnboardingScreen() {
  const { navigateTo } = useAppContext()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Fade-in animation on page load
    setIsVisible(true)
  }, [])

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced background with strong fire theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-agni-flame/20 via-agni-saffron/15 to-agni-gold/10"></div>
      
      {/* Multiple radial glows for dramatic effect */}
      <div 
        className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse" 
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, rgba(255, 140, 66, 0.08) 40%, transparent 70%)'
        }}
      ></div>
      
      <div 
        className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 rounded-full blur-3xl animate-pulse" 
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 217, 61, 0.12) 0%, rgba(255, 183, 77, 0.06) 40%, transparent 70%)',
          animationDelay: '1s'
        }}
      ></div>

      {/* Animated floating embers */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-agni-saffron rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className={`max-w-4xl w-full text-center space-y-16 relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-8'}`}>
        {/* Logo - positioned at top with enhanced glow */}
        <div className="flex justify-center mb-12 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-agni-saffron to-agni-flame rounded-full blur-xl opacity-30 animate-pulse"></div>
            <Logo size="large" showText={true} />
          </div>
        </div>

        {/* Hero Illustration - Agni Logo */}
        <div className="flex justify-center items-center my-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            {/* Enhanced glow behind logo */}
            <div 
              className="absolute rounded-full blur-3xl animate-pulse" 
              style={{ 
                width: '400px', 
                height: '400px', 
                left: '50%', 
                top: '50%', 
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, rgba(255, 140, 66, 0.1) 40%, transparent 70%)'
              }}
            ></div>
            <img 
              src={agniLogo} 
              alt="Agni AI Index Logo" 
              className="relative z-10 w-80 h-80 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Main Heading - Enhanced typography and impact */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h1 className="text-6xl md:text-7xl font-black leading-tight tracking-tight">
            <span className="block text-agni-charcoal mb-2">Master your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-agni-saffron via-agni-flame to-agni-gold animate-pulse drop-shadow-lg">
              Digestive Fire
            </span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-agni-charcoal font-bold max-w-2xl mx-auto leading-relaxed">
              Unlock the ancient wisdom of Agni
            </p>
            <p className="text-xl md:text-2xl text-agni-charcoal-light font-medium max-w-xl mx-auto leading-relaxed">
              AI-powered digestive intelligence for optimal health and vitality
            </p>
          </div>
        </div>

        {/* Enhanced Tagline with fire theme */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md rounded-full border border-agni-saffron/30 shadow-2xl">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-agni-saffron to-agni-flame animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-agni-saffron animate-ping opacity-75"></div>
            </div>
            <span className="text-base text-agni-charcoal font-bold tracking-wide">
              Ayurvedic Intelligence × Modern Technology
            </span>
          </div>
        </div>

        {/* Enhanced CTA Button with powerful animations */}
        <div className="animate-fade-in pt-8" style={{ animationDelay: '1.2s' }}>
          <button
            onClick={() => navigateTo('profile')}
            className="group relative w-full max-w-md mx-auto bg-gradient-to-r from-agni-saffron via-agni-flame to-agni-gold text-white py-6 px-12 rounded-3xl text-2xl font-black hover:from-agni-saffron-dark hover:via-agni-flame-dark hover:to-agni-gold-dark transition-all duration-700 shadow-2xl hover:shadow-agni-flame/60 hover:scale-105 active:scale-95 overflow-hidden transform"
          >
            {/* Animated background shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Enhanced glow effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-agni-gold/40 via-agni-saffron/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            
            {/* Button text with enhanced styling */}
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span className="drop-shadow-lg">Ignite Your Health</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          {/* Enhanced trust indicators */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center gap-6 text-sm text-agni-charcoal-light font-bold">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-agni-saffron animate-pulse"></div>
                No sign-up required
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-agni-flame animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                AI-powered analysis
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-agni-gold animate-pulse" style={{ animationDelay: '1s' }}></div>
                Personalized insights
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingScreen
