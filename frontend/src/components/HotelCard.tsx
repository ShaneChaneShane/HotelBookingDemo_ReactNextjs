import React from 'react';

interface HotelCardProps {
  id: number;
  name: string;
  price: number;
  location: string;
  star: number;
  tags: string[];
}
const src = process.env.REACT_APP_MODE === 'mock'
  ? "/images/"
  : `${process.env.REACT_APP_BACKEND_URL}/images/hotels/`;
const HotelCard: React.FC<HotelCardProps> = ({ id, name, price, location, star, tags }) => {
  return (      
    
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 min-w-[300px] m-1/2 mx-auto">

      <img src={`${src}${id}.jpg`} alt="Hotel" className="w-full h-70 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold text-xl text-black truncate">{name}</h3>
        <p className="text-sm text-black">{location}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">{'★'.repeat(star)}</span>
          <p className="ml-2 text-xl font-bold text-red-800">${price}</p>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-orange-100 text-red-600 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition">
            Check Availability
          </button>
          <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition">
            Show on Map
          </button>
        </div>
      </div>
    </div>

  );
};

export default HotelCard;
