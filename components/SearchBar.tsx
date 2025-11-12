import React from 'react';
import SearchIcon from './icons/SearchIcon';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search by name, category, or location..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-11 pr-4 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-200"
      />
    </div>
  );
};

export default SearchBar;
