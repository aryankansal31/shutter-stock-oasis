
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-brand-darker/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-brand-neon-blue neon-text">ShutterOasis</span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Link to="/photos" className="text-white/70 hover:text-white">Explore</Link>
            <Link to="/categories" className="text-white/70 hover:text-white">Categories</Link>
            <Link to="/premium" className="text-white/70 hover:text-white">Premium</Link>
          </div>
        </div>
        
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search photos..."
              className="pl-10 pr-4 py-2 w-full rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Link to="/login">
            <Button variant="outline" className="hidden sm:inline-flex border-white/20 text-white hover:bg-white/10">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-brand-neon-blue text-white hover:bg-brand-neon-blue/80">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
