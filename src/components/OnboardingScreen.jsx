import { useAppContext } from '../App'

function OnboardingScreen() {
  const { navigateTo } = useAppContext()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-primary-600">Agni Index</h1>
          <p className="text-xl text-gray-700 font-medium">
            Understand your digestion. Prevent problems early.
          </p>
        </div>
        
        <div className="space-y-6 pt-8">
          <div className="space-y-2">
            <div className="inline-block p-4 rounded-full bg-primary-100">
              <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          
          <p className="text-gray-600 text-lg">
            AI-powered digestive health monitoring for preventive care
          </p>
        </div>

        <button
          onClick={() => navigateTo('profile')}
          className="w-full bg-primary-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default OnboardingScreen

