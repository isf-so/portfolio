import React, { useContext } from 'react';
import { X } from 'lucide-react';
import { ThemeContext } from '../App';

interface OptionsMenuProps {
  onClose: () => void;
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({ onClose }) => {
  const { brightness, contrast, language, setBrightness, setContrast } = useContext(ThemeContext);

  const texts = {
    fr: {
      title: 'Options',
      brightness: 'Luminosité',
      contrast: 'Contraste',
      close: 'Fermer'
    },
    en: {
      title: 'Options',
      brightness: 'Brightness',
      contrast: 'Contrast',
      close: 'Close'
    },
    de: {
      title: 'Optionen',
      brightness: 'Helligkeit',
      contrast: 'Kontrast',
      close: 'Schließen'
    }
  };

  const t = texts[language];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full animate-slideIn">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{t.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-all hover:rotate-90"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm">{t.brightness}</label>
            <input
              type="range"
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              min="50"
              max="150"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm">{t.contrast}</label>
            <input
              type="range"
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              min="50"
              max="150"
              value={contrast}
              onChange={(e) => setContrast(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsMenu;