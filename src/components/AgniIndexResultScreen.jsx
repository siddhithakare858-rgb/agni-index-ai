import { useAppContext } from '../App'

function AgniIndexResultScreen() {
  const { agniScore, navigateTo, surveyData, userProfile } = useAppContext()

  const getCategory = (score) => {
    if (score >= 75) return { 
      label: 'Strong', 
      bgColorClass: 'bg-accent-50', 
      borderColorClass: 'border-accent-600',
      textColorClass: 'bg-accent-600',
      description: 'Your digestive health appears to be in good shape!' 
    }
    if (score >= 50) return { 
      label: 'Moderate', 
      bgColorClass: 'bg-primary-50', 
      borderColorClass: 'border-primary-600',
      textColorClass: 'bg-primary-600',
      description: 'There\'s room for improvement in your digestive patterns.' 
    }
    return { 
      label: 'Weak', 
      bgColorClass: 'bg-orange-50', 
      borderColorClass: 'border-orange-600',
      textColorClass: 'bg-orange-600',
      description: 'Your digestive health could benefit from lifestyle adjustments.' 
    }
  }

  const category = getCategory(agniScore)
  
  // Generate explanation based on inputs
  const generateExplanation = () => {
    const factors = []
    
    if (surveyData.hungerRegularity <= 2) {
      factors.push('irregular hunger patterns')
    }
    if (surveyData.bloatingFrequency >= 4) {
      factors.push('frequent bloating')
    }
    if (surveyData.energyAfterMeals <= 2) {
      factors.push('low energy after meals')
    }
    if (surveyData.stoolConsistency !== 'normal') {
      factors.push('irregular stool consistency')
    }
    if (surveyData.dinnerTiming === 'after8') {
      factors.push('late dinner timing')
    }
    if (userProfile.mealPattern === 'irregular') {
      factors.push('irregular meal patterns')
    }
    if (userProfile.sleepDuration && userProfile.sleepDuration < 6) {
      factors.push('insufficient sleep')
    }

    if (factors.length === 0) {
      return 'Your responses indicate good digestive health habits. Keep maintaining your current routine!'
    }

    return `Based on your responses, we've identified ${factors.join(', ')} as areas that may be affecting your digestive health. Our recommendations will help address these patterns.`
  }

  // Mock trend (in production, this would be calculated from historical data)
  const trend = agniScore >= 60 ? 'improving' : 'needs attention'

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Agni Index Score</h1>
          <p className="text-gray-600">AI-powered analysis of your digestive health</p>
        </div>

        {/* Score Display */}
        <div className={`${category.bgColorClass} rounded-2xl p-8 mb-6 text-center border-2 ${category.borderColorClass}`}>
          <div className="space-y-4">
            <div className="text-6xl font-bold text-gray-900">{agniScore}</div>
            <div className={`inline-block px-6 py-2 rounded-full ${category.textColorClass} text-white font-semibold text-lg`}>
              {category.label}
            </div>
            <p className="text-gray-700 mt-4">{category.description}</p>
          </div>
        </div>

        {/* Trend Indicator */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Trend</h3>
              <p className="text-gray-600 text-sm">
                {trend === 'improving' 
                  ? 'Your digestive patterns are improving' 
                  : 'Your digestive patterns need attention'}
              </p>
            </div>
            <div className={`p-3 rounded-full ${trend === 'improving' ? 'bg-accent-100' : 'bg-orange-100'}`}>
              {trend === 'improving' ? (
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Analysis Summary</h3>
          <p className="text-gray-700 leading-relaxed">{generateExplanation()}</p>
          <p className="text-sm text-gray-600 mt-4 italic">
            * This analysis is based on pattern detection algorithms. For medical concerns, please consult a healthcare professional.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigateTo('survey')}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Retake Survey
          </button>
          <button
            onClick={() => navigateTo('recommendations')}
            className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            View Recommendations
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <button
            onClick={() => navigateTo('daily-log')}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Daily Log
          </button>
          <button
            onClick={() => navigateTo('chat')}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Chat Assistant
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgniIndexResultScreen

