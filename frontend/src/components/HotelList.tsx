// HotelList.tsx
import React, { useState, useEffect } from 'react';
import HotelCard from './HotelCard';
import SearchBar from './SearchBar';
import {mockhotels} from './mockHotels.js';
import {mocktags} from './mockTags';
interface Hotel {
  id: number;
  name: string;
  price: number;
  location: string;
  star: number;
  tags: string[];
}
interface Tag {
  id: string;
  label: string;
}

const HotelList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [destination, setDestination] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string>('');

  useEffect(() => {
    if(process.env.REACT_APP_MODE === 'mock')
    { setHotels(mockhotels);}
    else
    {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/hotels`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setHotels(data);
        setFilteredHotels(data);
      })
      .catch((err) => console.error(err.message));
    }
  }, []);
  useEffect(() => {
    if(process.env.REACT_APP_MODE === 'mock')
    { setTags(mocktags);}
    else
    {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/tags`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTags(data);
      })
      .catch((err) => console.error(err.message));
    }
  }, []);

  useEffect(() => {
    // Filter hotels based on destination, price range, selected tags, star, and sorting
    let filtered = hotels.filter((hotel) => {
      return (
        (destination ? hotel.location.toLowerCase().includes(destination.toLowerCase()) : true) &&
        hotel.price >= minPrice &&
        hotel.price <= maxPrice &&
        (selectedTags.length === 0 || selectedTags.some((tag) => hotel.tags.includes(tag))) &&
        (selectedStars.length === 0 || selectedStars.some((star) => hotel.star === star))
      );
    });

    // Sorting logic
    if (sortBy === 'name-asc') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'price-asc') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredHotels(filtered);
  }, [destination, minPrice, maxPrice, selectedStars, selectedTags, sortBy, hotels]);

  return (

    <div>
      <SearchBar
        destination={destination}
        setDestination={setDestination} />

      <div className="flex flex-col md:flex-row">

        <button
          className="md:hidden p-4 text-black text-center bg-white w-1/5"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>

        {/* Sidebar for Sort and Filter */}
        <div
          className={`${isSidebarOpen ? 'block' : 'hidden'
            } md:block w-full md:w-1/5 h-auto md:h-screen p-6 bg-white text-black rounded-lg shadow-md`}
        >
          <div className="space-y-4 mb-4">
            <div className="flex flex-col lg:flex-row items-center space-x-2">
              <input
                type="range"
                min="0"
                max="1000"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full"
              />
              <span>{minPrice} - {maxPrice}</span>
              <input
                type="range"
                min="0"
                max="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="ml-2 px-4 py-2 rounded-lg border border-gray-300 w-full"
              >
                <option value="">None</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Lowest to Highest)</option>
                <option value="price-desc">Price (Highest to Lowest)</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-lg">Stars:</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`star-${star}`}
                    checked={selectedStars.includes(star)}
                    onChange={() =>
                      setSelectedStars((prev) =>
                        prev.includes(star)
                          ? prev.filter((s) => s !== star)
                          : [...prev, star]
                      )
                    }
                  />
                  <label htmlFor={`star-${star}`} className="text-sm">{star} Star{star > 1 ? 's' : ''}</label>
                </div>
              ))}
            </div>
          </div>


          <div>
            <h3 className="font-semibold text-lg text-left">Tags:</h3>
            <div className="space-y-2">
              {tags.map((tag) => (
                <div key={tag.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={tag.id}
                    checked={selectedTags.includes(tag.id)}
                    onChange={() =>
                      setSelectedTags((prev) =>
                        prev.includes(tag.id)
                          ? prev.filter((t) => t !== tag.id)
                          : [...prev, tag.id]
                      )
                    }
                  />
                  <label htmlFor={tag.id} className="text-sm">{tag.label}</label>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Hotel List Section */}
        <div className="w-3/4 h-1/4 p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-10 mr-0">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} {...hotel} />
          ))}
        </div>



      </div>
    </div>
  );
};

export default HotelList;
