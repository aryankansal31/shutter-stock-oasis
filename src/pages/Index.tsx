
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PhotoGrid from '@/components/PhotoGrid';
import CategoryList from '@/components/CategoryList';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <PhotoGrid title="Popular Photos" viewAllLink="/photos/popular" />
        
        <CategoryList />
        
        <section className="py-16 bg-brand-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Share your photography with our community</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of photographers sharing their best work and earning recognition and rewards.
              </p>
              <Button className="bg-brand-purple hover:bg-purple-600 py-6 px-8 text-lg">
                Become a Contributor
              </Button>
            </div>
          </div>
        </section>
        
        <PhotoGrid 
          title="Latest Uploads" 
          viewAllLink="/photos/latest" 
          limit={8} 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
