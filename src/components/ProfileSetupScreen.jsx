import { useState } from 'react'
import { useAppContext } from '../App'

function ProfileSetupScreen() {
  const { userProfile, setUserProfile, navigateTo } = useAppContext()
  const [formData, setFormData] = useState({
    age: userProfile.age || '',
    gender: userProfile.gender || '',
    mealPattern: userProfile.mealPattern || '',
    sleepDuration: userProfile.sleepDuration || '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserProfile({
      age: parseInt(formData.age),
      gender: formData.gender,
      mealPattern: formData.mealPattern,
      sleepDuration: parseFloat(formData.sleepDuration),
    })
    navigateTo('survey')
  }

  const isFormValid = formData.age && formData.mealPattern && formData.sleepDuration

  return (
    <div className="min-h-screen bg-gradient-subtle py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-agni-charcoal mb-2">Profile Setup</h1>
          <p className="text-agni-charcoal-light text-lg">Help us personalize your experience</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-agni-amber/20 p-8 hover:shadow-2xl transition-shadow duration-300">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="1"
              max="120"
              required
              className="w-full px-4 py-3 border-2 border-agni-amber/30 rounded-xl focus:ring-2 focus:ring-agni-flame focus:border-agni-flame outline-none bg-white/80 transition-all duration-200"
              placeholder="Enter your age"
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
              Gender (Optional)
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-agni-amber/30 rounded-xl focus:ring-2 focus:ring-agni-flame focus:border-agni-flame outline-none bg-white/80 transition-all duration-200"
            >
              <option value="">Prefer not to say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="mealPattern" className="block text-sm font-medium text-gray-700 mb-2">
              Meal Pattern <span className="text-red-500">*</span>
            </label>
            <select
              id="mealPattern"
              name="mealPattern"
              value={formData.mealPattern}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-agni-amber/30 rounded-xl focus:ring-2 focus:ring-agni-flame focus:border-agni-flame outline-none bg-white/80 transition-all duration-200"
            >
              <option value="">Select meal pattern</option>
              <option value="regular">Regular</option>
              <option value="irregular">Irregular</option>
            </select>
          </div>

          <div>
            <label htmlFor="sleepDuration" className="block text-sm font-medium text-gray-700 mb-2">
              Average Sleep Duration (hours) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="sleepDuration"
              name="sleepDuration"
              value={formData.sleepDuration}
              onChange={handleChange}
              min="3"
              max="12"
              step="0.5"
              required
              className="w-full px-4 py-3 border-2 border-agni-amber/30 rounded-xl focus:ring-2 focus:ring-agni-flame focus:border-agni-flame outline-none bg-white/80 transition-all duration-200"
              placeholder="e.g., 7.5"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigateTo('onboarding')}
              className="flex-1 px-6 py-3.5 border-2 border-agni-amber/40 text-agni-charcoal rounded-xl font-semibold hover:bg-white/80 hover:border-agni-amber transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!isFormValid}
              className="flex-1 px-6 py-3.5 bg-gradient-to-r from-agni-saffron to-agni-flame text-white rounded-xl font-semibold hover:from-agni-saffron-dark hover:to-agni-flame-dark transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileSetupScreen



