import React from 'react';
import { FaCode, FaCamera, FaPrint, FaBookOpen, FaGift, FaPaintBrush } from 'react-icons/fa';

const services = [
  { name: "Web and App Development", icon: <FaCode /> },
  { name: "Product Shoot", icon: <FaCamera /> },
  { name: "Print Media", icon: <FaPrint /> },
  { name: "Audio Book", icon: <FaBookOpen /> },
  { name: "Corporate Gifts", icon: <FaGift /> },
  { name: "Social Media Creatives", icon: <FaPaintBrush /> }
];

const GridContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="group relative bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800 p-8 text-center rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 opacity-0 group-hover:opacity-40 rounded-xl transition duration-300"></div>
          
          {/* Icon for the service */}
          <div className="relative z-10 text-4xl mb-4 text-purple-500">
            {service.icon}
          </div>
          
          <h2 className="relative z-10 text-xl font-normal">{service.name}</h2>
          <p className="relative z-10 mt-2 text-sm font-light text-gray-600">
            Explore our {service.name.toLowerCase()} services.
          </p>
        </div>
      ))}
    </div>
  );
};

export default GridContainer;
