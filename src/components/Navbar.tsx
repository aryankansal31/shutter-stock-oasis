
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-brand-darker/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-brand-neon-blue neon-text">ShutterOasis</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-white/70 hover:text-white">Home</Link>
              <Link to="/about" className="text-white/70 hover:text-white">About</Link>
            </div>
            
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-brand-neon-blue text-white hover:bg-brand-neon-blue/80">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
