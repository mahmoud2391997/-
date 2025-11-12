import React from 'react';
import { Business } from '../services/mockApiService';
import BusinessCard from './BusinessCard';

interface BusinessListProps {
  businesses: Business[];
  isAdmin: boolean;
  onEdit: (business: Business) => void;
  onDelete: (id: number) => void;
}

const BusinessList: React.FC<BusinessListProps> = ({ businesses, isAdmin, onEdit, onDelete }) => {
  if (businesses.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl text-gray-400">No businesses found.</h2>
        <p className="text-slate-500 mt-2">Try adjusting your search query.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {businesses.map(business => (
        <BusinessCard 
            key={business.id} 
            business={business} 
            isAdmin={isAdmin}
            onEdit={onEdit}
            onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BusinessList;
