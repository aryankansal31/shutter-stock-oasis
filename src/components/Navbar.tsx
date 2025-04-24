
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-brand-purple">ShutterOasis</span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Link to="/photos" className="text-gray-600 hover:text-gray-900">Explore</Link>
            <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
            <Link to="/premium" className="text-gray-600 hover:text-gray-900">Premium</Link>
          </div>
        </div>
        
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search photos..."
              className="pl-10 pr-4 py-2 w-full rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Link to="/login">
            <Button variant="outline" className="hidden sm:inline-flex">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-brand-purple hover:bg-purple-600">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
