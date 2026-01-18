import { useState } from 'react'
import { useAppContext } from '../App'

function SurveyScreen() {
  const { surveyData, setSurveyData, navigateTo } = useAppContext()
  const [localData, setLocalData] = useState({
    hungerRegularity: surveyData.hungerRegularity || 3,
    bloatingFrequency: surveyData.bloatingFrequency || 2,
    energyAfterMeals: surveyData.energyAfterMeals || 3,
    stoolConsistency: surveyData.stoolConsistency || 'normal',
    dinnerTiming: surveyData.dinnerTiming || '',
  })

  const handleSliderChange = (field, value) => {
    setLocalData({ ...localData, [field]: parseInt(value) })
  }

  const handleRadioChange = (field, value) => {
    setLocalData({ ...localData, [field]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSurveyData(localData)
    navigateTo('analysis')
  }

  const getSliderLabel = (value, labels) => {
    return labels[value - 1] || labels[Math.floor(labels.length / 2)]
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Digestive Health Survey</h1>
          <p className="text-gray-600">Answer these questions to help us analyze your digestive patterns</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Hunger Regularity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-lg font-medium text-gray-900 mb-4">
              1. How regular is your hunger pattern?
            </label>
            <div className="space-y-3">
              <input
                type="range"
                min="1"
                max="5"
                value={localData.hungerRegularity}
                onChange={(e) => handleSliderChange('hungerRegularity', e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>Irregular</span>
                <span className="font-medium text-primary-600">
                  {getSliderLabel(localData.hungerRegularity, ['Very Irregular', 'Irregular', 'Moderate', 'Regular', 'Very Regular'])}
                </span>
                <span>Very Regular</span>
              </div>
            </div>
          </div>

          {/* Bloating Frequency */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-lg font-medium text-gray-900 mb-4">
              2. How often do you experience bloating?
            </label>
            <div className="space-y-3">
              <input
                type="range"
                min="1"
                max="5"
                value={localData.bloatingFrequency}
                onChange={(e) => handleSliderChange('bloatingFrequency', e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>Never</span>
                <span className="font-medium text-primary-600">
                  {getSliderLabel(localData.bloatingFrequency, ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'])}
                </span>
                <span>Very Often</span>
              </div>
            </div>
          </div>

          {/* Energy After Meals */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-lg font-medium text-gray-900 mb-4">
              3. How is your energy level after meals?
            </label>
            <div className="space-y-3">
              <input
                type="range"
                min="1"
                max="5"
                value={localData.energyAfterMeals}
                onChange={(e) => handleSliderChange('energyAfterMeals', e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>Low</span>
                <span className="font-medium text-primary-600">
                  {getSliderLabel(localData.energyAfterMeals, ['Very Low', 'Low', 'Moderate', 'Good', 'High'])}
                </span>
                <span>High</span>
              </div>
            </div>
          </div>

          {/* Stool Consistency */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-lg font-medium text-gray-900 mb-4">
              4. Stool consistency (select the closest match)
            </label>
            <div className="grid grid-cols-5 gap-3">
              {[
                { value: 'hard', icon: '🔴', label: 'Hard' },
                { value: 'firm', icon: '🟠', label: 'Firm' },
                { value: 'normal', icon: '🟢', label: 'Normal' },
                { value: 'loose', icon: '🟡', label: 'Loose' },
                { value: 'watery', icon: '🔵', label: 'Watery' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleRadioChange('stoolConsistency', option.value)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    localData.stoolConsistency === option.value
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-3xl mb-2">{option.icon}</div>
                  <div className="text-sm font-medium text-gray-700">{option.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Dinner Timing */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-lg font-medium text-gray-900 mb-4">
              5. When do you typically have dinner?
            </label>
            <div className="space-y-3">
              <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="dinnerTiming"
                  value="before8"
                  checked={localData.dinnerTiming === 'before8'}
                  onChange={(e) => handleRadioChange('dinnerTiming', e.target.value)}
                  className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-3 text-gray-700 font-medium">Before 8 PM</span>
              </label>
              <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="dinnerTiming"
                  value="after8"
                  checked={localData.dinnerTiming === 'after8'}
                  onChange={(e) => handleRadioChange('dinnerTiming', e.target.value)}
                  className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-3 text-gray-700 font-medium">After 8 PM</span>
              </label>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigateTo('profile')}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!localData.dinnerTiming}
              className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Analyze My Patterns
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SurveyScreen




