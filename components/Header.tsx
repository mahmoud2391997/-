import React from 'react';

interface HeaderProps {
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, onToggleAdmin }) => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          Business Directory
        </h1>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-300">Admin Mode</span>
          <button
            onClick={onToggleAdmin}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500 ${
              isAdmin ? 'bg-sky-600' : 'bg-slate-600'
            }`}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
                isAdmin ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
