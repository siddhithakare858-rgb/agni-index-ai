import { useState, createContext, useContext } from 'react'
import OnboardingScreen from './components/OnboardingScreen'
import ProfileSetupScreen from './components/ProfileSetupScreen'
import SurveyScreen from './components/SurveyScreen'
import AIAnalysisScreen from './components/AIAnalysisScreen'
import AgniIndexResultScreen from './components/AgniIndexResultScreen'
import RecommendationsScreen from './components/RecommendationsScreen'
import DailyLogScreen from './components/DailyLogScreen'
import ChatAssistantScreen from './components/ChatAssistantScreen'
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

  return (
    <AppContext.Provider value={value}>
      <div className="min-h-screen bg-white">
        {currentScreen === 'onboarding' && <OnboardingScreen />}
        {currentScreen === 'profile' && <ProfileSetupScreen />}
        {currentScreen === 'survey' && <SurveyScreen />}
        {currentScreen === 'analysis' && <AIAnalysisScreen />}
        {currentScreen === 'result' && <AgniIndexResultScreen />}
        {currentScreen === 'recommendations' && <RecommendationsScreen />}
        {currentScreen === 'daily-log' && <DailyLogScreen />}
        {currentScreen === 'chat' && <ChatAssistantScreen />}
      </div>
    </AppContext.Provider>
  )
}

export default App
