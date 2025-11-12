import React, { useState, useEffect } from 'react';
import { Business } from '../services/mockApiService';

interface BusinessFormModalProps {
  business: Business | null;
  onSave: (business: Business) => void;
  onClose: () => void;
}

const BusinessFormModal: React.FC<BusinessFormModalProps> = ({ business, onSave, onClose }) => {
  const [formData, setFormData] = useState<Omit<Business, 'id'>>({
    name: '',
    category: '',
    address: '',
    phone: '',
    website: '',
    description: '',
  });

  useEffect(() => {
    if (business) {
      setFormData(business);
    }
  }, [business]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...formData, id: business?.id || 0 });
  };
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-30 p-4"
        onClick={handleBackdropClick}
    >
      <div className="bg-slate-800 rounded-lg shadow-xl w-full max-w-lg border border-slate-700 transform transition-all animate-fade-in-up">
        <div className="p-6 border-b border-slate-700">
            <h2 className="text-xl font-bold text-white">{business ? 'Edit Business' : 'Add New Business'}</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <InputField label="Business Name" name="name" value={formData.name} onChange={handleChange} required />
          <InputField label="Category" name="category" value={formData.category} onChange={handleChange} required />
          <InputField label="Address" name="address" value={formData.address} onChange={handleChange} required />
          <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
          <InputField label="Website" name="website" value={formData.website} onChange={handleChange} required type="url" />
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full bg-slate-900/50 border border-slate-600 rounded-md p-2 text-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              required
            />
          </div>
          <div className="pt-4 flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Cancel
            </button>
            <button type="submit" className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              {business ? 'Save Changes' : 'Add Business'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, required = false, type = 'text' }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-slate-900/50 border border-slate-600 rounded-md p-2 text-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
      required={required}
    />
  </div>
);

export default BusinessFormModal;
