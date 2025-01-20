import React from 'react';
import { Camera, Video, Mail } from 'lucide-react';

interface MainMenuProps {
  onNavigate: (section: string) => void;
  translations: {
    photos: string;
    videos: string;
    contact: string;
    welcome: string;
  };
}

const MainMenu: React.FC<MainMenuProps> = ({ onNavigate, translations }) => {
  return (
    <div className="text-center w-full max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">
        {translations.welcome}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={() => onNavigate('photos')}
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 p-1 transition-all hover:scale-105"
        >
          <div className="relative bg-black/30 p-8 rounded-lg flex flex-col items-center gap-4 group-hover:bg-black/20 transition-all">
            <Camera size={48} className="transform transition-all group-hover:scale-110" />
            <span className="text-xl font-semibold">{translations.photos}</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 to-transparent"></div>
            </div>
          </div>
        </button>

        <button
          onClick={() => onNavigate('videos')}
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-600 to-purple-600 p-1 transition-all hover:scale-105"
        >
          <div className="relative bg-black/30 p-8 rounded-lg flex flex-col items-center gap-4 group-hover:bg-black/20 transition-all">
            <Video size={48} className="transform transition-all group-hover:scale-110" />
            <span className="text-xl font-semibold">{translations.videos}</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent"></div>
            </div>
          </div>
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 p-1 transition-all hover:scale-105"
        >
          <div className="relative bg-black/30 p-8 rounded-lg flex flex-col items-center gap-4 group-hover:bg-black/20 transition-all">
            <Mail size={48} className="transform transition-all group-hover:scale-110" />
            <span className="text-xl font-semibold">{translations.contact}</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MainMenu;