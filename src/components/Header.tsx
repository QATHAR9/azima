import React, { useState } from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-emerald-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+254 704281000</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@sifaestate.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook className="w-4 h-4 hover:text-emerald-300 cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 hover:text-emerald-300 cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 hover:text-emerald-300 cursor-pointer transition-colors" />
            <Youtube className="w-4 h-4 hover:text-emerald-300 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/public/image.png" 
              alt="SIFA Estate Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">About Us</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Properties</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Buy and Build</a>
            
            {/* Information Center Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Information Center
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Market Reports</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Investment Guide</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Legal Documents</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">FAQs</a>
                </div>
              )}
            </div>
            
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Diaspora</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Blogs</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">About Us</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">Properties</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">Buy and Build</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">Information Center</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">Diaspora</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">Blogs</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">Contact Us</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;