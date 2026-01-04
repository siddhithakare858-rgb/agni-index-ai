import { useState } from 'react'
import { useAppContext } from '../App'

function DailyLogScreen() {
  const { dailyLogs, setDailyLogs, navigateTo } = useAppContext()
  const [todayLog, setTodayLog] = useState({
    date: new Date().toISOString().split('T')[0],
    hunger: null,
    bloating: null,
    energyLevel: 5,
  })

  const todayLogEntry = dailyLogs.find(log => log.date === todayLog.date)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todayLogEntry) {
      // Update existing log
      setDailyLogs(dailyLogs.map(log => 
        log.date === todayLog.date ? { ...todayLog, id: todayLogEntry.id } : log
      ))
    } else {
      // Add new log
      setDailyLogs([...dailyLogs, { ...todayLog, id: Date.now() }])
    }
    // Reset form
    setTodayLog({
      date: new Date().toISOString().split('T')[0],
      hunger: null,
      bloating: null,
      energyLevel: 5,
    })
    alert('Log saved successfully!')
  }

  const getRecentLogs = () => {
    return dailyLogs
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 7)
  }

  const getEnergyLabel = (level) => {
    const labels = ['Very Low', 'Low', 'Moderate', 'Good', 'High', 'Very High']
    return labels[level - 1] || 'Moderate'
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Daily Log</h1>
          <p className="text-gray-600">Track your daily digestive health patterns</p>
        </div>

        {/* Today's Log Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Log Today's Data</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Date
              </label>
              <input
                type="date"
                value={todayLog.date}
                onChange={(e) => setTodayLog({ ...todayLog, date: e.target.value })}
                max={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Did you feel hungry at regular times today?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="hunger"
                    value="yes"
                    checked={todayLog.hunger === 'yes'}
                    onChange={(e) => setTodayLog({ ...todayLog, hunger: e.target.value })}
                    className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="hunger"
                    value="no"
                    checked={todayLog.hunger === 'no'}
                    onChange={(e) => setTodayLog({ ...todayLog, hunger: e.target.value })}
                    className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Did you experience bloating today?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="bloating"
                    value="yes"
                    checked={todayLog.bloating === 'yes'}
                    onChange={(e) => setTodayLog({ ...todayLog, bloating: e.target.value })}
                    className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="bloating"
                    value="no"
                    checked={todayLog.bloating === 'no'}
                    onChange={(e) => setTodayLog({ ...todayLog, bloating: e.target.value })}
                    className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Overall Energy Level Today: <span className="text-primary-600 font-semibold">{getEnergyLabel(todayLog.energyLevel)}</span>
              </label>
              <input
                type="range"
                min="1"
                max="6"
                value={todayLog.energyLevel}
                onChange={(e) => setTodayLog({ ...todayLog, energyLevel: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Very Low</span>
                <span>Very High</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={todayLog.hunger === null || todayLog.bloating === null}
              className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {todayLogEntry ? 'Update Log' : 'Save Log'}
            </button>
          </form>
        </div>

        {/* Recent Logs */}
        {dailyLogs.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Logs</h2>
            <div className="space-y-3">
              {getRecentLogs().map((log) => (
                <div key={log.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {new Date(log.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Hunger: <span className={log.hunger === 'yes' ? 'text-accent-600' : 'text-gray-600'}>{log.hunger === 'yes' ? 'Regular' : 'Irregular'}</span> • 
                      Bloating: <span className={log.bloating === 'yes' ? 'text-orange-600' : 'text-accent-600'}>{log.bloating === 'yes' ? 'Yes' : 'No'}</span> • 
                      Energy: {getEnergyLabel(log.energyLevel)}
                    </div>
                  </div>
                  <button
                    onClick={() => setTodayLog({
                      date: log.date,
                      hunger: log.hunger,
                      bloating: log.bloating,
                      energyLevel: log.energyLevel,
                    })}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">
              * In a production version, this data would be used to train ML models for predictive insights and pattern recognition.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigateTo('result')}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Back to Results
          </button>
          <button
            onClick={() => navigateTo('chat')}
            className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Chat with AI
          </button>
        </div>
      </div>
    </div>
  )
}

export default DailyLogScreen

