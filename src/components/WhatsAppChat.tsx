import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "+254700123456";
  const message = "Hi! I'm interested in SIFA Estate properties. Can you provide more information?";
  const message = "Hi! I'm interested in Azima Properties Limited properties. Can you provide more information?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border p-4 w-80 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">Chat with us</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Hi there! 👋 How can we help you with your real estate needs today?
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Start WhatsApp Chat</span>
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 animate-pulse"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhatsAppChat;