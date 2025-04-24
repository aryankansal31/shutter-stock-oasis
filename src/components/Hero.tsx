
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden bg-brand-darker">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url('/lovable-uploads/39b20d03-6422-4530-987a-dcf74b4bdeb4.png')`
        }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in neon-text">
            Turning Pixels Into Possibilities
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Your Photo Market Destination
          </p>
          
          <div className="relative max-w-2xl mx-auto animate-fade-in">
            <Input 
              type="text"
              placeholder="Search for photos, vectors and more..."
              className="pl-12 pr-4 py-6 w-full rounded-full text-lg border-0 bg-white/10 backdrop-blur-lg text-white placeholder:text-white/50"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
            <Button className="absolute right-1.5 top-1.5 rounded-full bg-brand-neon-blue text-white hover:bg-brand-neon-blue/80">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
