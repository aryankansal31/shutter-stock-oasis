
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')`
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Stunning stock photos for your projects
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto animate-fade-in">
            Over 1 million+ high quality stock images and videos shared by our talented community.
          </p>
          
          <div className="relative max-w-2xl mx-auto animate-fade-in">
            <Input 
              type="text"
              placeholder="Search for photos, vectors and more..."
              className="pl-12 pr-4 py-6 w-full rounded-full text-lg border-0 shadow-lg"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Button className="absolute right-1.5 top-1.5 rounded-full bg-brand-purple hover:bg-purple-600">
              Search
            </Button>
          </div>
          
          <div className="mt-6 text-white/80 text-sm animate-fade-in">
            <span>Trending: </span>
            <span className="inline-flex gap-2 flex-wrap justify-center">
              {["nature", "business", "technology", "food", "travel"].map((tag) => (
                <a key={tag} href={`/search?q=${tag}`} className="hover:text-white hover:underline">
                  {tag}
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
