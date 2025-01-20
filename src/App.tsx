import React, { useState, createContext, useContext } from 'react';
import { Settings, Camera, Video, Mail, Globe, Instagram, Youtube, Twitter } from 'lucide-react';
import OptionsMenu from './components/OptionsMenu';
import MainMenu from './components/MainMenu';
import PhotoSection from './components/PhotoSection';
import VideoSection from './components/VideoSection';
import ContactSection from './components/ContactSection';
import LanguageSelector from './components/LanguageSelector';

interface ThemeContext {
  brightness: number;
  contrast: number;
  language: 'fr' | 'en' | 'de';
  setBrightness: (value: number) => void;
  setContrast: (value: number) => void;
  setLanguage: (lang: 'fr' | 'en' | 'de') => void;
}

export const ThemeContext = createContext<ThemeContext>({
  brightness: 100,
  contrast: 100,
  language: 'fr',
  setBrightness: () => {},
  setContrast: () => {},
  setLanguage: () => {},
});

function App() {
  const [currentSection, setCurrentSection] = useState('main');
  const [showOptions, setShowOptions] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [language, setLanguage] = useState<'fr' | 'en' | 'de'>('fr');

  const translations = {
    fr: {
      photos: 'Photos',
      videos: 'Vidéos',
      contact: 'Contact',
      options: 'Options',
      welcome: 'Bienvenue dans mon univers créatif',
      social: 'Réseaux Sociaux'
    },
    en: {
      photos: 'Photos',
      videos: 'Videos',
      contact: 'Contact',
      options: 'Options',
      welcome: 'Welcome to my creative universe',
      social: 'Social Media'
    },
    de: {
      photos: 'Fotos',
      videos: 'Videos',
      contact: 'Kontakt',
      options: 'Optionen',
      welcome: 'Willkommen in meiner kreativen Welt',
      social: 'Soziale Medien'
    }
  };

  return (
    <ThemeContext.Provider value={{ brightness, contrast, language, setBrightness, setContrast, setLanguage }}>
      <div 
        className="min-h-screen text-white transition-all duration-300"
        style={{
          filter: `brightness(${brightness}%) contrast(${contrast}%)`,
          background: 'linear-gradient(135deg, #1a0f3c 0%, #4b1248 50%, #2c3e50 100%)'
        }}
      >
        {/* Background effect */}
        <div className="fixed inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header with options */}
          <header className="p-4 flex justify-between items-center animate-fadeIn">
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/20 transition-all duration-300 rounded-full transform hover:scale-110"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/20 transition-all duration-300 rounded-full transform hover:scale-110"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/20 transition-all duration-300 rounded-full transform hover:scale-110"
              >
                <Twitter size={24} />
              </a>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowLanguageSelector(true)}
                className="p-2 hover:bg-white/20 transition-all duration-300 rounded-full transform hover:scale-110"
              >
                <Globe size={24} />
              </button>
              <button 
                onClick={() => setShowOptions(!showOptions)}
                className="p-2 hover:bg-white/20 transition-all duration-300 rounded-full transform hover:scale-110"
              >
                <Settings size={24} className={showOptions ? 'animate-spin' : ''} />
              </button>
            </div>
          </header>

          {/* Main content area */}
          <main className="flex-1 flex items-center justify-center p-4">
            {showOptions && (
              <OptionsMenu 
                onClose={() => setShowOptions(false)}
              />
            )}
            
            {showLanguageSelector && (
              <LanguageSelector 
                onClose={() => setShowLanguageSelector(false)}
                onSelectLanguage={(lang) => {
                  setLanguage(lang);
                  setShowLanguageSelector(false);
                }}
                currentLanguage={language}
              />
            )}
            
            {currentSection === 'main' && (
              <MainMenu 
                onNavigate={setCurrentSection} 
                translations={translations[language]} 
              />
            )}
            {currentSection === 'photos' && (
              <PhotoSection onBack={() => setCurrentSection('main')} />
            )}
            {currentSection === 'videos' && (
              <VideoSection onBack={() => setCurrentSection('main')} />
            )}
            {currentSection === 'contact' && (
              <ContactSection onBack={() => setCurrentSection('main')} />
            )}
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;