import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, X } from 'lucide-react';

interface PhotoSectionProps {
  onBack: () => void;
}

interface Photo {
  url: string;
  date: string;
  location: string;
  time: string;
  description: string;
}

const PhotoSection: React.FC<PhotoSectionProps> = ({ onBack }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
      date: '15 Mars 2024',
      location: 'Paris, France',
      time: '14:30',
      description: 'Séance photo urbaine capturant l\'essence de la ville lumière'
    },
    {
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      date: '20 Mars 2024',
      location: 'Alpes, France',
      time: '06:45',
      description: 'Lever de soleil sur les majestueuses Alpes françaises'
    },
    {
      url: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d',
      date: '25 Mars 2024',
      location: 'Provence',
      time: '19:15',
      description: 'Coucher de soleil sur les champs de lavande'
    },
    {
      url: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6',
      date: '30 Mars 2024',
      location: 'Côte d\'Azur',
      time: '12:00',
      description: 'Vue panoramique sur la Méditerranée'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-2 hover:text-gray-300 transition-colors animate-fadeIn"
      >
        <ArrowLeft size={24} />
        <span>Retour</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="aspect-video overflow-hidden group relative cursor-pointer animate-slideUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={`${photo.url}?auto=format&fit=crop&w=800&q=80`}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div 
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100"
              onClick={() => setSelectedPhoto(photo)}
            >
              <span className="text-white text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                Voir plus
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Detail Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-fadeIn">
          <div className="max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden animate-slideIn">
            <div className="relative">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all hover:rotate-90"
              >
                <X size={24} />
              </button>
              <img
                src={`${selectedPhoto.url}?auto=format&fit=crop&w=1200&q=80`}
                alt="Selected photo"
                className="w-full h-[60vh] object-cover"
              />
            </div>
            <div className="p-8 space-y-4">
              <p className="text-lg">{selectedPhoto.description}</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="text-gray-400" size={20} />
                  <span>{selectedPhoto.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-gray-400" size={20} />
                  <span>{selectedPhoto.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-gray-400" size={20} />
                  <span>{selectedPhoto.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoSection;