
import React from 'react';
import PhotoCard from './PhotoCard';

// Sample data for our photos
const SAMPLE_PHOTOS = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    title: 'Woman using laptop',
    photographer: 'Jane Doe',
    photographerId: '101'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    title: 'Computer tech',
    photographer: 'John Smith',
    photographerId: '102'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    title: 'Circuit board close-up',
    photographer: 'Tech Photos',
    photographerId: '103'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
    title: 'Java programming',
    photographer: 'Code Master',
    photographerId: '104'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    title: 'Working on laptop',
    photographer: 'Creative Studio',
    photographerId: '105'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80',
    title: 'Waterfall landscape',
    photographer: 'Nature Lens',
    photographerId: '106'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
    title: 'Orange flowers',
    photographer: 'Flower Art',
    photographerId: '107'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80',
    title: 'River mountains',
    photographer: 'Landscape Pro',
    photographerId: '108'
  }
];

interface PhotoGridProps {
  title: string;
  viewAllLink?: string;
  limit?: number;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ 
  title, 
  viewAllLink,
  limit = 8 
}) => {
  // Limit the number of photos to display
  const displayPhotos = SAMPLE_PHOTOS.slice(0, limit);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          {viewAllLink && (
            <a href={viewAllLink} className="text-brand-purple hover:underline">
              View all
            </a>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              id={photo.id}
              imageUrl={photo.imageUrl}
              title={photo.title}
              photographer={photo.photographer}
              photographerId={photo.photographerId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
