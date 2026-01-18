import { useAppContext } from '../App'

function RecommendationsScreen() {
  const { surveyData, userProfile, agniScore, navigateTo } = useAppContext()

  // Generate personalized recommendations based on user data
  // TODO: Replace with actual ML model recommendations
  const generateRecommendations = () => {
    const recommendations = []

    // Eating time suggestions
    if (surveyData.dinnerTiming === 'after8') {
      recommendations.push({
        category: 'Eating Time',
        title: 'Consider earlier dinner timing',
        description: 'Try to have dinner before 8 PM to allow proper digestion before sleep.',
        why: `Based on your response, you typically eat after 8 PM. Eating closer to bedtime can impact digestive efficiency and sleep quality.`,
      })
    }

    if (userProfile.mealPattern === 'irregular') {
      recommendations.push({
        category: 'Meal Pattern',
        title: 'Establish regular meal times',
        description: 'Try to eat meals at consistent times each day to support digestive regularity.',
        why: `Your meal pattern is irregular. Consistent meal timing helps your digestive system establish predictable patterns.`,
      })
    }

    // Food avoidance tips
    if (surveyData.bloatingFrequency >= 3) {
      recommendations.push({
        category: 'Food Choices',
        title: 'Monitor bloating triggers',
        description: 'Consider reducing intake of gas-producing foods like beans, cruciferous vegetables, and carbonated drinks.',
        why: `You experience bloating ${surveyData.bloatingFrequency >= 4 ? 'often' : 'sometimes'}. Identifying and reducing trigger foods can help manage this.`,
      })
    }

    if (surveyData.stoolConsistency === 'hard') {
      recommendations.push({
        category: 'Food Choices',
        title: 'Increase fiber and hydration',
        description: 'Add more fiber-rich foods (fruits, vegetables, whole grains) and ensure adequate water intake.',
        why: 'Your stool consistency suggests you may need more fiber and hydration for optimal digestive function.',
      })
    }

    if (surveyData.stoolConsistency === 'loose' || surveyData.stoolConsistency === 'watery') {
      recommendations.push({
        category: 'Food Choices',
        title: 'Consider binding foods',
        description: 'Include foods like bananas, white rice, and toast. Avoid high-fiber foods temporarily.',
        why: 'Your stool consistency suggests your digestive system may benefit from more binding, easily digestible foods.',
      })
    }

    // Lifestyle suggestions
    if (surveyData.energyAfterMeals <= 2) {
      recommendations.push({
        category: 'Lifestyle',
        title: 'Light activity after meals',
        description: 'Take a short 10-15 minute walk after meals to support digestion and energy levels.',
        why: `Your energy levels after meals are low. Light movement can stimulate digestion and prevent post-meal fatigue.`,
      })
    }

    if (userProfile.sleepDuration && userProfile.sleepDuration < 7) {
      recommendations.push({
        category: 'Lifestyle',
        title: 'Improve sleep duration',
        description: `Aim for 7-9 hours of sleep. Poor sleep can negatively impact digestive health.`,
        why: `You currently sleep ${userProfile.sleepDuration} hours on average. Adequate sleep is crucial for digestive system repair and function.`,
      })
    }

    if (surveyData.hungerRegularity <= 2) {
      recommendations.push({
        category: 'Meal Pattern',
        title: 'Eat before extreme hunger',
        description: 'Try to eat regular meals even if you don\'t feel hungry initially. This helps regulate hunger signals.',
        why: 'Your irregular hunger patterns may be causing digestive stress. Establishing regular meal times can help normalize hunger signals.',
      })
    }

    // Default recommendation if score is low
    if (agniScore < 50 && recommendations.length === 0) {
      recommendations.push({
        category: 'General',
        title: 'Focus on consistent routines',
        description: 'Establish regular meal times, adequate sleep, and mindful eating practices.',
        why: 'Your overall digestive patterns suggest that establishing consistent routines will benefit your digestive health.',
      })
    }

    return recommendations.length > 0 ? recommendations : [
      {
        category: 'Maintenance',
        title: 'Maintain your current habits',
        description: 'Your digestive health patterns look good. Continue with your current routine.',
        why: 'Based on your responses, you\'re maintaining healthy digestive habits. Keep up the good work!',
      },
    ]
  }

  const recommendations = generateRecommendations()

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Personalized Recommendations</h1>
          <p className="text-gray-600">AI-powered suggestions tailored to your digestive patterns</p>
        </div>

        <div className="space-y-6 mb-8">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-2">
                    {rec.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">{rec.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{rec.description}</p>
              
              <details className="mt-4">
                <summary className="cursor-pointer text-primary-600 font-medium hover:text-primary-700">
                  Why this?
                </summary>
                <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-gray-700 text-sm leading-relaxed">{rec.why}</p>
                  <p className="text-xs text-gray-600 mt-2 italic">
                    * This recommendation is generated based on your survey responses using pattern detection algorithms.
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">About These Recommendations</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            These personalized recommendations are generated using AI-powered pattern detection algorithms that analyze 
            your survey responses, profile information, and digestive health patterns. In a production version, 
            these would be enhanced with machine learning models trained on larger datasets and updated in real-time 
            as you log your daily symptoms.
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigateTo('result')}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Back to Results
          </button>
          <button
            onClick={() => navigateTo('daily-log')}
            className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Start Daily Logging
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <button
            onClick={() => navigateTo('chat')}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Ask AI Assistant
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecommendationsScreen




