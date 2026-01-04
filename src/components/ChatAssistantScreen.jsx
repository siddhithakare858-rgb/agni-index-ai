import { useState, useRef, useEffect } from 'react'
import { useAppContext } from '../App'

function ChatAssistantScreen() {
  const { surveyData, userProfile, agniScore, dailyLogs, navigateTo } = useAppContext()
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI digestive health assistant. I can answer questions about your digestive patterns and provide personalized insights. How can I help you today?',
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // AI response generation based on user data
  // TODO: Replace with actual AI/LLM API integration
  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()

    // Bloating-related queries
    if (lowerMessage.includes('bloat') || lowerMessage.includes('bloating')) {
      const bloatingFreq = surveyData.bloatingFrequency
      return {
        role: 'assistant',
        content: `Based on your survey, you experience bloating ${bloatingFreq >= 4 ? 'often' : bloatingFreq >= 3 ? 'sometimes' : 'rarely'}. Here are some suggestions:

• Eat slowly and chew thoroughly
• Avoid carbonated drinks
• Identify trigger foods and reduce intake
• Consider eating smaller, more frequent meals
• Try light activity after meals

Your recent daily logs ${dailyLogs.filter(log => log.bloating === 'yes').length > 0 ? 'show some days with bloating' : 'show minimal bloating'}. Tracking your food intake alongside symptoms can help identify patterns.

Remember, I can only provide general guidance. For persistent bloating, consider consulting a healthcare professional.`,
      }
    }

    // Digestion improvement queries
    if (lowerMessage.includes('improve') || lowerMessage.includes('better') || lowerMessage.includes('digestion')) {
      const recommendations = []
      if (surveyData.dinnerTiming === 'after8') {
        recommendations.push('• Have dinner before 8 PM')
      }
      if (userProfile.mealPattern === 'irregular') {
        recommendations.push('• Establish regular meal times')
      }
      if (userProfile.sleepDuration && userProfile.sleepDuration < 7) {
        recommendations.push(`• Aim for 7-9 hours of sleep (you currently get ${userProfile.sleepDuration} hours)`)
      }
      if (surveyData.energyAfterMeals <= 2) {
        recommendations.push('• Take light walks after meals')
      }

      return {
        role: 'assistant',
        content: `Based on your Agni Index score of ${agniScore} and your survey responses, here are personalized ways to improve your digestion:

${recommendations.length > 0 ? recommendations.join('\n') : '• Maintain regular meal times\n• Stay hydrated\n• Include fiber-rich foods\n• Practice mindful eating'}

Your current patterns suggest ${agniScore >= 75 ? 'good digestive health - maintain these habits!' : agniScore >= 50 ? 'moderate digestive health - small adjustments can help' : 'areas for improvement - the recommendations above can help'}. 

Consistent daily logging will help us track improvements over time. Would you like specific advice on any of these areas?`,
      }
    }

    // Score-related queries
    if (lowerMessage.includes('score') || lowerMessage.includes('agni')) {
      const category = agniScore >= 75 ? 'Strong' : agniScore >= 50 ? 'Moderate' : 'Weak'
      return {
        role: 'assistant',
        content: `Your current Agni Index score is ${agniScore}, which is categorized as "${category}". 

This score is calculated using AI-powered pattern detection algorithms that analyze:
• Hunger regularity patterns
• Bloating frequency
• Energy levels after meals
• Stool consistency patterns
• Meal timing
• Sleep duration

The score helps track your digestive health over time. As you log daily data, the AI models can detect trends and provide more accurate insights.

Your score suggests ${agniScore >= 75 ? 'strong digestive patterns - keep maintaining your healthy habits!' : agniScore >= 50 ? 'moderate digestive health - there\'s room for improvement' : 'weak digestive patterns - lifestyle adjustments can help'}. 

Check your personalized recommendations for specific guidance tailored to your patterns.`,
      }
    }

    // Energy-related queries
    if (lowerMessage.includes('energy') || lowerMessage.includes('tired') || lowerMessage.includes('fatigue')) {
      return {
        role: 'assistant',
        content: `Based on your survey, your energy after meals is ${surveyData.energyAfterMeals <= 2 ? 'low' : surveyData.energyAfterMeals >= 4 ? 'good' : 'moderate'}. Here are some tips:

• Eat balanced meals with protein, complex carbs, and healthy fats
• Avoid large, heavy meals that can cause energy dips
• Stay hydrated throughout the day
• Consider light physical activity after meals (10-15 min walk)
• Ensure adequate sleep (aim for 7-9 hours)

Your daily logs show average energy levels. Tracking your meals and energy patterns together can help identify foods that boost or drain your energy.

Would you like specific meal timing or food suggestions to improve your energy?`,
      }
    }

    // General/fallback response
    return {
      role: 'assistant',
      content: `I understand you're asking about "${userMessage}". Based on your digestive health data:

• Your Agni Index score: ${agniScore} (${agniScore >= 75 ? 'Strong' : agniScore >= 50 ? 'Moderate' : 'Weak'})
• Meal pattern: ${userProfile.mealPattern}
• Sleep duration: ${userProfile.sleepDuration} hours
• Recent logs: ${dailyLogs.length} entries

I can help answer questions about:
• Why you might be experiencing specific symptoms
• How to improve your digestion
• Understanding your Agni Index score
• Personalized recommendations

Feel free to ask me specific questions about bloating, energy levels, meal timing, or any other digestive health topics. Remember, I provide general guidance based on patterns - for medical concerns, please consult a healthcare professional.`,
    }
  }

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput('')
    
    // Add user message
    const newMessages = [...messages, { role: 'user', content: userMessage }]
    setMessages(newMessages)
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = generateAIResponse(userMessage)
      setMessages([...newMessages, aiResponse])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI Chat Assistant</h1>
            <p className="text-sm text-gray-600">Ask questions about your digestive health</p>
          </div>
          <button
            onClick={() => navigateTo('result')}
            className="px-4 py-2 text-gray-600 hover:text-gray-900"
          >
            Back
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Suggestions */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-3">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Why do I feel bloated?',
              'How can I improve digestion?',
              'What is my Agni score?',
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInput(suggestion)}
                className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 text-gray-700"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 px-4 py-4">
        <form onSubmit={handleSend} className="max-w-3xl mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your digestive health..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 italic">
            * AI responses are generated using pattern detection algorithms. For medical concerns, consult a healthcare professional.
          </p>
        </form>
      </div>
    </div>
  )
}

export default ChatAssistantScreen

