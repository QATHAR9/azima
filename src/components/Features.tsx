import React from 'react';
import { Home, TrendingUp, Shield, Award, Users, MapPin } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Home,
      title: "Premium Properties",
      description: "Carefully selected properties in prime locations with excellent growth potential."
    },
    {
      icon: TrendingUp,
      title: "Investment Growth",
      description: "Properties with proven track record of appreciation and strong rental yields."
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "All transactions are handled with complete transparency and legal compliance."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every property meets our strict quality standards and development guidelines."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Professional team to guide you through every step of your property journey."
    },
    {
      icon: MapPin,
      title: "Strategic Locations",
      description: "Properties located in areas with excellent infrastructure and future development plans."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Azima Properties Limited?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional real estate solutions that exceed your expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <feature.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;