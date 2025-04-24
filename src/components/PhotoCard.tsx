
import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoCardProps {
  id: string;
  imageUrl: string;
  title: string;
  photographer: string;
  photographerId: string;
  className?: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  id,
  imageUrl,
  title,
  photographer,
  photographerId,
  className = ''
}) => {
  return (
    <div className={`photo-card relative overflow-hidden rounded-lg ${className}`}>
      <Link to={`/photos/${id}`}>
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      
      <div className="photo-card-overlay absolute inset-0 flex flex-col justify-end p-4">
        <div>
          <h3 className="text-white font-medium truncate">{title}</h3>
          <Link to={`/photographers/${photographerId}`} className="text-white/80 text-sm hover:text-white">
            by {photographer}
          </Link>
        </div>
        
        <div className="absolute top-3 right-3">
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8 rounded-full bg-black/30 hover:bg-black/50"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Download functionality would go here
              console.log(`Download photo ${id}`);
            }}
          >
            <Download className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
