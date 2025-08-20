import React from 'react';
import { MapPin, Shield, Droplets, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Azima Properties Limited
          </h1>
          <div className="text-2xl md:text-3xl mb-4 text-emerald-300">
            Kanyanjara, Kikuyu
          </div>
          
          {/* Price Highlight */}
          <div className="bg-emerald-600 inline-block px-8 py-4 rounded-lg mb-8 transform hover:scale-105 transition-transform">
            <span className="text-3xl md:text-4xl font-bold">KSh 2.6M</span>
            <span className="text-lg ml-2">per plot</span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <Users className="w-8 h-8 mb-2 text-emerald-300" />
              <span className="font-semibold">Gated Community</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <Droplets className="w-8 h-8 mb-2 text-emerald-300" />
              <span className="font-semibold">Water Available</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <Shield className="w-8 h-8 mb-2 text-emerald-300" />
              <span className="font-semibold">24/7 Security</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <MapPin className="w-8 h-8 mb-2 text-emerald-300" />
              <span className="font-semibold">Prime Location</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors transform hover:scale-105">
              View Properties
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Schedule Site Visit
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;