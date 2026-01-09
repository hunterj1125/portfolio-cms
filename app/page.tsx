'use client';

import { useState } from 'react';
import GalleryCard from './components/GalleryCard';
import CategoryFilter from './components/CategoryFilter';
import Lightbox from './components/Lightbox';
import { ArtworkItem } from './types/artwork';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(null);

  // Mock data
  const artworks: ArtworkItem[] = [
    { id: 1, title: 'Mountain Sunset', artist: 'Jane Doe', category: 'Photography', imageUrl: '🏔️', description: 'A breathtaking sunset over mountain peaks, captured during golden hour.', year: 2024 },
    { id: 2, title: 'Urban Dreams', artist: 'John Smith', category: 'Digital Art', imageUrl: '🌃', description: 'Abstract interpretation of city life through vibrant digital painting.', year: 2023 },
    { id: 3, title: 'Ocean Waves', artist: 'Jane Doe', category: 'Photography', imageUrl: '🌊', description: 'Powerful ocean waves crashing against rocky shores.', year: 2024 },
    { id: 4, title: 'Portrait Study', artist: 'Sarah Johnson', category: 'Painting', imageUrl: '🎨', description: 'Oil painting portrait exploring light and shadow on the human face.', year: 2023 },
    { id: 5, title: 'Night Sky', artist: 'Jane Doe', category: 'Photography', imageUrl: '🌌', description: 'Long exposure photograph of the Milky Way galaxy.', year: 2024 },
    { id: 6, title: 'Abstract Flow', artist: 'John Smith', category: 'Digital Art', imageUrl: '🎭', description: 'Dynamic abstract composition with flowing shapes and colors.', year: 2024 },
    { id: 7, title: 'Forest Path', artist: 'Jane Doe', category: 'Photography', imageUrl: '🌲', description: 'Serene forest pathway during autumn season.', year: 2023 },
    { id: 8, title: 'Still Life', artist: 'Sarah Johnson', category: 'Painting', imageUrl: '🍎', description: 'Classical still life arrangement with fruits and flowers.', year: 2024 },
    { id: 9, title: 'Cyberpunk City', artist: 'John Smith', category: 'Digital Art', imageUrl: '🤖', description: 'Futuristic cityscape with neon lights and sci-fi elements.', year: 2023 },
  ];

  const categories = [
    { name: 'Photography', count: artworks.filter(a => a.category === 'Photography').length },
    { name: 'Digital Art', count: artworks.filter(a => a.category === 'Digital Art').length },
    { name: 'Painting', count: artworks.filter(a => a.category === 'Painting').length },
  ];

  const filteredArtworks = activeCategory === 'All' 
    ? artworks 
    : artworks.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 mb-4 drop-shadow-lg">
            Portfolio Showcase
          </h1>
          <p className="text-2xl text-gray-700">
            Curated collection of stunning artwork and photography
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArtworks.map((artwork, index) => (
            <GalleryCard 
              key={artwork.id}
              artwork={artwork}
              onClick={() => setSelectedArtwork(artwork)}
              index={index}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border-4 border-white/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 mb-2">
                {artworks.length}
              </p>
              <p className="text-2xl text-gray-700">Total Artworks</p>
            </div>
            <div>
              <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                3
              </p>
              <p className="text-2xl text-gray-700">Categories</p>
            </div>
            <div>
              <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                3
              </p>
              <p className="text-2xl text-gray-700">Featured Artists</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox 
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </div>
  );
}
