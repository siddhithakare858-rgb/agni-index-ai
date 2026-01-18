/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced Fire-themed Agni colors
        agni: {
          // Core fire colors
          saffron: '#FF8C42', // Deep saffron
          'saffron-light': '#FFA366',
          'saffron-dark': '#E6731E',
          flame: '#FF6B35', // Orange-red flame tone
          'flame-light': '#FF8A66',
          'flame-dark': '#E65100',
          gold: '#FFD93D', // Golden yellow
          'gold-light': '#FFE66D',
          'gold-dark': '#F4C430',
          amber: '#FFB74D', // Warm amber
          'amber-light': '#FFCC80',
          'amber-dark': '#FF9800',
          ember: '#FF4500', // Ember glow
          'ember-light': '#FF6347',
          'ember-dark': '#DC143C',
          maroon: '#800020', // Dark maroon
          'maroon-light': '#B3002F',
          charcoal: '#2C2C2C', // Near-black for text
          'charcoal-light': '#404040',
          'charcoal-dark': '#1A1A1A',
        },
        // Keep existing for compatibility
        primary: {
          50: '#FFF5E6',
          100: '#FFE8CC',
          200: '#FFD199',
          300: '#FFB84D',
          400: '#FFA366',
          500: '#FF8C42',
          600: '#FF6B35',
          700: '#E65100',
          800: '#B3002F',
          900: '#800020',
        },
      },
      backgroundImage: {
        // Enhanced fire gradients
        'gradient-fire': 'linear-gradient(135deg, #FFF5E6 0%, #FFE8CC 25%, #FFD199 50%, #FFB74D 75%, #FF8C42 100%)',
        'gradient-fire-intense': 'linear-gradient(135deg, #FFD93D 0%, #FFB74D 20%, #FF8C42 40%, #FF6B35 60%, #E65100 80%, #FF4500 100%)',
        'gradient-flame': 'linear-gradient(to bottom, #FF6B35 0%, #FF8C42 30%, #FFB74D 60%, #FFD93D 100%)',
        'gradient-ember': 'radial-gradient(circle, #FF4500 0%, #FF6B35 30%, #FF8C42 60%, #FFB74D 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FFF9F0 0%, #FFE8CC 50%, #FFD199 100%)',
        'gradient-subtle': 'linear-gradient(to bottom, #FFFFFF 0%, #FFF9F0 100%)',
        'gradient-agni': 'radial-gradient(ellipse at center, #FFD93D 0%, #FF8C42 40%, #FF6B35 70%, transparent 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flicker': 'flicker 1.5s ease-in-out infinite alternate',
        'ember': 'ember 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.6', filter: 'brightness(1)' },
          '100%': { opacity: '1', filter: 'brightness(1.2)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        ember: {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1)', 
            opacity: '0.8' 
          },
          '25%': { 
            transform: 'translate(5px, -10px) scale(1.1)', 
            opacity: '1' 
          },
          '50%': { 
            transform: 'translate(-5px, -5px) scale(0.9)', 
            opacity: '0.6' 
          },
          '75%': { 
            transform: 'translate(3px, -8px) scale(1.05)', 
            opacity: '0.9' 
          },
        },
      },
      boxShadow: {
        'fire': '0 0 20px rgba(255, 107, 53, 0.5), 0 0 40px rgba(255, 140, 66, 0.3), 0 0 60px rgba(255, 217, 61, 0.1)',
        'fire-intense': '0 0 30px rgba(255, 69, 0, 0.6), 0 0 60px rgba(255, 107, 53, 0.4), 0 0 90px rgba(255, 140, 66, 0.2)',
        'ember': '0 0 15px rgba(255, 69, 0, 0.4), 0 0 30px rgba(255, 107, 53, 0.2)',
        'agni': '0 4px 20px rgba(255, 107, 53, 0.3), 0 8px 40px rgba(255, 140, 66, 0.2)',
      },
      filter: {
        'fire-glow': 'drop-shadow(0 0 10px rgba(255, 107, 53, 0.5))',
        'ember-glow': 'drop-shadow(0 0 15px rgba(255, 69, 0, 0.6))',
      },
    },
  },
  plugins: [],
}
