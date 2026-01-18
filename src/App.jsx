import { useState, createContext, useContext } from 'react'
import OnboardingScreen from './components/OnboardingScreen'
import ProfileSetupScreen from './components/ProfileSetupScreen'
import SurveyScreen from './components/SurveyScreen'
import AIAnalysisScreen from './components/AIAnalysisScreen'
import AgniIndexResultScreen from './components/AgniIndexResultScreen'
import RecommendationsScreen from './components/RecommendationsScreen'
import DailyLogScreen from './components/DailyLogScreen'
import ChatAssistantScreen from './components/ChatAssistantScreen'
import VoiceAssistant from './components/VoiceAssistant'
import Logo from './components/Logo'
import './App.css'

// Create context for app state
export const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

function App() {
  const [currentScreen, setCurrentScreen] = useState('onboarding')
  const [userProfile, setUserProfile] = useState({
    age: null,
    gender: '',
    mealPattern: '',
    sleepDuration: null,
  })
  const [surveyData, setSurveyData] = useState({
    hungerRegularity: 3,
    bloatingFrequency: 2,
    energyAfterMeals: 3,
    stoolConsistency: 'normal',
    dinnerTiming: '',
  })
  const [agniScore, setAgniScore] = useState(null)
  const [dailyLogs, setDailyLogs] = useState([])

  const navigateTo = (screen) => {
    setCurrentScreen(screen)
  }

  const value = {
    userProfile,
    setUserProfile,
    surveyData,
    setSurveyData,
    agniScore,
    setAgniScore,
    dailyLogs,
    setDailyLogs,
    navigateTo,
  }

  // Show logo and voice assistant on all screens except onboarding
  const showHeader = currentScreen !== 'onboarding'

  return (
    <AppContext.Provider value={value}>
      <div className="min-h-screen bg-gradient-subtle">
        {showHeader && (
          <header className="bg-white/80 backdrop-blur-sm border-b border-agni-amber/20 shadow-sm sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <Logo size="small" showText={true} />
              <div className="text-sm text-agni-charcoal-light font-medium">
                AI-Powered Digestive Health
              </div>
            </div>
          </header>
        )}
        
        {currentScreen === 'onboarding' && <OnboardingScreen />}
        {currentScreen === 'profile' && <ProfileSetupScreen />}
        {currentScreen === 'survey' && <SurveyScreen />}
        {currentScreen === 'analysis' && <AIAnalysisScreen />}
        {currentScreen === 'result' && <AgniIndexResultScreen />}
        {currentScreen === 'recommendations' && <RecommendationsScreen />}
        {currentScreen === 'daily-log' && <DailyLogScreen />}
        {currentScreen === 'chat' && <ChatAssistantScreen />}
        
        {/* Global Voice Assistant - show on all screens except onboarding and analysis */}
        {currentScreen !== 'onboarding' && currentScreen !== 'analysis' && <VoiceAssistant />}
      </div>
    </AppContext.Provider>
  )
}

export default App
