# Quick Start Guide

## Run the Application

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## User Flow

1. **Onboarding** → Welcome screen with "Get Started" button
2. **Profile Setup** → Enter age, gender (optional), meal pattern, sleep duration
3. **Survey** → Answer 5 questions about digestive health using sliders and buttons
4. **AI Analysis** → Loading screen simulating AI processing (3 seconds)
5. **Agni Index Result** → View your score (0-100) and category
6. **Recommendations** → Get personalized AI-generated recommendations
7. **Daily Log** → Track daily symptoms (hunger, bloating, energy)
8. **Chat Assistant** → Ask questions and get AI-powered responses

## Features

- ✅ All 8 screens implemented
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Clean healthcare UI with blue/green accents
- ✅ Mock AI analysis with realistic scoring algorithm
- ✅ Personalized recommendations based on user data
- ✅ Daily logging with local state storage
- ✅ AI chat assistant with contextual responses
- ✅ Navigation between all screens

## Notes

- Data is stored in React Context (not persisted to localStorage)
- All AI features are simulated with realistic algorithms
- Medical disclaimers included where appropriate
- Ready for hackathon demonstration

Enjoy your Agni Index app! 🚀




