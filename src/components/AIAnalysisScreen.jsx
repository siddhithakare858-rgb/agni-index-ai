import { useEffect } from 'react'
import { useAppContext } from '../App'

function AIAnalysisScreen() {
  const { navigateTo, surveyData, setAgniScore } = useAppContext()

  useEffect(() => {
    // Simulate AI processing - in production, this would call an ML model API
    // TODO: Replace with actual AI/ML model integration
    const timer = setTimeout(() => {
      // Calculate Agni Score based on survey responses
      // This is a mock calculation - replace with actual ML model prediction
      let score = 50 // Base score

      // Hunger regularity (1-5 scale, higher is better)
      score += (surveyData.hungerRegularity - 3) * 10

      // Bloating frequency (1-5 scale, lower is better)
      score += (6 - surveyData.bloatingFrequency) * 5

      // Energy after meals (1-5 scale, higher is better)
      score += (surveyData.energyAfterMeals - 3) * 8

      // Stool consistency scoring
      const stoolScores = {
        hard: -15,
        firm: -5,
        normal: 15,
        loose: -10,
        watery: -20,
      }
      score += stoolScores[surveyData.stoolConsistency] || 0

      // Dinner timing
      if (surveyData.dinnerTiming === 'before8') {
        score += 10
      } else {
        score -= 5
      }

      // Normalize to 0-100 range
      score = Math.max(0, Math.min(100, score))

      setAgniScore(Math.round(score))
      navigateTo('result')
    }, 3000) // 3 second loading simulation

    return () => clearTimeout(timer)
  }, [surveyData, setAgniScore, navigateTo])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-6">
          <div className="inline-block p-6 rounded-full bg-primary-100 animate-pulse">
            <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Analyzing your digestive patterns using AI...
            </h2>
            <p className="text-gray-600">
              Processing your responses with pattern detection algorithms
            </p>
          </div>

          <div className="flex justify-center space-x-2 pt-4">
            <div className="w-3 h-3 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>

          <div className="pt-4">
            <p className="text-sm text-gray-500 italic">
              AI-powered analysis • Pattern detection • Personalized insights
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIAnalysisScreen

