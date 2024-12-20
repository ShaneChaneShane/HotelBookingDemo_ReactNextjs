import React, { useState } from 'react';

interface SearchBarProps {
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
}


const SearchBar: React.FC<SearchBarProps> = ({
  destination, setDestination
}) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  const handleGuestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(20, Number(e.target.value)));
    setGuests(value);
  };

  const handleRoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(10, Number(e.target.value)));
    setRooms(value);
  };

  return (
    <div className="p-4 flex flex-wrap gap-4 justify-left items-center bg-gray-100">
      <div className="flex flex-col">
      <label htmlFor="dest" className="mb-1 text-sm text-gray-700">Destination</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Search destination..."
          className="px-4 py-2 rounded-lg border border-gray-300 w-full sm:w-auto text-black"
        />
      </div>
      {/* Check-in Input */}
      <div className="flex flex-col">
        <label htmlFor="checkIn" className="mb-1 text-sm text-gray-700">Check-in</label>
        <input
          id="checkIn"
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 w-full sm:w-auto text-gray-700"
        />
      </div>
      {/* Check-out Input */}
      <div className="flex flex-col">
        <label htmlFor="checkOut" className="mb-1 text-sm text-gray-700">Check-out</label>
        <input
          id="checkOut"
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 w-full sm:w-auto"
        />
      </div>
      <div className="flex flex-row space-x-4">
        {/* Guests Input */}
        <div className="flex flex-col">
          <label htmlFor="guests" className="mb-1 text-sm text-gray-700">Guests</label>
          <input
            id="guests"
            type="number"
            value={guests}
            onChange={handleGuestChange}
            placeholder="Guests"
            min="1"
            max="20"
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 w-full sm:w-auto"
          />
        </div>

        {/* Rooms Input */}
        <div className="flex flex-col">
          <label htmlFor="rooms" className="mb-1 text-sm text-gray-700">Rooms</label>
          <input
            id="rooms"
            type="number"
            value={rooms}
            onChange={handleRoomChange}
            placeholder="Rooms"
            min="1"
            max="10"
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;