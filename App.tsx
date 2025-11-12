import React, { useState, useEffect, useMemo } from 'react';
import { Business, fetchBusinesses, searchBusinesses } from './services/mockApiService';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Loader from './components/Loader';
import BusinessFormModal from './components/BusinessFormModal';
import PlusIcon from './components/icons/PlusIcon';

const App: React.FC = () => {
  const [allBusinesses, setAllBusinesses] = useState<Business[]>([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBusiness, setEditingBusiness] = useState<Business | null>(null);

  useEffect(() => {
    const loadBusinesses = async () => {
      try {
        setIsLoading(true);
        const businesses = await fetchBusinesses();
        setAllBusinesses(businesses);
        setFilteredBusinesses(businesses);
      } catch (err) {
        setError('Failed to fetch businesses.');
      } finally {
        setIsLoading(false);
      }
    };
    loadBusinesses();
  }, []);

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (searchQuery === '') {
        setFilteredBusinesses(allBusinesses);
      } else {
        const results = await searchBusinesses(searchQuery);
        setFilteredBusinesses(results);
      }
    }, 300); // Debounce search

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, allBusinesses]);
  
  const handleAddBusiness = () => {
    setEditingBusiness(null);
    setIsModalOpen(true);
  };
  
  const handleEditBusiness = (business: Business) => {
    setEditingBusiness(business);
    setIsModalOpen(true);
  };
  
  const handleDeleteBusiness = (id: number) => {
     // In a real app, this would call an API service.
    const updatedBusinesses = allBusinesses.filter(b => b.id !== id);
    setAllBusinesses(updatedBusinesses);
    alert(`Business with ID: ${id} deleted.`);
  };
  
  const handleSaveBusiness = (business: Business) => {
    if (editingBusiness) {
       // Update
       const updated = allBusinesses.map(b => b.id === business.id ? business : b);
       setAllBusinesses(updated);
    } else {
       // Add
       const newBusiness = { ...business, id: Date.now() }; // Mock ID
       setAllBusinesses([newBusiness, ...allBusinesses]);
    }
    setIsModalOpen(false);
    setEditingBusiness(null);
  };

  return (
    <div className="bg-slate-900 min-h-screen text-gray-200 font-sans">
      <Header isAdmin={isAdmin} onToggleAdmin={() => setIsAdmin(!isAdmin)} />

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">
                Find Local Businesses
            </h1>
            {isAdmin && (
                <button
                  onClick={handleAddBusiness}
                  className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
                >
                  <PlusIcon className="h-5 w-5" />
                  <span>Add Business</span>
                </button>
            )}
        </div>
        
        <SearchBar onSearch={setSearchQuery} />

        {isLoading ? (
          <div className="flex justify-center mt-16">
            <Loader />
          </div>
        ) : error ? (
          <div className="text-center text-red-400 mt-16">{error}</div>
        ) : (
          <BusinessList 
            businesses={filteredBusinesses} 
            isAdmin={isAdmin} 
            onEdit={handleEditBusiness}
            onDelete={handleDeleteBusiness}
          />
        )}
      </main>
      
      {isModalOpen && (
          <BusinessFormModal 
            business={editingBusiness}
            onSave={handleSaveBusiness}
            onClose={() => setIsModalOpen(false)}
          />
      )}
      
      <footer className="text-center mt-12 py-4 text-slate-500 text-sm">
        <p>Built by a World-Class Senior Frontend Engineer.</p>
      </footer>
    </div>
  );
};

export default App;
