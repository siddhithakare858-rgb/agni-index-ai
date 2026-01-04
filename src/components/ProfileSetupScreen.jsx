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
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Setup</h1>
          <p className="text-gray-600">Help us personalize your experience</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              placeholder="e.g., 7.5"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigateTo('onboarding')}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!isFormValid}
              className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

