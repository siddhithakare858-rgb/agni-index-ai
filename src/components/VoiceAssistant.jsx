import { useState } from 'react'
import { useAppContext } from '../App'

function VoiceAssistant() {
  const { agniScore, surveyData, userProfile } = useAppContext()
  const [isActive, setIsActive] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [currentMessage, setCurrentMessage] = useState('')

  // Determine Agni Type from score
  const getAgniTypeName = (score) => {
    if (score >= 80) return 'Samagni'
    if (score >= 65) return 'Tikshnagni'
    if (score >= 50) return 'Vishamagni'
    return 'Mandagni'
  }

  const handleVoiceClick = () => {
    setIsActive(!isActive)
    
    if (!isActive) {
      // Start voice interaction
      setIsListening(true)
      setCurrentMessage('Listening...')
      
      // Simulate voice reading Agni type and insights
      setTimeout(() => {
        const agniType = getAgniTypeName(agniScore || 0)
        const insights = `Your Agni type is ${agniType} with a score of ${agniScore || 0}. Based on your digestive patterns, I can provide personalized guidance.`
        setCurrentMessage(insights)
        setIsListening(false)
      }, 2000)
    } else {
      setIsListening(false)
      setCurrentMessage('')
    }
  }

  // Browser Web Speech API integration (simple implementation)
  const handleVoiceCommand = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      setCurrentMessage('Voice recognition is not supported in your browser. Please use Chrome or Edge.')
      setIsListening(false)
      return
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onstart = () => {
      setIsListening(true)
      setCurrentMessage('Listening... Speak your question.')
    }

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setCurrentMessage(`You asked: ${transcript}`)
      
      // Simple response logic
      const response = getVoiceResponse(transcript.toLowerCase())
      setTimeout(() => {
        setCurrentMessage(response)
        speakText(response)
      }, 500)
      setIsListening(false)
    }

    recognition.onerror = () => {
      setCurrentMessage('Sorry, I couldn\'t understand. Please try again.')
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.start()
  }

  const getVoiceResponse = (query) => {
    const agniType = getAgniTypeName(agniScore || 0)
    
    if (query.includes('agni') || query.includes('type') || query.includes('score')) {
      return `Your Agni type is ${agniType} with a score of ${agniScore || 0}. This indicates your digestive fire patterns.`
    }
    if (query.includes('digestion') || query.includes('digest')) {
      return `Based on your responses, focus on regular meal times and mindful eating. Your current patterns show ${surveyData.mealPattern || 'variable'} meal patterns.`
    }
    if (query.includes('bloat') || query.includes('bloating')) {
      return `You experience bloating ${surveyData.bloatingFrequency >= 4 ? 'often' : 'sometimes'}. Consider eating slowly and identifying trigger foods.`
    }
    if (query.includes('energy')) {
      return `Your energy after meals is ${surveyData.energyAfterMeals <= 2 ? 'low' : 'moderate'}. Light activity after meals can help improve this.`
    }
    if (query.includes('help') || query.includes('recommendation')) {
      return `I recommend checking your personalized recommendations screen for detailed guidance tailored to your ${agniType} Agni type.`
    }
    return `I'm here to help with your digestive health. You can ask about your Agni type, digestion, bloating, energy, or recommendations.`
  }

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 0.8
      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <>
      {/* Floating Voice Button */}
      <button
        onClick={isActive ? handleVoiceClick : handleVoiceCommand}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full ${
          isActive ? 'bg-agni-flame' : 'bg-agni-saffron'
        } text-white shadow-2xl hover:shadow-agni-flame/50 transition-all duration-300 flex items-center justify-center ${
          isListening ? 'animate-pulse-fire' : ''
        } hover:scale-110 active:scale-95`}
        aria-label="Ask Agni AI Voice Assistant"
      >
        {isListening ? (
          <svg className="w-8 h-8 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
          </svg>
        )}
      </button>

      {/* Voice Message Panel */}
      {isActive && currentMessage && (
        <div className="fixed bottom-24 right-6 z-40 max-w-sm bg-white rounded-xl shadow-2xl border-2 border-agni-amber p-4 animate-in slide-in-from-bottom-5">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-agni-saffron to-agni-flame flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-agni-charcoal">{currentMessage}</p>
            </div>
            <button
              onClick={() => {
                setIsActive(false)
                setCurrentMessage('')
                if (window.speechSynthesis) {
                  window.speechSynthesis.cancel()
                }
              }}
              className="flex-shrink-0 text-gray-400 hover:text-agni-charcoal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Ask about your Agni type, digestion, or health tips</p>
        </div>
      )}
    </>
  )
}

export default VoiceAssistant


