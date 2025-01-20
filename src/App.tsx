import React, { useState, useEffect } from 'react';
import { Instagram, X, Globe, ChevronLeft, ChevronRight, Youtube, Twitter, Play, Info } from 'lucide-react';

type Language = 'fr' | 'en' | 'de';
type MediaType = 'photo' | 'video';

interface MediaItem {
  id: number;
  type: MediaType;
  url: string;
  title: {
    fr: string;
    en: string;
    de: string;
  };
  description: {
    fr: string;
    en: string;
    de: string;
  };
  videoUrl?: string;
}

const translations = {
  fr: {
    photos: 'Photos',
    videos: 'Vidéos',
    social: 'Réseaux Sociaux',
    page: 'Page',
    of: 'sur',
    loading: 'Chargement...',
    close: 'Fermer',
    viewDetails: 'Voir les détails',
    playVideo: 'Lancer la vidéo'
  },
  en: {
    photos: 'Photos',
    videos: 'Videos',
    social: 'Social Media',
    page: 'Page',
    of: 'of',
    loading: 'Loading...',
    close: 'Close',
    viewDetails: 'View details',
    playVideo: 'Play video'
  },
  de: {
    photos: 'Fotos',
    videos: 'Videos',
    social: 'Soziale Medien',
    page: 'Seite',
    of: 'von',
    loading: 'Laden...',
    close: 'Schließen',
    viewDetails: 'Details anzeigen',
    playVideo: 'Video abspielen'
  }
};

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
    title: {
      fr: 'Paysage urbain',
      en: 'Urban landscape',
      de: 'Stadtlandschaft'
    },
    description: {
      fr: 'Une vue saisissante de la ville moderne',
      en: 'A striking view of the modern city',
      de: 'Ein beeindruckender Blick auf die moderne Stadt'
    }
  },
  {
    id: 2,
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167',
    title: {
      fr: 'Portrait en noir et blanc',
      en: 'Black and white portrait',
      de: 'Schwarz-Weiß-Porträt'
    },
    description: {
      fr: 'Portrait artistique capturant l\'émotion pure',
      en: 'Artistic portrait capturing raw emotion',
      de: 'Künstlerisches Porträt, das pure Emotion einfängt'
    }
  },
  {
    id: 3,
    type: 'video',
    url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279',
    videoUrl: 'https://player.vimeo.com/video/76979871',
    title: {
      fr: 'Danse urbaine',
      en: 'Urban dance',
      de: 'Urbaner Tanz'
    },
    description: {
      fr: 'Performance de danse contemporaine dans les rues',
      en: 'Contemporary dance performance in the streets',
      de: 'Zeitgenössische Tanzperformance in den Straßen'
    }
  },
  // Add more items as needed...
];

function App() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState<'main' | 'photos' | 'videos' | 'social'>('main');
  const [language, setLanguage] = useState<Language>('fr');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 4;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const currentItems = mediaItems.filter(item => 
    currentSection === 'photos' ? item.type === 'photo' : item.type === 'video'
  );
  
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);
  const currentItems_displayed = currentItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-black text-2xl font-light animate-pulse">
          {translations[language].loading}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* Language Selector */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={() => setShowLanguageMenu(!showLanguageMenu)}
          className="flex items-center space-x-2 hover:text-gray-600 transition-transform hover:scale-110"
        >
          <Globe className="w-6 h-6" />
        </button>
        
        {showLanguageMenu && (
          <div className="absolute mt-2 bg-black text-white rounded-md shadow-lg animate-fadeIn">
            {(['fr', 'en', 'de'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setShowLanguageMenu(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-800 transition-colors"
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      {currentSection === 'main' ? (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-8 animate-fadeIn">
          <h1 className="text-6xl font-light tracking-wider mb-12">SOFIANE GLENAC</h1>
          <div className="flex flex-col space-y-4">
            {['photos', 'videos', 'social'].map((section) => (
              <button
                key={section}
                onClick={() => setCurrentSection(section as any)}
                className="px-8 py-2 border border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
              >
                {translations[language][section as keyof typeof translations['fr']]}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="min-h-screen p-8 animate-fadeIn">
          <button
            onClick={() => {
              setCurrentSection('main');
              setCurrentPage(1);
            }}
            className="absolute top-4 right-4 hover:rotate-90 transition-transform duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          {currentSection === 'social' ? (
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
              {[
                { icon: Instagram, link: 'https://instagram.com', handle: '@sofianeglenac' },
                { icon: Youtube, link: 'https://youtube.com', handle: 'Sofiane Glenac' },
                { icon: Twitter, link: 'https://twitter.com', handle: '@sofianeglenac' }
              ].map(({ icon: Icon, link, handle }) => (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:text-gray-600 transition-transform hover:scale-110"
                >
                  <Icon className="w-8 h-8" />
                  <span className="text-xl">{handle}</span>
                </a>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-8 mt-16">
                {currentItems_displayed.map((item) => (
                  <div
                    key={item.id}
                    className="relative group cursor-pointer"
                    onClick={() => {
                      setSelectedItem(item);
                      setShowModal(true);
                    }}
                  >
                    <img
                      src={`${item.url}?auto=format&fit=crop&w=800&q=80`}
                      alt=""
                      className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        {item.type === 'video' ? (
                          <Play className="w-12 h-12 text-white" />
                        ) : (
                          <Info className="w-12 h-12 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center space-x-4">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="disabled:opacity-50 hover:scale-110 transition-transform"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <span className="font-light tracking-wider">
                    {translations[language].page} {currentPage} {translations[language].of} {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="disabled:opacity-50 hover:scale-110 transition-transform"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50 animate-fadeIn">
          <div className="max-w-4xl w-full mx-4 bg-black rounded-lg overflow-hidden shadow-2xl">
            <div className="relative">
              {selectedItem.type === 'video' && selectedItem.videoUrl ? (
                <iframe
                  src={selectedItem.videoUrl}
                  className="w-full aspect-video"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <img
                  src={`${selectedItem.url}?auto=format&fit=crop&w=1200&q=80`}
                  alt=""
                  className="w-full"
                />
              )}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white hover:rotate-90 transition-transform duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-light mb-2 text-white">{selectedItem.title[language]}</h2>
              <p className="text-gray-300">{selectedItem.description[language]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;