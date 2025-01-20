import React from 'react';
import { X } from 'lucide-react';

interface LanguageSelectorProps {
  onClose: () => void;
  onSelectLanguage: (lang: 'fr' | 'en' | 'de') => void;
  currentLanguage: 'fr' | 'en' | 'de';
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onClose, onSelectLanguage, currentLanguage }) => {
  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 p-8 rounded-lg max-w-md w-full animate-slideIn">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Select Language</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all hover:rotate-90"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelectLanguage(lang.code as 'fr' | 'en' | 'de')}
              className={`w-full p-4 rounded-lg flex items-center gap-4 transition-all transform hover:scale-105 ${
                currentLanguage === lang.code 
                  ? 'bg-white/20 shadow-lg' 
                  : 'hover:bg-white/10'
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="text-lg">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;