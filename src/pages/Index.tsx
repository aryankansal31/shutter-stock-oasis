
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import PhotoGrid from '@/components/PhotoGrid';
import Reviews from '@/components/Reviews';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Navbar />
      
      <main className="flex-grow">
        <HeroCarousel />
        
        <PhotoGrid 
          title="Popular Photos" 
          viewAllLink="/photos/popular" 
          limit={8}
        />
        
        <Reviews />
        
        <PhotoGrid 
          title="Latest Uploads" 
          viewAllLink="/photos/latest" 
          limit={8}
        />
        
        <Feedback />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
