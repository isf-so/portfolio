import React, { useState } from 'react';
import { ArrowLeft, Play, Calendar, MapPin, Clock, X } from 'lucide-react';

interface VideoSectionProps {
  onBack: () => void;
}

interface Video {
  thumbnail: string;
  videoUrl: string;
  title: string;
  date: string;
  location: string;
  time: string;
  description: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ onBack }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279',
      videoUrl: 'https://player.vimeo.com/video/824804225',
      title: 'Nature Documentary',
      date: '10 Mars 2024',
      location: 'Forêt de Fontainebleau',
      time: '08:30',
      description: 'Une immersion totale dans la nature sauvage de la forêt'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d',
      videoUrl: 'https://player.vimeo.com/video/824804225',
      title: 'Urban Exploration',
      date: '15 Mars 2024',
      location: 'Paris',
      time: '22:15',
      description: 'Exploration nocturne des quartiers historiques de Paris'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
      videoUrl: 'https://player.vimeo.com/video/824804225',
      title: 'Wedding Highlights',
      date: '20 Mars 2024',
      location: 'Château de Versailles',
      time: '14:00',
      description: 'Moments magiques d\'un mariage dans un cadre exceptionnel'
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-2 hover:text-gray-300 transition-colors animate-fadeIn"
      >
        <ArrowLeft size={24} />
        <span>Retour</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="aspect-video overflow-hidden rounded-lg group relative cursor-pointer animate-slideUp bg-gradient-to-br from-purple-600 to-pink-600 p-1"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative h-full">
              <img
                src={`${video.thumbnail}?auto=format&fit=crop&w=800&q=80`}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 group-hover:to-black/40 transition-all flex flex-col items-center justify-center rounded-lg">
                <Play size={48} className="text-white mb-2 transform group-hover:scale-125 transition-transform" />
                <span className="text-white text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  {video.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Detail Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 animate-fadeIn p-4">
          <div className="max-w-5xl w-full bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg overflow-hidden animate-slideIn">
            <div className="relative aspect-video">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-white/20 transition-all hover:rotate-90"
              >
                <X size={24} />
              </button>
              <iframe
                src={selectedVideo.videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-8 space-y-4">
              <h2 className="text-2xl font-bold">{selectedVideo.title}</h2>
              <p className="text-lg">{selectedVideo.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="text-gray-400" size={20} />
                  <span>{selectedVideo.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-gray-400" size={20} />
                  <span>{selectedVideo.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-gray-400" size={20} />
                  <span>{selectedVideo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;