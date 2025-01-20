import React, { useState } from 'react';
import { Menu, X, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { photos } from './data';

type Language = 'fr' | 'en' | 'de';

const translations = {
  fr: {
    photos: 'Photos',
    videos: 'Vidéos',
    social: 'Réseaux Sociaux',
    page: 'Page',
    of: 'sur',
  },
  en: {
    photos: 'Photos',
    videos: 'Videos',
    social: 'Social Media',
    page: 'Page',
    of: 'of',
  },
  de: {
    photos: 'Fotos',
    videos: 'Videos',
    social: 'Soziale Medien',
    page: 'Seite',
    of: 'von',
  },
};

function App() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');
  const [currentPage, setCurrentPage] = useState(1);
  
  const photosPerPage = 4;
  const totalPages = Math.ceil(photos.length / photosPerPage);
  
  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const renderPhotos = () => {
    const startIndex = (currentPage - 1) * photosPerPage;
    const endIndex = startIndex + photosPerPage;
    const currentPhotos = photos.slice(startIndex, endIndex);

    return (
      <div className="grid grid-cols-2 gap-4 p-4">
        {currentPhotos.map((photo, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-light">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderPagination = () => {
    return (
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 border border-white/20 rounded-full disabled:opacity-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-sm">
          {translations[currentLanguage].page} {currentPage} {translations[currentLanguage].of} {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-2 border border-white/20 rounded-full disabled:opacity-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Language Selector */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <Globe className="w-6 h-6" />
        </button>
        
        {languageMenuOpen && (
          <div className="absolute mt-2 bg-black border border-white/20 rounded-lg shadow-xl">
            <button
              onClick={() => handleLanguageChange('fr')}
              className="block w-full px-4 py-2 text-left hover:bg-white/10"
            >
              Français
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className="block w-full px-4 py-2 text-left hover:bg-white/10"
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('de')}
              className="block w-full px-4 py-2 text-left hover:bg-white/10"
            >
              Deutsch
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      {!currentSection ? (
        <div className="h-screen flex items-center justify-center">
          <div className="grid grid-cols-2 gap-8">
            <button
              onClick={() => setCurrentSection('photos')}
              className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            >
              {translations[currentLanguage].photos}
            </button>
            <button
              onClick={() => setCurrentSection('videos')}
              className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            >
              {translations[currentLanguage].videos}
            </button>
            <button
              onClick={() => setCurrentSection('social')}
              className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            >
              {translations[currentLanguage].social}
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen p-8">
          <button
            onClick={() => setCurrentSection(null)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          {currentSection === 'photos' && (
            <>
              {renderPhotos()}
              {renderPagination()}
            </>
          )}
          
          {currentSection === 'videos' && (
            <div className="grid grid-cols-2 gap-4">
              {/* Add video content here */}
            </div>
          )}
          
          {currentSection === 'social' && (
            <div className="flex flex-col items-center justify-center gap-4">
              {/* Add social media links here */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;