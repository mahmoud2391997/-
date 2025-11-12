import React from 'react';
import { Business } from '../services/mockApiService';
import LocationIcon from './icons/LocationIcon';
import PhoneIcon from './icons/PhoneIcon';
import WebsiteIcon from './icons/WebsiteIcon';
import PencilIcon from './icons/PencilIcon';
import TrashIcon from './icons/TrashIcon';

interface BusinessCardProps {
  business: Business;
  isAdmin: boolean;
  onEdit: (business: Business) => void;
  onDelete: (id: number) => void;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business, isAdmin, onEdit, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${business.name}?`)) {
        onDelete(business.id);
    }
  }

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg border border-slate-700 p-6 flex flex-col transition-transform transform hover:-translate-y-1 duration-300">
      <div className="flex-grow">
        <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-white mb-1">{business.name}</h2>
            <span className="bg-sky-900/50 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-sky-800">{business.category}</span>
        </div>
        <p className="text-gray-400 mt-2 mb-4 text-sm leading-relaxed">{business.description}</p>
        
        <div className="space-y-3 text-sm">
            <div className="flex items-center text-gray-300">
                <LocationIcon className="h-4 w-4 mr-3 text-slate-500" />
                <span>{business.address}</span>
            </div>
            <div className="flex items-center text-gray-300">
                <PhoneIcon className="h-4 w-4 mr-3 text-slate-500" />
                <span>{business.phone}</span>
            </div>
            <div className="flex items-center">
                <WebsiteIcon className="h-4 w-4 mr-3 text-slate-500" />
                <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors">
                    {business.website}
                </a>
            </div>
        </div>
      </div>
      
      {isAdmin && (
        <div className="border-t border-slate-700 mt-4 pt-4 flex justify-end space-x-2">
            <button onClick={() => onEdit(business)} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors">
                <PencilIcon className="h-5 w-5" />
            </button>
            <button onClick={handleDelete} className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-700 rounded-md transition-colors">
                <TrashIcon className="h-5 w-5" />
            </button>
        </div>
      )}
    </div>
  );
};

export default BusinessCard;
