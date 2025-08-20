import React from 'react';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "SIFA Estate - Kanyanjara",
      title: "Azima Properties - Kanyanjara",
      location: "Kikuyu, Kiambu County",
      price: "KSh 2.6M",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      size: "50x100 ft",
      type: "Residential Plot",
      features: ["Gated Community", "Water Available", "Electricity", "Security"]
    },
    {
      id: 2,
      title: "Green Valley Plots",
      location: "Ruiru, Kiambu County",
      price: "KSh 3.2M",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      size: "40x80 ft",
      type: "Residential Plot",
      features: ["Prime Location", "Ready Title Deeds", "Tarmac Road", "Schools Nearby"]
    },
    {
      id: 3,
      title: "Sunrise Gardens",
      location: "Thika, Kiambu County",
      price: "KSh 1.8M",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      size: "50x100 ft",
      type: "Residential Plot",
      features: ["Affordable", "Good Access Roads", "Growing Area", "Investment Potential"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties in prime locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {property.type}
                </div>
                <div className="absolute top-4 right-4 bg-white text-emerald-600 px-3 py-1 rounded-full text-lg font-bold">
                  {property.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.size}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;