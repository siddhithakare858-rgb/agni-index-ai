import { useState } from 'react'
import { useAppContext } from '../App'

function AgniIndexResultScreen() {
  const { agniScore, navigateTo, surveyData, userProfile } = useAppContext()
  const [language, setLanguage] = useState('english')

  // Agni Type Data with Translations
  const agniTypeData = {
    samagni: {
      scoreRange: { min: 80, max: 100 },
      colors: {
        bg: 'bg-gradient-to-br from-agni-gold/20 to-agni-amber/30',
        border: 'border-agni-gold',
        text: 'bg-gradient-to-r from-agni-gold to-agni-amber',
        accent: 'text-agni-flame-dark'
      },
      translations: {
        english: {
          name: 'Samagni',
          subtitle: 'Balanced Agni',
          features: [
            'Timely hunger (Kshudha)',
            'Proper digestion (Pachana Shakti)',
            'Regular, well-formed stools',
            'No Ama',
            'Lightness after meals (Laghuta)'
          ],
          doshaStatus: 'Tridosha in equilibrium',
          healthImplication: 'Bala, Ojas, strong immunity',
          description: 'Your digestive fire is balanced and optimal.'
        },
        hindi: {
          name: 'समाग्नि',
          subtitle: 'संतुलित अग्नि',
          features: [
            'समय पर भूख (क्षुधा)',
            'उचित पाचन (पाचन शक्ति)',
            'नियमित, अच्छी तरह से बने मल',
            'आम नहीं',
            'भोजन के बाद हल्कापन (लघुता)'
          ],
          doshaStatus: 'त्रिदोष संतुलन में',
          healthImplication: 'बल, ओज, मजबूत प्रतिरक्षा',
          description: 'आपकी पाचन अग्नि संतुलित और इष्टतम है।'
        },
        marathi: {
          name: 'समाग्नि',
          subtitle: 'संतुलित अग्नि',
          features: [
            'वेळेवर भूक (क्षुधा)',
            'योग्य पाचन (पाचन शक्ति)',
            'नियमित, चांगले बनलेले मल',
            'आम नाही',
            'जेवणानंतर हलकेपणा (लघुता)'
          ],
          doshaStatus: 'त्रिदोष संतुलनात',
          healthImplication: 'बल, ओज, मजबूत रोगप्रतिकारशक्ती',
          description: 'तुमची पाचन अग्नि संतुलित आणि इष्टतम आहे।'
        }
      }
    },
    tikshnagni: {
      scoreRange: { min: 65, max: 79 },
      colors: {
        bg: 'bg-gradient-to-br from-agni-flame/20 to-agni-saffron/30',
        border: 'border-agni-flame',
        text: 'bg-gradient-to-r from-agni-flame to-agni-saffron',
        accent: 'text-agni-flame-dark'
      },
      translations: {
        english: {
          name: 'Tikshnagni',
          subtitle: 'Sharp / Intense Agni',
          features: [
            'Excess or very strong hunger',
            'Fast digestion',
            'Burning sensation, acidity',
            'Loose or frequent stools',
            'Irritability, heat intolerance'
          ],
          doshaStatus: 'Dosha Dominance: Pitta',
          healthImplication: 'Risk if prolonged: Dhatu kshaya',
          description: 'Your digestive fire is sharp and intense, indicating Pitta dominance.'
        },
        hindi: {
          name: 'तीक्ष्णाग्नि',
          subtitle: 'तीव्र / तीक्ष्ण अग्नि',
          features: [
            'अत्यधिक या बहुत तेज भूख',
            'तेज पाचन',
            'जलन, अम्लता',
            'ढीले या बार-बार मल',
            'चिड़चिड़ापन, गर्मी असहिष्णुता'
          ],
          doshaStatus: 'दोष प्रभुत्व: पित्त',
          healthImplication: 'लंबे समय तक रहने पर जोखिम: धातु क्षय',
          description: 'आपकी पाचन अग्नि तीक्ष्ण और तीव्र है, जो पित्त प्रभुत्व दर्शाता है।'
        },
        marathi: {
          name: 'तीक्ष्णाग्नि',
          subtitle: 'तीक्ष्ण / तीव्र अग्नि',
          features: [
            'अत्यधिक किंवा खूप मजबूत भूक',
            'जलद पाचन',
            'जळजळ, अम्लता',
            'सैल किंवा वारंवार मल',
            'चिडचिड, उष्णता असहिष्णुता'
          ],
          doshaStatus: 'दोष प्रभुत्व: पित्त',
          healthImplication: 'प्रदीर्घ असल्यास धोका: धातु क्षय',
          description: 'तुमची पाचन अग्नि तीक्ष्ण आणि तीव्र आहे, पित्त प्रभुत्व दर्शविते।'
        }
      }
    },
    vishamagni: {
      scoreRange: { min: 50, max: 64 },
      colors: {
        bg: 'bg-gradient-to-br from-agni-amber/20 to-agni-gold/30',
        border: 'border-agni-amber',
        text: 'bg-gradient-to-r from-agni-amber to-agni-gold',
        accent: 'text-agni-flame-dark'
      },
      translations: {
        english: {
          name: 'Vishamagni',
          subtitle: 'Irregular Agni',
          features: [
            'Irregular appetite',
            'Variable digestion',
            'Gas, bloating',
            'Alternating constipation & loose stools',
            'Unpredictable energy levels'
          ],
          doshaStatus: 'Dosha Dominance: Vata',
          healthImplication: 'Risk if prolonged: Ama accumulation + Vata disorders',
          description: 'Your digestive fire is irregular, indicating Vata dominance.'
        },
        hindi: {
          name: 'विषमाग्नि',
          subtitle: 'अनियमित अग्नि',
          features: [
            'अनियमित भूख',
            'अस्थिर पाचन',
            'गैस, सूजन',
            'कब्ज और ढीले मल का बारी-बारी से होना',
            'अप्रत्याशित ऊर्जा स्तर'
          ],
          doshaStatus: 'दोष प्रभुत्व: वात',
          healthImplication: 'लंबे समय तक रहने पर जोखिम: आम संचय + वात विकार',
          description: 'आपकी पाचन अग्नि अनियमित है, जो वात प्रभुत्व दर्शाता है।'
        },
        marathi: {
          name: 'विषमाग्नि',
          subtitle: 'अनियमित अग्नि',
          features: [
            'अनियमित भूक',
            'चलनीशील पाचन',
            'वायू, सुजणे',
            'कोष्ठबद्धता आणि सैल मल एकमेकांशी बदलणे',
            'अप्रत्याशित ऊर्जा स्तर'
          ],
          doshaStatus: 'दोष प्रभुत्व: वात',
          healthImplication: 'प्रदीर्घ असल्यास धोका: आम संचय + वात विकार',
          description: 'तुमची पाचन अग्नि अनियमित आहे, वात प्रभुत्व दर्शविते।'
        }
      }
    },
    mandagni: {
      scoreRange: { min: 0, max: 49 },
      colors: {
        bg: 'bg-gradient-to-br from-agni-maroon/20 to-agni-charcoal/10',
        border: 'border-agni-maroon',
        text: 'bg-gradient-to-r from-agni-maroon to-agni-charcoal',
        accent: 'text-agni-maroon'
      },
      translations: {
        english: {
          name: 'Mandagni',
          subtitle: 'Weak / Sluggish Agni',
          features: [
            'Poor or absent hunger',
            'Slow digestion',
            'Heaviness, lethargy',
            'Sticky, foul stools',
            'Tongue coating (Ama)'
          ],
          doshaStatus: 'Dosha Dominance: Kapha',
          healthImplication: 'Risk if prolonged: Ama → Srotorodha → Vyadhi',
          description: 'Your digestive fire is weak and sluggish, indicating Kapha dominance.'
        },
        hindi: {
          name: 'मंदाग्नि',
          subtitle: 'कमजोर / सुस्त अग्नि',
          features: [
            'कम या अनुपस्थित भूख',
            'धीमी पाचन',
            'भारीपन, सुस्ती',
            'चिपचिपे, दुर्गंधयुक्त मल',
            'जीभ पर कोटिंग (आम)'
          ],
          doshaStatus: 'दोष प्रभुत्व: कफ',
          healthImplication: 'लंबे समय तक रहने पर जोखिम: आम → स्रोतरोध → व्याधि',
          description: 'आपकी पाचन अग्नि कमजोर और सुस्त है, जो कफ प्रभुत्व दर्शाता है।'
        },
        marathi: {
          name: 'मंदाग्नि',
          subtitle: 'कमजोर / सुस्त अग्नि',
          features: [
            'कमजोर किंवा अनुपस्थित भूक',
            'मंद पाचन',
            'जडत्व, सुस्ती',
            'चिकट, दुर्गंध युक्त मल',
            'जिभेवर कोटिंग (आम)'
          ],
          doshaStatus: 'दोष प्रभुत्व: कफ',
          healthImplication: 'प्रदीर्घ असल्यास धोका: आम → स्रोतरोध → व्याधि',
          description: 'तुमची पाचन अग्नि कमजोर आणि सुस्त आहे, कफ प्रभुत्व दर्शविते।'
        }
      }
    }
  }

  // Determine Agni Type based on score
  const getAgniType = (score) => {
    if (score >= 80) return agniTypeData.samagni
    if (score >= 65) return agniTypeData.tikshnagni
    if (score >= 50) return agniTypeData.vishamagni
    return agniTypeData.mandagni
  }

  const agniType = getAgniType(agniScore)
  const currentLang = language.toLowerCase()
  const t = agniType.translations[currentLang] || agniType.translations.english

  // Translations for common UI elements
  const uiTranslations = {
    english: {
      title: 'Your Agni Index Score',
      subtitle: 'AI-powered Ayurvedic analysis of your digestive health',
      scoreRange: 'Score Range',
      ayurvedicFeatures: 'Ayurvedic Features',
      doshaStatus: 'Dosha Status',
      healthImplication: 'Health Implication',
      retakeSurvey: 'Retake Survey',
      viewRecommendations: 'View Recommendations',
      dailyLog: 'Daily Log',
      chatAssistant: 'Chat Assistant',
      disclaimer: '* This analysis is based on AI-powered pattern detection algorithms. For medical concerns, please consult an Ayurvedic healthcare professional.'
    },
    hindi: {
      title: 'आपका अग्नि इंडेक्स स्कोर',
      subtitle: 'पाचन स्वास्थ्य का AI-संचालित आयुर्वेदिक विश्लेषण',
      scoreRange: 'स्कोर रेंज',
      ayurvedicFeatures: 'आयुर्वेदिक विशेषताएं',
      doshaStatus: 'दोष स्थिति',
      healthImplication: 'स्वास्थ्य निहितार्थ',
      retakeSurvey: 'सर्वेक्षण दोबारा करें',
      viewRecommendations: 'सुझाव देखें',
      dailyLog: 'दैनिक लॉग',
      chatAssistant: 'चैट असिस्टेंट',
      disclaimer: '* यह विश्लेषण AI-संचालित पैटर्न डिटेक्शन algorithms पर आधारित है। चिकित्सा चिंताओं के लिए, कृपया एक आयुर्वेदिक स्वास्थ्य सेवा पेशेवर से परामर्श करें।'
    },
    marathi: {
      title: 'तुमचा अग्नि इंडेक्स स्कोर',
      subtitle: 'पाचन आरोग्याचे AI-चालित आयुर्वेदिक विश्लेषण',
      scoreRange: 'स्कोर श्रेणी',
      ayurvedicFeatures: 'आयुर्वेदिक वैशिष्ट्ये',
      doshaStatus: 'दोष स्थिती',
      healthImplication: 'आरोग्य निहितार्थ',
      retakeSurvey: 'सर्वेक्षण पुन्हा करा',
      viewRecommendations: 'शिफारसी पहा',
      dailyLog: 'दैनंदिन लॉग',
      chatAssistant: 'चॅट असिस्टंट',
      disclaimer: '* हे विश्लेषण AI-चालित पॅटर्न डिटेक्शन अल्गोरिदमवर आधारित आहे। वैद्यकीय चिंतांसाठी, कृपया आयुर्वेदिक आरोग्य सेवा व्यावसायिकाची सल्ला घ्या।'
    }
  }

  const ui = uiTranslations[currentLang] || uiTranslations.english

  return (
    <div className="min-h-screen bg-gradient-subtle py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Language Selector */}
        <div className="mb-6 flex justify-end">
          <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-md border border-agni-amber/20">
            {['English', 'Hindi', 'Marathi'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang.toLowerCase())}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  language.toLowerCase() === lang.toLowerCase()
                    ? 'bg-gradient-to-r from-agni-saffron to-agni-flame text-white shadow-lg'
                    : 'text-agni-charcoal-light hover:text-agni-charcoal hover:bg-agni-amber/10'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-agni-charcoal mb-3">{ui.title}</h1>
          <p className="text-agni-charcoal-light text-lg">{ui.subtitle}</p>
        </div>

        {/* Agni Type Display Card - Enhanced with shadows */}
        <div className={`${agniType.colors.bg} rounded-3xl p-8 mb-6 border-2 ${agniType.colors.border} shadow-2xl hover:shadow-3xl transition-shadow duration-300`}>
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <div className="text-left">
                <div className={`inline-block px-6 py-3 rounded-full ${agniType.colors.text} text-white font-bold text-xl mb-2 shadow-lg`}>
                  {t.name}
                </div>
                <p className="text-lg text-agni-charcoal font-semibold mt-2">{t.subtitle}</p>
              </div>
              <div className="text-right">
                <div className="text-6xl font-bold text-agni-charcoal bg-white/50 rounded-2xl px-6 py-3 shadow-inner">
                  {agniScore}
                </div>
                <p className="text-sm text-agni-charcoal-light mt-2 font-medium">
                  {ui.scoreRange}: {agniType.scoreRange.min}-{agniType.scoreRange.max}
                </p>
              </div>
            </div>
            
            <p className="text-agni-charcoal text-lg font-medium leading-relaxed">{t.description}</p>
          </div>
        </div>

        {/* Ayurvedic Features - Enhanced card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-agni-amber/20 p-6 mb-4 hover:shadow-xl transition-shadow duration-300">
          <h3 className={`text-2xl font-bold ${agniType.colors.accent} mb-5 flex items-center gap-2`}>
            <span className="inline-block w-1 h-6 bg-gradient-to-b from-agni-saffron to-agni-flame rounded-full"></span>
            {ui.ayurvedicFeatures}
          </h3>
          <ul className="space-y-3">
            {t.features.map((feature, index) => (
              <li key={index} className="flex items-start group">
                <span className={`${agniType.colors.text} w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0 shadow-md group-hover:scale-125 transition-transform`}></span>
                <span className="text-agni-charcoal leading-relaxed text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dosha Status & Health Implication - Enhanced cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-agni-amber/20 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-agni-charcoal mb-3">{ui.doshaStatus}</h3>
            <p className={`text-xl font-bold ${agniType.colors.accent}`}>{t.doshaStatus}</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-agni-amber/20 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-agni-charcoal mb-3">{ui.healthImplication}</h3>
            <p className="text-agni-charcoal leading-relaxed">{t.healthImplication}</p>
          </div>
        </div>

        {/* Disclaimer - Fire-themed */}
        <div className="bg-gradient-to-r from-agni-amber/10 to-agni-gold/10 rounded-2xl border border-agni-amber/30 p-5 mb-6 shadow-md">
          <p className="text-sm text-agni-charcoal-light leading-relaxed italic">{ui.disclaimer}</p>
        </div>

        {/* Navigation Buttons - Enhanced */}
        <div className="flex gap-4">
          <button
            onClick={() => navigateTo('survey')}
            className="flex-1 px-6 py-3.5 border-2 border-agni-amber/40 text-agni-charcoal rounded-xl font-semibold hover:bg-white/80 hover:border-agni-amber transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            {ui.retakeSurvey}
          </button>
          <button
            onClick={() => navigateTo('recommendations')}
            className="flex-1 px-6 py-3.5 bg-gradient-to-r from-agni-saffron to-agni-flame text-white rounded-xl font-semibold hover:from-agni-saffron-dark hover:to-agni-flame-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            {ui.viewRecommendations}
          </button>
        </div>

        {/* Bottom Navigation - Fire-themed */}
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <button
            onClick={() => navigateTo('daily-log')}
            className="text-agni-flame hover:text-agni-flame-dark font-semibold hover:underline transition-colors"
          >
            {ui.dailyLog}
          </button>
          <button
            onClick={() => navigateTo('chat')}
            className="text-agni-flame hover:text-agni-flame-dark font-semibold hover:underline transition-colors"
          >
            {ui.chatAssistant}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgniIndexResultScreen
